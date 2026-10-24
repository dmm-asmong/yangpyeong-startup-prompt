"use client";

import { useEffect, useState } from "react";
import type { OutputId } from "@/data/options";
import type { Example } from "@/data/examples";
import { buildCaption, type Channel } from "@/lib/caption";
import { buildPrompt, textItems } from "@/lib/prompt";
import { DEFAULT_STATE, stateFromExample, switchOutput, type BuilderState, type CopyKey, type InfoMode, type Lang } from "@/lib/state";
import { resolveCopy } from "@/lib/suggest";
import { StepBrand, StepDesign, StepOutput } from "./builder/Steps";
import Gallery from "./Gallery";
import OutputPanel from "./OutputPanel";
import PhotoLibrary from "./PhotoLibrary";
import { SectionTitle } from "./ui";

/** 빌더 + 결과판 + 예시 갤러리. 모든 처리는 브라우저 안에서만 일어나요. */
export default function Studio({ images }: { images: Record<string, string> }) {
  const [state, setState] = useState<BuilderState>(DEFAULT_STATE);
  const [lang, setLang] = useState<Lang>("ko");
  const [channel, setChannel] = useState<Channel>("instagram");
  const [loaded, setLoaded] = useState<string | null>(null);
  const [mode, setMode] = useState<"info" | "photo">("info");

  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash;
      if (hash === "#photo") setMode("photo");
      else if (hash === "#studio" || hash === "") setMode("info");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const chooseMode = (next: "info" | "photo") => {
    setMode(next);
    history.replaceState(null, "", next === "photo" ? "#photo" : "#studio");
  };

  const copy = resolveCopy(state);
  const prompt = buildPrompt(state, lang);
  const caption = buildCaption(state, channel);
  const { dropped, max } = textItems(state, copy);

  const patch = (p: Partial<BuilderState>) => setState((s) => ({ ...s, ...p }));
  const onMode = (k: CopyKey, mode: InfoMode) =>
    setState((s) => {
      const f = s.copy[k];
      // 추천 문구 → 직접 쓰기: 지금 보이는 문구를 그대로 가져와 고쳐 쓰게 해요.
      const value = mode === "exact" && !f.value.trim() ? copy[k].text || copy[k].suggestion : f.value;
      return { ...s, copy: { ...s.copy, [k]: { mode, value } } };
    });
  const onValue = (k: CopyKey, value: string) => setState((s) => ({ ...s, copy: { ...s.copy, [k]: { ...s.copy[k], value } } }));
  const onShuffle = (k: CopyKey | "points") =>
    setState((s) => ({
      ...s,
      seeds: { ...s.seeds, [k]: s.seeds[k] + 1 },
      copy: k === "points" ? s.copy : { ...s.copy, [k]: { ...s.copy[k], value: "" } },
    }));
  const onPoints = (p: Partial<BuilderState["points"]>) =>
    setState((s) => {
      const next = { ...s.points, ...p };
      if (p.mode === "exact" && s.points.items.every((x) => !x.trim())) next.items = [...copy.points.suggestion, ""].slice(0, 5);
      return { ...s, points: next };
    });
  const onOutput = (id: OutputId) => setState((s) => switchOutput(s, id));
  const onReset = () => {
    setState(DEFAULT_STATE);
    setLoaded(null);
  };
  const onStart = (example: Example) => {
    setMode("info");
    history.replaceState(null, "", "#studio");
    setState(stateFromExample(example.state));
    setLoaded(example.title);
    document.getElementById("studio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section id="studio" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:py-20">
        <SectionTitle
          eyebrow="홍보물 만들기"
          title="먼저 만드는 방법을 고르세요"
          desc="둘 다 복사해서 ChatGPT에 붙여 넣는 프롬프트를 만듭니다. 사진이 없으면 왼쪽, 제품 사진이 있으면 오른쪽입니다."
        />
        <div id="photo" className="mb-8 grid scroll-mt-24 gap-3 sm:grid-cols-2">
          <button
            type="button"
            aria-pressed={mode === "info"}
            onClick={() => chooseMode("info")}
            className={`rounded-[24px] border p-5 text-left transition ${
              mode === "info" ? "border-moss bg-moss-soft" : "border-line bg-card hover:border-moss/50"
            }`}
          >
            <p className="text-lg font-extrabold text-ink">내 정보로 만들기</p>
            <p className="mt-2 text-[15px] leading-relaxed text-mute">
              사진이 없어도 됩니다. 아이템, 고객, 분위기를 고르면 프롬프트와 홍보 문구를 새로 써 줍니다.
            </p>
          </button>
          <button
            type="button"
            aria-pressed={mode === "photo"}
            onClick={() => chooseMode("photo")}
            className={`rounded-[24px] border p-5 text-left transition ${
              mode === "photo" ? "border-moss bg-moss-soft" : "border-line bg-card hover:border-moss/50"
            }`}
          >
            <p className="text-lg font-extrabold text-ink">제품 사진으로 만들기</p>
            <p className="mt-2 text-[15px] leading-relaxed text-mute">
              찍은 사진을 먼저 첨부합니다. 준비된 장면 중에서 고르고, 빈칸만 내 제품으로 바꿉니다. 장면 문장은 그대로입니다.
            </p>
          </button>
        </div>
        {mode === "photo" ? (
          <>
            <PhotoLibrary />
            <p className="mt-6 text-sm leading-relaxed text-mute">
              출처: 프롬왓, 2026-10-20. 1~4번은 결과가 확인된 장면이고, 5~100번은 응용용이라 번호마다 결과를 확인한 것은 아닙니다.
            </p>
          </>
        ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-start">
          <div className="space-y-5">
            <StepBrand state={state} onPatch={patch} />
            <StepOutput state={state} onPatch={patch} onOutput={onOutput} copy={copy} />
            <StepDesign state={state} onPatch={patch} copy={copy} onMode={onMode} onValue={onValue} onShuffle={onShuffle} onPoints={onPoints} />
            {/* 모바일: 입력하는 동안 화면 아래에 붙어 있다가 결과판에 닿으면 멈춰요. */}
            <a href="#result" className="sticky bottom-4 z-20 block rounded-2xl bg-moss py-4 text-center text-base font-extrabold text-white shadow-lg shadow-black/20 lg:hidden">
              결과 보기 · 복사하기 ↓
            </a>
          </div>
          <div className="lg:sticky lg:top-20">
            <OutputPanel
              state={state}
              prompt={prompt}
              lang={lang}
              onLang={setLang}
              caption={caption}
              channel={channel}
              onChannel={setChannel}
              onShuffleCaption={() => setState((s) => ({ ...s, seeds: { ...s.seeds, caption: s.seeds.caption + 1 } }))}
              onReset={onReset}
              loadedTitle={loaded}
              dropped={dropped}
              maxText={max}
            />
          </div>
        </div>
        )}
      </section>

      <section id="gallery" className="scroll-mt-16 border-t border-line bg-card py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            eyebrow="예시 갤러리"
            title="이런 창업 브랜드라면? 예시 12개"
            desc="모두 가상의 양평 창업 브랜드예요. 고르면 위의 '내 정보로 만들기'에 불러와집니다. 제품 사진이 있으면 그 방법을 쓰세요."
          />
          <Gallery images={images} onStart={onStart} />
        </div>
      </section>
    </>
  );
}
