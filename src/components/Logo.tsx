export const BRAND = { name: "양평 브랜드공방", sub: "양평군 창업 AI 활용 교육" };

/** 두 물줄기가 만나는 선 하나 (특정 기관 로고·문장이 아닌 자체 심볼) */
export function Mark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden>
      <rect width="40" height="40" rx="12" fill="#2f6b4f" />
      <path d="M8 14c5 0 7 6 12 6s7-6 12-6" fill="none" stroke="#e8b04b" strokeWidth="3" strokeLinecap="round" />
      <path d="M8 24c5 0 7 4 12 4s7-4 12-4" fill="none" stroke="#fffdf8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Mark />
      <span className="leading-none">
        <span className={`block text-[17px] font-black tracking-tight ${dark ? "text-white" : "text-ink"}`}>{BRAND.name}</span>
        <span className={`mt-1 block text-[11px] font-semibold ${dark ? "text-white/55" : "text-mute"}`}>{BRAND.sub}</span>
      </span>
    </span>
  );
}
