/** 한국어 / 영어 짝 */
export type Label = { ko: string; en: string };

export type Option = { id: string; label: string; emoji?: string; hint?: string; en: string };

/* ───────────────────────── 1단계: 브랜드 정보 ───────────────────────── */

/** 창업 분야 (분야별 문구·장면·해시태그는 data/fields.ts) */
export const FIELDS: Option[] = [
  { id: "farm", label: "농산물·로컬푸드", emoji: "🍓", en: "local farm produce and food products" },
  { id: "cafe", label: "카페·베이커리", emoji: "☕", en: "café and bakery" },
  { id: "food", label: "음식점", emoji: "🍲", en: "restaurant" },
  { id: "stay", label: "숙박·체험(펜션·캠핑)", emoji: "⛺", en: "stay and outdoor experience (pension, campsite)" },
  { id: "craft", label: "공예·수공예", emoji: "🏺", en: "craft and handmade goods" },
  { id: "beauty", label: "뷰티·웰니스", emoji: "🌿", en: "beauty and wellness" },
  { id: "edu", label: "교육·클래스", emoji: "✏️", en: "classes and workshops" },
  { id: "pet", label: "반려동물", emoji: "🐕", en: "pet products and services" },
  { id: "it", label: "IT·온라인서비스", emoji: "💻", en: "IT and online service" },
  { id: "etc", label: "기타", emoji: "✨", en: "small local business" },
];

/** 타깃 고객 (여러 개 고르기) */
export const TARGETS: Option[] = [
  { id: "travel", label: "20~30대 여행객", emoji: "🎒", en: "travelers in their 20s and 30s" },
  { id: "family", label: "가족 단위", emoji: "👨‍👩‍👧", en: "families with children" },
  { id: "couple", label: "커플·데이트", emoji: "💑", en: "couples on a date" },
  { id: "senior", label: "시니어", emoji: "🧓", en: "seniors" },
  { id: "local", label: "지역 주민", emoji: "🏡", en: "local residents" },
  { id: "worker", label: "직장인", emoji: "💼", en: "office workers" },
  { id: "pet", label: "반려인", emoji: "🐾", en: "pet owners" },
  { id: "gift", label: "선물 찾는 분", emoji: "🎁", en: "people shopping for gifts" },
];

/** 브랜드 방향·무드 */
export type Mood = Option & { tone: Label; color: string };

export const MOODS: Mood[] = [
  { id: "nature", label: "자연·친환경", emoji: "🌱", en: "natural, eco-friendly", color: "river",
    tone: { ko: "자연스럽고 정직한, 친환경적인 분위기", en: "natural, honest and eco-conscious" } },
  { id: "premium", label: "프리미엄", emoji: "🥂", en: "premium", color: "charcoal",
    tone: { ko: "절제되고 고급스러운, 여백이 많은 분위기", en: "restrained, premium and spacious" } },
  { id: "warm", label: "따뜻한 로컬", emoji: "🧺", en: "warm and local", color: "honey",
    tone: { ko: "사람 냄새 나는 따뜻한 동네 가게 분위기", en: "warm, human, neighborhood-shop feeling" } },
  { id: "minimal", label: "모던 미니멀", emoji: "◻️", en: "modern minimal", color: "mist",
    tone: { ko: "군더더기 없이 깔끔하고 현대적인 분위기", en: "clean, modern and uncluttered" } },
  { id: "playful", label: "유쾌·트렌디", emoji: "🎈", en: "playful and trendy", color: "persimmon",
    tone: { ko: "유쾌하고 트렌디한, 20~30대가 공유하고 싶은 분위기", en: "playful, trendy and share-worthy for people in their 20s–30s" } },
  { id: "heritage", label: "전통·정성", emoji: "🏮", en: "traditional craftsmanship", color: "terracotta",
    tone: { ko: "오래 지켜 온 손맛과 정성이 느껴지는 분위기", en: "time-honored craft and care" } },
];

/** 지역성 반영 배경 (실제 장소를 그대로 재현하지 않고 '느낌'만) */
export type LocalScene = Option & { photo: Label; drawn: Label; tag: string };

export const LOCAL_SCENES: LocalScene[] = [
  { id: "dumul", label: "두물머리 물안개", emoji: "🌫️", en: "river confluence in morning mist", tag: "#두물머리",
    photo: { ko: "이른 아침 물안개가 낮게 깔린 넓은 강가, 물가에 선 커다란 느티나무 한 그루의 실루엣", en: "a wide riverside at dawn with low morning mist and the silhouette of one large zelkova tree at the water's edge" },
    drawn: { ko: "물안개 낀 강가와 느티나무 한 그루", en: "a misty riverside with a single zelkova tree" } },
  { id: "river", label: "남한강 강변", emoji: "🏞️", en: "wide river with gentle hills", tag: "#남한강",
    photo: { ko: "완만한 산 능선이 겹겹이 보이는 넓은 남한강 강변, 맑은 오후 햇살", en: "a broad river with layered gentle mountain ridges beyond, clear afternoon light" },
    drawn: { ko: "겹겹의 산 능선 아래 흐르는 넓은 강", en: "a wide river under layered mountain ridges" } },
  { id: "field", label: "산·들 풍경", emoji: "⛰️", en: "mountain foothills and fields", tag: "#양평여행",
    photo: { ko: "산자락 아래 펼쳐진 논밭과 들꽃 길, 멀리 짙은 초록 산", en: "fields and a wildflower path at the foot of a mountain, deep green peaks in the distance" },
    drawn: { ko: "산자락 아래 논밭과 들꽃 길", en: "fields and a wildflower path below the mountains" } },
];

/* ───────────────────────── 2단계: 만들 홍보물 ───────────────────────── */

export type OutputId = "poster" | "cardnews" | "product" | "mood" | "sns" | "event" | "logo";

/** 이미지에 들어갈 수 있는 글자 항목 */
export type TextKey = "brand" | "headline" | "tagline" | "benefit" | "price" | "date" | "place" | "contact" | "cta";

export type OutputType = {
  id: OutputId;
  label: string;
  emoji: string;
  desc: string;
  /** 프롬프트 첫 문장에 들어갈 결과물 이름 */
  phrase: Label;
  /** 고를 수 있는 사이즈 (첫 번째가 기본) */
  platforms: string[];
  /** 글자 항목 최대 개수 */
  maxText: number;
  /** 글자가 넘칠 때 남길 우선순위 (여기 없는 항목은 이 홍보물에 넣지 않아요) */
  priority: TextKey[];
  /** 스타일과 상관없이 이 홍보물이 꼭 지켜야 할 것 */
  essentials: Label;
  hierarchy: Label;
  /** 고를 수 있는 스타일 (없으면 스타일 대신 전용 옵션) */
  styles: string[];
  /** 시안 표시 (로고) */
  draft?: boolean;
};

