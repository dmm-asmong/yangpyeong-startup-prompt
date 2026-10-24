import raw from "./photo-prompts.json";

/** 프롬왓 원문 100개. body는 문장 구조를 바꾸지 않고 그대로 둡니다. */
export type PhotoCategoryId = "verified" | "poster" | "feed" | "detail" | "banner" | "menu" | "thumb" | "pop" | "story";

export type PhotoPrompt = {
  n: number;
  title: string;
  category: PhotoCategoryId;
  ratio: string;
  attach: string;
  /** 원문의 [대괄호] 이름. 본문 순서와 같음 */
  fields: string[];
  /** 1~4번 원문에 이미 들어 있는 따옴표 문구 */
  fixed: string[];
  /** 1~4번에서 제품 설명으로 바꿀 수 있는 원문 구절. 비어 있으면 없음 */
  productPhrase: string;
  caution: string;
  body: string;
};

export const PHOTO_PROMPTS = raw as PhotoPrompt[];

export const PHOTO_CATEGORIES: { id: PhotoCategoryId | "all"; label: string; hint: string }[] = [
  { id: "all", label: "전체", hint: "100" },
  { id: "verified", label: "검증 예시", hint: "1–4" },
  { id: "poster", label: "포스터", hint: "2:3" },
  { id: "feed", label: "피드 광고", hint: "4:5" },
  { id: "detail", label: "상세페이지", hint: "9:16" },
  { id: "banner", label: "홈페이지 배너", hint: "16:9" },
  { id: "menu", label: "메뉴판·가격표", hint: "3:4" },
  { id: "thumb", label: "영상 썸네일", hint: "16:9" },
  { id: "pop", label: "매장 POP", hint: "3:4" },
  { id: "story", label: "스토리 광고", hint: "9:16" },
];

/** 빌더의 홍보물·사이즈와 어떻게 맞는지. 프롬프트 본문에는 넣지 않음 */
export const PHOTO_FIT: Record<PhotoCategoryId, string> = {
  verified: "결과가 확인된 원문입니다. 문장 순서는 그대로 두고, 제품 설명과 따옴표 안 문구만 바꿉니다.",
  poster: "홍보 포스터와 같은 역할입니다. 비율은 원문 2:3 그대로입니다.",
  feed: "인스타 피드 4:5와 같은 크기입니다.",
  detail: "상세페이지용 세로 이미지 한 장입니다. 배송·교환 안내는 이 프롬프트에 없습니다.",
  banner: "가로 16:9 배너입니다. 올리기 전에 모바일에서 잘리는 부분을 확인하세요.",
  menu: "가게용 메뉴판·가격표입니다. 비율은 원문 3:4입니다. 항목은 세 줄이 기본입니다.",
  thumb: "영상 썸네일입니다. 가로 16:9이고, 글자는 짧을수록 정확히 나옵니다.",
  pop: "계산대·선반에 두는 작은 홍보물입니다. 비율은 원문 3:4입니다.",
  story: "스토리·릴스 9:16과 같은 크기입니다. 위아래 여백 문장은 원문에 이미 있습니다.",
};

export function photoValues(prompt: PhotoPrompt): Record<string, string> {
  const values: Record<string, string> = {};
  if (prompt.productPhrase) values.productPhrase = prompt.productPhrase;
  for (const text of prompt.fixed) values[`fixed:${text}`] = text;
  for (const field of prompt.fields) values[field] = "";
  return values;
}

/**
 * 대괄호와 1~4번의 따옴표 문구만 바꿉니다. 문장 순서·지시·Use ONLY 틀은 그대로입니다.
 * 빈 칸은 바꾸지 않아 빠진 곳이 프롬프트에 남습니다.
 */
export function applyPhotoPrompt(prompt: PhotoPrompt, values: Record<string, string>): { text: string; missing: string[] } {
  let text = prompt.body;
  const phrase = (values.productPhrase ?? "").trim();
  if (prompt.productPhrase && phrase && phrase !== prompt.productPhrase && text.includes(prompt.productPhrase)) {
    text = text.replace(prompt.productPhrase, phrase);
  }
  const fixed = [...prompt.fixed].sort((a, b) => b.length - a.length);
  for (const original of fixed) {
    const next = (values[`fixed:${original}`] ?? "").trim();
    if (!next || next === original) continue;
    text = text.replaceAll(`"${original}"`, `"${next}"`);
  }
  const missing: string[] = [];
  for (const field of prompt.fields) {
    const next = (values[field] ?? "").trim();
    if (!next) {
      missing.push(field);
      continue;
    }
    text = text.replaceAll(`[${field}]`, next);
  }
  return { text, missing };
}
