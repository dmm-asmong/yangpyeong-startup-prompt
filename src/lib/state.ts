import { OUTPUT_TYPES, byId, type OutputId } from "@/data/options";

export type Lang = "ko" | "en";

/** exact: 입력한 그대로 · ai: 앱이 만든 예시 문구(이미지 AI가 다듬어도 됨) · omit: 넣지 않기 */
export type InfoMode = "exact" | "ai" | "omit";
export type InfoField = { mode: InfoMode; value: string };

/** 앱이 예시 문구를 만들어 주는 칸 */
export type CopyKey = "headline" | "tagline" | "cta";
export const COPY_KEYS: CopyKey[] = ["headline", "tagline", "cta"];

/** 사용자가 1단계에서 적는 홍보 정보 (비어 있으면 넣지 않아요 — 가짜 정보는 만들지 않아요) */
export type FactKey = "benefit" | "price" | "date" | "place" | "contact";
export const FACT_KEYS: FactKey[] = ["benefit", "price", "date", "place", "contact"];

/** 이미지에 넣을지 켜고 끄는 항목 */
export type ShowKey = "brand" | FactKey;

export type SeedKey = CopyKey | "points" | "caption";

export type BuilderState = {
  /* 1단계 브랜드 정보 */
  item: string;
  field: string;
  brand: string;
  oneLiner: string;
  targets: string[];
  targetText: string;
  mood: string;
  /** "auto"(무드에 맞춤) · 팔레트 id · #RRGGBB */
  color: string;
  /** 제품·공간 생김새 (사진 속 주인공 묘사) */
  look: string;
  /** 지역성 반영 */
  local: boolean;
  localScene: string;
  facts: Record<FactKey, string>;
  /* 2단계 홍보물 */
  output: OutputId;
  platform: string;
  productShot: "cutout" | "lifestyle";
  backdrop: string;
  moodKind: "board" | "single";
  cardMode: "cover" | "content" | "set";
  /** 내용 장 번호 (0부터) */
  cardIndex: number;
  points: { mode: InfoMode; items: string[] };
  eventKind: string;
  logoType: string;
  /* 3단계 글자·디자인 */
  copy: Record<CopyKey, InfoField>;
  show: Record<ShowKey, boolean>;
  /** null 이면 홍보물 × 무드에 맞는 기본 스타일 */
  style: string | null;
  scene: string;
  /** 갤러리 예시용 영어 장면 (사용자가 장면을 고치면 비워요) */
  sceneEn: string;
  /** 내 제품 사진을 첨부해서 쓰기 */
  refPhoto: boolean;
  qrSlot: boolean;
  avoid: string[];
  seeds: Record<SeedKey, number>;
};

const field = (mode: InfoMode, value = ""): InfoField => ({ mode, value });

export const DEFAULT_COPY: Record<CopyKey, InfoField> = {
  headline: field("ai"),
  tagline: field("ai"),
  cta: field("omit"),
};

export const DEFAULT_SHOW: Record<ShowKey, boolean> = {
  brand: true,
  benefit: true,
  price: true,
  date: true,
  place: true,
  contact: true,
};

export const DEFAULT_SEEDS: Record<SeedKey, number> = { headline: 0, tagline: 0, cta: 0, points: 0, caption: 0 };

export const DEFAULT_STATE: BuilderState = {
  item: "",
  field: "farm",
  brand: "",
  oneLiner: "",
  targets: ["travel"],
  targetText: "",
  mood: "nature",
  color: "auto",
  look: "",
  local: false,
  localScene: "dumul",
  facts: { benefit: "", price: "", date: "", place: "", contact: "" },
  output: "poster",
  platform: "feed",
  productShot: "lifestyle",
  backdrop: "white",
  moodKind: "board",
  cardMode: "cover",
  cardIndex: 0,
  points: { mode: "ai", items: ["", "", "", "", ""] },
  eventKind: "open",
  logoType: "wordmark",
  copy: DEFAULT_COPY,
  show: DEFAULT_SHOW,
  style: null,
  scene: "",
  sceneEn: "",
  refPhoto: false,
  qrSlot: false,
  avoid: ["typo", "watermark"],
  seeds: DEFAULT_SEEDS,
};

/** 홍보물 종류를 바꿀 때: 고를 수 없는 사이즈·스타일은 기본값으로 돌려요. 입력한 글은 그대로 둡니다. */
export function switchOutput(state: BuilderState, output: OutputId): BuilderState {
  const next = byId(OUTPUT_TYPES, output);
  if (!next) return state;
  return {
    ...state,
    output,
    platform: next.platforms.includes(state.platform) ? state.platform : next.platforms[0],
    style: state.style && next.styles.includes(state.style) ? state.style : null,
    qrSlot: output === "poster" || output === "event" ? state.qrSlot : false,
  };
}

/** 갤러리 예시에 담는 값 (칸별로 일부만 적어도 됩니다) */
export type ExampleState = Partial<Omit<BuilderState, "copy" | "seeds" | "points" | "facts" | "show">> & {
  facts?: Partial<Record<FactKey, string>>;
  show?: Partial<Record<ShowKey, boolean>>;
  copy?: Partial<Record<CopyKey, Partial<InfoField>>>;
  points?: { mode: InfoMode; items?: string[] };
};

export function stateFromExample(partial: ExampleState): BuilderState {
  const { copy: copyPatch, points, facts, show, ...rest } = partial;
  let base = DEFAULT_STATE;
  if (rest.output) base = switchOutput(base, rest.output);
  const copy = { ...base.copy };
  for (const [key, f] of Object.entries(copyPatch ?? {}) as [CopyKey, Partial<InfoField>][]) {
    copy[key] = { ...copy[key], ...f };
  }
  const items = [...(points?.items ?? []), "", "", "", "", ""].slice(0, 5);
  return {
    ...base,
    ...rest,
    copy,
    facts: { ...base.facts, ...facts },
    show: { ...base.show, ...show },
    points: points ? { mode: points.mode, items } : base.points,
    seeds: DEFAULT_SEEDS,
  };
}