const ALL_STYLES = ["daylight", "kitchen", "editorial", "craftlabel", "studio", "watercolor", "market", "flyer", "banner", "brutalsale", "collage", "cinematic", "swiss"];

export const OUTPUT_TYPES: OutputType[] = [
  {
    id: "poster", label: "홍보 포스터", emoji: "📣", desc: "A4 인쇄 · 인스타 4:5",
    phrase: { ko: "브랜드 홍보 포스터", en: "brand promotion poster" },
    platforms: ["a4", "feed"], maxText: 7,
    priority: ["headline", "brand", "tagline", "benefit", "date", "place", "price", "contact", "cta"],
    essentials: { ko: "홍보 포스터라서 헤드라인과 브랜드명이 먼저 읽히고, 그다음 카피·혜택, 마지막에 위치·연락처 같은 정보가 보여야 해", en: "a promotion poster: the headline and brand name read first, then the tagline and offer, then practical info such as location and contact" },
    hierarchy: { ko: "1순위 헤드라인, 2순위 브랜드명·카피·혜택, 3순위 일정·위치·가격·연락처", en: "primary = headline; secondary = brand name, tagline and offer; tertiary = date, location, price and contact" },
    styles: ALL_STYLES,
  },
  {
    id: "cardnews", label: "카드뉴스", emoji: "🗂️", desc: "표지 + 내용 장 구성",
    phrase: { ko: "인스타그램 카드뉴스", en: "Instagram card-news carousel" },
    platforms: ["feed", "square"], maxText: 3,
    priority: ["headline", "tagline", "brand"],
    essentials: { ko: "캐러셀이라서 장마다 글자는 짧게, 모든 장이 같은 디자인 시스템(여백·서체·색·번호 위치)을 공유해야 해", en: "a carousel: keep text short on every slide, and all slides must share one design system (margins, typefaces, colors, page-number position)" },
    hierarchy: { ko: "1순위 장 제목, 2순위 한두 줄 설명, 3순위 브랜드명·쪽 번호", en: "primary = slide title; secondary = one or two short lines; tertiary = brand name and page number" },
    styles: ["daylight", "kitchen", "editorial", "craftlabel", "watercolor", "market", "flyer", "collage", "swiss", "studio"],
  },
  {
    id: "product", label: "제품 이미지", emoji: "📦", desc: "누끼·스튜디오 · 연출컷",
    phrase: { ko: "제품 사진", en: "product photograph" },
    platforms: ["smartthumb", "square", "feed", "smartdetail", "place"], maxText: 1,
    priority: ["brand"],
    essentials: { ko: "제품 사진이라서 제품의 모양·색·질감이 정확하고 먹음직스럽게(또는 갖고 싶게) 보이는 게 전부야 — 글자는 거의 넣지 않아", en: "a product photo: the product's shape, color and texture must look accurate and appealing — almost no text" },
    hierarchy: { ko: "1순위 제품, 2순위 연출 소품·배경", en: "primary = the product; secondary = props and background" },
    styles: ["daylight", "kitchen", "editorial", "studio", "cinematic", "collage"],
  },
  {
    id: "mood", label: "브랜드 무드 이미지", emoji: "🎨", desc: "무드보드 · 분위기 컷",
    phrase: { ko: "브랜드 무드보드", en: "brand mood board" },
    platforms: ["wide", "square", "feed"], maxText: 1,
    priority: ["brand"],
    essentials: { ko: "브랜드의 색·재질·빛·공간 분위기를 한눈에 보여 주는 이미지라서 일관된 톤이 가장 중요해", en: "an image that shows the brand's colors, materials, light and atmosphere at a glance — a consistent tone matters most" },
    hierarchy: { ko: "1순위 전체 톤, 2순위 사진 조각·컬러 칩, 3순위 작은 브랜드명", en: "primary = overall tone; secondary = photo tiles and color chips; tertiary = a small brand name" },
    styles: ["daylight", "kitchen", "editorial", "craftlabel", "watercolor", "collage", "cinematic", "studio"],
  },
  {
    id: "sns", label: "SNS 홍보 이미지", emoji: "📱", desc: "피드 · 스토리 · 스토어 · 플레이스",
    phrase: { ko: "SNS 홍보 이미지", en: "social media promo image" },
    platforms: ["feed", "square", "story", "smartdetail", "place"], maxText: 4,
    priority: ["headline", "brand", "tagline", "benefit", "cta", "price", "date", "place", "contact"],
    essentials: { ko: "피드에서 스크롤을 멈추게 하는 이미지라서 첫눈에 제품(또는 공간)과 짧은 헤드라인이 들어와야 해", en: "a scroll-stopping feed image: the product (or place) and a short headline must land at first glance" },
    hierarchy: { ko: "1순위 제품·헤드라인, 2순위 브랜드명·카피, 3순위 혜택·행동 안내", en: "primary = product and headline; secondary = brand name and tagline; tertiary = offer and CTA" },
    styles: ALL_STYLES,
  },
  {
    id: "event", label: "오픈·이벤트 안내", emoji: "🎉", desc: "오픈 · 할인 · 체험 · 장터",
    phrase: { ko: "오픈·이벤트 안내 포스터", en: "opening / event announcement poster" },
    platforms: ["feed", "story", "square", "a4"], maxText: 6,
    priority: ["headline", "date", "benefit", "place", "brand", "tagline", "price", "contact", "cta"],
    essentials: { ko: "행사 안내라서 무슨 행사인지와 날짜·장소·혜택을 한눈에 찾을 수 있어야 해", en: "an event announcement: what the event is, its date, venue and offer must be findable at a glance" },
    hierarchy: { ko: "1순위 행사 제목, 2순위 날짜·혜택·장소, 3순위 브랜드명·연락처", en: "primary = event title; secondary = date, offer and venue; tertiary = brand name and contact" },
    styles: ALL_STYLES,
  },
  {
    id: "logo", label: "로고 컨셉 시안", emoji: "✒️", desc: "아이디어용 시안",
    phrase: { ko: "로고 컨셉 시안", en: "logo concept draft" },
    platforms: ["square"], maxText: 2,
    priority: ["brand", "tagline"],
    essentials: { ko: "로고 시안이라서 작게 줄여도 알아볼 수 있는 단순한 형태여야 해", en: "a logo draft: the form must stay recognizable at small sizes" },
    hierarchy: { ko: "1순위 브랜드명 또는 심볼, 2순위 작은 보조 문구", en: "primary = brand name or symbol; secondary = a small descriptor line" },
    styles: [],
    draft: true,
  },
];

