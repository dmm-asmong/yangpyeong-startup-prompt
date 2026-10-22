import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { isValidElement } from "react";
import Markdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "실전 핸드북 | 양평 브랜드공방",
  description: "AI 상업용 홍보 이미지 프롬프트 공식, 텍스트·캘리그라피 제어법, 키워드 사전, 실전 예시를 한 곳에 모은 소장용 핸드북.",
};

const source = readFileSync(path.join(process.cwd(), "content", "handbook.md"), "utf8");

export default function HandbookPage() {
  return (
    <article className="prose prose-stone mx-auto max-w-3xl px-4 py-10 prose-headings:scroll-mt-24 prose-a:text-moss prose-h1:mt-14 prose-h1:border-t prose-h1:border-line prose-h1:pt-10 first:prose-h1:mt-0 first:prose-h1:border-0 first:prose-h1:pt-0">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={{
          pre: ({ children }) => {
            const code = isValidElement<{ children?: string }>(children) ? children.props.children : undefined;
            return <CodeBlock text={String(code ?? "").replace(/\n$/, "")} />;
          },
          table: ({ children }) => (
            <div className="not-prose my-5 overflow-x-auto rounded-xl border border-line">
              <table className="w-full min-w-[32rem] border-collapse text-left text-[15px] [&_td]:border-t [&_td]:border-line [&_td]:p-3 [&_th]:bg-moss-soft [&_th]:p-3">{children}</table>
            </div>
          ),
          a: ({ href, children }) =>
            href?.startsWith("#") ? (
              <a href={href}>{children}</a>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
        }}
      >
        {source}
      </Markdown>
    </article>
  );
}
