import { readFileSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import GithubSlugger from "github-slugger";
import { isValidElement } from "react";
import Markdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/components/CodeBlock";

export const metadata: Metadata = {
  title: "실전 핸드북 | 양평 브랜드공방",
  description: "AI 상업용 홍보 이미지 프롬프트 공식, 텍스트·캘리그라피 제어법, 키워드 사전, 실전 예시를 한 곳에 모은 소장용 핸드북.",
};

const raw = readFileSync(path.join(process.cwd(), "content", "handbook.md"), "utf8");

// 본문 속 목차 섹션은 사이드 패널이 대신하므로 제거
const source = raw.replace(/## 📑 목차[\s\S]*?\r?\n---\r?\n/, "");

// 사이드 패널 목차: "# N. …" 제목 (id는 rehype-slug와 같은 github-slugger 규칙)
const slugger = new GithubSlugger();
const toc = [...source.matchAll(/^# (.+)$/gm)].slice(1).map(([, title]) => ({
  id: slugger.slug(title),
  title,
}));
slugger.reset();

function Toc() {
  return (
    <ol className="space-y-1 text-[15px] font-semibold text-mute">
      {toc.map((t) => (
        <li key={t.id}>
          <a href={`#${t.id}`} className="block rounded-lg px-3 py-1.5 hover:bg-moss-soft hover:text-moss-dark">
            {t.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function HandbookPage() {
  return (
    <div className="mx-auto flex max-w-6xl gap-10 px-4 py-10">
      <aside className="hidden w-64 shrink-0 lg:block">
        <nav aria-label="목차" className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <p className="mb-2 px-3 text-sm font-bold text-ink">목차</p>
          <Toc />
        </nav>
      </aside>
      <div className="min-w-0 flex-1">
        <details className="mb-6 rounded-2xl border border-line bg-card p-3 lg:hidden">
          <summary className="cursor-pointer px-3 py-1 font-bold">목차</summary>
          <div className="mt-2">
            <Toc />
          </div>
        </details>
    <article className="prose prose-stone max-w-3xl prose-headings:scroll-mt-24 prose-a:text-moss prose-h1:mt-14 prose-h1:border-t prose-h1:border-line prose-h1:pt-10 first:prose-h1:mt-0 first:prose-h1:border-0 first:prose-h1:pt-0">
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
      </div>
    </div>
  );
}