/** 플랫폼 사이즈 → 프롬프트 비율 + 안전 영역 */
export type Platform = {
  id: string;
  label: string;
  emoji: string;
  ratio: string;
  /** 미드저니 --ar 용 정수 비율 */
  ar: string;
  px: string;
  en: string;
  safe: Label;
  print?: boolean;
  /** 이 사이즈는 글자를 넣지 않는 게 좋아요 (네이버 플레이스 대표사진 등) */
  noText?: boolean;
};

export const PLATFORMS: Platform[] = [
  { id: "a4", label: "A4 세로 인쇄", emoji: "📄", ratio: "1:1.414", ar: "210:297", px: "210×297mm", en: "A4 portrait print poster", print: true,
    safe: { ko: "재단선 3mm, 안전 여백 10mm, 300dpi 인쇄용", en: "3mm bleed, 10mm safe margin, 300 dpi print-ready" } },
  { id: "feed", label: "인스타 피드 4:5", emoji: "📷", ratio: "4:5", ar: "4:5", px: "1080×1350", en: "Instagram feed post (portrait)",
    safe: { ko: "사방 6% 안전 여백, 핵심 내용은 가운데 1:1 영역 안(프로필 그리드 크롭 대비)", en: "6% safe margins; keep key content inside the central 1:1 area (profile-grid crop)" } },
  { id: "square", label: "인스타 피드 1:1", emoji: "⬜", ratio: "1:1", ar: "1:1", px: "1080×1080", en: "Instagram feed post (square)",
    safe: { ko: "사방 7% 안전 여백", en: "7% safe margins on all sides" } },
  { id: "story", label: "스토리·릴스 9:16", emoji: "📱", ratio: "9:16", ar: "9:16", px: "1080×1920", en: "Instagram story / Reels cover",
    safe: { ko: "위·아래 14%는 글자 없이 비우기(앱 UI가 덮는 영역), 좌우 6% 여백", en: "keep the top 14% and bottom 14% free of text (app UI overlays), 6% side margins" } },
  { id: "smartthumb", label: "스마트스토어 대표이미지", emoji: "🛒", ratio: "1:1", ar: "1:1", px: "1000×1000", en: "online-store main product image", noText: true,
    safe: { ko: "제품이 화면의 약 70~80%를 차지하게 가운데, 글자·워터마크·테두리 없이(쇼핑 검색 대표이미지 기준)", en: "product centered filling about 70–80% of the frame; no text, watermark or border (marketplace main-image rules)" } },
  { id: "smartdetail", label: "스마트스토어 상세 상단", emoji: "🧾", ratio: "4:5", ar: "4:5", px: "860×1075 (가로 860px)", en: "top section of an online-store product detail page, 860px wide",
    safe: { ko: "상세페이지 첫 화면: 좌우 5% 여백, 핵심 메시지는 위쪽 절반에, 모바일에서 작게 봐도 읽히게", en: "first screen of a product detail page: 5% side margins, key message in the top half, readable on a small phone" } },
  { id: "place", label: "네이버 플레이스 대표사진", emoji: "📍", ratio: "8:5", ar: "8:5", px: "1200×750", en: "map-listing cover photo (Naver Place)", noText: true,
    safe: { ko: "가운데 정사각형으로 잘려 보여도 주인공이 남게 가운데 배치, 아래쪽에 중요한 것 두지 않기, 글자·가격 오버레이 없이", en: "keep the subject centered so a square center crop still works; nothing important at the bottom; no text or price overlay" } },
  { id: "wide", label: "가로 16:9 (발표·블로그)", emoji: "🖥️", ratio: "16:9", ar: "16:9", px: "1920×1080", en: "16:9 landscape (presentation / blog)",
    safe: { ko: "사방 5% 여백", en: "5% margins on all sides" } },
];

/* ───────────────────────── 3단계: 디자인 ───────────────────────── */

/**
 * 디자인 스타일 (아트 디렉션). 스타일마다 서체·레이아웃·색 쓰는 법·질감이 따로 있어요.
 * 문장 안의 {B} 는 브랜드 컬러, {A} 는 포인트 색, {hero} 는 메인 장면으로 바뀝니다.
 * 레이아웃의 역할 이름(헤드라인·카피·혜택·브랜드명·정보 줄·행동 안내)은 '들어갈 글자' 목록의 역할과 같아요.
 */
export type Style = Option & {
  brief: Label;
  type: Label;
  layout: Label;
  palette: Label;
  texture: Label;
  imagery: Label;
  /** 실사 사진 스타일 */
  photo?: boolean;
};

