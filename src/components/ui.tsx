import type { ReactNode } from "react";

type ChipOption = { id: string; label: string; emoji?: string; hint?: string };

/** 칩 하나만 고르기 */
export function Chips({
  options,
  value,
  onChange,
  allowDeselect = false,
  ariaLabel,
}: {
  options: ChipOption[];
  value: string | null;
  onChange: (id: string | null) => void;
  allowDeselect?: boolean;
  ariaLabel: string;
}) {
  return (
    <div role="group" aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const selected = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(selected && allowDeselect ? null : o.id)}
            className={chipClass(selected)}
          >
            {o.emoji && <span aria-hidden>{o.emoji}</span>}
            <span>{o.label}</span>
            {o.hint && <span className={`text-xs ${selected ? "text-white/70" : "text-mute"}`}>{o.hint}</span>}
          </button>
        );
      })}
    </div>
  );
}

/** 여러 개 고르기 */
export function MultiChips({ options, values, onChange, ariaLabel }: { options: ChipOption[]; values: string[]; onChange: (v: string[]) => void; ariaLabel: string }) {
  return (
    <div role="group" aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = values.includes(o.id);
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(on ? values.filter((v) => v !== o.id) : [...values, o.id])}
            className={chipClass(on)}
          >
            {o.emoji && <span aria-hidden>{o.emoji}</span>}
            <span>{o.label}</span>
            {on && <span aria-hidden className="text-sun">✓</span>}
          </button>
        );
      })}
    </div>
  );
}

export const chipClass = (on: boolean) =>
  `inline-flex min-h-11 items-center gap-1.5 rounded-full border px-4 py-2 text-[15px] font-medium transition active:scale-95 ${
    on ? "border-moss bg-moss text-white shadow-sm" : "border-line bg-card text-ink hover:border-moss/60"
  }`;

/** 폼 항목 (라벨 + 내용) */
export function Field({ label, hint, htmlFor, optional, children }: { label: string; hint?: string; htmlFor?: string; optional?: boolean; children: ReactNode }) {
  const Title = htmlFor ? "label" : "p";
  return (
    <div className="space-y-2.5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <Title htmlFor={htmlFor} className="text-base font-bold text-ink">
          {label}
          {optional && <span className="ml-1.5 text-sm font-normal text-mute">(선택)</span>}
        </Title>
        {hint && <span className="text-sm text-mute">{hint}</span>}
      </div>
      {children}
    </div>
  );
}

/** 번호가 붙은 단계 카드 */
export function StepCard({ step, title, desc, children }: { step: number; title: string; desc: string; children: ReactNode }) {
  return (
    <section aria-labelledby={`step-${step}`} className="rounded-[28px] border border-line bg-card p-5 shadow-[0_1px_0_rgba(21,36,31,0.04)] sm:p-7">
      <header className="mb-6 flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-moss-soft text-base font-black text-moss">
          {step}
        </span>
        <div>
          <h3 id={`step-${step}`} className="text-xl font-extrabold tracking-tight text-ink">
            {title}
          </h3>
          <p className="mt-0.5 text-[15px] leading-relaxed text-mute">{desc}</p>
        </div>
      </header>
      <div className="space-y-7">{children}</div>
    </section>
  );
}

export const inputClass =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-[#a49c8c] focus:border-moss focus:outline-none focus:ring-4 focus:ring-moss/15";

export function Toggle({ checked, onChange, label, desc }: { checked: boolean; onChange: (v: boolean) => void; label: string; desc: string }) {
  return (
    <label className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${checked ? "border-moss bg-moss-soft/60" : "border-line bg-paper/60 hover:border-moss/50"}`}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-[#2f6b4f]" />
      <span>
        <span className="block text-[15px] font-bold text-ink">{label}</span>
        <span className="block text-sm leading-relaxed text-mute">{desc}</span>
      </span>
    </label>
  );
}

export function SectionTitle({ eyebrow, title, desc, dark = false }: { eyebrow: string; title: string; desc?: string; dark?: boolean }) {
  return (
    <div className="mb-9 max-w-2xl">
      <p className={`mb-3 text-sm font-bold tracking-wide ${dark ? "text-sun" : "text-clay"}`}>{eyebrow}</p>
      <h2 className={`text-[1.75rem] font-black leading-tight tracking-tight sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {desc && <p className={`mt-3 text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-mute"}`}>{desc}</p>}
    </div>
  );
}
