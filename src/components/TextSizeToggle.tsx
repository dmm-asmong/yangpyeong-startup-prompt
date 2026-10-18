"use client";

import { useSyncExternalStore } from "react";

const KEY = "yp-text-size";
const listeners = new Set<() => void>();

function read(): "lg" | "md" {
  try {
    return localStorage.getItem(KEY) === "lg" ? "lg" : "md";
  } catch {
    return "md";
  }
}

function apply(size: "lg" | "md") {
  if (size === "lg") document.documentElement.dataset.size = "lg";
  else delete document.documentElement.dataset.size;
}

const subscribe = (fn: () => void) => {
  listeners.add(fn);
  apply(read());
  return () => listeners.delete(fn);
};

/** '글자 크게' — 어르신 교육생도 편하게 읽도록 화면 전체 글자를 키워요. 선택은 이 브라우저에만 저장돼요. */
export default function TextSizeToggle() {
  const size = useSyncExternalStore(subscribe, read, () => "md" as const);
  const toggle = () => {
    const next = size === "lg" ? "md" : "lg";
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // 저장이 막힌 브라우저면 이번 화면에서만 적용
    }
    apply(next);
    listeners.forEach((fn) => fn());
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={size === "lg"}
      className={`rounded-xl border px-3 py-1.5 text-sm font-bold transition ${size === "lg" ? "border-sun bg-sun text-ink" : "border-white/25 text-white hover:bg-white/10"}`}
    >
      가<span className="text-base">가</span> 글자 {size === "lg" ? "보통" : "크게"}
    </button>
  );
}