export const STYLES: Style[] = [
  {
    id: "daylight", label: "자연광 제품 사진", emoji: "🌤️", hint: "정직·깔끔", en: "natural-light brand photograph", photo: true,
    brief: { ko: "창가 자연광으로 찍은 브랜드 캠페인 사진 — 제품(또는 공간)이 주인공이고 여백이 넉넉한 실제 촬영 결과물", en: "a brand campaign photograph shot in window daylight — the product (or place) is the hero, with generous negative space, like a real shoot" },
    type: { ko: "헤드라인은 Pretendard SemiBold 같은 단정한 한글 고딕을 중간 크기로(과하게 크지 않게), 브랜드명은 자간을 넓힌 작은 글자, 정보는 작은 레귤러", en: "a neat Korean gothic (in the style of Pretendard SemiBold) for the headline at a moderate size (never shouting); the brand name small and widely letter-spaced; small regular weight for info" },
    layout: { ko: "사진이 캔버스 전체를 채우고 주인공은 화면 3분할 지점에. 반대편의 밝고 비어 있는 벽·하늘 영역에 브랜드명(작게) → 헤드라인 → 카피를 왼쪽 정렬 한 덩어리로. 혜택은 작은 {B} 둥근 라벨, 가격·일정·위치·연락처는 아래쪽 가는 선 위에 한 줄. 글자 뒤 상자·패널 없음", en: "the photo fills the canvas with the hero on a rule-of-thirds point; on the opposite bright, empty wall or sky area sit the brand name (small) → headline → tagline as one left-aligned block; the offer as a small rounded {B} label; price, date, location and contact as one line above a thin rule near the bottom; no boxes or panels behind text" },
    palette: { ko: "사진 자체의 따뜻하고 부드러운 자연색, 글자는 짙은 먹색(어두운 곳 위라면 흰색), {B}는 라벨 하나에만", en: "the photo's own soft, warm natural colors; text in deep ink (white only over dark areas); {B} only on the label" },
    texture: { ko: "한쪽 창에서 드는 오전 자연광, 부드럽고 긴 그림자, 리넨·나무·도자기의 실제 질감, 고운 필름 입자", en: "morning daylight from one window, soft long shadows, real linen / wood / ceramic textures, fine film grain" },
    imagery: { ko: "실제로 촬영한 사진 한 장: {hero}. 연출은 최소한으로, 소품은 2~3개만", en: "one real photograph: {hero}; minimal styling with only 2–3 props" },
  },
  {
    id: "kitchen", label: "키친 플랫레이", emoji: "🧺", hint: "재료·손맛", en: "overhead kitchen flat-lay", photo: true,
    brief: { ko: "위에서 내려다본 키친·작업대 플랫레이 — 재료와 손길이 보이는 정직한 로컬 브랜드 사진", en: "an overhead flat-lay on a kitchen or workbench — an honest local-brand photo where ingredients and handwork show" },
    type: { ko: "헤드라인은 Noto Serif KR SemiBold 같은 단정한 한글 명조, 정보는 작은 고딕", en: "a neat Korean Myeongjo serif (in the style of Noto Serif KR SemiBold) for the headline; a small sans for info" },
    layout: { ko: "정면 부감. 제품과 재료는 화면 아래쪽 2/3와 가장자리에 리듬 있게 놓고, 위쪽 1/3의 빈 나무판(또는 리넨) 위에 헤드라인과 카피를 가운데 정렬. 혜택은 재료 사이에 놓인 작은 크라프트 종이 태그 위에, 브랜드명과 정보 줄은 맨 아래 가운데 한 줄", en: "straight top-down; the product and ingredients sit rhythmically across the lower two-thirds and edges, and the headline and tagline are centered on the empty board (or linen) in the top third; the offer on a small kraft-paper tag among the ingredients; brand name and info line centered along the bottom" },
    palette: { ko: "나무 도마·리넨·흙빛 그릇의 자연색, 재료 고유의 색이 포인트, {B}는 태그 끈이나 천 한 조각에만", en: "the natural colors of a wooden board, linen and earthenware, with the ingredients' own colors as accents; {B} only on a tag string or a scrap of cloth" },
    texture: { ko: "위에서 드는 부드러운 자연광, 재료의 물기·결·부스러기까지 보이는 실제 질감", en: "soft daylight from above; real textures down to moisture, grain and crumbs" },
    imagery: { ko: "실제 부감 사진: {hero}. 손이 나온다면 일하는 손 한쪽만 자연스럽게", en: "a real overhead photograph: {hero}; if a hand appears, just one working hand, natural" },
  },
  {
    id: "editorial", label: "매거진 에디토리얼", emoji: "📖", hint: "고급·여백", en: "lifestyle magazine editorial", photo: true,
    brief: { ko: "한국 라이프스타일 매거진 화보 — 크림색 종이, 넉넉한 여백, 품격 있는 명조, 액자처럼 놓인 사진", en: "a Korean lifestyle-magazine editorial — cream paper, generous margins, refined serif type and a framed photograph" },
    type: { ko: "헤드라인은 마루 부리·Noto Serif KR 같은 대비 강한 한글 명조를 크게, 브랜드명은 자간을 넓혀 맨 위에 작게, 정보는 작고 단정한 고딕", en: "a high-contrast Korean Myeongjo (in the style of Maru Buri / Noto Serif KR) for the headline, large; the brand name small and widely spaced at the very top; small, clean sans for info" },
    layout: { ko: "위쪽 약 60%에 사진을 균일한 여백 안에 액자처럼. 아래 크림색 종이 영역에 헤드라인을 왼쪽 정렬로, 카피는 그 아래 두 줄 이내, 오른쪽 아래에 정보(가격·일정·위치·연락처)를 작은 글자로 세로로 쌓기. 혜택은 사진 모서리에 걸친 작은 {A} 원형 스티커", en: "the photo framed in the top ~60% with even margins; on the cream paper below, the headline left-aligned, the tagline under it in at most two lines, and the info (price, date, location, contact) stacked small at bottom-right; the offer as a small round {A} sticker overlapping a photo corner" },
    palette: { ko: "크림색 종이, 먹색 글자, 차분한 자연색 사진, {B}는 얇은 선 하나, {A}는 스티커 하나", en: "cream paper, ink-black text, calm natural-color photo; {B} for one thin rule and {A} for the sticker only" },
    texture: { ko: "비코팅 종이 결, 사진의 고운 필름 입자", en: "uncoated paper grain, fine film grain in the photo" },
    imagery: { ko: "실제 에디토리얼 사진: {hero}", en: "a real editorial photograph: {hero}" },
  },
  {
    id: "craftlabel", label: "로컬 크래프트 라벨", emoji: "🏷️", hint: "손맛·정성", en: "local craft label graphic",
    brief: { ko: "동네 공방에서 찍어 낸 듯한 크래프트 라벨·패키지 그래픽 — 활판 인쇄 같은 손맛, 정직하고 따뜻한 로컬 브랜드", en: "a craft label / packaging graphic that looks letterpress-printed in a local workshop — honest, warm, handmade" },
    type: { ko: "브랜드명과 헤드라인은 굵은 한글 명조를 가운데 정렬로, 작은 글자는 자간 넓은 고딕. 장식 괘선과 작은 별표", en: "a bold Korean Myeongjo for the brand name and headline, centered; widely spaced small sans for minor text; ornamental rules and small asterisks" },
    layout: { ko: "캔버스 가운데 큰 라벨(아치형 또는 둥근 사각 이중 테두리)이 주인공: 위에 아치를 따라 브랜드명 → 가운데 {hero}를 한 색 선화로 → 헤드라인 → 짧은 괘선 → 카피. 혜택은 라벨 아래 리본 띠 위에, 정보 줄은 라벨 밖 맨 아래 작은 한 줄", en: "one large label (arched or rounded-rectangle double border) centered on the canvas: the brand name following the arch at top → {hero} as one-color line art in the middle → headline → a short rule → tagline; the offer on a ribbon banner below the label; the info line small along the very bottom outside the label" },
    palette: { ko: "크래프트지(갈색 무지 종이) 바탕, 잉크는 {B} 한 색과 먹색, {A}는 리본에만", en: "brown kraft paper background; inks in {B} plus ink-black; {A} only on the ribbon" },
    texture: { ko: "활판·실크스크린 인쇄의 살짝 고르지 않은 잉크, 종이 섬유. 그림자·원근 없는 정면 평면", en: "slightly uneven letterpress / screen-print ink, paper fibers; flat, front-facing, no shadows or perspective" },
    imagery: { ko: "{hero} — 라벨 안에 한 색 판화·선화로", en: "{hero}, as one-color woodcut-style line art inside the label" },
  },
  {
    id: "studio", label: "미니멀 스튜디오", emoji: "◻️", hint: "모던·집중", en: "minimal studio product shot", photo: true,
    brief: { ko: "단색 배경지 위 미니멀 스튜디오 사진 — 오브제 하나와 또렷한 그림자, 갤러리 같은 고요함", en: "a minimal studio photograph on a seamless colored backdrop — a single object and a crisp shadow, gallery-quiet" },
    type: { ko: "Pretendard Medium 같은 깔끔한 산세리프를 작게(헤드라인도 과하지 않게), 넓은 자간", en: "a clean sans (in the style of Pretendard Medium), set small even for the headline, with wide tracking" },
    layout: { ko: "톤 다운한 {B} 계열 이음매 없는 배경지 가운데 약간 아래에 주인공 하나, 그 아래 단단한 그림자. 헤드라인은 위쪽 가운데 작게, 카피는 바로 아래. 브랜드명은 맨 아래 가운데, 정보 줄은 그 위 한 줄. 혜택은 오른쪽 위에 작은 글자만(장식 없이)", en: "one hero object slightly below center on a seamless toned-down {B} backdrop, with a firm shadow beneath; the headline small at top center with the tagline just below; the brand name at bottom center with the info line above it; the offer as small plain text at top-right" },
    palette: { ko: "톤 다운한 {B} 배경지 한 색, 글자는 같은 계열의 더 짙은 색이나 흰색, {A}는 아주 작게", en: "a single toned-down {B} backdrop; text in a deeper shade of the same hue or white; {A} only as a tiny touch" },
    texture: { ko: "한 방향의 스튜디오 조명과 또렷한 그림자, 무광 배경지", en: "directional studio light with a crisp shadow, matte paper backdrop" },
    imagery: { ko: "스튜디오에서 찍은 실제 사진: {hero}", en: "a real studio photograph: {hero}" },
  },
  {
    id: "watercolor", label: "수채 일러스트", emoji: "🖌️", hint: "따뜻·감성", en: "hand-painted watercolor illustration",
    brief: { ko: "손으로 그린 수채 일러스트 — 맑은 물빛 번짐과 가는 연필 선, 여행 엽서 같은 따뜻함", en: "a hand-painted watercolor illustration — clear washes and fine pencil lines, warm like a travel postcard" },
    type: { ko: "헤드라인은 둥근 한글 명조나 부드러운 손글씨풍(아주 읽기 쉽게), 정보는 작은 둥근 고딕", en: "a rounded Korean serif or soft hand-lettered style for the headline (very legible); small rounded sans for info" },
    layout: { ko: "그림이 가운데에서 흰 종이 여백으로 자연스럽게 번져 나감(테두리 없음). 위쪽 여백에 헤드라인과 카피를 가운데 정렬, 아래쪽 여백에 정보 한 줄과 브랜드명. 혜택은 그림 한쪽에 수채로 칠한 {B} 리본 위", en: "the painting bleeds softly from the center into white paper margins (no border); headline and tagline centered in the top margin; one info line and the brand name in the bottom margin; the offer on a {B} watercolor ribbon at one side of the painting" },
    palette: { ko: "흰 수채 종이, 맑고 옅은 초록·하늘·흙색, {B}는 리본과 한두 군데 포인트", en: "white watercolor paper; clear, light greens, sky blues and earth tones; {B} on the ribbon and one or two touches" },
    texture: { ko: "수채 번짐과 종이 요철, 가는 연필 밑선. 디지털 그라데이션 없음", en: "watercolor blooms, cold-press paper tooth, fine pencil underdrawing; no digital gradients" },
    imagery: { ko: "수채로 그린 장면: {hero}", en: "a watercolor-painted scene: {hero}" },
  },
  {
    id: "market", label: "레트로 장터 포스터", emoji: "🎪", hint: "정겨움·유쾌", en: "retro Korean market poster",
    brief: { ko: "70~80년대 한국 장터·극장 포스터를 세련되게 되살린 실크스크린 포스터 — 잉크 3색, 굵은 글자, 정겨운 그림", en: "a refined revival of a 1970s–80s Korean market / cinema poster as a screen print — three inks, bold lettering, friendly drawing" },
    type: { ko: "헤드라인은 손으로 그린 간판 글씨 같은 굵고 각진 레트로 한글 고딕을 크게(살짝 장체), 정보는 단단한 고딕", en: "a bold, angular retro Korean gothic like hand-painted signage for the headline (slightly condensed), large; a sturdy sans for info" },
    layout: { ko: "위쪽에 헤드라인을 크게 두 줄로, 가운데에 {hero}를 단순한 판화풍 그림으로 크게, 아래에 카피와 정보 줄을 띠 모양 칸에. 혜택은 별 모양 터짐 도장 안에 {A}로, 브랜드명은 맨 아래 띠 가운데. 바깥에 얇은 테두리", en: "the headline large in two lines at the top; {hero} drawn big and simple in the middle; the tagline and info line in banded strips at the bottom; the offer inside a starburst stamp in {A}; the brand name centered in the bottom band; a thin outer border" },
    palette: { ko: "미색 종이 위 잉크 3색: {B}, {A}, 먹색", en: "three inks on off-white paper: {B}, {A} and ink-black" },
    texture: { ko: "실크스크린 잉크의 살짝 어긋난 판, 종이 결. 깨끗한 인쇄(가짜 낡음·흠집 효과 금지)", en: "slight screen-print misregistration and paper grain; a clean print (no fake distressing or scratches)" },
    imagery: { ko: "{hero} — 단순한 형태의 실크스크린 판화 그림으로", en: "{hero}, as a simple screen-printed illustration" },
  },
  {
    id: "flyer", label: "동네 신문·전단", emoji: "🗞️", hint: "신뢰·정보", en: "local newspaper ad / flyer", photo: true,
    brief: { ko: "동네 신문 광고·전단지 — 단 나눔 그리드, 망점 사진, 신뢰감 있게 정리된 정보", en: "a local newspaper ad / flyer — column grid, halftone photo, trustworthy organized info" },
    type: { ko: "헤드라인은 굵은 한글 명조를 폭 전체에, 브랜드명은 맨 위 제호처럼 이중선 사이에, 정보는 촘촘한 고딕", en: "a heavy Korean Myeongjo headline across the full width; the brand name as a masthead between double rules at the top; compact sans for info" },
    layout: { ko: "맨 위 이중선 사이에 브랜드명(제호), 그 아래 헤드라인이 전체 폭, 그 아래 2~3단 그리드: 큰 칸에 망점 사진, 옆 칸에 카피와 정보(가격·일정·위치·연락처)를 굵은 괘선으로 나눈 표처럼. 혜택은 {B} 테두리 박스 안 굵은 글자. 본문 자리는 읽을 수 없는 회색 막대", en: "the brand name as the masthead between double rules at the top; the headline spans the full width below; then a 2–3 column grid: the halftone photo in the large cell, the tagline and info (price, date, location, contact) in the side cell like a ruled table; the offer in bold inside a {B}-bordered box; any body-copy area as illegible grey bars" },
    palette: { ko: "미색 신문 용지와 먹색, {B}는 박스 테두리와 강조에만", en: "off-white newsprint and black ink; {B} only for the box border and highlights" },
    texture: { ko: "신문 용지 결, 거친 망점, 살짝 고르지 않은 잉크", en: "newsprint grain, coarse halftone dots, slightly uneven ink" },
    imagery: { ko: "망점 흑백 사진: {hero}", en: "a black-and-white halftone photo: {hero}" },
  },
  {
    id: "banner", label: "맛집 띠 배너", emoji: "🍲", hint: "식욕·한눈에", en: "bold Korean food-shop banner", photo: true,
    brief: { ko: "동네 맛집 오픈·행사 배너 — 김이 오르는 음식 사진 아래 진한 색 띠에 굵은 글자, 멀리서도 한눈에 읽히는 정직한 광고", en: "a local restaurant opening / event banner — a steaming food photo above a solid color band with heavy type, an honest ad readable at a glance from afar" },
    type: { ko: "헤드라인은 Pretendard Black 같은 아주 굵은 한글 고딕을 흰색으로 크게, 혜택은 {A} 굵은 고딕 한 줄, 브랜드명은 띠 위쪽 작은 흰 둥근 이름표 안 짙은 글자, 정보는 흰색 미디엄 고딕", en: "an extra-heavy Korean gothic (in the style of Pretendard Black) for the headline, large and white; the offer as one line of bold gothic in {A}; the brand name in dark letters inside a small white rounded name tag at the top of the band; info in white medium gothic" },
    layout: { ko: "위쪽 약 55~60%는 주제 이미지 사진이 가장자리까지 채움. 아래 약 40%는 {B} 단색 띠(살짝 진하게): 왼쪽 정렬로 브랜드명 이름표 → 헤드라인 → 혜택 → 정보 줄(날짜·위치·연락처를 가는 세로선으로 나눠 한 줄). 띠와 사진 경계는 반듯한 직선", en: "the top ~55–60% is the main subject photo, full-bleed. The bottom ~40% is a solid band in {B} (slightly deepened): left-aligned brand-name tag → headline → offer → one info line (date, place and contact split by thin vertical bars). A clean straight edge between photo and band" },
    palette: { ko: "사진은 따뜻하고 식욕 도는 자연색, 띠는 {B} 한 색, 글자는 흰색과 {A}만", en: "warm, appetizing natural color in the photo; the band in {B} only; text in white and {A} only" },
    texture: { ko: "어두운 나무 테이블, 한쪽에서 드는 따뜻한 빛과 피어오르는 김, 띠는 평면 인쇄(그라데이션·그림자 없음)", en: "a dark wooden table, warm side light and rising steam; the band is flat print with no gradient or shadow" },
    imagery: { ko: "가까이서 찍은 실제 음식 사진: {hero}", en: "a real close-up food photograph: {hero}" },
  },
  {
    id: "brutalsale", label: "브루탈 세일", emoji: "⬛", hint: "할인·임팩트", en: "neo-brutalist sale poster", photo: true,
    brief: { ko: "네오 브루탈 세일 포스터 — 굵은 검정 테두리, 거대한 숫자·글자, 장식 없음", en: "a neo-brutalist sale poster — thick black borders, giant numbers and letters, zero decoration" },
    type: { ko: "혜택은 거대한 굵은 그로테스크 숫자·글자, 헤드라인은 Pretendard Black 같은 아주 굵은 한글 고딕, 정보는 모노스페이스", en: "giant heavy grotesque numerals / letters for the offer; an extra-heavy Korean gothic (in the style of Pretendard Black) for the headline; monospace for info" },
    layout: { ko: "굵은 검정 선(폭의 약 1%)으로 나눈 블록 그리드. 가장 큰 블록에 혜택을 거대하게, 헤드라인은 자기 블록에, 제품 사진(누끼)은 한 블록을 꽉 채우고, 정보는 아래 반전 블록(검정 바탕 흰 글자), 브랜드명은 작은 블록에", en: "a block grid divided by thick black rules (≈1% of width): the offer huge in the largest block, the headline in its own block, a cut-out product photo filling one block, info in an inverted block at the bottom (white on black), the brand name in a small block" },
    palette: { ko: "흰색·검정과 {B} 한 색만 원색 그대로", en: "white, black and {B} as the only color, at full strength" },
    texture: { ko: "평면 인쇄, 칼같이 선명한 모서리, 그림자·그라데이션 없음", en: "flat print, razor-sharp edges, no shadows or gradients" },
    imagery: { ko: "{hero} — 한 블록 안에 배경을 지운 실제 제품 사진으로", en: "{hero}, as a real cut-out product photo inside one block" },
  },
  {
    id: "collage", label: "종이 콜라주", emoji: "✂️", hint: "발랄·손맛", en: "handmade paper collage", photo: true,
    brief: { ko: "손으로 만든 종이 콜라주 — 오리고 찢은 종이, 마스킹 테이프, 실제 사진 조각을 색지 위에, 발랄하고 손에 잡힐 듯", en: "a handmade paper collage — cut and torn paper, masking tape and real photo cut-outs on colored paper, playful and tactile" },
    type: { ko: "헤드라인은 색지를 오려 만든 통통하고 둥근 손글씨, 단어마다 다른 색. 정보는 찢은 종이 라벨 위 친근한 고딕", en: "chunky, rounded lettering cut from colored paper, each word a different color; info in a friendly sans on torn-paper labels" },
    layout: { ko: "가운데 쌓기: 오려 낸 제품 사진 조각을 가운데에 크게, 그 위나 아래에 손글씨 헤드라인, 찢은 흰 종이 띠에 카피. 혜택은 둥글게 오린 {A} 종이 스티커, 브랜드명과 정보는 아래쪽 마스킹 테이프로 붙인 작은 라벨. 소품은 모서리 쪽으로, 글자는 가리지 않게", en: "a centered stack: a large cut-out photo of the product in the middle with the hand-cut headline above or below it and the tagline on a torn white paper strip; the offer as a round {A} paper sticker; the brand name and info on a small label taped near the bottom; extras pushed to the corners, never covering text" },
    palette: { ko: "{B} 색지 배경, 글자는 원색 색지에 {A}를 조금", en: "{B} colored paper background; lettering in primary-colored papers with touches of {A}" },
    texture: { ko: "실제 종이 섬유, 찢긴 가장자리, 마스킹 테이프, 조각마다 부드러운 자연 그림자", en: "real paper fibers, torn edges, masking tape, soft natural shadows under each piece" },
    imagery: { ko: "위에서 촬영한 실제 종이 콜라주: {hero}", en: "a real paper collage photographed from above: {hero}" },
  },
  {
    id: "cinematic", label: "풍경 시네마틱", emoji: "🏞️", hint: "공간·여행", en: "full-bleed cinematic landscape", photo: true,
    brief: { ko: "화면 전체를 채운 풍경 사진 위에 글자를 얹은 캠페인 — 이른 아침 강과 산의 공기감이 느껴지는", en: "a campaign with type over a full-bleed landscape photo — you can feel the early-morning air of river and hills" },
    type: { ko: "헤드라인은 가늘고 우아한 한글 명조(또는 깔끔한 고딕)를 중간 크기로, 넓은 자간, 정보는 작은 고딕", en: "a light, elegant Korean Myeongjo (or a clean gothic) for the headline at a moderate size, wide tracking; small sans for info" },
    layout: { ko: "사진이 가장자리까지 채움. 하늘·물안개 같은 밝고 빈 영역(보통 위쪽)에 헤드라인과 카피를 가운데 정렬, 아래쪽 어두운 땅 영역에 정보 한 줄과 브랜드명. 혜택은 작은 {B} 사각 라벨", en: "the photo fills the canvas edge to edge; headline and tagline centered in the bright, empty sky or mist area (usually the top); one info line and the brand name over the darker ground at the bottom; the offer as a small square {B} label" },
    palette: { ko: "사진 자체의 새벽빛 자연색(물빛 청회색·초록), 글자는 흰색 또는 먹색, {B} 라벨 하나", en: "the photo's own dawn palette (blue-grey water, greens); text in white or ink-black; one {B} label" },
    texture: { ko: "실제 풍경 사진, 공기 원근, 고운 입자", en: "a real landscape photograph, atmospheric perspective, fine grain" },
    imagery: { ko: "실제 풍경 사진 한 장: {hero}", en: "one real landscape photograph: {hero}" },
  },
  {
    id: "swiss", label: "모던 그리드", emoji: "📐", hint: "정돈·현대", en: "Swiss-style modern grid",
    brief: { ko: "스위스 타이포그래피 스타일 — 엄격한 모듈 그리드, 비대칭, 큰 색면, 강한 크기 대비", en: "Swiss / International Typographic Style — a strict modular grid, asymmetry, big color fields and strong scale contrast" },
    type: { ko: "Pretendard 같은 네오 그로테스크 한글 고딕. 헤드라인은 아주 굵고 크게, 나머지는 작게", en: "a neo-grotesque Korean gothic (in the style of Pretendard); the headline very bold and large, everything else small" },
    layout: { ko: "비대칭 모듈 그리드: 헤드라인이 폭의 2/3를 가로지르고, 제품 사진이나 비주얼은 그리드 칸 하나를 꽉 채우거나 가장자리 밖으로 잘림. 정보는 가는 선으로 나눈 그리드 칸에, 혜택은 단색 알약 모양, 브랜드명은 왼쪽 위 작게", en: "an asymmetric modular grid: the headline spans two-thirds of the width; the product photo or visual fills one grid cell or bleeds off an edge; info sits in grid cells divided by hairlines; the offer as a solid pill; the brand name small at top-left" },
    palette: { ko: "{B}를 큰 색면으로 과감하게, 글자는 흰색·검정, {A}는 작은 포인트", en: "{B} used boldly as a large color field; white and black type; {A} as a small spot" },
    texture: { ko: "평면 인쇄, 선명한 모서리", en: "flat print, crisp edges" },
    imagery: { ko: "{hero} — 그리드 칸에 맞춘 사진이나 평면 도형으로", en: "{hero}, as a photo cropped to a grid cell or as flat shapes" },
  },
];

