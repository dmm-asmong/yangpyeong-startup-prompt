import { CREATOR, creatorMailto } from "@/data/credit";
import { SectionTitle } from "./ui";

const STEPS = [
  { n: "1", t: "고르기", d: "1단계에 내 창업 아이템과 브랜드 정보를 적고, 2단계에서 만들 홍보물과 올릴 곳(사이즈)을 골라요." },
  { n: "2", t: "복사하기", d: "결과판의 노란 '프롬프트 복사' 버튼을 눌러요. 홍보 문구 탭에서는 인스타 캡션·슬로건도 복사할 수 있어요." },
  { n: "3", t: "붙여 넣기", d: "ChatGPT나 Gemini 입력창에 붙여 넣고 보내면 이미지가 만들어져요. 마음에 들면 내려받아 사용하세요." },
];

const TOOLS = [
  {
    name: "ChatGPT",
    emoji: "💬",
    lang: "한국어 프롬프트",
    steps: [
      "chatgpt.com 에 접속해 로그인해요.",
      "입력창에 프롬프트를 붙여 넣고 보내요.",
      "이미지가 나오면 이미지를 눌러 내려받기(↓) 버튼으로 저장해요.",
      "내 제품 사진이 있다면 입력창 왼쪽 + 버튼으로 사진을 먼저 첨부하고, 빌더에서 '내 제품 사진을 함께 올릴게요'를 켠 프롬프트를 보내요.",
    ],
  },
  {
    name: "Gemini",
    emoji: "✨",
    lang: "한국어 프롬프트",
    steps: [
      "gemini.google.com 에 접속해 구글 계정으로 로그인해요.",
      "프롬프트를 붙여 넣고 보내요. 이미지가 안 나오면 맨 앞에 '이미지를 만들어 줘:'를 붙여 보세요.",
      "이미지 위의 내려받기 버튼으로 저장해요.",
      "사진 첨부도 돼요: + 버튼 → 사진 올리기 → 프롬프트 보내기.",
    ],
  },
  {
    name: "미드저니 등 영어 AI",
    emoji: "🎨",
    lang: "English 프롬프트",
    steps: [
      "결과판에서 'English'를 누른 뒤 복사해요. 마지막 줄의 --ar 비율은 그대로 두세요.",
      "영어 AI는 한글 글자를 잘 못 써요. 글자는 빼고 사진만 만든 뒤 캔바·미리캔버스에서 글자를 얹는 걸 추천해요.",
    ],
  },
  {
    name: "캔바 · 미리캔버스",
    emoji: "🖍️",
    lang: "마무리 편집",
    steps: [
      "AI가 한글을 자꾸 틀리면 '글자를 모두 빼고 이미지만 다시 만들어 줘'를 보내 글자 없는 이미지를 받아요.",
      "캔바나 미리캔버스에 이미지를 올리고 글자·로고·QR 코드를 직접 얹으면 가장 정확해요.",
    ],
  },
];

const TIPS = [
  { t: "2~3번 고쳐 쓰면 퀄리티가 확 올라가요", d: "결과판 아래 '이어서 보낼 말'을 복사해 보내면서 글자·구도·색을 하나씩 다듬어 보세요." },
  { t: "글자는 적을수록 정확해요", d: "이미지 AI는 한글을 틀리기 쉬워요. 꼭 필요한 정보만 넣고, 나머지는 홍보 문구(캡션)로 쓰세요." },
  { t: "실제 정보만 넣으세요", d: "가격·날짜·위치·연락처는 직접 적은 것만 들어가요. 올리기 전에 숫자를 한 번 더 확인하세요." },
  { t: "내 제품 사진이 있으면 가장 정확해요", d: "실제 사진을 첨부하면 제품 모양은 그대로 두고 배경과 분위기만 바꿀 수 있어요." },
  { t: "스마트스토어 · 네이버 플레이스", d: "스마트스토어 대표이미지는 흰 배경에 글자 없이, 플레이스 대표사진은 실제 매장 전경·내부 사진이 원칙이에요. AI 이미지는 보조나 분위기 참고용으로 쓰세요." },
  { t: "로고는 '시안'이에요", d: "AI 로고는 방향을 정하는 참고용이에요. 실제로 쓰기 전에 디자이너와 다듬고, KIPRIS에서 비슷한 상표가 있는지 확인하세요." },
];

