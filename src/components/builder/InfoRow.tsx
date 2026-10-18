import type { CopyKey, InfoMode } from "@/lib/state";
import type { Resolved } from "@/lib/suggest";
import { inputClass } from "../ui";

export const MODES: { id: InfoMode; label: string }[] = [
  { id: "exact", label: "직접 쓰기" },
  { id: "ai", label: "추천 문구" },
  { id: "omit", label: "넣지 않기" },
];

export function ModeSwitch({ value, onChange, label }: { value: InfoMode; onChange: (m: InfoMode) => void; label: string }) {
  return (
    <div role="radiogroup" aria-label={`${label} 입력 방식`} className="inline-flex rounded-xl bg-paper p-1 text-sm font-bold">
      {MODES.map((m) => (
        <button
          key={m.id}
          type="button"
          role="radio"
          aria-checked={value === m.id}
          onClick={() => onChange(m.id)}
          className={`rounded-lg px-3 py-1.5 transition ${value === m.id ? "bg-white text-moss shadow-sm" : "text-mute hover:text-ink"}`}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}

type Props = {
  k: CopyKey;
  label: string;
  placeholder: string;
  note?: string;
  value: string;
  resolved: Resolved;
  onMode: (k: CopyKey, mode: InfoMode) => void;
  onValue: (k: CopyKey, value: string) => void;
  onShuffle: (k: CopyKey) => void;
};

export default function InfoRow({ k, label, placeholder, note, value, resolved, onMode, onValue, onShuffle }: Props) {
  const { mode } = resolved;
  const id = `copy-${k}`;
  return (
    <div className={`rounded-2xl border p-4 transition ${mode === "omit" ? "border-dashed border-line bg-paper/50" : "border-line bg-white"}`}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <label htmlFor={id} className={`text-[15px] font-bold ${mode === "omit" ? "text-mute" : "text-ink"}`}>
          {label}
          {mode === "ai" && <span className="ml-2 rounded-md bg-sun-soft px-1.5 py-0.5 text-xs font-bold text-[#8a5a00]">추천</span>}
        </label>
        <ModeSwitch value={mode} onChange={(m) => onMode(k, m)} label={label} />
      </div>
      {mode === "omit" ? (
        <p className="text-sm text-mute">이미지에 넣지 않아요.</p>
      ) : (
        <div className="flex gap-2">
          <input
            id={id}
            value={mode === "ai" ? value || resolved.suggestion : value}
            onChange={(e) => onValue(k, e.target.value)}
            placeholder={placeholder}
            className={inputClass}
          />
          {mode === "ai" && (
            <button
              type="button"
              onClick={() => onShuffle(k)}
              aria-label={`${label} 다른 추천`}
              title="다른 추천"
              className="shrink-0 rounded-2xl border border-line px-4 text-base hover:border-moss"
            >
              🔀
            </button>
          )}
        </div>
      )}
      {note && mode !== "omit" && <p className="mt-2 text-sm text-mute">{note}</p>}
    </div>
  );
}