/** 스타일을 고르지 않았을 때: 홍보물 × 브랜드 무드 → 기본 스타일 */
export const DEFAULT_STYLE: Record<Exclude<OutputId, "logo">, Record<string, string>> = {
  poster: { nature: "daylight", premium: "editorial", warm: "watercolor", minimal: "swiss", playful: "collage", heritage: "craftlabel" },
  cardnews: { nature: "daylight", premium: "editorial", warm: "collage", minimal: "swiss", playful: "collage", heritage: "flyer" },
  product: { nature: "daylight", premium: "editorial", warm: "kitchen", minimal: "studio", playful: "collage", heritage: "kitchen" },
  mood: { nature: "daylight", premium: "editorial", warm: "kitchen", minimal: "studio", playful: "collage", heritage: "craftlabel" },
  sns: { nature: "daylight", premium: "studio", warm: "kitchen", minimal: "studio", playful: "collage", heritage: "craftlabel" },
  event: { nature: "cinematic", premium: "editorial", warm: "market", minimal: "swiss", playful: "brutalsale", heritage: "flyer" },
};

export function resolveStyle(styleId: string | null, output: OutputId, mood: string | null): Style {
  const type = OUTPUT_TYPES.find((o) => o.id === output);
  const chosen = styleId && type?.styles.includes(styleId) ? STYLES.find((s) => s.id === styleId) : undefined;
  if (chosen) return chosen;
  const id = output === "logo" ? "craftlabel" : (DEFAULT_STYLE[output][mood ?? "nature"] ?? DEFAULT_STYLE[output].nature);
  return STYLES.find((s) => s.id === id) ?? STYLES[0];
}

