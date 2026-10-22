import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
        <Link href="/" aria-label="양평 브랜드공방 처음으로">
          <Logo dark />
        </Link>
        <nav className="flex items-center gap-1 text-[15px] font-semibold text-white/75">
          <Link href="/#studio" className="hidden rounded-lg px-3 py-1.5 hover:text-white md:inline">
            만들기
          </Link>
          <Link href="/#gallery" className="hidden rounded-lg px-3 py-1.5 hover:text-white md:inline">
            예시
          </Link>
          <Link href="/#guide" className="hidden rounded-lg px-3 py-1.5 hover:text-white md:inline">
            사용 가이드
          </Link>
          <Link href="/handbook" className="rounded-lg px-3 py-1.5 hover:text-white">
            실전 핸드북
          </Link>
        </nav>
      </div>
    </header>
  );
}
