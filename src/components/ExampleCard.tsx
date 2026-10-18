"use client";

import Image from "next/image";
import { useState } from "react";
import { OUTPUT_TYPES, PLATFORMS, byId } from "@/data/options";
import type { Example } from "@/data/examples";
import { colorLabel, isLightHex, styleBadge } from "@/lib/prompt";
import type { BuilderState } from "@/lib/state";
import CopyButton from "./CopyButton";

type Props = {
  example: Example;
  state: BuilderState;
  prompt: string;
  image: string | null;
  onStart: (example: Example) => void;
  onOpen: (example: Example) => void;
};

export default function ExampleCard({ example, state, prompt, image, onStart, onOpen }: Props) {
  const [failed, setFailed] = useState(false);
  const output = byId(OUTPUT_TYPES, state.output);
  const platform = byId(PLATFORMS, state.platform);
  const showImage = image && !failed;
  const badge = styleBadge(state);

  return (
    <article className="group flex flex-col overflow-hidden rounded-[24px] border border-line bg-white transition hover:-translate-y-0.5 hover:shadow-lg">
      {showImage ? (
        <button type="button" onClick={() => onOpen(example)} aria-label={`${example.title} 예시 이미지 크게 보기`} className="relative block aspect-[4/3] w-full overflow-hidden bg-paper">
          <Image
            src={image}
            alt={`${example.title} AI 생성 예시 이미지`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
            className="object-contain transition duration-300 group-hover:scale-[1.02]"
            onError={() => setFailed(true)}
          />
          <span className="absolute bottom-2 right-2 rounded-lg bg-ink/80 px-2 py-1 text-xs font-bold text-white">🔍 크게 보기</span>
        </button>
      ) : (
        <Placeholder example={example} state={state} />
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-1.5 text-xs font-bold">
          <span className="rounded-md bg-moss px-2 py-1 text-white">
            {output?.emoji} {output?.label}
          </span>
          <span className="rounded-md bg-paper px-2 py-1 text-ink">
            {platform?.label} {platform?.ratio}
          </span>
          <span className="rounded-md bg-paper px-2 py-1 text-ink">
            {badge.emoji} {badge.label}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-ink">{example.title}</h3>
          <p className="text-[15px] text-mute">{example.desc}</p>
        </div>
        <details className="rounded-2xl bg-paper/70 text-sm ring-1 ring-line/60">
          <summary className="cursor-pointer px-3.5 py-2.5 text-sm font-bold text-ink">프롬프트 보기</summary>
          <p className="max-h-48 overflow-y-auto whitespace-pre-wrap px-3.5 pb-3.5 text-[13px] leading-relaxed text-mute">{prompt}</p>
        </details>
        <div className="mt-auto flex gap-2 pt-1">
          <button type="button" onClick={() => onStart(example)} className="flex-1 rounded-2xl bg-moss px-4 py-3 text-[15px] font-bold text-white transition hover:bg-moss-dark active:scale-95">
            이 예시로 시작
          </button>
          <CopyButton text={prompt} label="📋 복사" className="px-4 py-3 text-[15px]" />
        </div>
      </div>
    </article>
  );
}

/** 이미지가 아직 없을 때: 실제 사이즈 비율의 종이 카드에 브랜드 컬러와 대표 문구를 얹은 미리보기 */
function Placeholder({ example, state }: { example: Example; state: BuilderState }) {
  const color = colorLabel(state.color, state.mood);
  const platform = byId(PLATFORMS, state.platform);
  const [w, h] = (platform?.ratio ?? "4:5").split(":").map(Number);
  const light = isLightHex(color.hex);
  const fg = light ? "#15241f" : "#fffdf8";
  const headline = state.output === "logo" ? state.brand : state.copy.headline.mode === "exact" ? state.copy.headline.value : state.brand || example.title;
  const sub = state.output === "logo" ? (state.copy.tagline.mode === "exact" ? state.copy.tagline.value : "") : state.brand;
  // 카드 높이를 기준으로 비율만 맞춰요 (가로형은 폭 기준)
  const box = w / h >= 1.2 ? { width: "78%", aspectRatio: `${w} / ${h}` } : { height: "84%", aspectRatio: `${w} / ${h}` };
  return (
    <div data-testid="example-placeholder" className="bg-paper-grain relative grid aspect-[4/3] w-full place-items-center overflow-hidden bg-paper">
      <div className="relative flex flex-col justify-between overflow-hidden rounded-[6px] p-[7%] shadow-[0_10px_30px_-12px_rgba(21,36,31,0.45)]" style={{ ...box, backgroundColor: color.hex, color: fg }}>
        <span aria-hidden className="text-[clamp(1.1rem,3.4vw,1.6rem)] leading-none">
          {example.emoji}
        </span>
        <div>
          <p className="line-clamp-3 text-[clamp(0.85rem,2.3vw,1.15rem)] font-extrabold leading-snug tracking-tight">{headline}</p>
          {sub && sub !== headline && <p className="mt-1 line-clamp-1 text-[clamp(0.6rem,1.6vw,0.75rem)] font-semibold opacity-80">{sub}</p>}
        </div>
        <span aria-hidden className="absolute bottom-[7%] right-[7%] h-1.5 w-6 rounded-full" style={{ backgroundColor: color.accent }} />
      </div>
      <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-bold text-mute">미리보기 · 이미지 준비 중</span>
    </div>
  );
}
