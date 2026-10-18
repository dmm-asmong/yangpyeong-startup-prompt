"use client";

import { useMemo, useState } from "react";
import { OUTPUT_TYPES } from "@/data/options";
import { EXAMPLES, type Example } from "@/data/examples";
import { buildPrompt } from "@/lib/prompt";
import { stateFromExample } from "@/lib/state";
import ExampleCard from "./ExampleCard";
import ImageLightbox from "./ImageLightbox";

type Props = { images: Record<string, string>; onStart: (example: Example) => void };

export default function Gallery({ images, onStart }: Props) {
  const [filter, setFilter] = useState<string>("all");
  const [opened, setOpened] = useState<Example | null>(null);
  const items = useMemo(
    () =>
      EXAMPLES.map((ex) => {
        const state = stateFromExample(ex.state);
        return { ex, state, prompt: buildPrompt(state, "ko") };
      }),
    [],
  );
  /** 빌드할 때 찾은 이미지 → 예시 데이터의 image 칸 → 없으면 미리보기 카드 */
  const srcOf = (ex: Example) => images[ex.id] ?? ex.image ?? null;
  const tabs = [
    { id: "all", label: "전체", count: items.length },
    ...OUTPUT_TYPES.map((o) => ({ id: o.id, label: o.label, count: items.filter((i) => i.state.output === o.id).length })).filter((t) => t.count > 0),
  ];
  const list = filter === "all" ? items : items.filter((i) => i.state.output === filter);
  const anyImage = items.some((i) => srcOf(i.ex));

  return (
    <div className="space-y-6">
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={filter === t.id}
            onClick={() => setFilter(t.id)}
            className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-[15px] font-semibold transition ${filter === t.id ? "bg-moss text-white" : "bg-paper text-ink hover:bg-moss-soft"}`}
          >
            {t.label} <span className="text-sm opacity-60">{t.count}</span>
          </button>
        ))}
      </div>
      {anyImage && <p className="text-sm text-mute">🖼️ 갤러리 이미지는 한눈에 비교하기 쉽게 모두 16:9 가로형으로 만든 AI 샘플이에요. 실제로 만들 때는 카드에 적힌 크기(1:1, 4:5, 9:16, A4 등)로 나와요. 같은 프롬프트라도 AI와 시도마다 결과가 조금씩 달라요.</p>}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(({ ex, state, prompt }) => (
          <ExampleCard key={ex.id} example={ex} state={state} prompt={prompt} image={srcOf(ex)} onStart={onStart} onOpen={setOpened} />
        ))}
      </div>
      <ImageLightbox src={opened ? srcOf(opened) : null} title={opened?.title ?? ""} onClose={() => setOpened(null)} />
    </div>
  );
}
