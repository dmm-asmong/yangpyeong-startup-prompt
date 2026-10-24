"use client";

import { useMemo, useState } from "react";
import CopyButton from "@/components/CopyButton";
import { inputClass } from "@/components/ui";
import {
  PHOTO_CATEGORIES,
  PHOTO_FIT,
  PHOTO_PROMPTS,
  applyPhotoPrompt,
  photoValues,
  type PhotoCategoryId,
  type PhotoPrompt,
} from "@/data/photo-prompts";

export default function PhotoLibrary() {
  const [category, setCategory] = useState<PhotoCategoryId | "all">("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(1);
  const [drafts, setDrafts] = useState<Record<number, Record<string, string>>>({});

  const selected = PHOTO_PROMPTS.find((p) => p.n === selectedId) ?? PHOTO_PROMPTS[0];
  const values = drafts[selected.n] ?? photoValues(selected);
  const applied = applyPhotoPrompt(selected, values);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PHOTO_PROMPTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!q) return true;
      return String(p.n) === q || p.title.toLowerCase().includes(q) || p.fields.some((f) => f.includes(q));
    });
  }, [category, query]);

  const choose = (prompt: PhotoPrompt) => {
    setSelectedId(prompt.n);
    setDrafts((prev) => (prev[prompt.n] ? prev : { ...prev, [prompt.n]: photoValues(prompt) }));
  };

  const setValue = (key: string, value: string) => {
    setDrafts((prev) => ({ ...prev, [selected.n]: { ...(prev[selected.n] ?? photoValues(selected)), [key]: value } }));
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-start">
      <div className="space-y-4">
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {PHOTO_CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              aria-pressed={category === c.id}
              onClick={() => setCategory(c.id)}
              className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-[15px] font-semibold transition ${category === c.id ? "bg-moss text-white" : "bg-card text-ink ring-1 ring-line hover:ring-moss/60"}`}
            >
              {c.label} <span className="text-sm opacity-60">{c.hint}</span>
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="번호나 제목으로 찾기"
          aria-label="프롬프트 찾기"
          className={inputClass}
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {list.map((p) => {
            const on = p.n === selected.n;
            return (
              <li key={p.n}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => choose(p)}
                  className={`h-full w-full rounded-[22px] border p-4 text-left transition ${on ? "border-moss bg-moss-soft" : "border-line bg-card hover:border-moss/50"}`}
                >
                  <p className="text-sm font-bold text-moss">
                    {p.n} · {p.ratio}
                  </p>
                  <p className="mt-1 text-base font-extrabold leading-snug text-ink">{p.title}</p>
                  <p className="mt-2 text-sm text-mute">{p.fields.length ? p.fields.join(" · ") : "원문 문구 고정"}</p>
                </button>
              </li>
            );
          })}
        </ul>
        {list.length === 0 && <p className="text-base text-mute">찾는 번호나 제목이 없습니다.</p>}
      </div>

      <aside className="space-y-4 rounded-[28px] border border-line bg-card p-5 shadow-[0_1px_0_rgba(21,36,31,0.04)] lg:sticky lg:top-20">
        <div>
          <p className="text-sm font-bold text-clay">
            {selected.n}번 · {selected.ratio} · {selected.attach}
          </p>
          <h2 className="mt-1 text-xl font-black leading-snug text-ink">{selected.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-mute">{PHOTO_FIT[selected.category]}</p>
          {selected.caution && <p className="mt-2 text-sm leading-relaxed text-ink">{selected.caution}</p>}
        </div>

        {selected.productPhrase && (
          <label className="block space-y-1.5">
            <span className="text-sm font-bold text-ink">제품 설명</span>
            <span className="block text-xs text-mute">이 구절만 바뀝니다. 앞뒤 지시 문장은 그대로입니다.</span>
            <textarea value={values.productPhrase ?? ""} onChange={(e) => setValue("productPhrase", e.target.value)} rows={3} className={inputClass} />
          </label>
        )}

        {selected.fixed.map((text) => (
          <label key={text} className="block space-y-1.5">
            <span className="text-sm font-bold text-ink">따옴표 문구</span>
            <input value={values[`fixed:${text}`] ?? text} onChange={(e) => setValue(`fixed:${text}`, e.target.value)} className={inputClass} />
          </label>
        ))}

        {selected.fields.map((field) => (
          <label key={field} className="block space-y-1.5">
            <span className="text-sm font-bold text-ink">{field}</span>
            <input
              value={values[field] ?? ""}
              onChange={(e) => setValue(field, e.target.value)}
              placeholder="짧게 적기"
              className={inputClass}
            />
          </label>
        ))}

        {applied.missing.length > 0 && (
          <p className="rounded-2xl bg-sun-soft px-4 py-3 text-sm leading-relaxed text-ink">
            아직 비어 있는 칸: {applied.missing.join(", ")}. 비운 채로 복사하면 대괄호가 이미지에 그대로 나올 수 있습니다.
          </p>
        )}

        <CopyButton text={applied.text} label="프롬프트 복사" className="min-h-12 w-full px-4 text-base" />
        <pre className="max-h-80 overflow-auto whitespace-pre-wrap rounded-2xl bg-ink px-4 py-3 text-sm leading-relaxed text-white/90">{applied.text}</pre>
      </aside>
    </div>
  );
}
