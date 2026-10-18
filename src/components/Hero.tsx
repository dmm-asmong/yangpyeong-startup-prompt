import { OUTPUT_TYPES, PLATFORMS, STYLES } from "@/data/options";

const STATS = [
  { k: `${OUTPUT_TYPES.length}종`, v: "홍보물" },
  { k: `${PLATFORMS.length}가지`, v: "올릴 곳 사이즈" },
  { k: `${STYLES.length}가지`, v: "디자인 스타일" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div aria-hidden className="bg-paper-grain absolute inset-0 opacity-70" />
      {/* 먼 산 능선 한 줄 */}
      <svg aria-hidden className="absolute inset-x-0 bottom-0 h-32 w-full text-moss/15" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0 96 C120 60 220 70 320 52 S520 18 640 46 S860 92 980 58 S1140 40 1200 52 L1200 120 L0 120Z" fill="currentColor" />
        <path d="M0 108 C160 92 300 104 460 90 S760 76 900 96 S1100 104 1200 94" fill="none" stroke="#2f6b4f" strokeOpacity=".25" strokeWidth="2" />
      </svg>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm font-semibold text-moss">
            <span className="h-2 w-2 rounded-full bg-sun" /> 양평군 창업 AI 활용 교육 · 교육생용
          </p>
          <h1 className="text-[2.1rem] font-black leading-[1.18] tracking-tight text-ink sm:text-5xl">
            내 브랜드 홍보물,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">프롬프트 한 장</span>
              <span aria-hidden className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-full bg-sun/60 sm:h-4" />
            </span>
            으로.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
            창업 아이템·타깃 고객·브랜드 무드만 고르면 포스터, 카드뉴스, 제품 사진, 무드보드, SNS·스마트스토어 이미지를 만드는{" "}
            <b className="text-ink">이미지 AI 프롬프트</b>와 <b className="text-ink">인스타·블로그 홍보 문구</b>를 한 번에 만들어 드려요.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#studio" className="rounded-2xl bg-moss px-6 py-4 text-base font-extrabold text-white hover:bg-moss-dark">
              홍보물 만들기 →
            </a>
            <a href="#guide" className="rounded-2xl border border-line bg-card px-6 py-4 text-base font-bold text-ink hover:border-moss">
              3분 사용법
            </a>
          </div>
          <dl className="mt-10 flex gap-9">
            {STATS.map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-black text-ink">{s.k}</dt>
                <dd className="text-sm text-mute">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 결과물 미리보기 (순수 CSS) */}
        <div aria-hidden className="relative mx-auto h-[25rem] w-full max-w-md">
          <div className="absolute left-0 top-2 w-48 rotate-[-4deg] rounded-md bg-[#2f6b4f] p-4 text-[#fffdf8] shadow-2xl sm:w-56">
            <div className="flex aspect-[1/1.414] flex-col justify-between border border-[#fffdf8]/30 p-3">
              <p className="text-[10px] font-bold tracking-[0.25em] text-[#e8b04b]">물맑은양조장</p>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-dashed border-[#e8b04b]/80 text-[10px] font-black text-[#e8b04b]">
                시음
                <br />
                무료
              </div>
              <p className="text-xl font-black leading-tight">
                양평 쌀로 빚은
                <br />
                생막걸리
              </p>
              <p className="text-[9px] opacity-70">양평군 양서면 · 예약 010-0000-0000</p>
            </div>
          </div>
          <div className="absolute right-2 top-0 w-44 rotate-[5deg] rounded-xl bg-[#fffdf8] p-3 shadow-xl ring-1 ring-line sm:w-48">
            <div className="grid aspect-square place-items-center rounded-lg bg-[#f3e3cf]">
              <div className="relative h-20 w-16 rounded-b-xl rounded-t-md bg-[#c8323c]/85 shadow-inner">
                <div className="absolute -top-2 left-1/2 h-4 w-[4.5rem] -translate-x-1/2 rounded-md bg-[repeating-linear-gradient(45deg,#fffdf8_0_4px,#c8323c_4px_8px)]" />
                <div className="absolute inset-x-2 top-7 rounded-sm bg-[#d9b98c] py-1 text-center text-[8px] font-black text-[#5a3b1a]">두물딸기</div>
              </div>
            </div>
            <p className="mt-2 text-[11px] font-bold text-ink">제품 연출컷 · 1:1</p>
          </div>
          <div className="absolute bottom-6 right-0 w-64 rotate-[-1.5deg] rounded-2xl bg-ink p-4 text-white shadow-2xl sm:w-72">
            <p className="text-[11px] font-bold text-sun">🖼️ 이미지 프롬프트</p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/80">
              디자인 브리프: 경기도 양평에서 창업한 &lsquo;두물딸기&rsquo;의 제품 사진을 만들어 줘. 실제 로컬 브랜드 포토그래퍼가 찍은 것처럼…
            </p>
            <p className="mt-2.5 text-[11px] font-semibold text-[#9fd3b4]">#양평 #로컬푸드 #두물딸기</p>
          </div>
        </div>
      </div>
    </section>
  );
}
