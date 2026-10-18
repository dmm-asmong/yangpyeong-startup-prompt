"use client";

import { useState } from "react";
import { OUTPUT_TYPES, STYLE_GROUPS, STYLES, byId, recommendedStyles, resolveStyle, type StyleGroup } from "@/data/options";
import type { BuilderState } from "@/lib/state";

type Tab = "rec" | StyleGroup;

/** 3단계 디자인 스타일 고르기 — '추천' 탭 + 카테고리 탭 4개 */
export default function StylePicker({ state, onPick }: { state: BuilderState; onPick: (style: string | null) => void }) {
  const output = byId(OUTPUT_TYPES, state.output) ?? OUTPUT_TYPES[0];
  const allowed = STYLES.filter((s) => output.styles.includes(s.id));
  const rec = recommendedStyles(state.output, state.mood);
  const auto = resolveStyle(null, state.output, state.mood);
  const selected = state.style && output.styles.includes(state.style) ? state.style : null;
  const startTab = (): Tab => {
    if (!selected || rec.includes(selected)) return "rec";
    return STYLES.find((s) => s.id === selected)?.group ?? "rec";
  };
  const [tab, setTab] = useState<Tab>(startTab);
  // 홍보물이 바뀌어 지금 탭이 비면 '추천'으로
  const groupHas = (g: StyleGroup) => allowed.some((s) => s.group === g);
  const current: Tab = tab !== "rec" && !groupHas(tab) ? "rec" : tab;

  const tabs: { id: Tab; label: string; emoji: string; count: number }[] = [
    { id: "rec", label: "추천", emoji: "⭐", count: rec.length },
    ...STYLE_GROUPS.filter((g) => groupHas(g.id)).map((g) => ({ ...g, count: allowed.filter((s) => s.group === g.id).length })),
  ];
  const list = current === "rec" ? rec.map((id) => allowed.find((s) => s.id === id)).filter((s) => s !== undefined) : allowed.filter((s) => s.group === current);
  const selectedStyle = selected ? STYLES.find((s) => s.id === selected) : undefined;
  const hiddenSelected = selectedStyle && !list.some((s) => s.id === selectedStyle.id);

  return (
    <div className="space-y-3">
      <div role="tablist" aria-label="스타일 종류" className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={current === t.id}
            onClick={() => setTab(t.id)}
            className={`min-h-10 shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-bold transition ${
              current === t.id ? "bg-ink text-white" : "bg-paper text-ink hover:bg-moss-soft"
            }`}
          >
            <span aria-hidden>{t.emoji}</span> {t.label} <span className="text-xs font-semibold opacity-60">{t.count}</span>
          </button>
        ))}
      </div>
      {current === "rec" && <p className="text-sm text-mute">{output.label}에 잘 맞는 스타일이에요. 맨 앞은 지금 브랜드 무드의 기본 스타일이에요.</p>}
      <div role="radiogroup" aria-label="디자인 스타일" className="grid grid-cols-2 gap-x-2 gap-y-3 pt-1">
        {list.map((s) => {
          const on = selected === s.id;
          const isAuto = !selected && s.id === auto.id;
          return (
            <button
              key={s.id}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => onPick(on ? null : s.id)}
              className={`relative flex min-h-14 w-full items-center gap-2 rounded-2xl border px-2.5 py-2 text-left text-sm sm:gap-2.5 sm:px-3.5 sm:text-[15px] transition active:scale-[0.98] ${
                on ? "border-moss bg-moss text-white shadow-sm" : "border-line bg-card text-ink hover:border-moss/60"
              } ${isAuto ? "ring-2 ring-sun" : ""}`}
            >
              <span aria-hidden className="text-base sm:text-lg">
                {s.emoji}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold leading-snug">{s.label}</span>
                {s.hint && <span className={`block text-xs ${on ? "text-white/70" : "text-mute"}`}>{s.hint}</span>}
              </span>
              {isAuto && <span className="absolute -top-2 right-2 rounded-md bg-sun px-1.5 py-px text-[11px] font-black text-ink shadow-sm">기본</span>}
              {s.isNew && !isAuto && <span className="absolute -top-2 right-2 rounded-md bg-clay px-1.5 py-px text-[10px] font-black tracking-wide text-white shadow-sm">NEW</span>}
            </button>
          );
        })}
      </div>
      {hiddenSelected && (
        <p className="text-sm text-ink">
          지금 고른 스타일: <b>{selectedStyle.emoji} {selectedStyle.label}</b>{" "}
          <button type="button" onClick={() => onPick(null)} className="ml-1 text-moss underline underline-offset-2">
            자동 추천으로
          </button>
        </p>
      )}
    </div>
  );
}
