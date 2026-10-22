import CopyButton from "./CopyButton";

/** 핸드북의 프롬프트 코드 블록: 본문 + 복사 버튼 */
export default function CodeBlock({ text }: { text: string }) {
  return (
    <div className="not-prose my-5 overflow-hidden rounded-2xl border border-line bg-card">
      <div className="flex justify-end border-b border-line bg-moss-soft/60 px-3 py-2">
        <CopyButton text={text} label="프롬프트 복사" className="px-3 py-1.5 text-sm" />
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap break-words p-4 text-[15px] leading-relaxed text-ink">{text}</pre>
    </div>
  );
}
