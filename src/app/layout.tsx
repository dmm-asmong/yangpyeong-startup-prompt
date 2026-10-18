import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "양평 브랜드공방 | 양평군 창업 AI 활용 교육 홍보물 프롬프트 빌더",
  description:
    "창업 아이템·타깃 고객·브랜드 무드만 고르면 홍보 포스터·카드뉴스·제품 사진·무드보드·SNS·스마트스토어 이미지용 AI 프롬프트와 인스타·블로그 홍보 문구를 한 번에. 양평군청 창업과 AI 활용 교육 교육생용 실습 도구. 무료, 로그인 없음.",
  openGraph: {
    title: "양평 브랜드공방",
    description: "양평군 창업 AI 활용 교육 · 창업 홍보물 프롬프트 + 홍보 문구 빌더",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: "#15241f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          integrity="sha384-GIdEBaqGN9mNkDkMkzMHW8EKUqtpPIe/sLj1X7DIrnc9uPtLROJgmuDlh+3rBw0j"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="flex min-h-full flex-col bg-paper font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