/* 홍보물별 세부 옵션 */
export const PRODUCT_SHOTS: Option[] = [
  { id: "cutout", label: "누끼·스튜디오", emoji: "⚪", hint: "쇼핑몰 대표컷", en: "clean studio packshot" },
  { id: "lifestyle", label: "연출컷", emoji: "🌿", hint: "라이프스타일", en: "styled lifestyle shot" },
];

export const BACKDROPS: (Option & { ko: string })[] = [
  { id: "white", label: "흰 배경", emoji: "⬜", en: "a pure white seamless background (#FFFFFF) with a soft contact shadow", ko: "순백(#FFFFFF) 이음매 없는 배경과 제품 아래 옅은 접지 그림자" },
  { id: "brand", label: "브랜드 컬러 배경", emoji: "🟩", en: "a seamless backdrop in a toned-down {B} with a soft shadow", ko: "톤 다운한 {B} 이음매 없는 배경지와 부드러운 그림자" },
  { id: "natural", label: "자연 소재 받침", emoji: "🪵", en: "a simple natural surface (light wood, linen or stone) against a plain light wall", ko: "밝은 나무·리넨·돌 같은 자연 소재 받침과 단색 밝은 벽" },
];

export const MOOD_KINDS: Option[] = [
  { id: "board", label: "무드보드", emoji: "🧩", hint: "사진 조각 + 컬러 칩", en: "mood board" },
  { id: "single", label: "분위기 컷 한 장", emoji: "🖼️", hint: "대표 감성 사진", en: "single brand mood shot" },
];