const FAQ = [
  { q: "돈이 드나요?", a: "이 사이트는 무료예요. 이미지를 만드는 ChatGPT·Gemini는 무료 계정으로도 쓸 수 있지만, 하루에 만들 수 있는 장수가 제한될 수 있어요." },
  { q: "입력한 내용이 어딘가에 저장되나요?", a: "아니요. 모든 처리는 내 휴대폰·컴퓨터 브라우저 안에서만 일어나고 서버로 보내지 않아요. 새로고침하면 처음 상태로 돌아가요." },
  { q: "휴대폰에서도 되나요?", a: "네. 아래쪽 '결과 보기 · 복사하기' 버튼을 누르면 결과판으로 바로 이동해요. 결과판에서 바로 복사해서 ChatGPT 앱에 붙여 넣으면 돼요." },
  { q: "만든 이미지를 홍보에 써도 되나요?", a: "대부분 쓸 수 있지만, 실제 사람 얼굴·유명인·다른 회사 로고가 들어간 이미지는 피하세요. 이용하는 AI 서비스의 약관도 확인해 주세요." },
];

export default function Guide() {
  const mailto = creatorMailto();
  return (
    <section id="guide" className="scroll-mt-16 bg-ink py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle dark eyebrow="사용 가이드" title="복사 → 붙여넣기, 3단계면 끝" desc="이 사이트는 이미지를 직접 만들지 않고, 이미지 AI에 보낼 '주문서(프롬프트)'와 홍보 문구를 만들어 드려요." />
        <ol className="grid gap-4 sm:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-sun text-lg font-black text-ink">{s.n}</span>
              <p className="mt-3 text-xl font-extrabold">{s.t}</p>
              <p className="mt-2 text-base leading-relaxed text-white/70">{s.d}</p>
            </li>
          ))}
        </ol>

        <h3 className="mt-14 text-2xl font-black">어디에 붙여 넣나요?</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {TOOLS.map((tool, i) => (
            <details key={tool.name} className="group rounded-[20px] bg-white/[0.06] ring-1 ring-white/10" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 marker:hidden">
                <span className="text-lg font-extrabold">
                  {tool.emoji} {tool.name} <span className="ml-1 rounded-md bg-white/10 px-2 py-0.5 text-xs font-bold text-sun">{tool.lang}</span>
                </span>
                <span className="text-white/50 transition group-open:rotate-180">▾</span>
              </summary>
              <ol className="list-decimal space-y-2 px-5 pb-5 pl-10 text-base leading-relaxed text-white/80">
                {tool.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </details>
          ))}
        </div>

        <h3 className="mt-14 text-2xl font-black">잘 쓰는 요령</h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TIPS.map((tip) => (
            <li key={tip.t} className="rounded-[20px] bg-white/[0.06] p-5 ring-1 ring-white/10">
              <p className="text-lg font-bold text-sun">{tip.t}</p>
              <p className="mt-1.5 text-base leading-relaxed text-white/75">{tip.d}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-14 text-2xl font-black">자주 묻는 질문</h3>
        <div className="mt-5 space-y-2">
          {FAQ.map((f) => (
            <details key={f.q} className="group rounded-[20px] bg-white/[0.06] ring-1 ring-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-lg font-bold marker:hidden">
                Q. {f.q}
                <span className="text-white/50 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="px-5 pb-5 text-base leading-relaxed text-white/75">{f.a}</p>
            </details>
          ))}
        </div>

        <aside id="creator" aria-label="만든 사람" className="mt-14 flex flex-col gap-5 rounded-[24px] bg-white/[0.06] p-6 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-center gap-4">
            <span aria-hidden className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sun text-2xl">
              🌱
            </span>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-sun">만든 사람</p>
              <p className="mt-1 text-xl font-extrabold">{CREATOR.name}</p>
              <p className="mt-1 text-base leading-relaxed text-white/70">{CREATOR.intro}</p>
            </div>
          </div>
          {mailto && (
            <a href={mailto} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-sun px-5 py-3 text-base font-extrabold text-ink hover:brightness-105">
              ✉️ 문의하기
            </a>
          )}
        </aside>
      </div>
    </section>
  );
}
