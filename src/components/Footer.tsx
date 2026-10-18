import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10 text-white/55">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm leading-relaxed sm:flex-row sm:items-start sm:justify-between">
        <Logo dark />
        <div className="max-w-xl space-y-1 sm:text-right">
          <p className="font-semibold text-white/75">양평군청 창업과 AI 활용 교육 교육생용 실습 도구</p>
          <p>교육 실습을 위해 만든 비공식 도구로, 기관의 공식 서비스가 아니에요. 무료 · 로그인 없음 · 입력한 내용은 브라우저 밖으로 나가지 않아요.</p>
          <p>예시 브랜드는 모두 가상이에요. AI로 만든 이미지는 올리기 전에 글자·사실·저작권을 꼭 확인하세요.</p>
        </div>
      </div>
    </footer>
  );
}