export const CARD_MODES: Option[] = [
  { id: "cover", label: "표지 1장", emoji: "📕", en: "cover slide" },
  { id: "content", label: "내용 장 1장", emoji: "📄", en: "one content slide" },
  { id: "set", label: "전체 세트", emoji: "🗂️", hint: "표지 + 내용", en: "full carousel set" },
];

export const EVENT_KINDS: (Option & { word: string })[] = [
  { id: "open", label: "그랜드 오픈", emoji: "🎊", en: "grand opening", word: "오픈" },
  { id: "sale", label: "할인·프로모션", emoji: "🏷️", en: "sale / promotion", word: "할인" },
  { id: "class", label: "체험·클래스 모집", emoji: "🙌", en: "hands-on experience / class sign-up", word: "체험" },
  { id: "market", label: "플리마켓·장터 참가", emoji: "🎪", en: "flea market / local market booth", word: "장터" },
];

export type LogoType = Option & { brief: Label };

export const LOGO_TYPES: LogoType[] = [
  { id: "wordmark", label: "워드마크", emoji: "🔤", hint: "글자형", en: "wordmark",
    brief: { ko: "브랜드명 글자 자체를 다듬은 워드마크 — 한글 자소의 획 하나를 브랜드를 상징하는 형태로 살짝 바꾼 정도의 절제된 변형", en: "a wordmark built from the brand name itself — a restrained twist where one stroke of the Korean letters subtly becomes a shape that symbolizes the brand" } },
  { id: "emblem", label: "엠블럼·배지", emoji: "🔰", hint: "원형 도장", en: "emblem / badge",
    brief: { ko: "원형 또는 아치형 테두리 안에 단순한 심볼과 브랜드명을 담은 엠블럼 — 스탬프·라벨로 찍어도 어울리게", en: "an emblem with a simple symbol and the brand name inside a round or arched border — works as a stamp or label" } },
  { id: "symbol", label: "심볼 + 글자", emoji: "🔣", hint: "아이콘형", en: "symbol + wordmark",
    brief: { ko: "단순한 기하학 심볼 하나(선 굵기 일정, 3가지 이하 형태 조합) 옆에 브랜드명 글자", en: "one simple geometric symbol (consistent line weight, built from no more than three shapes) beside the brand name" } },
  { id: "hand", label: "손글씨 레터링", emoji: "✍️", hint: "따뜻한 붓·펜", en: "hand lettering",
    brief: { ko: "붓펜·마커로 직접 쓴 듯한 손글씨 레터링 — 획의 강약은 살리되 읽기 쉬운 글자", en: "hand lettering as if written with a brush pen or marker — lively stroke contrast but easy to read" } },
];

