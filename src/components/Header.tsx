import Logo from "./Logo";
import TextSizeToggle from "./TextSizeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <a href="#top" aria-label="양평 브랜드공방 처음으로">
          <Logo dark />
        </a>
        <nav className="flex items-center gap-1 text-[15px] font-semibold text-white/75">
          <a href="#studio" className="hidden rounded-lg px-3 py-1.5 hover:text-white md:inline">
            만들기
          </a>
          <a href="#gallery" className="hidden rounded-lg px-3 py-1.5 hover:text-white md:inline">
            예시
          </a>
          <a href="#guide" className="hidden rounded-lg px-3 py-1.5 hover:text-white md:inline">
            사용 가이드
          </a>
          <span className="ml-1">
            <TextSizeToggle />
          </span>
        </nav>
      </div>
    </header>
  );
}
