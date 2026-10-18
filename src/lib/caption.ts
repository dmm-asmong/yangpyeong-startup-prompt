import { EVENT_KINDS, FIELDS, LOCAL_SCENES, TARGETS, byId } from "@/data/options";
import type { BuilderState } from "./state";
import { josa } from "./josa";
import { resolveCopy } from "./suggest";

export type Channel = "slogan" | "instagram" | "naver" | "message";

export const CHANNELS: { id: Channel; label: string; emoji: string; hint: string }[] = [
  { id: "slogan", label: "슬로건", emoji: "💬", hint: "브랜드 한 줄 후보 5개" },
  { id: "instagram", label: "인스타", emoji: "📷", hint: "캡션 + 해시태그(#양평 포함)" },
  { id: "naver", label: "블로그·플레이스", emoji: "🟢", hint: "네이버 블로그 글 · 플레이스 소식" },
  { id: "message", label: "문자·카톡", emoji: "✉️", hint: "단골에게 보내는 짧은 안내" },
];

export type Caption = { text: string; hashtags: string };

const TARGET_TAG: Record<string, string> = {
  travel: "#양평여행",
  family: "#아이와가볼만한곳",
  couple: "#양평데이트",
  senior: "#효도여행",
  local: "#양평주민",
  worker: "#주말나들이",
  pet: "#반려견동반",
  gift: "#선물추천",
};

const FIELD_TAG: Record<string, string> = {
  farm: "#양평농산물",
  cafe: "#양평카페",
  food: "#양평맛집",
  stay: "#양평숙소",
  craft: "#양평공방",
  beauty: "#양평웰니스",
  edu: "#양평체험",
  pet: "#양평애견동반",
  it: "#양평창업",
  etc: "#양평가볼만한곳",
};

const HOOKS: Record<string, string[]> = {
  nature: ["자연이 키운 그대로를 전하고 싶었어요.", "계절이 바뀌는 속도에 맞춰 천천히 준비했어요."],
  premium: ["오래 기억에 남을 경험을 고민했어요.", "작은 디테일까지 하나하나 골랐어요."],
  warm: ["동네 이웃처럼 편하게 들러 주세요.", "정성 하나는 자신 있어요."],
  minimal: ["꼭 필요한 것만 담았어요.", "단순하지만 오래 좋은 것을 만들고 싶었어요."],
  playful: ["보는 순간 친구에게 보내고 싶어질 거예요.", "주말 계획 아직이라면, 여기 어때요?"],
  heritage: ["오래 지켜 온 방식 그대로 만들어요.", "손이 많이 가도 정성은 줄이지 않아요."],
};

const pick = <T,>(list: T[], seed: number): T => list[((seed % list.length) + list.length) % list.length];
const clean = (t: string) => t.replace(/[^0-9A-Za-z가-힣]/g, "");
const uniq = (list: string[]) => [...new Set(list.filter((t) => t.length > 1))];