/** accent: 브랜드 컬러와 짝을 이루는 포인트 색 */
export type BrandColor = { id: string; label: string; hex: string; en: string; accent: string; accentEn: string };

export const BRAND_COLORS: BrandColor[] = [
  { id: "river", label: "강물 그린", hex: "#2F6B4F", en: "river green", accent: "#E2A740", accentEn: "honey yellow" },
  { id: "forest", label: "숲 딥그린", hex: "#1F3D2B", en: "deep forest green", accent: "#D98E5F", accentEn: "apricot" },
  { id: "moss", label: "이끼 올리브", hex: "#6B7A3A", en: "moss olive", accent: "#C4572E", accentEn: "terracotta" },
  { id: "mist", label: "물안개 블루그레이", hex: "#5B7A8C", en: "misty blue-grey", accent: "#E8B04B", accentEn: "warm mustard" },
  { id: "sky", label: "하늘 블루", hex: "#3C7DBF", en: "clear sky blue", accent: "#F2A65A", accentEn: "soft orange" },
  { id: "honey", label: "꿀 머스터드", hex: "#D9A02B", en: "honey mustard", accent: "#2C3E50", accentEn: "slate navy" },
  { id: "persimmon", label: "감 오렌지", hex: "#E0702E", en: "persimmon orange", accent: "#1F3A5F", accentEn: "deep navy" },
  { id: "terracotta", label: "흙 테라코타", hex: "#B5562F", en: "earthy terracotta", accent: "#2F4A3A", accentEn: "pine green" },
  { id: "berry", label: "딸기 레드", hex: "#C8323C", en: "strawberry red", accent: "#F2D16B", accentEn: "butter yellow" },
  { id: "plum", label: "오미자 플럼", hex: "#7A2E4A", en: "omija plum", accent: "#E9C46A", accentEn: "soft gold" },
  { id: "charcoal", label: "먹 차콜", hex: "#24262B", en: "ink charcoal", accent: "#C9A45C", accentEn: "muted gold" },
  { id: "cream", label: "크림 베이지", hex: "#E9DCC3", en: "cream beige", accent: "#2F6B4F", accentEn: "river green" },
];

/** '피할 것' 칩 */
export const AVOID_CHIPS: Option[] = [
  { id: "typo", label: "깨진 한글", en: "garbled or misspelled Korean text" },
  { id: "clutter", label: "복잡한 장식", en: "cluttered decorations" },
  { id: "stock", label: "뻔한 스톡사진 느낌", en: "generic stock-photo look" },
  { id: "watermark", label: "워터마크·로고", en: "watermarks or random logos" },
  { id: "english", label: "불필요한 영어 문구", en: "unnecessary English filler text" },
  { id: "people", label: "사람 얼굴", en: "human faces" },
];

/** 결과가 아쉬울 때 이어서 보낼 수정 요청 */
export const FOLLOW_UPS: Label[] = [
  { ko: "빛 번짐·광택·떠다니는 아이콘 같은 AI 느낌 효과를 모두 빼고, 실제로 촬영하거나 인쇄한 결과물처럼 다시 만들어 줘.", en: "Remove every AI-looking effect (glow, gloss, floating icons) and redo it so it looks really photographed or printed." },
  { ko: "목록에 없는 글자를 모두 지우고, 각 문구를 한 번씩만 정확히 써 줘.", en: "Remove any text that is not in the list and render each line exactly once." },
  { ko: "한글 맞춤법이 틀린 글자를 목록 그대로 고쳐서 다시 만들어 줘.", en: "Fix any misspelled Korean text exactly as listed and regenerate." },
  { ko: "제품 모양·색·라벨은 첨부한 사진 그대로 두고, 배경과 조명만 바꿔 줘.", en: "Keep the product's shape, color and label exactly as in the attached photo; change only the background and lighting." },
  { ko: "헤드라인을 더 크게, 나머지 글자는 작게 해서 위계를 분명히 해 줘.", en: "Make the headline bigger and the rest smaller so the hierarchy is obvious." },
  { ko: "같은 디자인으로 9:16 스토리 사이즈 버전도 만들어 줘(위·아래 14%는 비우기).", en: "Make a 9:16 story version with the same design (keep the top and bottom 14% clear)." },
  { ko: "글자를 모두 빼고 이미지(사진)만 다시 만들어 줘. 글자는 내가 캔바에서 넣을게.", en: "Regenerate the image with no text at all — I will add the text myself in Canva." },
];

export const byId = <T extends { id: string }>(list: T[], id: string | null | undefined) =>
  id ? list.find((item) => item.id === id) : undefined;
