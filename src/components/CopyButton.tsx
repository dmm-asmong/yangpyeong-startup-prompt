"use client";

import { useEffect, useRef, useState } from "react";
import { copyText } from "@/lib/clipboard";

type Props = { text: string; className?: string; label?: string; variant?: "sun" | "moss" | "ghost" };

export default function CopyButton({ text, className = "", label = "복사", variant = "sun" }: Props) {
  const [status, setStatus] = useState<"idle" | "done" | "fail">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const onClick = async () => {
    const ok = await copyText(text);
    setStatus(ok ? "done" : "fail");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 1800);
  };

  const idle =
    variant === "sun"
      ? "bg-sun text-ink hover:brightness-95"
      : variant === "moss"
        ? "bg-moss text-white hover:bg-moss-dark"
        : "bg-white text-ink ring-1 ring-line hover:ring-moss/60";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-live="polite"
      data-copy-status={status}
      className={`inline-flex items-center justify-center gap-1.5 rounded-2xl font-bold transition active:scale-95 ${
        status === "done" ? "bg-emerald-600 text-white" : status === "fail" ? "bg-rose-600 text-white" : idle
      } ${className}`}
    >
      {status === "done" ? "✓ 복사됐어요" : status === "fail" ? "복사 실패 · 직접 선택해 주세요" : label}
    </button>
  );
}