/** 템플릿으로 창업 홍보 문구와 해시태그를 만들어요. (API 호출 없이 브라우저에서만) */
export function buildCaption(state: BuilderState, channel: Channel): Caption {
  const copy = resolveCopy(state);
  const seed = state.seeds.caption;
  const brand = copy.brandName;
  const item = copy.itemName;
  const name = brand || item || "우리 가게";
  const field = byId(FIELDS, state.field);
  const local = state.local ? byId(LOCAL_SCENES, state.localScene) : undefined;
  const event = state.output === "event" ? byId(EVENT_KINDS, state.eventKind) : undefined;
  const f = state.facts;
  const tags = uniq([
    "#양평",
    brand ? `#${clean(brand)}` : "",
    state.item.trim() ? `#${clean(state.item)}` : "",
    FIELD_TAG[state.field] ?? "",
    ...copy.bank.hashtags,
    local?.tag ?? "",
    ...state.targets.map((t) => TARGET_TAG[t] ?? ""),
    event ? `#${clean(event.label.split("·")[0])}` : "",
    "#양평창업",
  ]);
  const hook = pick(HOOKS[state.mood] ?? HOOKS.nature, seed);
  const oneLiner = state.oneLiner.trim();
  // 추천(예시) 내용은 사실이 아닐 수 있어서, 직접 적은 내용일 때만 홍보 문구에 넣어요.
  const points = state.points.mode === "exact" ? copy.points.items : [];
  const facts: [string, string, string][] = [
    ["🎁", "혜택", f.benefit],
    ["💰", "가격", f.price],
    ["📅", "일정", f.date],
    ["📍", "위치", f.place],
    ["📞", "문의", f.contact],
  ];
  const factLines = facts.filter(([, , v]) => v.trim()).map(([e, k, v]) => `${e} ${k}: ${v.trim()}`);
  const targetWords = state.targets.map((id) => byId(TARGETS, id)?.label).filter(Boolean);

  if (channel === "slogan") {
    const list = uniq([
      oneLiner,
      copy.headline.text,
      copy.tagline.text,
      `${local ? "양평의 물과 바람이 키운 " : "양평에서 정성껏 만든 "}${item}`,
      `${name}, 오늘의 작은 쉼표`,
      `천천히, 제대로 — ${name}`,
      `가까이 있어 더 좋은 ${item}`,
      `${item}의 계절, ${name}`,
    ]).slice(seed % 2, (seed % 2) + 5);
    return { text: ["슬로건 후보 (마음에 드는 걸 골라 다듬어 쓰세요)", "", ...list.map((s, i) => `${i + 1}. ${s}`)].join("\n"), hashtags: tags.slice(0, 12).join(" ") };
  }

  if (channel === "message") {
    const lines = [`[${name}] 안녕하세요, ${name}입니다 🙂`];
    if (event) lines.push(`${event.label} 소식 전해 드려요.`);
    else lines.push(oneLiner || `${item} 소식 전해 드려요.`);
    if (factLines.length) lines.push("", ...factLines);
    lines.push("", "편하게 연락 주세요. 늘 감사합니다!");
    return { text: lines.join("\n"), hashtags: "" };
  }

  if (channel === "naver") {
    const title = `[${event ? event.label : field?.label.split("(")[0] ?? "창업"}] ${name}${local ? ` | ${local.label.split(" ")[0]} 근처` : " | 양평"} ${item !== name ? item : ""}`.replace(/\s+/g, " ").trim();
    const lines = [`제목: ${title}`, "", brand && item !== brand ? `안녕하세요, 양평에서 ${item}${josa(item, "을", "를")} 준비한 ${brand}입니다.` : `안녕하세요, 양평의 ${name}입니다.`, hook];
    if (oneLiner) lines.push("", `"${oneLiner}"`);
    if (points.length) lines.push("", "이런 점이 달라요", ...points.map((p) => `- ${p}`));
    if (targetWords.length) lines.push("", `${targetWords.join(", ")}께 특히 추천드려요.`);
    if (factLines.length) lines.push("", ...factLines);
    lines.push("", "방문 전 플레이스에서 영업 시간을 한 번 확인해 주세요.", "", `키워드: ${tags.map((t) => t.replace("#", "")).join(", ")}`);
    return { text: lines.join("\n"), hashtags: tags.slice(0, 10).join(" ") };
  }

  const lines = [hook, ""];
  lines.push(`${event ? "🎉" : "🌿"} ${copy.headline.text || name}`);
  if (oneLiner && oneLiner !== copy.headline.text) lines.push(oneLiner);
  if (points.length && state.output !== "logo") lines.push("", ...points.slice(0, 3).map((p) => `✔ ${p}`));
  if (factLines.length) lines.push("", ...factLines);
  lines.push("", `👉 ${copy.cta.text || "자세한 내용은 프로필 링크에서"}`);
  const hashtags = tags.slice(0, 15).join(" ");
  return { text: [...lines, "", hashtags].join("\n"), hashtags };
}
