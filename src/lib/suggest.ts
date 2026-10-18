import { fieldBank, type FieldBank } from "@/data/fields";
import { EVENT_KINDS, FIELDS, byId } from "@/data/options";
import type { BuilderState, CopyKey, InfoMode } from "./state";

export type Resolved = { mode: InfoMode; text: string; suggestion: string };
export type ResolvedCopy = Record<CopyKey, Resolved> & {
  points: { mode: InfoMode; items: string[]; suggestion: string[] };
  bank: FieldBank;
  /** 화면·프롬프트에 쓸 아이템 이름 (비었으면 브랜드명 → 분야 이름) */
  itemName: string;
  brandName: string;
};

const pick = <T,>(list: T[], seed: number): T => list[((seed % list.length) + list.length) % list.length];

/** 띄어쓰기·문장부호를 빼고 비교했을 때 한쪽이 다른 쪽을 품으면 겹친다고 봐요. */
const norm = (t: string) => t.replace(/[^0-9A-Za-z가-힣]/g, "").toLowerCase();
export function overlaps(a: string, b: string): boolean {
  const x = norm(a);
  const y = norm(b);
  return Boolean(x && y) && (x.includes(y) || y.includes(x));
}

function pickDistinct(list: string[], seed: number, avoid: string): string {
  for (let i = 0; i < list.length; i++) {
    const c = pick(list, seed + i);
    if (!avoid || !overlaps(c, avoid)) return c;
  }
  return "";
}

const MOOD_TAGLINES: Record<string, string[]> = {
  nature: ["자연이 키운 그대로, 정직하게", "땅과 물, 햇살이 만든 맛", "있는 그대로의 계절을 담았어요"],
  premium: ["작은 차이가 만드는 깊은 만족", "오래 기억될 한 번의 경험", "고르고 또 고른 것만"],
  warm: ["이웃처럼 편안하게, 정성 가득", "동네에서 오래 사랑받는 곳", "늘 그 자리에서 따뜻하게"],
  minimal: ["필요한 것만, 더 좋게", "단순해서 더 오래 좋은", "덜어 내고 본질만 남겼어요"],
  playful: ["오늘 기분 전환은 여기서", "친구랑 꼭 다시 올 곳", "보는 순간 찍고 싶어지는"],
  heritage: ["한결같은 손맛, 정성 그대로", "시간이 만든 깊은 맛", "오래 지켜 온 방식으로"],
};

const TARGET_TAGLINES: Record<string, string> = {
  travel: "양평 여행길에 꼭 들를 곳",
  family: "온 가족이 함께 즐겨요",
  couple: "둘이 오면 더 좋은 곳",
  local: "우리 동네 단골집",
  worker: "바쁜 일상 속 작은 쉼",
  pet: "반려견과 함께 오세요",
  gift: "마음을 전하기 좋은 선물",
  single: "혼자 와도 편한 곳",
  student: "친구랑 가볍게 들르기 좋은 곳",
  camper: "캠핑 가는 길에 들르기 좋은 곳",
  vegan: "가치를 담은 작은 선택",
  taste: "나만 알고 싶은 취향",
};

/** 업종과 상관없이 쓸 수 있는 타깃 문구 (나머지는 방문형 업종에만) */
const ANY_FIELD_TARGETS = ["gift", "vegan", "taste"];

const PLACE_FIELDS = ["cafe", "food", "stay", "craft", "edu", "pet"];

const CTAS: Record<string, string[]> = {
  feed: ["프로필 링크에서 주문하기", "DM으로 예약 문의", "저장해 두고 방문하세요"],
  square: ["프로필 링크에서 주문하기", "DM으로 예약 문의"],
  story: ["링크 눌러 예약하기", "위로 밀어 주문하기"],
  smartdetail: ["스토어 찜하고 소식 받기", "지금 바로 주문하기"],
  a4: ["QR 찍고 바로 예약", "전화로 편하게 예약하세요"],
  wide: ["자세한 내용은 블로그에서"],
  smartthumb: [""],
  place: [""],
};

function eventHeadlines(state: BuilderState, item: string, brand: string): string[] {
  const b = brand || item;
  switch (state.eventKind) {
    case "sale":
      return ["오픈 기념 특별 할인", "이번 주만 특별한 가격", `${b} 감사 할인 주간`];
    case "class":
      return [`${item} 체험 클래스`, "직접 만들어 보는 하루", `주말 ${item} 체험`];
    case "market":
      return [`${b}, 장터에서 만나요`, "이번 주말 장터 나들이", "장터에서만 만나는 맛"];
    default:
      return [`${b} 그랜드 오픈`, "드디어 문을 엽니다", `${item}, 오픈했어요`];
  }
}

/** 칸별 모드에 따라 실제로 쓸 문구를 정합니다. */
export function resolveCopy(state: BuilderState): ResolvedCopy {
  const bank = fieldBank(state.field);
  const brandName = state.brand.trim();
  const fieldLabel = byId(FIELDS, state.field)?.label.split("(")[0] ?? "";
  const itemName = state.item.trim() || brandName || fieldLabel;
  const s = state.seeds;
  const own = (k: CopyKey) => (state.copy[k].mode === "omit" ? "" : state.copy[k].value.trim());
  const fill = (t: string) => t.replaceAll("{item}", itemName).replaceAll("{brand}", brandName || itemName);

  const headlineList =
    state.output === "event"
      ? eventHeadlines(state, itemName, brandName)
      : [...bank.headlines.map(fill), ...(brandName ? [`${brandName}에서 만나요`] : [])];
  const headlineSugg = pickDistinct(headlineList, s.headline, own("tagline")) || pick(headlineList, s.headline);
  const headlineText = state.copy.headline.mode === "omit" ? "" : own("headline") || headlineSugg;

  const taglineList = [
    ...(state.oneLiner.trim() ? [state.oneLiner.trim()] : []),
    // 방문형 업종에만 '들를 곳' 같은 장소 문구를 써요 (상품 판매형은 선물·가치·취향 문구만)
    ...state.targets.filter((t) => PLACE_FIELDS.includes(state.field) || ANY_FIELD_TARGETS.includes(t)).map((t) => TARGET_TAGLINES[t]).filter(Boolean),
    ...(MOOD_TAGLINES[state.mood] ?? MOOD_TAGLINES.nature),
  ];
  const taglineSugg = pickDistinct(taglineList, s.tagline, headlineText) || pick(taglineList, s.tagline);
  const ctaList = CTAS[state.platform] ?? CTAS.feed;
  const sugg: Record<CopyKey, string> = {
    headline: headlineSugg,
    tagline: taglineSugg,
    cta: pick(ctaList, s.cta),
  };
  const out = {} as Record<CopyKey, Resolved>;
  for (const key of Object.keys(sugg) as CopyKey[]) {
    const { mode, value } = state.copy[key];
    out[key] = { mode, suggestion: sugg[key], text: mode === "omit" ? "" : mode === "exact" ? value.trim() : value.trim() || sugg[key] };
  }
  const list = bank.points;
  const start = (s.points * 2) % list.length;
  const suggestion = [0, 1, 2, 3].map((i) => list[(start + i) % list.length]);
  const pm = state.points.mode;
  const typed = state.points.items.map((x) => x.trim()).filter(Boolean);
  const items = pm === "omit" ? [] : pm === "exact" ? typed : suggestion;
  return { ...out, points: { mode: pm, items, suggestion }, bank, itemName, brandName };
}

export function eventWord(id: string): string {
  return byId(EVENT_KINDS, id)?.word ?? "오픈";
}
