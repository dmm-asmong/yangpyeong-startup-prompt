import {
  AVOID_CHIPS,
  BACKDROPS,
  BRAND_COLORS,
  EVENT_KINDS,
  FIELDS,
  LOCAL_SCENES,
  LOGO_TYPES,
  MOODS,
  OUTPUT_TYPES,
  PLATFORMS,
  TARGETS,
  byId,
  resolveStyle,
  type Label,
  type Style,
  type TextKey,
} from "@/data/options";
import { josa } from "./josa";
import type { BuilderState, Lang } from "./state";
import { resolveCopy, type ResolvedCopy } from "./suggest";

/** 밝은 색인지 (밝은 브랜드 컬러는 글자색으로 쓰지 않아요) */
export function isLightHex(hex: string): boolean {
  const n = parseInt(hex.replace("#", "").padEnd(6, "0").slice(0, 6), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return r * 0.299 + g * 0.587 + b * 0.114 > 160;
}

/** "auto" 는 브랜드 무드에 어울리는 색 */
export function colorLabel(color: string, mood: string): { ko: string; en: string; hex: string; accent: string; accentEn: string; label: string } {
  const id = color === "auto" ? (byId(MOODS, mood)?.color ?? "river") : color;
  const preset = byId(BRAND_COLORS, id);
  if (preset)
    return { label: preset.label, ko: `${preset.label}(${preset.hex})`, en: `${preset.en} (${preset.hex})`, hex: preset.hex, accent: preset.accent, accentEn: preset.accentEn };
  const hex = id.toUpperCase();
  const light = isLightHex(hex);
  return { label: hex, ko: hex, en: hex, hex, accent: light ? "#2F6B4F" : "#E2A740", accentEn: light ? "river green" : "honey yellow" };
}

const ROLE: Record<TextKey, Label> = {
  brand: { ko: "브랜드명", en: "Brand name" },
  headline: { ko: "헤드라인", en: "Headline" },
  tagline: { ko: "카피", en: "Tagline" },
  benefit: { ko: "혜택", en: "Offer" },
  price: { ko: "가격", en: "Price" },
  date: { ko: "일정", en: "Date" },
  place: { ko: "위치", en: "Location" },
  contact: { ko: "연락처", en: "Contact" },
  cta: { ko: "행동 안내", en: "CTA" },
};

function roleFor(key: TextKey, output: string): Label {
  if (output === "event" && key === "headline") return { ko: "행사 제목", en: "Event title" };
  if (output === "logo" && key === "brand") return { ko: "로고 글자", en: "Logo lettering" };
  if (output === "logo" && key === "tagline") return { ko: "보조 문구", en: "Descriptor line" };
  return ROLE[key];
}

export type TextItem = { key: TextKey | "cue" | "page" | "point"; role: Label; text: string };

const READ_ORDER: TextKey[] = ["brand", "headline", "tagline", "benefit", "price", "date", "place", "contact", "cta"];

/** 항목 하나의 실제 글자 (비었거나 꺼 두면 빈 문자열) */
function valueOf(key: TextKey, state: BuilderState, copy: ResolvedCopy): string {
  if (key === "headline" || key === "tagline" || key === "cta") return copy[key].text;
  if (key === "brand") return state.show.brand ? copy.brandName : "";
  return state.show[key] ? (state.facts[key] ?? "").trim() : "";
}

/**
 * 이미지에 들어갈 글자 목록. 홍보물마다 정한 최대 개수를 넘으면 우선순위가 낮은 항목은 빠져요.
 * dropped 는 화면에서 '빠진 항목' 안내에 써요.
 */
export function textItems(state: BuilderState, copy: ResolvedCopy): { items: TextItem[]; dropped: string[]; max: number; noText: string | null } {
  const output = byId(OUTPUT_TYPES, state.output) ?? OUTPUT_TYPES[0];
  const platform = byId(PLATFORMS, state.platform) ?? PLATFORMS[0];
  if (platform.noText && output.id !== "logo") return { items: [], dropped: [], max: 0, noText: `${platform.label}는 글자 없는 사진이 기준이라 글자를 넣지 않아요.` };
  if (output.id === "product" && state.productShot === "cutout") return { items: [], dropped: [], max: 0, noText: "누끼·스튜디오 컷은 글자 없이 제품만 담아요." };
  if (output.id === "cardnews" && state.cardMode !== "cover") {
    const slides = cardSlides(state, copy);
    const n = copy.points.items.length;
    const slide = state.cardMode === "content" ? (n ? slides[1 + Math.min(state.cardIndex, n - 1)] : undefined) : undefined;
    return { items: slide?.items ?? [], dropped: [], max: 3, noText: null };
  }
  const available: TextItem[] = [];
  for (const key of output.priority) {
    const text = valueOf(key, state, copy);
    if (text) available.push({ key, role: roleFor(key, output.id), text });
  }
  const kept = available.slice(0, output.maxText);
  const dropped = available.slice(output.maxText).map((i) => i.role.ko);
  kept.sort((a, b) => READ_ORDER.indexOf(a.key as TextKey) - READ_ORDER.indexOf(b.key as TextKey));
  if (output.id === "cardnews") kept.push({ key: "cue", role: { ko: "넘김 신호", en: "Swipe cue" }, text: "옆으로 넘겨 보세요 →" });
  return { items: kept, dropped, max: output.maxText, noText: null };
}

export type Slide = { title: Label; items: TextItem[] };

/** 카드뉴스 세트: 표지 → 내용 장(포인트마다 한 장) → 마무리 장 */
export function cardSlides(state: BuilderState, copy: ResolvedCopy): Slide[] {
  const slides: Slide[] = [];
  const cover: TextItem[] = [];
  if (copy.headline.text) cover.push({ key: "headline", role: ROLE.headline, text: copy.headline.text });
  if (copy.tagline.text) cover.push({ key: "tagline", role: ROLE.tagline, text: copy.tagline.text });
  cover.push({ key: "cue", role: { ko: "넘김 신호", en: "Swipe cue" }, text: "옆으로 넘겨 보세요 →" });
  slides.push({ title: { ko: "표지", en: "Cover" }, items: cover });
  copy.points.items.forEach((p, i) => {
    const items: TextItem[] = [
      { key: "page", role: { ko: "쪽 번호", en: "Page number" }, text: String(i + 1).padStart(2, "0") },
      { key: "point", role: { ko: "내용", en: "Point" }, text: p },
    ];
    if (state.show.brand && copy.brandName) items.push({ key: "brand", role: ROLE.brand, text: copy.brandName });
    slides.push({ title: { ko: `내용 ${i + 1}`, en: `Point ${i + 1}` }, items });
  });
  const last: TextItem[] = [];
  for (const key of ["brand", "benefit", "date", "place", "contact", "cta"] as TextKey[]) {
    const text = valueOf(key, state, copy);
    if (text && last.length < 5) last.push({ key, role: ROLE[key], text });
  }
  if (last.length) slides.push({ title: { ko: "마무리", en: "Closing" }, items: last });
  return slides;
}

/** AI 티를 없애는 기본 금지 목록 */
const ANTI_AI: Label = {
  ko: "네온 글로우, 렌즈 플레어, 반짝이·스파클, 플라스틱 같은 광택 CGI·3D 렌더, 글래스모피즘, 여기저기 떠 있는 아이콘·잎사귀·하트, 과포화 HDR 색감, 지나치게 완벽하고 반들반들한 음식·과일, 가짜 UI 글자·로렘 입숨, 알아볼 수 없거나 중복된 글자, 목록에 없는 추가 글자, 워터마크·가짜 로고, 매끈한 AI 스톡 얼굴, 뻔한 템플릿 구도",
  en: "neon glow, lens flare, sparkles, plastic glossy CGI or 3D renders, glassmorphism, random floating icons / leaves / hearts, oversaturated HDR color, unnaturally perfect glossy food or fruit, fake UI gibberish or lorem ipsum, garbled or duplicated text, any extra text beyond the list, watermarks or fake logos, smooth stock-AI faces, generic template layouts",
};

const ANTI_AI_LOGO: Label = {
  ko: "그라데이션, 3D·엠보싱·광택, 그림자, 목업(명함·간판·컵 위에 올린 모습), 복잡한 일러스트, 흔한 클립아트(전구·지구·하트 남발), ™·® 같은 가짜 상표 기호, 알아볼 수 없거나 틀린 글자, 목록에 없는 글자",
  en: "gradients, 3D / emboss / gloss, drop shadows, mockups (on business cards, signs or cups), complex illustration, generic clip-art (light bulbs, globes, hearts), fake ™ or ® marks, garbled or misspelled letters, any text not in the list",
};

function fillStyle(text: string, vars: { B: string; A: string; hero?: string }): string {
  return text.replaceAll("{B}", vars.B).replaceAll("{A}", vars.A).replaceAll("{hero}", vars.hero ?? "");
}

/** 스타일 칩을 보여 줄지 (로고·누끼 컷은 전용 옵션을 써요) */
export function usesStyle(state: BuilderState): boolean {
  return state.output !== "logo" && !(state.output === "product" && state.productShot === "cutout");
}

export function styleFor(state: BuilderState): Style {
  return resolveStyle(state.style, state.output, state.mood);
}

/** 갤러리 카드에 보여 줄 스타일 이름 */
export function styleBadge(state: BuilderState): { emoji: string; label: string } {
  if (state.output === "logo") {
    const l = byId(LOGO_TYPES, state.logoType) ?? LOGO_TYPES[0];
    return { emoji: l.emoji ?? "", label: `${l.label} 시안` };
  }
  if (state.output === "product" && state.productShot === "cutout") {
    const b = byId(BACKDROPS, state.backdrop) ?? BACKDROPS[0];
    return { emoji: "⚪", label: `누끼 · ${b.label}` };
  }
  const s = styleFor(state);
  return { emoji: s.emoji ?? "", label: s.label };
}

/** 결과물 이름 (세부 옵션까지 반영) */
function phraseFor(state: BuilderState): Label {
  const o = byId(OUTPUT_TYPES, state.output) ?? OUTPUT_TYPES[0];
  switch (o.id) {
    case "product":
      return state.productShot === "cutout"
        ? { ko: "쇼핑몰용 누끼·스튜디오 제품 사진", en: "clean e-commerce studio packshot" }
        : { ko: "연출컷 제품 사진", en: "styled lifestyle product photograph" };
    case "mood":
      return state.moodKind === "board" ? o.phrase : { ko: "브랜드 분위기 사진", en: "brand mood photograph" };
    case "cardnews": {
      const m = state.cardMode;
      return m === "cover"
        ? { ko: "인스타그램 카드뉴스 표지(첫 장)", en: "Instagram card-news cover slide (first slide)" }
        : m === "content"
          ? { ko: "인스타그램 카드뉴스 내용 장", en: "Instagram card-news content slide" }
          : { ko: "인스타그램 카드뉴스 세트", en: "Instagram card-news carousel set" };
    }
    case "event": {
      const k = byId(EVENT_KINDS, state.eventKind) ?? EVENT_KINDS[0];
      return { ko: `${k.label} 안내 포스터`, en: `${k.en} announcement poster` };
    }
    default:
      return o.phrase;
  }
}

/** 사진·그림 속 주인공 */
function heroFor(state: BuilderState, copy: ResolvedCopy, style: Style | null, lang: Lang): string {
  const scene = state.scene.trim();
  if (scene) return lang === "en" ? state.sceneEn.trim() || scene : scene;
  const subject = state.look.trim() || copy.bank.subject[lang];
  const local = state.local ? byId(LOCAL_SCENES, state.localScene) : undefined;
  const cutout = state.output === "product" && state.productShot === "cutout";
  if (cutout) return subject;
  const ko = lang === "ko";
  if (style && !style.photo) {
    const motif = state.look.trim() || copy.bank.motif[lang];
    return local ? `${motif}${ko ? ", 뒤로 " : ", with "}${local.drawn[lang]}${ko ? "" : " behind it"}` : motif;
  }
  if (style?.id === "cinematic" || (state.output === "mood" && state.moodKind === "single" && local))
    return local
      ? `${local.photo[lang]}${ko ? " — 그 풍경 속에 작게 " : " — with, small within the landscape, "}${subject}`
      : `${copy.bank.lifestyle[lang]}${ko ? " — 넓은 풍경 속에 " : " — a wide view that includes "}${subject}`;
  const setting = local ? `${ko ? "배경에는 " : "with "}${local.photo[lang]}${ko ? "" : " in the background"}` : copy.bank.lifestyle[lang];
  return `${subject}${ko ? ", " : ", "}${setting}`;
}

/** 홍보물별 구도 (제품·무드보드·카드뉴스 내용 장은 스타일의 글자 배치 대신 이걸 써요) */
function compositionFor(state: BuilderState, lang: Lang, hasText: boolean): string | null {
  const ko = lang === "ko";
  if (state.output === "product") {
    if (state.productShot === "cutout")
      return ko
        ? "제품 하나(또는 한 세트)를 눈높이보다 살짝 위(약 15°)에서, 화면 가운데에 약 75% 크기로. 제품 모양·색·질감은 실물처럼 정확하게, 가장자리는 깔끔하게 따기 쉽게"
        : "one product (or one set) shot from slightly above eye level (about 15°), centered and filling about 75% of the frame; shape, color and texture exactly true to life, with clean edges that are easy to cut out";
    return ko
      ? `제품이 화면의 주인공(약 40~60%)이고 연출 소품은 2~3개만, 시선이 제품으로 모이게 얕은 심도.${hasText ? " 브랜드명을 놓을 차분한 여백을 한쪽에 남겨" : ""}`
      : `the product is the hero (about 40–60% of the frame) with only 2–3 props and a shallow depth of field that leads the eye to it.${hasText ? " Leave a calm empty area on one side for the brand name" : ""}`;
  }
  if (state.output === "mood") {
    if (state.moodKind === "board")
      return ko
        ? `무드보드 한 장: 크림색 바탕에 크기가 다른 사진 조각 6~8칸을 일정한 흰 여백으로 비대칭 그리드 배치, 아래쪽에 글자 없는 컬러 칩 5개({B}, {A}, 어울리는 중간색 3개)와 재질 샘플 조각(종이·천·나무) 1~2개. 모든 사진은 같은 빛·같은 색보정${hasText ? ". 브랜드명은 왼쪽 위에 작게" : ""}`
        : `a single mood board: 6–8 photo tiles of different sizes in an asymmetric grid with even white gutters on a cream background; along the bottom, five unlabeled color chips ({B}, {A} and three harmonious neutrals) and one or two material swatches (paper, fabric, wood). All photos share the same light and color grade${hasText ? ". The brand name small at top-left" : ""}`;
    return ko
      ? `분위기 사진 한 장: 빛과 공간감이 주인공이고 제품은 일부만 보여도 돼${hasText ? ". 브랜드명은 구석에 아주 작게" : ""}`
      : `one atmospheric photo: light and space are the hero; the product may be only partly visible${hasText ? ". The brand name very small in a corner" : ""}`;
  }
  if (state.output === "cardnews" && state.cardMode === "content")
    return ko
      ? "카드뉴스 내용 장: 왼쪽 위에 큰 쪽 번호, 그 아래 내용 한 줄을 크게(최대 2줄), 비주얼은 표지보다 작게 아래쪽이나 한쪽에, 브랜드명은 맨 아래 작게. 표지와 같은 여백·서체·색 시스템"
      : "a card-news content slide: a large page number at top-left, the point set large below it (max 2 lines), the visual smaller than on the cover at the bottom or one side, the brand name small at the very bottom; the same margins, typefaces and colors as the cover";
  return null;
}

function listText(items: TextItem[], lang: Lang): string {
  return items.map((it, i) => `${i + 1}) ${it.role[lang]}: "${it.text}"`).join("\n");
}

export function buildPrompt(state: BuilderState, lang: Lang): string {
  const copy = resolveCopy(state);
  if (state.output === "logo") return buildLogoPrompt(state, copy, lang);
  const ko = lang === "ko";
  const t = (k: string, e: string) => (ko ? k : e);
  const output = byId(OUTPUT_TYPES, state.output) ?? OUTPUT_TYPES[0];
  const platform = byId(PLATFORMS, state.platform) ?? PLATFORMS[0];
  const mood = byId(MOODS, state.mood);
  const field = byId(FIELDS, state.field);
  const color = colorLabel(state.color, state.mood);
  const cutout = output.id === "product" && state.productShot === "cutout";
  const style = cutout ? null : styleFor(state);
  const vars = ko ? { B: color.ko, A: `포인트 색(${color.accent})` } : { B: color.en, A: `${color.accentEn} (${color.accent})` };
  const { items, noText } = textItems(state, copy);
  const set = output.id === "cardnews" && state.cardMode === "set";
  const slides = set ? cardSlides(state, copy) : [];
  const hasText = set ? slides.some((s) => s.items.length) : items.length > 0;
  const phrase = phraseFor(state);
  const sections: string[] = [];

  // 1. 브리프
  const who = copy.brandName ? (ko ? `'${copy.brandName}'` : `"${copy.brandName}"`) : t("로컬 창업 브랜드", "a local start-up brand");
  const what = [field?.[ko ? "label" : "en"], state.item.trim() && state.item.trim() !== copy.brandName ? state.item.trim() : ""].filter(Boolean).join(" · ");
  sections.push(
    ko
      ? `디자인 브리프: ${copy.brandName ? "새로 시작한 로컬 브랜드 " : ""}${who}(${what})의 ${phrase.ko}${josa(phrase.ko, "을", "를")} 만들어 줘. 한국의 실력 있는 로컬 브랜드 디자이너·포토그래퍼가 작업한 실제 결과물처럼 — 뻔한 템플릿이나 AI 그림 같은 느낌 없이.`
      : `Design brief: Create ${/^[aeiou]/i.test(phrase.en) ? "an" : "a"} ${phrase.en} for ${who} (${what})${copy.brandName ? ", a new local brand" : ""}. It should look like real work by a skilled Korean local-brand designer and photographer — never like a template or an AI image.`,
  );
  const targets = [...state.targets.map((id) => byId(TARGETS, id)?.[ko ? "label" : "en"]).filter(Boolean), state.targetText.trim()].filter(Boolean).join(", ");
  sections.push(
    ko
      ? `브랜드 정보(참고용, 이미지에 쓰는 글자 아님): ${state.oneLiner.trim() ? `"${state.oneLiner.trim()}". ` : ""}${targets ? `타깃 고객: ${targets}. ` : ""}${mood ? `브랜드 무드: ${mood.tone.ko}.` : ""}`.trim()
      : `Brand context (for reference only — not text to render): ${state.oneLiner.trim() ? `"${state.oneLiner.trim()}". ` : ""}${targets ? `Target customers: ${targets}. ` : ""}${mood ? `Brand mood: ${mood.tone.en}.` : ""}`.trim(),
  );

  // 2. 아트 디렉션
  if (style) sections.push(`${t("아트 디렉션", "Art direction")}: ${fillStyle(style.brief[lang], vars)}.`);
  else {
    const bd = byId(BACKDROPS, state.backdrop) ?? BACKDROPS[0];
    sections.push(
      ko
        ? `아트 디렉션: 쇼핑몰 대표이미지용 깔끔한 스튜디오 제품 사진(패키지 샷). 배경: ${fillStyle(bd.ko, vars)}.`
        : `Art direction: a clean studio packshot for an online-store main image. Background: ${fillStyle(bd.en, vars)}.`,
    );
  }

  // 3. 캔버스
  sections.push(
    ko
      ? `캔버스: ${platform.label} ${platform.px}, 비율 ${platform.ratio}. 안전 영역: ${platform.safe.ko}.${platform.print ? " 포스터 원고 자체를 정면 평면으로 가장자리까지 꽉 채워 — 벽에 붙인 포스터 사진·목업·원근·그림자 없음(사진은 원고 안에 들어간 이미지로만)." : ""}`
      : `Canvas: ${platform.en}, ${platform.px}, aspect ratio ${platform.ratio}. Safe zones: ${platform.safe.en}.${platform.print ? " The flat, front-facing poster artwork itself, filling the canvas edge to edge — no photo of a poster on a wall, no mockup, no perspective, no shadow (photos only as images placed inside the artwork)." : ""}`,
  );

  // 4. 레이아웃
  const comp = compositionFor(state, lang, hasText);
  const layout = comp ?? (style ? fillStyle(style.layout[lang], { ...vars, hero: t("주제 이미지", "the main subject") }) : "");
  const qr = state.qrSlot ? t(" 오른쪽 아래 안전 여백 안쪽에 QR 코드를 붙일 단색 정사각형 빈칸(가짜 QR 무늬 금지).", " Leave an empty solid square for a QR code at bottom-right inside the safe margin (no fake QR pattern).") : "";
  sections.push(
    ko
      ? `레이아웃: ${fillStyle(layout, vars)}. 이 홍보물은 ${output.essentials.ko}. 정보 위계: ${output.hierarchy.ko}.${qr}${hasText && comp === null ? " 목록에 없는 역할의 자리는 비우지 말고 자연스럽게 생략해." : ""}`
      : `Layout: ${fillStyle(layout, vars)}. This piece is ${output.essentials.en}. Information hierarchy: ${output.hierarchy.en}.${qr}${hasText && comp === null ? " If a role in this layout has no item in the text list, simply leave it out — do not leave an empty placeholder." : ""}`,
  );

  // 5. 타이포 · 컬러 · 질감
  const brandOnly = output.id === "product" || output.id === "mood";
  if (hasText && style)
    sections.push(
      brandOnly
        ? t(`타이포그래피: 브랜드명만 작게(화면 폭의 15% 안팎), 사진을 가리지 않게. 서체 느낌은 ${fillStyle(style.type.ko, vars)}.`, `Typography: only the brand name, small (about 15% of the width) and never covering the subject; type feel: ${fillStyle(style.type.en, vars)}.`)
        : `${t("타이포그래피", "Typography")}: ${fillStyle(style.type[lang], vars)}. ${t("글자와 배경의 대비는 충분히.", "Strong text/background contrast.")}`,
    );
  if (style) {
    sections.push(`${t("컬러", "Color")}: ${fillStyle(style.palette[lang], vars)}. (${t("브랜드 컬러", "Brand color")} ${vars.B}, ${t("포인트 색", "accent")} ${color.accent})`);
    sections.push(`${t("질감·빛", "Texture & light")}: ${fillStyle(style.texture[lang], vars)}.`);
  } else {
    sections.push(
      ko
        ? "빛: 크고 부드러운 소프트박스 조명, 제품 아래 자연스러운 접지 그림자, 반사·하이라이트는 실제 재질 그대로. 색은 실물과 같게."
        : "Light: large soft-box lighting, a natural contact shadow under the product, reflections and highlights true to the real material; colors exactly as in real life.",
    );
  }

  // 6. 이미지
  const hero = heroFor(state, copy, style, lang);
  const imagery = style ? fillStyle(style.imagery[lang], { ...vars, hero }) : hero;
  const people = state.avoid.includes("people")
    ? t(" 사람 얼굴은 보이지 않게(손이나 뒷모습 정도만).", " No visible faces (hands or backs only).")
    : style?.photo
      ? t(" 사람이 나온다면 실제 동네의 자연스러운 한국인으로, 매끈한 AI 얼굴 금지(얼굴보다 손·뒷모습 위주).", " If people appear: natural, candid Korean locals — no smooth stock-AI faces (favor hands and backs over faces).")
      : "";
  const local = state.local && !cutout ? byId(LOCAL_SCENES, state.localScene) : undefined;
  const localNote = local
    ? t(
        ` 배경 풍경: '${local.label}' 느낌의 자연 풍경(강·산자락·들판)으로만 분위기를 담아 — 특정 랜드마크를 그대로 베끼지 말고, 지명 간판이나 지역 이름 글자는 이미지에 넣지 마.`,
        ` Background scenery: a natural Korean landscape of ${local.en} (river, mountain foothills, fields) for mood only — do not copy a specific landmark, and do not render place-name signs or any place name as text.`,
      )
    : "";
  sections.push(`${t("이미지", "Imagery")}: ${imagery}.${people}${localNote} ${t("장면에 필요한 것 말고 떠다니는 아이콘·장식은 넣지 마.", "No floating icons or decorations beyond what the scene needs.")}`);
  if (state.refPhoto)
    sections.push(
      ko
        ? "참고 사진: 첨부한 내 제품(또는 공간) 사진 속 모양·색·비율·라벨을 그대로 유지하고, 배경·조명·구도만 위 디렉션대로 바꿔. 제품을 새로 그리거나 다른 제품으로 바꾸지 마."
        : "Reference photo: keep the shape, color, proportions and label of my product (or space) in the attached photo exactly as they are; change only the background, lighting and composition as directed above. Do not redraw or replace the product.",
    );

  // 7. 글자
  const labelNote = state.refPhoto ? t(" (첨부 사진 속 제품 라벨의 원래 글자는 그대로 둬도 돼)", " (the original label text on the product in the attached photo may stay as it is)") : "";
  if (set) {
    const body = slides
      .map((s, i) => `${ko ? `[${i + 1}장 · ${s.title.ko}]` : `[Slide ${i + 1} · ${s.title.en}]`}\n${listText(s.items, lang)}`)
      .join("\n");
    sections.push(
      ko
        ? `카드뉴스 구성(총 ${slides.length}장, 모든 장이 같은 디자인 시스템 — 한 번에 한 장씩 만들어 줘. 먼저 1장만 만들고, 내가 '다음'이라고 하면 다음 장을 같은 스타일로):\n${body}\n장마다 따옴표 안 한글만 그대로, 각 항목은 정확히 한 번씩 — 역할 이름은 쓰지 마. 목록 밖 글자는 넣지 마.${labelNote}`
        : `Carousel plan (${slides.length} slides, all sharing one design system — make one slide at a time: create slide 1 first, and when I say "next", make the next slide in the same style):\n${body}\nOn each slide render only the quoted Korean, verbatim, each item exactly once — do not render the role labels. No text outside the list.${labelNote}`,
    );
  } else if (hasText) {
    const headlineAi = copy.headline.mode === "ai" && items.some((i) => i.key === "headline");
    sections.push(
      ko
        ? `들어갈 글자(따옴표 안 한글만 그대로, 각 항목은 정확히 한 번씩, 총 ${items.length}개 — 역할 이름은 쓰지 마):\n${listText(items, lang)}${headlineAi ? `\n헤드라인은 '${copy.itemName}'${josa(copy.itemName, "이", "가")} 바로 떠오르는 더 짧고 힘 있는 한글 카피(한 줄 12자 안팎, 최대 2줄)로 다듬어도 돼. 나머지는 한 글자도 바꾸지 마.` : "\n모든 글자는 한 글자도 바꾸지 마."} 목록 밖 글자는 넣지 마 — 포장·간판·화면 속 글자는 알아볼 수 없게 흐리거나 비워 둬.${labelNote}`
        : `Text to render (only the quoted Korean, verbatim, each item exactly once — ${items.length} items total; do not render the role labels):\n${listText(items, lang)}${headlineAi ? `\nThe headline may be rewritten into a shorter, punchier Korean line (about 12 characters per line, max 2 lines) that clearly evokes "${copy.itemName}". Keep every other item exactly as written.` : "\nDo not change any of the text."} No text outside the list — any text on packaging, signs or screens must be illegible or blank.${labelNote}`,
    );
  } else {
    sections.push(
      ko
        ? `글자: 이미지 안에 글자·숫자·로고·워터마크를 하나도 넣지 마(포장·간판에 글자가 보이면 흐리거나 비워 둬).${noText ? ` ${noText}` : ""}${labelNote}`
        : `Text: render no text, numbers, logos or watermarks anywhere in the image (blur or blank any text on packaging or signs).${labelNote}`,
    );
  }

  sections.push(
    `${t("제작·품질", "Production")}: ${platform.print ? t("인쇄용 300dpi, ", "print-ready at 300 dpi, ") : ""}${
      hasText ? t("완성도 높은 프로 결과물, 선명한 한글.", "a finished, professional piece with crisp Korean type.") : t("완성도 높은 프로 사진, 선명한 초점과 실제 같은 색.", "a finished, professional photograph with crisp focus and true-to-life color.")
    }`,
  );
  const extraAvoid = state.avoid
    .filter((id) => id !== "typo" && id !== "watermark")
    .map((id) => byId(AVOID_CHIPS, id))
    .filter((x) => x !== undefined);
  sections.push(`${t("피할 것", "Avoid")}: ${ANTI_AI[lang]}${extraAvoid.length ? `, ${extraAvoid.map((a) => (ko ? a.label : a.en)).join(", ")}` : ""}.`);
  if (!ko) sections.push(`--ar ${platform.ar}`);
  return sections.join("\n");
}

function buildLogoPrompt(state: BuilderState, copy: ResolvedCopy, lang: Lang): string {
  const ko = lang === "ko";
  const type = byId(LOGO_TYPES, state.logoType) ?? LOGO_TYPES[0];
  const field = byId(FIELDS, state.field);
  const mood = byId(MOODS, state.mood);
  const color = colorLabel(state.color, state.mood);
  const brand = copy.brandName || copy.itemName || (ko ? "브랜드" : "Brand");
  const tagline = state.copy.tagline.mode === "exact" ? copy.tagline.text : "";
  const local = state.local ? byId(LOCAL_SCENES, state.localScene) : undefined;
  const lines: string[] = [];
  if (ko) {
    lines.push(`디자인 브리프: 로컬 창업 브랜드 '${brand}'(${field?.label ?? ""})의 로고 컨셉 시안을 만들어 줘. 브랜드 무드: ${mood?.tone.ko ?? ""}. 최종 로고가 아니라 방향을 고르기 위한 시안이야.`);
    lines.push(`로고 유형: ${type.brief.ko}.${local ? ` '${local.label}' 같은 자연 풍경을 아주 단순한 선이나 형태 하나로만 은유해도 좋아(풍경을 그대로 그리지 말고, 지역 이름 글자는 넣지 말 것).` : ""}`);
    lines.push("캔버스: 1:1 정사각형 1080×1080, 흰 배경의 정면 평면 시안 보드.");
    lines.push("레이아웃: 가운데에 큰 메인 로고 하나, 그 아래 작은 크기로 같은 로고의 흑백 버전과 반전 버전(어두운 바탕 위 흰색)을 나란히 두 개. 세 로고는 형태가 완전히 같아야 해.");
    lines.push(`컬러: ${color.ko}와 먹색, 2색 이내. 포인트로 ${color.accent}를 아주 조금만 써도 돼.`);
    lines.push("형태: 벡터처럼 깔끔한 단색 면과 일정한 선 굵기, 32px로 줄여도 알아볼 수 있을 만큼 단순하게. 한글 자소는 정확한 맞춤법 그대로.");
    lines.push(`들어갈 글자(따옴표 안 그대로, 세 버전에 똑같이 반복되는 것만 허용):\n1) 로고 글자: "${brand}"${tagline ? `\n2) 보조 문구(메인 로고 아래에만 작게): "${tagline}"` : ""}\n목록 밖 글자·숫자·영문은 넣지 마.`);
    lines.push(`피할 것: ${ANTI_AI_LOGO.ko}.`);
  } else {
    lines.push(`Design brief: Create a logo concept draft for "${brand}", a local start-up brand (${field?.en ?? ""}). Brand mood: ${mood?.tone.en ?? ""}. This is a draft for choosing a direction, not a final logo.`);
    lines.push(`Logo type: ${type.brief.en}.${local ? ` You may hint at the local scenery (${local.en}) with a single very simple line or shape — do not draw a landscape or write any place name.` : ""}`);
    lines.push("Canvas: 1:1 square 1080×1080, a flat front-facing presentation board on white.");
    lines.push("Layout: one large main logo in the center; below it, two small versions of the same logo side by side — a black-only version and a reversed version (white on a dark tile). All three must have exactly the same form.");
    lines.push(`Color: ${color.en} and ink-black, two colors max; a tiny touch of ${color.accentEn} (${color.accent}) is optional.`);
    lines.push("Form: clean, vector-like flat shapes with consistent stroke weight, simple enough to read at 32px; Korean letters spelled exactly.");
    lines.push(`Text to render (verbatim; repeating it identically in the three versions is the only repetition allowed):\n1) Logo lettering: "${brand}"${tagline ? `\n2) Descriptor line (small, under the main logo only): "${tagline}"` : ""}\nNo other letters, numbers or English words.`);
    lines.push(`Avoid: ${ANTI_AI_LOGO.en}.`);
    lines.push("--ar 1:1");
  }
  return lines.join("\n");
}

