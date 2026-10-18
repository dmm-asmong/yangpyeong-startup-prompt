"use client";

import { useState } from "react";
import { FOLLOW_UPS, OUTPUT_TYPES, PLATFORMS, byId } from "@/data/options";
import { CHANNELS, type Caption, type Channel } from "@/lib/caption";
import { josa } from "@/lib/josa";
import type { BuilderState, Lang } from "@/lib/state";
import { RatioIcon } from "./builder/Steps";
import CopyButton from "./CopyButton";

type Props = {
  state: BuilderState;
  prompt: string;
  lang: Lang;
  onLang: (l: Lang) => void;
  caption: Caption;
  channel: Channel;
  onChannel: (c: Channel) => void;
  onShuffleCaption: () => void;
  onReset: () => void;
  loadedTitle: string | null;
  dropped: string[];
  maxText: number;
};

export default function OutputPanel(props: Props) {
  const { state, prompt, lang, onLang, caption, channel, onChannel, onShuffleCaption, onReset, loadedTitle, dropped, maxText } = props;
  const [tab, setTab] = useState<"prompt" | "caption">("prompt");
  const output = byId(OUTPUT_TYPES, state.output);
  const platform = byId(PLATFORMS, state.platform);

  return (
    <div id="result" className="scroll-mt-20 overflow-hidden rounded-[28px] bg-ink text-white shadow-xl">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          {platform && <RatioIcon ratio={platform.ratio} on size={30} />}
          <div className="min-w-0">
            <p className="truncate text-base font-extrabold">
              {output?.emoji} {output?.label}
              {output?.draft && <span className="ml-1.5 rounded bg-sun px-1.5 py-0.5 text-[11px] font-bold text-ink">시안</span>}
            </p>
            <p className="text-sm text-white/55">
              {platform?.label} · {platform?.ratio} · {platform?.px}
            </p>
          </div>
        </div>
        <button type="button" onClick={onReset} className="shrink-0 rounded-xl px-3 py-1.5 text-sm font-semibold text-white/60 hover:bg-white/10 hover:text-white">
          ↺ 처음부터
        </button>
      </div>
      {loadedTitle && <p className="border-b border-white/10 bg-sun/15 px-5 py-2.5 text-sm text-sun">📌 &lsquo;{loadedTitle}&rsquo; 예시를 불러왔어요. 내 브랜드에 맞게 고쳐 보세요.</p>}

      <div role="tablist" aria-label="결과 종류" className="grid grid-cols-2 gap-1 p-2">
        {(
          [
            ["prompt", "🖼️ 이미지 프롬프트"],
            ["caption", "✍️ 홍보 문구"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`rounded-2xl py-3 text-[15px] font-bold transition ${tab === id ? "bg-sun text-ink" : "text-white/60 hover:bg-white/5 hover:text-white"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "prompt" ? (
        <div className="space-y-4 px-5 pb-5" role="tabpanel" aria-label="이미지 프롬프트">
          <div className="flex items-center justify-between gap-2">
            <div role="radiogroup" aria-label="프롬프트 언어" className="inline-flex rounded-xl bg-white/10 p-1 text-sm font-bold">
              {(
                [
                  ["ko", "한국어"],
                  ["en", "English"],
                ] as const
              ).map(([id, label]) => (
                <button key={id} type="button" role="radio" aria-checked={lang === id} onClick={() => onLang(id)} className={`rounded-lg px-3.5 py-1.5 ${lang === id ? "bg-white text-ink" : "text-white/60"}`}>
                  {label}
                </button>
              ))}
            </div>
            <span className="text-xs text-white/45">{lang === "ko" ? "ChatGPT·Gemini 추천" : "Midjourney 등 영어 AI용"}</span>
          </div>
          <p data-testid="prompt" className="max-h-96 overflow-y-auto whitespace-pre-wrap rounded-2xl bg-white/[0.06] p-4 text-[15px] leading-relaxed text-white/90 ring-1 ring-white/10">
            {prompt}
          </p>
          {dropped.length > 0 && (
            <p data-testid="dropped" className="rounded-2xl bg-sun/10 px-4 py-3 text-sm leading-relaxed text-sun ring-1 ring-sun/30">
              ✂️ {output?.label}
              {josa(output?.label ?? "", "은", "는")} 글자 항목을 {maxText}개까지만 넣어요. 깔끔한 디자인을 위해 <b>{dropped.join(", ")}</b>
              {josa(dropped[dropped.length - 1], "은", "는")} 뺐어요. 꼭 넣고 싶다면 다른 항목을 끄세요.
            </p>
          )}
          <CopyButton text={prompt} label="📋 프롬프트 복사" className="w-full py-4 text-base" />
          <details className="group rounded-2xl bg-white/[0.06] ring-1 ring-white/10">
            <summary className="cursor-pointer list-none px-4 py-3.5 text-[15px] font-bold text-white/80 marker:hidden">
              🔧 결과가 아쉬우면 이어서 보낼 말 <span className="float-right text-white/40 group-open:rotate-180">▾</span>
            </summary>
            <ul className="space-y-2.5 px-4 pb-4">
              {FOLLOW_UPS.map((f) => (
                <li key={f.ko} className="flex items-center justify-between gap-3 text-sm leading-relaxed text-white/75">
                  <span>{f[lang]}</span>
                  <CopyButton text={f[lang]} label="복사" variant="ghost" className="shrink-0 px-3 py-1.5 text-xs" />
                </li>
              ))}
            </ul>
          </details>
        </div>
      ) : (
        <div className="space-y-4 px-5 pb-5" role="tabpanel" aria-label="홍보 문구">
          <div role="radiogroup" aria-label="문구 종류" className="grid grid-cols-2 gap-1 rounded-2xl bg-white/10 p-1 text-sm font-bold sm:grid-cols-4">
            {CHANNELS.map((c) => (
              <button key={c.id} type="button" role="radio" aria-checked={channel === c.id} onClick={() => onChannel(c.id)} className={`rounded-xl px-1 py-2 ${channel === c.id ? "bg-white text-ink" : "text-white/60 hover:text-white"}`}>
                {c.emoji} {c.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-white/50">{CHANNELS.find((c) => c.id === channel)?.hint} · 템플릿 초안이니 내 말투로 다듬어 쓰세요.</p>
          <p data-testid="caption" className="max-h-96 overflow-y-auto whitespace-pre-wrap rounded-2xl bg-card p-4 text-[15px] leading-relaxed text-ink">
            {caption.text}
          </p>
          <div className={`grid gap-2 ${caption.hashtags ? "grid-cols-2" : "grid-cols-1"}`}>
            <CopyButton text={caption.text} label="📋 문구 전체 복사" className="py-3.5 text-[15px]" />
            {caption.hashtags && <CopyButton text={caption.hashtags} label="# 해시태그만" variant="ghost" className="py-3.5 text-[15px]" />}
          </div>
          <button type="button" onClick={onShuffleCaption} className="w-full rounded-2xl border border-white/15 py-3 text-[15px] font-bold text-white/75 hover:bg-white/5">
            🔀 다른 버전으로
          </button>
        </div>
      )}
    </div>
  );
}
