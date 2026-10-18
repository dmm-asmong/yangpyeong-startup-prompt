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
  { id: "local", label: "지역 주민", emoji: "🏡", en: "local residents" },
  { id: "worker", label: "2030 직장인", emoji: "💼", en: "office workers in their 20s and 30s" },
  { id: "single", label: "1인 가구", emoji: "🏠", en: "people living alone" },
  { id: "student", label: "대학생", emoji: "🎓", en: "university students" },
  { id: "camper", label: "캠핑·아웃도어족", emoji: "🏕️", en: "campers and outdoor lovers" },
  { id: "vegan", label: "비건·제로웨이스트", emoji: "♻️", en: "vegan and zero-waste shoppers" },
  { id: "taste", label: "취향 소비러(팝업·굿즈)", emoji: "🛍️", en: "taste-driven shoppers who love pop-ups and merch" },
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

const ALL_STYLES = [
  "daylight", "kitchen", "editorial", "craftlabel", "studio", "watercolor", "market", "flyer", "banner", "brutalsale", "collage", "cinematic", "swiss",
  "flash", "filmsnap", "bigtype", "riso", "doodle", "infographic", "mascot", "sculpt", "knolling", "handheld", "comic", "travelposter",
  "macro", "sticker", "bauhaus", "zine", "neodeco", "crayon", "bwdoc", "blueprint", "memo", "pixel", "menuboard",
];

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
    styles: ["daylight", "kitchen", "editorial", "craftlabel", "watercolor", "market", "flyer", "collage", "swiss", "studio", "comic", "doodle", "filmsnap", "infographic", "bigtype", "knolling", "memo", "handheld", "mascot", "riso", "crayon", "bwdoc", "blueprint", "travelposter", "zine", "bauhaus", "sticker"],
  },
  {
    id: "product", label: "제품 이미지", emoji: "📦", desc: "누끼·스튜디오 · 연출컷",
    phrase: { ko: "제품 사진", en: "product photograph" },
    platforms: ["smartthumb", "square", "feed", "smartdetail", "place"], maxText: 1,
    priority: ["brand"],
    essentials: { ko: "제품 사진이라서 제품의 모양·색·질감이 정확하고 먹음직스럽게(또는 갖고 싶게) 보이는 게 전부야 — 글자는 거의 넣지 않아", en: "a product photo: the product's shape, color and texture must look accurate and appealing — almost no text" },
    hierarchy: { ko: "1순위 제품, 2순위 연출 소품·배경", en: "primary = the product; secondary = props and background" },
    styles: ["studio", "daylight", "kitchen", "editorial", "cinematic", "collage", "flash", "sculpt", "knolling", "macro", "handheld", "doodle", "infographic", "bwdoc", "neodeco"],
  },
  {
    id: "mood", label: "브랜드 무드 이미지", emoji: "🎨", desc: "무드보드 · 분위기 컷",
    phrase: { ko: "브랜드 무드보드", en: "brand mood board" },
    platforms: ["wide", "square", "feed"], maxText: 1,
    priority: ["brand"],
    essentials: { ko: "브랜드의 색·재질·빛·공간 분위기를 한눈에 보여 주는 이미지라서 일관된 톤이 가장 중요해", en: "an image that shows the brand's colors, materials, light and atmosphere at a glance — a consistent tone matters most" },
    hierarchy: { ko: "1순위 전체 톤, 2순위 사진 조각·컬러 칩, 3순위 작은 브랜드명", en: "primary = overall tone; secondary = photo tiles and color chips; tertiary = a small brand name" },
    styles: ["daylight", "kitchen", "editorial", "craftlabel", "watercolor", "collage", "cinematic", "studio", "filmsnap", "sculpt", "macro", "bwdoc", "travelposter", "sticker", "flash", "mascot", "neodeco", "knolling", "riso"],
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
export type StyleGroup = "photo" | "graphic" | "illust" | "type";

/** 스타일 고르기 탭 (3단계) */
export const STYLE_GROUPS: { id: StyleGroup; label: string; emoji: string }[] = [
  { id: "photo", label: "사진형", emoji: "📷" },
  { id: "graphic", label: "그래픽·인쇄형", emoji: "🖨️" },
  { id: "illust", label: "일러스트·손작업형", emoji: "✏️" },
  { id: "type", label: "타이포·편집형", emoji: "🔤" },
];

export type Style = Option & {
  group: StyleGroup;
  /** 새로 추가한 스타일 (NEW 배지) */
  isNew?: boolean;
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
    id: "daylight", group: "photo", label: "자연광 제품 사진", emoji: "🌤️", hint: "정직·깔끔", en: "natural-light brand photograph", photo: true,
    brief: { ko: "창가 자연광으로 찍은 브랜드 캠페인 사진 — 제품(또는 공간)이 주인공이고 여백이 넉넉한 실제 촬영 결과물", en: "a brand campaign photograph shot in window daylight — the product (or place) is the hero, with generous negative space, like a real shoot" },
    type: { ko: "헤드라인은 Pretendard SemiBold 같은 단정한 한글 고딕을 중간 크기로(과하게 크지 않게), 브랜드명은 자간을 넓힌 작은 글자, 정보는 작은 레귤러", en: "a neat Korean gothic (in the style of Pretendard SemiBold) for the headline at a moderate size (never shouting); the brand name small and widely letter-spaced; small regular weight for info" },
    layout: { ko: "사진이 캔버스 전체를 채우고 주인공은 화면 3분할 지점에. 반대편의 밝고 비어 있는 벽·하늘 영역에 브랜드명(작게) → 헤드라인 → 카피를 왼쪽 정렬 한 덩어리로. 혜택은 작은 {B} 둥근 라벨, 가격·일정·위치·연락처는 아래쪽 가는 선 위에 한 줄. 글자 뒤 상자·패널 없음", en: "the photo fills the canvas with the hero on a rule-of-thirds point; on the opposite bright, empty wall or sky area sit the brand name (small) → headline → tagline as one left-aligned block; the offer as a small rounded {B} label; price, date, location and contact as one line above a thin rule near the bottom; no boxes or panels behind text" },
    palette: { ko: "사진 자체의 따뜻하고 부드러운 자연색, 글자는 짙은 먹색(어두운 곳 위라면 흰색), {B}는 라벨 하나에만", en: "the photo's own soft, warm natural colors; text in deep ink (white only over dark areas); {B} only on the label" },
    texture: { ko: "한쪽 창에서 드는 오전 자연광, 부드럽고 긴 그림자, 리넨·나무·도자기의 실제 질감, 고운 필름 입자", en: "morning daylight from one window, soft long shadows, real linen / wood / ceramic textures, fine film grain" },
    imagery: { ko: "실제로 촬영한 사진 한 장: {hero}. 연출은 최소한으로, 소품은 2~3개만", en: "one real photograph: {hero}; minimal styling with only 2–3 props" },
  },
  {
    id: "kitchen", group: "photo", label: "키친 플랫레이", emoji: "🧺", hint: "재료·손맛", en: "overhead kitchen flat-lay", photo: true,
    brief: { ko: "위에서 내려다본 키친·작업대 플랫레이 — 재료와 손길이 보이는 정직한 로컬 브랜드 사진", en: "an overhead flat-lay on a kitchen or workbench — an honest local-brand photo where ingredients and handwork show" },
    type: { ko: "헤드라인은 Noto Serif KR SemiBold 같은 단정한 한글 명조, 정보는 작은 고딕", en: "a neat Korean Myeongjo serif (in the style of Noto Serif KR SemiBold) for the headline; a small sans for info" },
    layout: { ko: "정면 부감. 제품과 재료는 화면 아래쪽 2/3와 가장자리에 리듬 있게 놓고, 위쪽 1/3의 빈 나무판(또는 리넨) 위에 헤드라인과 카피를 가운데 정렬. 혜택은 재료 사이에 놓인 작은 크라프트 종이 태그 위에, 브랜드명과 정보 줄은 맨 아래 가운데 한 줄", en: "straight top-down; the product and ingredients sit rhythmically across the lower two-thirds and edges, and the headline and tagline are centered on the empty board (or linen) in the top third; the offer on a small kraft-paper tag among the ingredients; brand name and info line centered along the bottom" },
    palette: { ko: "나무 도마·리넨·흙빛 그릇의 자연색, 재료 고유의 색이 포인트, {B}는 태그 끈이나 천 한 조각에만", en: "the natural colors of a wooden board, linen and earthenware, with the ingredients' own colors as accents; {B} only on a tag string or a scrap of cloth" },
    texture: { ko: "위에서 드는 부드러운 자연광, 재료의 물기·결·부스러기까지 보이는 실제 질감", en: "soft daylight from above; real textures down to moisture, grain and crumbs" },
    imagery: { ko: "실제 부감 사진: {hero}. 손이 나온다면 일하는 손 한쪽만 자연스럽게", en: "a real overhead photograph: {hero}; if a hand appears, just one working hand, natural" },
  },
  {
    id: "editorial", group: "type", label: "매거진 에디토리얼", emoji: "📖", hint: "고급·여백", en: "lifestyle magazine editorial", photo: true,
    brief: { ko: "한국 라이프스타일 매거진 화보 — 크림색 종이, 넉넉한 여백, 품격 있는 명조, 액자처럼 놓인 사진", en: "a Korean lifestyle-magazine editorial — cream paper, generous margins, refined serif type and a framed photograph" },
    type: { ko: "헤드라인은 마루 부리·Noto Serif KR 같은 대비 강한 한글 명조를 크게, 브랜드명은 자간을 넓혀 맨 위에 작게, 정보는 작고 단정한 고딕", en: "a high-contrast Korean Myeongjo (in the style of Maru Buri / Noto Serif KR) for the headline, large; the brand name small and widely spaced at the very top; small, clean sans for info" },
    layout: { ko: "위쪽 약 60%에 사진을 균일한 여백 안에 액자처럼. 아래 크림색 종이 영역에 헤드라인을 왼쪽 정렬로, 카피는 그 아래 두 줄 이내, 오른쪽 아래에 정보(가격·일정·위치·연락처)를 작은 글자로 세로로 쌓기. 혜택은 사진 모서리에 걸친 작은 {A} 원형 스티커", en: "the photo framed in the top ~60% with even margins; on the cream paper below, the headline left-aligned, the tagline under it in at most two lines, and the info (price, date, location, contact) stacked small at bottom-right; the offer as a small round {A} sticker overlapping a photo corner" },
    palette: { ko: "크림색 종이, 먹색 글자, 차분한 자연색 사진, {B}는 얇은 선 하나, {A}는 스티커 하나", en: "cream paper, ink-black text, calm natural-color photo; {B} for one thin rule and {A} for the sticker only" },
    texture: { ko: "비코팅 종이 결, 사진의 고운 필름 입자", en: "uncoated paper grain, fine film grain in the photo" },
    imagery: { ko: "실제 에디토리얼 사진: {hero}", en: "a real editorial photograph: {hero}" },
  },
  {
    id: "craftlabel", group: "graphic", label: "로컬 크래프트 라벨", emoji: "🏷️", hint: "손맛·정성", en: "local craft label graphic",
    brief: { ko: "동네 공방에서 찍어 낸 듯한 크래프트 라벨·패키지 그래픽 — 활판 인쇄 같은 손맛, 정직하고 따뜻한 로컬 브랜드", en: "a craft label / packaging graphic that looks letterpress-printed in a local workshop — honest, warm, handmade" },
    type: { ko: "브랜드명과 헤드라인은 굵은 한글 명조를 가운데 정렬로, 작은 글자는 자간 넓은 고딕. 장식 괘선과 작은 별표", en: "a bold Korean Myeongjo for the brand name and headline, centered; widely spaced small sans for minor text; ornamental rules and small asterisks" },
    layout: { ko: "캔버스 가운데 큰 라벨(아치형 또는 둥근 사각 이중 테두리)이 주인공: 위에 아치를 따라 브랜드명 → 가운데 {hero}를 한 색 선화로 → 헤드라인 → 짧은 괘선 → 카피. 혜택은 라벨 아래 리본 띠 위에, 정보 줄은 라벨 밖 맨 아래 작은 한 줄", en: "one large label (arched or rounded-rectangle double border) centered on the canvas: the brand name following the arch at top → {hero} as one-color line art in the middle → headline → a short rule → tagline; the offer on a ribbon banner below the label; the info line small along the very bottom outside the label" },
    palette: { ko: "크래프트지(갈색 무지 종이) 바탕, 잉크는 {B} 한 색과 먹색, {A}는 리본에만", en: "brown kraft paper background; inks in {B} plus ink-black; {A} only on the ribbon" },
    texture: { ko: "활판·실크스크린 인쇄의 살짝 고르지 않은 잉크, 종이 섬유. 그림자·원근 없는 정면 평면", en: "slightly uneven letterpress / screen-print ink, paper fibers; flat, front-facing, no shadows or perspective" },
    imagery: { ko: "{hero} — 라벨 안에 한 색 판화·선화로", en: "{hero}, as one-color woodcut-style line art inside the label" },
  },
  {
    id: "studio", group: "photo", label: "미니멀 스튜디오", emoji: "◻️", hint: "모던·집중", en: "minimal studio product shot", photo: true,
    brief: { ko: "단색 배경지 위 미니멀 스튜디오 사진 — 오브제 하나와 또렷한 그림자, 갤러리 같은 고요함", en: "a minimal studio photograph on a seamless colored backdrop — a single object and a crisp shadow, gallery-quiet" },
    type: { ko: "Pretendard Medium 같은 깔끔한 산세리프를 작게(헤드라인도 과하지 않게), 넓은 자간", en: "a clean sans (in the style of Pretendard Medium), set small even for the headline, with wide tracking" },
    layout: { ko: "톤 다운한 {B} 계열 이음매 없는 배경지 가운데 약간 아래에 주인공 하나, 그 아래 단단한 그림자. 헤드라인은 위쪽 가운데 작게, 카피는 바로 아래. 브랜드명은 맨 아래 가운데, 정보 줄은 그 위 한 줄. 혜택은 오른쪽 위에 작은 글자만(장식 없이)", en: "one hero object slightly below center on a seamless toned-down {B} backdrop, with a firm shadow beneath; the headline small at top center with the tagline just below; the brand name at bottom center with the info line above it; the offer as small plain text at top-right" },
    palette: { ko: "톤 다운한 {B} 배경지 한 색, 글자는 같은 계열의 더 짙은 색이나 흰색, {A}는 아주 작게", en: "a single toned-down {B} backdrop; text in a deeper shade of the same hue or white; {A} only as a tiny touch" },
    texture: { ko: "한 방향의 스튜디오 조명과 또렷한 그림자, 무광 배경지", en: "directional studio light with a crisp shadow, matte paper backdrop" },
    imagery: { ko: "스튜디오에서 찍은 실제 사진: {hero}", en: "a real studio photograph: {hero}" },
  },
  {
    id: "watercolor", group: "illust", label: "수채 일러스트", emoji: "🖌️", hint: "따뜻·감성", en: "hand-painted watercolor illustration",
    brief: { ko: "손으로 그린 수채 일러스트 — 맑은 물빛 번짐과 가는 연필 선, 여행 엽서 같은 따뜻함", en: "a hand-painted watercolor illustration — clear washes and fine pencil lines, warm like a travel postcard" },
    type: { ko: "헤드라인은 둥근 한글 명조나 부드러운 손글씨풍(아주 읽기 쉽게), 정보는 작은 둥근 고딕", en: "a rounded Korean serif or soft hand-lettered style for the headline (very legible); small rounded sans for info" },
    layout: { ko: "그림이 가운데에서 흰 종이 여백으로 자연스럽게 번져 나감(테두리 없음). 위쪽 여백에 헤드라인과 카피를 가운데 정렬, 아래쪽 여백에 정보 한 줄과 브랜드명. 혜택은 그림 한쪽에 수채로 칠한 {B} 리본 위", en: "the painting bleeds softly from the center into white paper margins (no border); headline and tagline centered in the top margin; one info line and the brand name in the bottom margin; the offer on a {B} watercolor ribbon at one side of the painting" },
    palette: { ko: "흰 수채 종이, 맑고 옅은 초록·하늘·흙색, {B}는 리본과 한두 군데 포인트", en: "white watercolor paper; clear, light greens, sky blues and earth tones; {B} on the ribbon and one or two touches" },
    texture: { ko: "수채 번짐과 종이 요철, 가는 연필 밑선. 디지털 그라데이션 없음", en: "watercolor blooms, cold-press paper tooth, fine pencil underdrawing; no digital gradients" },
    imagery: { ko: "수채로 그린 장면: {hero}", en: "a watercolor-painted scene: {hero}" },
  },
  {
    id: "market", group: "graphic", label: "레트로 장터 포스터", emoji: "🎪", hint: "정겨움·유쾌", en: "retro Korean market poster",
    brief: { ko: "70~80년대 한국 장터·극장 포스터를 세련되게 되살린 실크스크린 포스터 — 잉크 3색, 굵은 글자, 정겨운 그림", en: "a refined revival of a 1970s–80s Korean market / cinema poster as a screen print — three inks, bold lettering, friendly drawing" },
    type: { ko: "헤드라인은 손으로 그린 간판 글씨 같은 굵고 각진 레트로 한글 고딕을 크게(살짝 장체), 정보는 단단한 고딕", en: "a bold, angular retro Korean gothic like hand-painted signage for the headline (slightly condensed), large; a sturdy sans for info" },
    layout: { ko: "위쪽에 헤드라인을 크게 두 줄로, 가운데에 {hero}를 단순한 판화풍 그림으로 크게, 아래에 카피와 정보 줄을 띠 모양 칸에. 혜택은 별 모양 터짐 도장 안에 {A}로, 브랜드명은 맨 아래 띠 가운데. 바깥에 얇은 테두리", en: "the headline large in two lines at the top; {hero} drawn big and simple in the middle; the tagline and info line in banded strips at the bottom; the offer inside a starburst stamp in {A}; the brand name centered in the bottom band; a thin outer border" },
    palette: { ko: "미색 종이 위 잉크 3색: {B}, {A}, 먹색", en: "three inks on off-white paper: {B}, {A} and ink-black" },
    texture: { ko: "실크스크린 잉크의 살짝 어긋난 판, 종이 결. 깨끗한 인쇄(가짜 낡음·흠집 효과 금지)", en: "slight screen-print misregistration and paper grain; a clean print (no fake distressing or scratches)" },
    imagery: { ko: "{hero} — 단순한 형태의 실크스크린 판화 그림으로", en: "{hero}, as a simple screen-printed illustration" },
  },
  {
    id: "flyer", group: "type", label: "동네 신문·전단", emoji: "🗞️", hint: "신뢰·정보", en: "local newspaper ad / flyer", photo: true,
    brief: { ko: "동네 신문 광고·전단지 — 단 나눔 그리드, 망점 사진, 신뢰감 있게 정리된 정보", en: "a local newspaper ad / flyer — column grid, halftone photo, trustworthy organized info" },
    type: { ko: "헤드라인은 굵은 한글 명조를 폭 전체에, 브랜드명은 맨 위 제호처럼 이중선 사이에, 정보는 촘촘한 고딕", en: "a heavy Korean Myeongjo headline across the full width; the brand name as a masthead between double rules at the top; compact sans for info" },
    layout: { ko: "맨 위 이중선 사이에 브랜드명(제호), 그 아래 헤드라인이 전체 폭, 그 아래 2~3단 그리드: 큰 칸에 망점 사진, 옆 칸에 카피와 정보(가격·일정·위치·연락처)를 굵은 괘선으로 나눈 표처럼. 혜택은 {B} 테두리 박스 안 굵은 글자. 본문 자리는 읽을 수 없는 회색 막대", en: "the brand name as the masthead between double rules at the top; the headline spans the full width below; then a 2–3 column grid: the halftone photo in the large cell, the tagline and info (price, date, location, contact) in the side cell like a ruled table; the offer in bold inside a {B}-bordered box; any body-copy area as illegible grey bars" },
    palette: { ko: "미색 신문 용지와 먹색, {B}는 박스 테두리와 강조에만", en: "off-white newsprint and black ink; {B} only for the box border and highlights" },
    texture: { ko: "신문 용지 결, 거친 망점, 살짝 고르지 않은 잉크", en: "newsprint grain, coarse halftone dots, slightly uneven ink" },
    imagery: { ko: "망점 흑백 사진: {hero}", en: "a black-and-white halftone photo: {hero}" },
  },
  {
    id: "banner", group: "photo", label: "맛집 띠 배너", emoji: "🍲", hint: "식욕·한눈에", en: "bold Korean food-shop banner", photo: true,
    brief: { ko: "동네 맛집 오픈·행사 배너 — 김이 오르는 음식 사진 아래 진한 색 띠에 굵은 글자, 멀리서도 한눈에 읽히는 정직한 광고", en: "a local restaurant opening / event banner — a steaming food photo above a solid color band with heavy type, an honest ad readable at a glance from afar" },
    type: { ko: "헤드라인은 Pretendard Black 같은 아주 굵은 한글 고딕을 흰색으로 크게, 혜택은 {A} 굵은 고딕 한 줄, 브랜드명은 띠 위쪽 작은 흰 둥근 이름표 안 짙은 글자, 정보는 흰색 미디엄 고딕", en: "an extra-heavy Korean gothic (in the style of Pretendard Black) for the headline, large and white; the offer as one line of bold gothic in {A}; the brand name in dark letters inside a small white rounded name tag at the top of the band; info in white medium gothic" },
    layout: { ko: "위쪽 약 55~60%는 주제 이미지 사진이 가장자리까지 채움. 아래 약 40%는 {B} 단색 띠(살짝 진하게): 왼쪽 정렬로 브랜드명 이름표 → 헤드라인 → 혜택 → 정보 줄(날짜·위치·연락처를 가는 세로선으로 나눠 한 줄). 띠와 사진 경계는 반듯한 직선", en: "the top ~55–60% is the main subject photo, full-bleed. The bottom ~40% is a solid band in {B} (slightly deepened): left-aligned brand-name tag → headline → offer → one info line (date, place and contact split by thin vertical bars). A clean straight edge between photo and band" },
    palette: { ko: "사진은 따뜻하고 식욕 도는 자연색, 띠는 {B} 한 색, 글자는 흰색과 {A}만", en: "warm, appetizing natural color in the photo; the band in {B} only; text in white and {A} only" },
    texture: { ko: "어두운 나무 테이블, 한쪽에서 드는 따뜻한 빛과 피어오르는 김, 띠는 평면 인쇄(그라데이션·그림자 없음)", en: "a dark wooden table, warm side light and rising steam; the band is flat print with no gradient or shadow" },
    imagery: { ko: "가까이서 찍은 실제 음식 사진: {hero}", en: "a real close-up food photograph: {hero}" },
  },
  {
    id: "brutalsale", group: "graphic", label: "브루탈 세일", emoji: "⬛", hint: "할인·임팩트", en: "neo-brutalist sale poster", photo: true,
    brief: { ko: "네오 브루탈 세일 포스터 — 굵은 검정 테두리, 거대한 숫자·글자, 장식 없음", en: "a neo-brutalist sale poster — thick black borders, giant numbers and letters, zero decoration" },
    type: { ko: "혜택은 거대한 굵은 그로테스크 숫자·글자, 헤드라인은 Pretendard Black 같은 아주 굵은 한글 고딕, 정보는 모노스페이스", en: "giant heavy grotesque numerals / letters for the offer; an extra-heavy Korean gothic (in the style of Pretendard Black) for the headline; monospace for info" },
    layout: { ko: "굵은 검정 선(폭의 약 1%)으로 나눈 블록 그리드. 가장 큰 블록에 혜택을 거대하게, 헤드라인은 자기 블록에, 제품 사진(누끼)은 한 블록을 꽉 채우고, 정보는 아래 반전 블록(검정 바탕 흰 글자), 브랜드명은 작은 블록에", en: "a block grid divided by thick black rules (≈1% of width): the offer huge in the largest block, the headline in its own block, a cut-out product photo filling one block, info in an inverted block at the bottom (white on black), the brand name in a small block" },
    palette: { ko: "흰색·검정과 {B} 한 색만 원색 그대로", en: "white, black and {B} as the only color, at full strength" },
    texture: { ko: "평면 인쇄, 칼같이 선명한 모서리, 그림자·그라데이션 없음", en: "flat print, razor-sharp edges, no shadows or gradients" },
    imagery: { ko: "{hero} — 한 블록 안에 배경을 지운 실제 제품 사진으로", en: "{hero}, as a real cut-out product photo inside one block" },
  },
  {
    id: "collage", group: "illust", label: "종이 콜라주", emoji: "✂️", hint: "발랄·손맛", en: "handmade paper collage", photo: true,
    brief: { ko: "손으로 만든 종이 콜라주 — 오리고 찢은 종이, 마스킹 테이프, 실제 사진 조각을 색지 위에, 발랄하고 손에 잡힐 듯", en: "a handmade paper collage — cut and torn paper, masking tape and real photo cut-outs on colored paper, playful and tactile" },
    type: { ko: "헤드라인은 색지를 오려 만든 통통하고 둥근 손글씨, 단어마다 다른 색. 정보는 찢은 종이 라벨 위 친근한 고딕", en: "chunky, rounded lettering cut from colored paper, each word a different color; info in a friendly sans on torn-paper labels" },
    layout: { ko: "가운데 쌓기: 오려 낸 제품 사진 조각을 가운데에 크게, 그 위나 아래에 손글씨 헤드라인, 찢은 흰 종이 띠에 카피. 혜택은 둥글게 오린 {A} 종이 스티커, 브랜드명과 정보는 아래쪽 마스킹 테이프로 붙인 작은 라벨. 소품은 모서리 쪽으로, 글자는 가리지 않게", en: "a centered stack: a large cut-out photo of the product in the middle with the hand-cut headline above or below it and the tagline on a torn white paper strip; the offer as a round {A} paper sticker; the brand name and info on a small label taped near the bottom; extras pushed to the corners, never covering text" },
    palette: { ko: "{B} 색지 배경, 글자는 원색 색지에 {A}를 조금", en: "{B} colored paper background; lettering in primary-colored papers with touches of {A}" },
    texture: { ko: "실제 종이 섬유, 찢긴 가장자리, 마스킹 테이프, 조각마다 부드러운 자연 그림자", en: "real paper fibers, torn edges, masking tape, soft natural shadows under each piece" },
    imagery: { ko: "위에서 촬영한 실제 종이 콜라주: {hero}", en: "a real paper collage photographed from above: {hero}" },
  },
  {
    id: "cinematic", group: "photo", label: "풍경 시네마틱", emoji: "🏞️", hint: "공간·여행", en: "full-bleed cinematic landscape", photo: true,
    brief: { ko: "화면 전체를 채운 풍경 사진 위에 글자를 얹은 캠페인 — 이른 아침 강과 산의 공기감이 느껴지는", en: "a campaign with type over a full-bleed landscape photo — you can feel the early-morning air of river and hills" },
    type: { ko: "헤드라인은 가늘고 우아한 한글 명조(또는 깔끔한 고딕)를 중간 크기로, 넓은 자간, 정보는 작은 고딕", en: "a light, elegant Korean Myeongjo (or a clean gothic) for the headline at a moderate size, wide tracking; small sans for info" },
    layout: { ko: "사진이 가장자리까지 채움. 하늘·물안개 같은 밝고 빈 영역(보통 위쪽)에 헤드라인과 카피를 가운데 정렬, 아래쪽 어두운 땅 영역에 정보 한 줄과 브랜드명. 혜택은 작은 {B} 사각 라벨", en: "the photo fills the canvas edge to edge; headline and tagline centered in the bright, empty sky or mist area (usually the top); one info line and the brand name over the darker ground at the bottom; the offer as a small square {B} label" },
    palette: { ko: "사진 자체의 새벽빛 자연색(물빛 청회색·초록), 글자는 흰색 또는 먹색, {B} 라벨 하나", en: "the photo's own dawn palette (blue-grey water, greens); text in white or ink-black; one {B} label" },
    texture: { ko: "실제 풍경 사진, 공기 원근, 고운 입자", en: "a real landscape photograph, atmospheric perspective, fine grain" },
    imagery: { ko: "실제 풍경 사진 한 장: {hero}", en: "one real landscape photograph: {hero}" },
  },
  {
    id: "swiss", group: "type", label: "모던 그리드", emoji: "📐", hint: "정돈·현대", en: "Swiss-style modern grid",
    brief: { ko: "스위스 타이포그래피 스타일 — 엄격한 모듈 그리드, 비대칭, 큰 색면, 강한 크기 대비", en: "Swiss / International Typographic Style — a strict modular grid, asymmetry, big color fields and strong scale contrast" },
    type: { ko: "Pretendard 같은 네오 그로테스크 한글 고딕. 헤드라인은 아주 굵고 크게, 나머지는 작게", en: "a neo-grotesque Korean gothic (in the style of Pretendard); the headline very bold and large, everything else small" },
    layout: { ko: "비대칭 모듈 그리드: 헤드라인이 폭의 2/3를 가로지르고, 제품 사진이나 비주얼은 그리드 칸 하나를 꽉 채우거나 가장자리 밖으로 잘림. 정보는 가는 선으로 나눈 그리드 칸에, 혜택은 단색 알약 모양, 브랜드명은 왼쪽 위 작게", en: "an asymmetric modular grid: the headline spans two-thirds of the width; the product photo or visual fills one grid cell or bleeds off an edge; info sits in grid cells divided by hairlines; the offer as a solid pill; the brand name small at top-left" },
    palette: { ko: "{B}를 큰 색면으로 과감하게, 글자는 흰색·검정, {A}는 작은 포인트", en: "{B} used boldly as a large color field; white and black type; {A} as a small spot" },
    texture: { ko: "평면 인쇄, 선명한 모서리", en: "flat print, crisp edges" },
    imagery: { ko: "{hero} — 그리드 칸에 맞춘 사진이나 평면 도형으로", en: "{hero}, as a photo cropped to a grid cell or as flat shapes" },
  },


  {
    id: "flash", group: "photo", isNew: true, label: "다이렉트 플래시 스냅", emoji: "📸", hint: "힙·날것", en: "direct-flash snapshot", photo: true,
    brief: { ko: "카메라 정면 플래시를 터뜨려 찍은 날것의 스냅 — 과감한 노출, 뒤로 떨어지는 짙은 그림자, 잡지 화보보다 친구 카메라롤 같은 힙한 순간", en: "a raw snapshot shot with on-camera direct flash — bold exposure, a hard shadow falling behind, a cool moment that feels like a friend's camera roll rather than a polished campaign" },
    type: { ko: "헤드라인은 Pretendard ExtraBold 같은 굵은 한글 고딕을 사진 위에 흰색으로 크게(최대 2줄), 브랜드명은 작은 대문자 느낌의 굵은 고딕, 정보는 날짜 스탬프처럼 작은 모노스페이스", en: "a heavy Korean gothic (in the style of Pretendard ExtraBold) for the headline, large in white over the photo (max 2 lines); the brand name in small bold caps-style gothic; info in small monospace like a camera date stamp" },
    layout: { ko: "사진이 캔버스를 꽉 채우고 주인공은 정가운데 약간 아래, 살짝 기울어진 핸드헬드 구도. 헤드라인은 위쪽 가운데에 정렬해 사진 위에 직접 얹기, 카피는 바로 아래 한 줄. 혜택은 사진 한쪽 모서리에 붙인 {B} 사각 스티커, 일정·위치는 오른쪽 아래에 주황색 필름 날짜 스탬프 스타일 한 줄, 브랜드명은 맨 아래 가운데. 상자·패널 없음", en: "the photo fills the canvas with the subject just below dead center, in a slightly tilted handheld framing; the headline centered at the top directly over the photo, the tagline one line below; the offer as a square {B} sticker stuck on one corner; date and location as one orange film-date-stamp line at bottom-right; the brand name at bottom center; no boxes or panels" },
    palette: { ko: "플래시가 만든 높은 대비 — 밝게 튀는 피사체와 어둡게 떨어지는 배경, 색은 실제 그대로 진하게, {B}는 스티커 하나에만", en: "the high contrast of flash — a bright, popping subject against a background that falls dark; true colors, punchy; {B} only on the sticker" },
    texture: { ko: "정면 하드 플래시, 피사체 바로 뒤의 선명한 그림자, 살짝 번들거리는 하이라이트, 컴팩트 카메라의 거친 입자. 보정한 듯 매끈한 피부·광택 CGI 금지", en: "on-camera hard flash, a crisp shadow right behind the subject, slightly shiny highlights, compact-camera grain; no retouched smooth skin or glossy CGI" },
    imagery: { ko: "플래시로 찍은 실제 스냅 사진 한 장: {hero}. 밤이나 실내, 손이 제품을 들고 있거나 테이블 위에 아무렇게나 놓인 순간", en: "one real flash snapshot: {hero}, at night or indoors — a hand holding the product, or it casually set down on a table" },
  },
  {
    id: "filmsnap", group: "photo", isNew: true, label: "필름 포토덤프", emoji: "🎞️", hint: "꾸안꾸·일상", en: "35mm film photo dump", photo: true,
    brief: { ko: "35mm 필름 카메라로 하루를 기록한 포토덤프 — 4장의 스냅이 한 화면에 모인, 꾸미지 않은 브랜드의 일상", en: "a 35mm-film photo dump recording a day — four candid snapshots gathered on one canvas, the brand's unstaged everyday life" },
    type: { ko: "헤드라인은 Noto Serif KR Medium 같은 단정한 한글 명조를 작게서 중간 크기로, 브랜드명은 자간 넓은 작은 고딕, 정보는 사진 캡션처럼 아주 작은 고딕", en: "a neat Korean Myeongjo (in the style of Noto Serif KR Medium) for the headline, small to medium; the brand name in small, widely spaced gothic; info tiny like photo captions" },
    layout: { ko: "미색 바탕에 2×2 그리드로 필름 사진 4장(가는 흰 여백, 장마다 크기 같게): 1칸은 {hero} 클로즈업, 나머지 3칸은 손·공간·풍경 같은 하루의 조각. 헤드라인과 카피는 그리드 위쪽 가운데, 브랜드명과 정보 줄은 그리드 아래 가운데 한 줄. 혜택은 사진 한 장 모서리에 걸친 작은 {A} 동그라미 라벨", en: "on off-white, four film photos in a 2×2 grid (thin white gutters, equal sizes): one cell a close-up of {hero}, the other three fragments of the day — hands, the space, the landscape; headline and tagline centered above the grid; brand name and info line centered below it; the offer as a small round {A} label over one photo's corner" },
    palette: { ko: "필름 특유의 바랜 따뜻한 색 — 살짝 노란 하이라이트, 초록빛 그림자, 미색 바탕, {B}는 아주 조금", en: "film's faded warm palette — slightly yellow highlights, greenish shadows, off-white ground; {B} only sparingly" },
    texture: { ko: "굵은 필름 입자, 살짝 뭉개진 초점, 가장자리 약한 빛 샘. 디지털 샤픈·HDR 금지", en: "coarse film grain, slightly soft focus, faint light leak at an edge; no digital sharpening or HDR" },
    imagery: { ko: "실제 필름 스냅 4장 — 주인공 컷: {hero}. 나머지는 같은 날 같은 빛으로 찍은 일상 조각(얼굴보다 손·뒷모습)", en: "four real film snapshots — the hero frame: {hero}; the others everyday fragments shot the same day in the same light (hands and backs rather than faces)" },
  },
  {
    id: "bigtype", group: "type", isNew: true, label: "빅 타이포 포스터", emoji: "🔠", hint: "글자가 그림", en: "expressive big-type poster",
    brief: { ko: "글자 자체가 그림이 되는 타이포그래피 포스터 — 헤드라인이 화면을 가득 채우고, 이미지는 거의 없거나 아주 작게", en: "a typographic poster where the letters are the image — the headline fills the canvas, with little or no imagery" },
    type: { ko: "헤드라인은 아주 굵은 한글 고딕(Pretendard Black 같은)을 캔버스 폭 가득, 글자 사이를 좁히고 줄 간격을 바짝 붙여 거대한 덩어리로. 한 단어만 {A}색 또는 아웃라인. 나머지는 아주 작은 고딕", en: "an extra-heavy Korean gothic (in the style of Pretendard Black) for the headline at full canvas width, tight tracking and tight leading so it becomes one massive block; one word in {A} or as an outline; everything else in very small gothic" },
    layout: { ko: "헤드라인이 캔버스의 60~75%를 차지하는 거대한 글자 덩어리로 가운데에, 글자 일부는 가장자리에서 살짝 잘려 나가도 됨. 위쪽 띠에 브랜드명과 일정을 양 끝 정렬로 작게, 아래쪽 띠에 카피·위치·연락처를 한 줄로 작게. 혜택은 거대한 글자 위에 겹친 작은 {A} 원형 도장. {hero}는 글자 획 사이에 아주 작게 하나만 끼워 넣거나 생략", en: "the headline as a giant letter block filling 60–75% of the canvas in the middle, letters may crop slightly off the edges; a thin top band with the brand name and date small, justified to both ends; a thin bottom band with tagline, location and contact in one small line; the offer as a small round {A} stamp overlapping the giant type; {hero} either tucked tiny between strokes once, or omitted" },
    palette: { ko: "{B} 단색 바탕에 흰색 또는 먹색 글자, {A}는 한 단어와 도장에만 — 총 3색 이내", en: "a solid {B} background with white or ink-black type; {A} only on one word and the stamp — three colors max" },
    texture: { ko: "평면 인쇄, 아주 미세한 종이 결, 날카로운 글자 모서리. 그림자·그라데이션·3D 글자 금지", en: "flat print, very fine paper grain, razor-sharp letter edges; no shadows, gradients or 3D lettering" },
    imagery: { ko: "{hero} — 글자 사이에 작은 실사 누끼나 단색 실루엣 하나로만(없어도 됨)", en: "{hero}, only as one small cut-out photo or flat silhouette among the letters (optional)" },
  },
  {
    id: "riso", group: "graphic", isNew: true, label: "리소그래프 2도 인쇄", emoji: "🖨️", hint: "굿즈·인디", en: "two-color risograph print",
    brief: { ko: "리소그래프로 찍어 낸 2도 별색 포스터 — 형광 핑크·블루 같은 별색 두 가지가 겹쳐 제3의 색을 만들고, 판이 살짝 어긋난 인디 인쇄물", en: "a two-color risograph print poster — two spot inks overlap to make a third color, with slight misregistration, like an indie print-shop piece" },
    type: { ko: "헤드라인은 굵고 둥근 끝의 한글 고딕을 크게, 한 가지 별색으로. 정보는 작은 고딕. 모든 글자는 잉크 한 판에서 나온 것처럼 평평하게", en: "a bold, round-terminal Korean gothic for the headline, large, in one spot ink; small gothic for info; all type flat as if printed from a single ink drum" },
    layout: { ko: "가운데 쌓기: 위쪽 1/3에 헤드라인을 가운데 정렬로 크게, 가운데에 {hero}를 망점 그림으로 크게, 아래에 카피와 정보 줄. 혜택은 그림 위에 겹친 별색 원. 브랜드명은 맨 아래 가운데. 두 색 판이 1~2mm 어긋나 가장자리에 흰 틈과 겹친 색이 보임", en: "a centered stack: the headline large and centered in the top third, {hero} as a big halftone drawing in the middle, tagline and info line below; the offer as a spot-ink circle overlapping the image; the brand name at bottom center; the two ink layers misregistered by 1–2 mm so white gaps and overlap colors show at edges" },
    palette: { ko: "미색 종이 위 별색 2도: {B} 계열을 리소 별색처럼(예: 형광 핑크·블루·그린 중 하나)과 {A}, 둘이 겹친 곳의 혼합색까지 — 그 밖의 색 없음", en: "two spot inks on off-white paper: a riso-style version of {B} (fluorescent pink, blue or green family) and {A}, plus the mixed color where they overlap — no other colors" },
    texture: { ko: "거친 망점 그라데이션, 잉크가 덜 묻은 얼룩, 종이 섬유, 판 어긋남. 디지털 그라데이션 금지", en: "coarse halftone tonal steps, uneven ink coverage, paper fibers, misregistration; no digital gradients" },
    imagery: { ko: "{hero} — 두 별색으로 분판한 망점 일러스트(또는 망점 사진)", en: "{hero}, as a halftone illustration (or halftone photo) separated into the two spot inks" },
  },
  {
    id: "doodle", group: "illust", isNew: true, label: "사진 + 손낙서", emoji: "✍️", hint: "발랄·친근", en: "photo with hand-drawn doodles", photo: true,
    brief: { ko: "실제 제품 사진 위에 흰 마커로 낙서한 듯한 이미지 — 동그라미·화살표·밑줄·작은 별 같은 손그림이 사진 속 포인트를 짚어 주는 친근한 피드", en: "a real product photo with marker doodles drawn over it — circles, arrows, underlines and small stars by hand point out details, friendly and personal" },
    type: { ko: "헤드라인은 마커로 직접 쓴 듯한 굵은 한글 손글씨(또박또박 읽기 쉽게, 메모먼트 꾹꾹 같은 느낌), 정보는 작은 깔끔한 고딕", en: "bold hand-written Korean in marker for the headline (neat and very legible, in the spirit of a marker handwriting font); small clean gothic for info" },
    layout: { ko: "사진이 캔버스를 꽉 채우고 {hero}가 가운데. 헤드라인은 사진 위쪽 빈 영역에 손글씨로 살짝 기울여, 카피는 제품을 가리키는 화살표 끝에 짧은 손글씨 메모로. 혜택은 손으로 그린 동그라미 안에. 브랜드명과 정보 줄은 맨 아래에 깔끔한 고딕으로 한 줄. 낙서는 사진 속 실제 물건을 짚는 것만, 3~5개 이내", en: "the photo fills the canvas with {hero} in the center; the headline hand-written and slightly tilted in the empty top area; the tagline as a short hand-written note at the end of an arrow pointing to the product; the offer inside a hand-drawn circle; the brand name and info line in clean gothic as one line at the bottom; doodles only point at real things in the photo, 3–5 max" },
    palette: { ko: "사진 자체의 자연색, 낙서는 흰색 마커와 {A} 마커 두 색만, {B}는 브랜드명에만", en: "the photo's natural colors; doodles in white marker plus {A} marker only; {B} only on the brand name" },
    texture: { ko: "실제 자연광 사진의 고운 입자, 낙서는 마커 특유의 살짝 고르지 않은 선 굵기와 끊김. 벡터처럼 매끈한 선 금지", en: "fine grain of a real daylight photo; doodles with marker's slightly uneven stroke width and breaks; no perfectly smooth vector lines" },
    imagery: { ko: "실제 촬영 사진 한 장: {hero}. 낙서가 들어갈 여백이 있게 단순한 배경", en: "one real photograph: {hero}, on a simple background with room for the doodles" },
  },
  {
    id: "infographic", group: "type", isNew: true, label: "상세페이지 인포그래픽", emoji: "📊", hint: "설득·비교", en: "product-detail infographic", photo: true,
    brief: { ko: "펀딩·스마트스토어 상세페이지 한 섹션 같은 제품 인포그래픽 — 누끼 제품 사진을 가운데 두고 가는 지시선으로 핵심 특징을 짚는, 깔끔하고 믿음 가는 설명 이미지", en: "a product infographic like one section of a crowdfunding / online-store detail page — a cut-out product photo in the center with thin callout lines pointing to key features, clean and trustworthy" },
    type: { ko: "헤드라인은 Pretendard Bold 같은 단정한 한글 고딕을 굵게, 큰 숫자 하나(혜택·수치)는 아주 크게, 지시선 끝 라벨은 작은 미디엄 고딕", en: "a neat Korean gothic (in the style of Pretendard Bold) for the headline; one key number (offer or stat) very large; small medium-weight gothic for callout labels" },
    layout: { ko: "위에서 아래로 읽는 세로 흐름: 맨 위 가운데 헤드라인과 카피 → 가운데에 누끼 제품 사진을 크게, 양옆으로 가는 지시선 3개가 제품의 실제 부위를 가리키고 끝에 짧은 라벨(라벨 글자는 읽을 수 없는 회색 막대로) → 아래에 큰 숫자로 혜택, 그 옆에 가격 → 맨 아래 브랜드명. 연한 {B} 계열 둥근 카드 하나가 제품 뒤에 깔림", en: "a top-to-bottom reading flow: headline and tagline centered at the top → a large cut-out product photo in the middle with three thin callout lines on both sides pointing to real parts of the product, each ending in a short label (label text as illegible grey bars) → the offer as a big number below, with the price beside it → the brand name at the very bottom; one pale {B}-tinted rounded card sits behind the product" },
    palette: { ko: "흰 바탕, 먹색 글자, 연한 {B} 카드, 숫자와 지시선 점은 {A}", en: "white background, ink-black type, a pale {B} card; {A} for the big number and callout dots" },
    texture: { ko: "스튜디오 조명의 누끼 사진(부드러운 접지 그림자), 나머지는 평면 그래픽. 아이콘 남발·3D 아이콘·그라데이션 금지", en: "a studio-lit cut-out photo with a soft contact shadow; everything else flat; no icon clutter, 3D icons or gradients" },
    imagery: { ko: "배경을 지운 실제 제품 사진: {hero}", en: "a real cut-out product photo: {hero}" },
  },
  {
    id: "mascot", group: "illust", isNew: true, label: "브랜드 캐릭터", emoji: "🐻", hint: "귀여움·굿즈", en: "brand mascot character illustration",
    brief: { ko: "브랜드를 대표하는 단순한 캐릭터 일러스트 — 굵고 일정한 외곽선, 2~3색 평면, 스티커·굿즈로 바로 쓸 수 있는 친근한 마스코트", en: "a simple brand mascot illustration — bold even outlines, two or three flat colors, a friendly character ready for stickers and merch" },
    type: { ko: "헤드라인은 둥글고 통통한 한글 고딕(둥근 모서리, 굵게), 정보는 작은 둥근 고딕", en: "a round, chunky Korean gothic with rounded corners for the headline, bold; small rounded gothic for info" },
    layout: { ko: "캐릭터 하나가 가운데에 크게(캔버스 높이의 45~55%), 제품을 들고 있거나 제품 옆에서 한 가지 동작. 헤드라인은 캐릭터 위쪽에 가운데 정렬, 카피는 캐릭터 옆 말풍선 하나에 짧게. 혜택은 캐릭터 발밑 {A} 리본, 브랜드명과 정보 줄은 맨 아래 가운데", en: "one character large in the center (45–55% of canvas height), holding the product or doing one action beside it; the headline centered above the character; the tagline short inside one speech bubble beside it; the offer on an {A} ribbon at its feet; brand name and info line centered at the bottom" },
    palette: { ko: "{B} 단색 바탕, 캐릭터는 흰색·먹색 외곽선·{A} 세 가지로만", en: "a solid {B} background; the character in white, ink-black outline and {A} only" },
    texture: { ko: "평면 채색, 일정한 외곽선, 아주 옅은 종이 결. 3D 렌더·광택·그라데이션 볼 터치 금지", en: "flat fills, even outlines, faint paper grain; no 3D render, gloss or gradient cheek shading" },
    imagery: { ko: "브랜드나 제품을 닮은(또는 양평의 동물·식물을 단순화한) 단순한 캐릭터 하나, 함께 그릴 것: {hero}", en: "a character that resembles the product (or a simplified local animal or plant), together with {hero}" },
  },
  {
    id: "sculpt", group: "photo", isNew: true, label: "조형 오브제 스틸라이프", emoji: "🗿", hint: "감도·프리미엄", en: "sculptural still life", photo: true,
    brief: { ko: "석고 좌대·나무 블록·돌 같은 조형 오브제 위에 제품을 올린 스틸라이프 — 갤러리 설치 작품처럼 정적이고 감도 높은 캠페인 컷", en: "a still life with the product placed on sculptural props — plaster plinths, wooden blocks, stones — static and refined like a gallery installation" },
    type: { ko: "헤드라인은 가는 한글 명조를 작게, 넓은 자간, 브랜드명은 더 작게 대문자 느낌, 정보는 아주 작은 고딕", en: "a light Korean Myeongjo for the headline, small with wide tracking; the brand name smaller still; info in tiny gothic" },
    layout: { ko: "높이가 다른 기하 좌대 2~3개(원기둥·직육면체·반구)가 가운데에 계단처럼, 가장 높은 좌대 위에 제품. 헤드라인과 카피는 맨 위 가운데에 작게, 브랜드명은 맨 아래 가운데, 정보 줄은 그 위 한 줄. 혜택은 좌대 옆면에 붙은 작은 글자만", en: "two or three geometric plinths of different heights (cylinder, cuboid, half-sphere) stepped in the center, the product on the tallest; headline and tagline small at top center; the brand name at bottom center with the info line above; the offer as small text on a plinth's side" },
    palette: { ko: "석고 흰색·사암 베이지·돌 회색 같은 무채색 조형물과 톤 다운한 {B} 배경 벽, 제품 색이 유일한 포인트", en: "neutral plaster white, sandstone beige and stone grey props against a toned-down {B} wall; the product's own color as the only accent" },
    texture: { ko: "한쪽에서 드는 낮은 각도의 자연광, 길고 부드러운 그림자, 석고·돌·나무의 무광 질감. 반사 광택·대리석 CGI 금지", en: "low-angle side daylight, long soft shadows, matte plaster / stone / wood textures; no glossy reflections or CGI marble" },
    imagery: { ko: "실제로 세팅해 촬영한 스틸라이프: {hero}", en: "a real, physically built still life: {hero}" },
  },
  {
    id: "knolling", group: "photo", isNew: true, label: "놀링 정렬 컷", emoji: "📐", hint: "구성·세트", en: "knolling flat-lay", photo: true,
    brief: { ko: "제품과 구성품을 위에서 내려다보며 직각·등간격으로 정렬한 놀링 사진 — 키트·세트 구성이 한눈에 보이는 정돈된 카탈로그 컷", en: "a knolling photo shot straight down with the product and its parts aligned at right angles with equal spacing — an orderly catalog shot that shows the whole kit at a glance" },
    type: { ko: "헤드라인은 Pretendard SemiBold 같은 단정한 고딕, 정보는 작은 모노스페이스(구성품 번호 느낌)", en: "a neat gothic (in the style of Pretendard SemiBold) for the headline; small monospace for info, like part numbers" },
    layout: { ko: "정면 부감. 가운데에 메인 제품이 가장 크게, 주변에 구성품·재료·도구가 줄과 열을 맞춰 모두 평행·직각으로 등간격 배치(겹침 없음). 헤드라인과 카피는 위쪽 띠의 빈 바닥 위에 가운데, 혜택은 구성품 한 칸 자리에 놓인 작은 {B} 카드, 브랜드명과 정보 줄은 아래쪽 띠 가운데", en: "straight overhead; the main product largest in the center, parts / ingredients / tools around it in rows and columns, all parallel or perpendicular with equal gaps (no overlap); headline and tagline centered on the empty surface in a top band; the offer on a small {B} card occupying one slot in the grid; brand name and info line centered in a bottom band" },
    palette: { ko: "단색 무광 바닥({B}를 아주 옅게 또는 밝은 회색), 물건 고유의 색, {A}는 카드 테두리에만", en: "a single matte surface (a very pale {B} or light grey), the objects' own colors; {A} only on the card edge" },
    texture: { ko: "위에서 고르게 퍼지는 부드러운 빛, 아주 짧은 그림자, 실제 재질 그대로", en: "soft, even overhead light, very short shadows, true materials" },
    imagery: { ko: "실제 부감 놀링 사진: {hero} — 그 구성품·재료까지 함께", en: "a real overhead knolling photo: {hero} and its components or ingredients" },
  },
  {
    id: "handheld", group: "photo", isNew: true, label: "손에 든 실사용 컷", emoji: "🤳", hint: "후기·리얼", en: "handheld POV real-use shot", photo: true,
    brief: { ko: "고객이 직접 휴대폰으로 찍은 것 같은 1인칭 실사용 사진 — 손에 든 제품, 실제 생활 공간, 광고보다 친구 후기 같은 신뢰감", en: "a first-person real-use photo that looks shot on a customer's phone — the product in hand in a real living space, trustworthy like a friend's review" },
    type: { ko: "헤드라인은 짧은 후기 한 줄처럼 Pretendard Bold를 흰 글자로, 글자 뒤에 반투명 검정 띠 없이 그림자 없이. 정보는 작은 고딕", en: "the headline like a short one-line review in Pretendard Bold, white, with no translucent bar or drop shadow behind it; small gothic for info" },
    layout: { ko: "1인칭 시점: 화면 아래쪽에서 손이 들어와 제품을 가운데 들고 있음, 배경은 실제 방·차 안·카페 창가처럼 살짝 흐림. 헤드라인은 위쪽 가운데에 큰따옴표 포함 후기처럼, 카피는 그 아래 한 줄. 혜택은 손목 옆 작은 {B} 둥근 라벨, 브랜드명과 정보 줄은 맨 아래 가운데", en: "first-person POV: a hand enters from the bottom holding the product at center, the background a real room, car interior or café window, softly blurred; the headline centered at the top like a quoted review, the tagline one line below; the offer as a small rounded {B} label beside the wrist; brand name and info line centered at the bottom" },
    palette: { ko: "실내 자연광의 현실적인 색, 과한 보정 없이, {B}는 라벨 하나", en: "realistic indoor daylight color, no heavy grading; {B} only on the label" },
    texture: { ko: "휴대폰 카메라 같은 넓은 화각, 배경 약간 흐림, 자연스러운 손(손톱·주름 실제처럼). 완벽하게 매끈한 손·CGI 제품 금지", en: "a phone-camera wide angle, slightly blurred background, a natural hand (real nails and creases); no flawless smooth hands or CGI product" },
    imagery: { ko: "실제로 손에 들고 찍은 사진: {hero}", en: "a real photo with the product held in hand: {hero}" },
  },
  {
    id: "comic", group: "illust", isNew: true, label: "웹툰 4컷", emoji: "💬", hint: "스토리·유머", en: "four-panel webtoon",
    brief: { ko: "한국 웹툰 스타일 4컷 만화 — 고객의 고민에서 제품으로 해결되는 짧은 이야기, 깔끔한 선과 평면 채색", en: "a Korean webtoon-style four-panel comic — a short story from a customer's problem to the product solving it, clean lines and flat color" },
    type: { ko: "헤드라인은 굵은 한글 고딕을 맨 위 제목 칸에, 말풍선 대사는 짧게(칸당 최대 1개, 목록의 카피·혜택만), 정보는 작은 고딕", en: "a bold Korean gothic headline in a title strip at the top; speech bubbles short (max one per panel, only the tagline and offer from the list); small gothic for info" },
    layout: { ko: "맨 위 띠에 헤드라인, 그 아래 2×2 네 칸(굵은 검정 칸선, 흰 여백): 1칸 고민하는 장면 → 2칸 제품 발견 → 3칸 {hero} 클로즈업 → 4칸 만족한 장면. 카피는 3칸 말풍선, 혜택은 4칸 말풍선, 브랜드명과 정보 줄은 맨 아래 띠. 나머지 칸은 대사 없이 그림만", en: "the headline in a top strip; below it a 2×2 grid of four panels (bold black borders, white gutters): panel 1 a problem → 2 discovering the product → 3 a close-up of {hero} → 4 a happy result; the tagline in panel 3's bubble, the offer in panel 4's bubble; brand name and info line in a bottom strip; other panels have no dialogue" },
    palette: { ko: "흰 바탕, 평면 채색은 {B}·{A}·살구색·회색 정도로 절제", en: "white ground; flat coloring restrained to {B}, {A}, a skin tone and greys" },
    texture: { ko: "디지털 웹툰의 깔끔한 펜 선과 평면 채색, 아주 약한 셀 음영. 3D·광택·과한 효과선 금지", en: "clean digital-webtoon ink lines and flat color with minimal cel shading; no 3D, gloss or excessive speed lines" },
    imagery: { ko: "웹툰 그림체로 그린 장면: {hero} — 20~30대 인물(단순한 얼굴)과 함께", en: "{hero} and a person in their 20s–30s drawn in a webtoon style (simple faces)" },
  },
  {
    id: "travelposter", group: "illust", isNew: true, label: "빈티지 여행 포스터", emoji: "🗺️", hint: "체험·숙박", en: "vintage travel poster",
    brief: { ko: "1950~60년대 철도·관광 포스터 스타일 — 겹겹의 산과 강을 단순한 평면으로 쌓은 풍경, 4~5색 과슈 느낌", en: "a 1950s–60s railway / tourism poster style — layered hills and river built as simple flat planes, a 4–5-color gouache feel" },
    type: { ko: "헤드라인은 굵은 장체 한글 고딕을 맨 위나 맨 아래 띠에 크게 가운데 정렬, 정보는 자간 넓은 작은 고딕", en: "a bold condensed Korean gothic headline, large and centered in a band at the very top or bottom; small, widely spaced gothic for info" },
    layout: { ko: "세로 포스터: 위쪽 띠에 헤드라인, 가운데 큰 풍경(앞에서 뒤로 겹친 평면 산 능선·강·하늘, 앞쪽에 {hero}), 아래쪽 띠에 카피·정보 줄·브랜드명을 가운데 정렬. 혜택은 하늘 영역의 {A} 원형 해·달 모양 안에. 바깥에 얇은 미색 테두리", en: "a portrait poster: the headline in a top band, a large landscape in the middle (flat overlapping ridges, river and sky receding, {hero} in the foreground), tagline, info line and brand name centered in a bottom band; the offer inside an {A} sun/moon circle in the sky; a thin off-white border around" },
    palette: { ko: "제한된 4~5색: {B}, {A}, 짙은 남색, 미색, 연한 하늘색 — 평평한 색면", en: "a limited 4–5 color palette: {B}, {A}, deep navy, off-white and pale sky — flat color fields" },
    texture: { ko: "과슈·석판 인쇄의 무광 평면, 가장자리 아주 미세한 붓 자국과 종이 결. 그라데이션 하늘·사진 합성 금지", en: "matte gouache / lithograph flats, faint brush edges and paper grain; no gradient skies or photo compositing" },
    imagery: { ko: "{hero} — 평면으로 단순화한 풍경 속에", en: "{hero}, within a flat, simplified landscape" },
  },
  {
    id: "macro", group: "photo", isNew: true, label: "매크로 질감 클로즈업", emoji: "🔍", hint: "식감·소재", en: "macro texture close-up", photo: true,
    brief: { ko: "제품의 단면·결·제형을 화면 가득 확대한 매크로 사진 — 만지고 싶고 먹고 싶게 만드는 질감이 곧 메시지", en: "a macro photo filling the frame with the product's cross-section, grain or texture — the tactile detail itself is the message" },
    type: { ko: "헤드라인은 Pretendard Bold 같은 고딕을 작게서 중간 크기로 흰색 또는 먹색, 정보는 작은 고딕", en: "a gothic (in the style of Pretendard Bold), small to medium, in white or ink; small gothic for info" },
    layout: { ko: "질감이 캔버스 전체를 채우는 극단적 클로즈업, 초점은 가운데 한 지점에만 맞고 가장자리는 흐려짐. 헤드라인과 카피는 아래쪽 1/4의 흐린 영역에 가운데 정렬, 브랜드명은 맨 위 가운데 작게, 혜택은 작은 {B} 사각 라벨, 정보 줄은 맨 아래", en: "an extreme close-up whose texture fills the canvas, focus on one central point with edges falling soft; headline and tagline centered in the blurry bottom quarter; the brand name small at top center; the offer as a small square {B} label; the info line at the very bottom" },
    palette: { ko: "제품 고유의 색과 질감이 전부, 글자는 흰색 또는 먹색, {B}는 라벨 하나", en: "the product's own color and texture is everything; white or ink type; {B} only on the label" },
    texture: { ko: "매크로 렌즈의 아주 얕은 심도, 한쪽에서 드는 부드러운 빛이 결을 살림, 실제 부스러기·기포·섬유까지. 지나치게 반들반들한 표면·물방울 남발 금지", en: "macro-lens razor-thin depth of field, soft side light raking across the grain, real crumbs, bubbles or fibers; no overly glossy surfaces or excessive water droplets" },
    imagery: { ko: "실제 매크로 사진, 단면이나 표면 질감을 확대: {hero}", en: "a real macro photo: the cross-section or surface texture of {hero}" },
  },
  {
    id: "sticker", group: "graphic", isNew: true, label: "스티커 시트·굿즈", emoji: "🏷️", hint: "수집·키치", en: "die-cut sticker sheet",
    brief: { ko: "다이컷 스티커 시트를 정면에서 본 그래픽 — 브랜드 심볼·제품·짧은 문구 스티커 6~8개가 흰 칼선 테두리와 함께, 모으고 싶은 굿즈 느낌", en: "a front-facing die-cut sticker sheet — 6–8 stickers of the brand symbol, product and short phrases, each with a white die-cut border, collectible merch feel" },
    type: { ko: "헤드라인은 가장 큰 스티커 안에 통통한 한글 고딕, 나머지 스티커 글자는 목록의 카피·혜택만, 정보는 시트 아래 여백에 작은 고딕", en: "the headline inside the largest sticker in a chunky Korean gothic; other sticker text only the tagline and offer from the list; info small in the sheet margin" },
    layout: { ko: "{B} 단색 배경 위 스티커 시트 한 장. 가운데에 가장 큰 스티커(헤드라인), 주변에 크기가 다른 스티커들 — {hero} 그림 스티커 2~3개, 카피 말풍선 스티커, 혜택 원형 스티커, 브랜드명 스티커. 서로 겹치지 않게 리듬 있게, 시트 아래 여백에 정보 한 줄", en: "one sticker sheet on a solid {B} background: the largest sticker (headline) in the center, stickers of varying size around it — 2–3 illustrated {hero} stickers, a speech-bubble tagline sticker, a round offer sticker, a brand-name sticker; rhythmic, non-overlapping; one info line in the sheet's bottom margin" },
    palette: { ko: "{B} 바탕, 스티커는 흰 테두리 안에 {A}·먹색·미색과 한두 가지 밝은 색", en: "{B} ground; stickers inside white borders in {A}, ink, cream and one or two bright colors" },
    texture: { ko: "무광 스티커 용지, 칼선 흰 테두리, 정면 평면. 홀로그램·반짝이·광택 금지", en: "matte sticker stock, white die-cut borders, flat front view; no holographic, glitter or gloss" },
    imagery: { ko: "{hero} — 단순한 평면 일러스트 스티커 여러 개로", en: "{hero}, as several simple flat-illustrated stickers" },
  },
  {
    id: "bauhaus", group: "graphic", isNew: true, label: "기하 도형 포스터", emoji: "🔶", hint: "모던·명쾌", en: "Bauhaus geometric poster",
    brief: { ko: "바우하우스 스타일 기하 도형 포스터 — 원·반원·사각·삼각을 쌓아 제품(또는 장면)을 추상적으로 표현한, 명쾌하고 리듬감 있는 그래픽", en: "a Bauhaus-style geometric poster — circles, half-circles, squares and triangles stacked to abstract the product (or scene), clear and rhythmic" },
    type: { ko: "헤드라인은 기하학적인 굵은 한글 고딕(원과 직선으로 된 느낌), 정보는 작은 고딕", en: "a geometric bold Korean gothic (built from circles and straight lines) for the headline; small gothic for info" },
    layout: { ko: "캔버스를 3×4 보이지 않는 격자로 나누고 도형들이 격자에 맞춰 쌓여 {hero}의 실루엣을 추상적으로 만듦(가운데 위쪽 2/3). 헤드라인은 아래쪽 1/3 가운데에 크게, 카피는 그 아래, 혜택은 원 도형 하나 안에, 브랜드명과 정보 줄은 맨 아래 가는 선 위", en: "the canvas on an invisible 3×4 grid; shapes stacked to the grid form an abstract silhouette of {hero} (upper two-thirds, centered); the headline large and centered in the lower third with the tagline below; the offer inside one circle; brand name and info line above a thin rule at the bottom" },
    palette: { ko: "미색 바탕에 {B}, {A}, 먹색, 그리고 한 가지 원색(빨강·노랑·파랑 중) — 평면 색면", en: "off-white ground with {B}, {A}, ink-black and one primary (red, yellow or blue) — flat color fields" },
    texture: { ko: "평면 인쇄, 아주 옅은 종이 결, 칼같은 도형 가장자리. 그림자·그라데이션 금지", en: "flat print, faint paper grain, crisp shape edges; no shadows or gradients" },
    imagery: { ko: "{hero} — 기하 도형만으로 추상화해서", en: "{hero}, abstracted purely from geometric shapes" },
  },
  {
    id: "zine", group: "type", isNew: true, label: "진(zine) 복사본 콜라주", emoji: "📎", hint: "인디·언더", en: "photocopied zine collage", photo: true,
    brief: { ko: "흑백 복사기로 찍어 낸 인디 진(zine) 포스터 — 거칠게 오린 사진, 손으로 붙인 글자 띠, 복사 노이즈, 한 가지 형광 포인트", en: "an indie zine poster run through a black-and-white photocopier — roughly cut photos, hand-pasted text strips, copier noise and one fluorescent accent" },
    type: { ko: "헤드라인은 굵은 한글 고딕을 크게 오려 붙인 느낌(글자 덩어리가 살짝 기울어짐), 정보는 타자기체 같은 작은 모노스페이스를 종이 띠에", en: "a heavy Korean gothic headline as if cut out and pasted, large (the block slightly tilted); info in small typewriter-like monospace on paper strips" },
    layout: { ko: "가운데 큰 흑백 복사 사진({hero})이 기울어진 채 붙어 있고, 헤드라인 덩어리가 사진 위쪽 가장자리에 겹쳐 붙음. 카피와 정보는 타자 친 종이 띠 2~3개로 사진 아래에, 혜택은 형광 {A} 원으로 손으로 칠한 듯, 브랜드명은 오른쪽 아래 도장처럼. 스테이플·테이프 자국은 모서리에만", en: "a large black-and-white photocopied photo of {hero} pasted at a tilt in the center, the headline block overlapping its top edge; tagline and info on 2–3 typed paper strips below the photo; the offer circled by hand in fluorescent {A}; the brand name like a stamp at bottom-right; staple and tape marks only at corners" },
    palette: { ko: "흰 복사지 위 먹색 토너, 포인트는 형광 {A} 한 색만(그리고 아주 조금의 {B})", en: "black toner on white copy paper; the only accent a fluorescent {A} (plus a tiny bit of {B})" },
    texture: { ko: "복사기 토너 노이즈, 높은 대비로 뭉개진 회색, 오린 가장자리, 종이 그림자. 가짜 찢김 남발 금지", en: "photocopier toner noise, high-contrast crushed greys, cut edges, paper shadows; no overused fake tears" },
    imagery: { ko: "흑백 복사한 실제 사진: {hero}", en: "a real photo, photocopied in black and white: {hero}" },
  },
  {
    id: "neodeco", group: "graphic", isNew: true, label: "네오 아르데코", emoji: "🏛️", hint: "선물·프리미엄", en: "neo art-deco",
    brief: { ko: "아르데코를 현대적으로 다듬은 프리미엄 그래픽 — 대칭 구도, 부채꼴·계단 모양 장식선, 짙은 바탕 위 금빛 선, 선물 상자 같은 격식", en: "a modern take on Art Deco — symmetrical composition, fan and stepped ornamental lines, gold-toned lines on a deep ground, gift-box formality" },
    type: { ko: "헤드라인은 가늘고 키가 큰 장체 한글 고딕(또는 대비 강한 명조)을 대칭 가운데, 넓은 자간, 정보는 작은 장체", en: "a thin, tall condensed Korean gothic (or a high-contrast Myeongjo) for the headline, centered and symmetrical with wide tracking; small condensed type for info" },
    layout: { ko: "완전 대칭: 가운데 세로축을 따라 위에서 브랜드명 → 부채꼴 장식 아치 안의 {hero} → 헤드라인 → 짧은 계단형 장식선 → 카피 → 정보 줄. 혜택은 아치 아래 작은 마름모 배지, 바깥에 이중 테두리", en: "fully symmetrical along the vertical axis, top to bottom: brand name → {hero} inside a fan-shaped ornamental arch → headline → a short stepped ornament → tagline → info line; the offer on a small diamond badge under the arch; a double border around" },
    palette: { ko: "짙은 {B}(또는 먹색) 바탕, 선과 글자는 무광 금빛 황토색, {A}는 아주 조금", en: "a deep {B} (or ink) ground; lines and type in a matte gold ochre; {A} sparingly" },
    texture: { ko: "무광 박 인쇄 같은 평면 금색, 고급 종이 결. 반짝이는 금속 광택·3D 금박 금지", en: "flat matte foil-like gold, fine paper texture; no shiny metallic gloss or 3D gold" },
    imagery: { ko: "{hero} — 아치 안에 단순한 선화(또는 흑백 사진)로", en: "{hero}, as simple line art (or a monochrome photo) inside the arch" },
  },
  {
    id: "crayon", group: "illust", isNew: true, label: "크레용 손그림", emoji: "🖍️", hint: "순수·따뜻", en: "crayon and colored-pencil drawing",
    brief: { ko: "크레용·색연필로 그린 일부러 서툰 손그림 — 삐뚤빼뚤한 선과 덜 칠한 면, 창업자가 직접 그린 듯한 솔직하고 따뜻한 그림", en: "an intentionally naive crayon and colored-pencil drawing — wobbly lines and loosely filled shapes, honest and warm as if drawn by the founder" },
    type: { ko: "헤드라인은 크레용으로 직접 쓴 굵은 한글 손글씨(또박또박 읽히게), 정보는 작은 깔끔한 고딕으로 대비", en: "bold hand-written Korean in crayon for the headline (clearly legible); small clean gothic for info as contrast" },
    layout: { ko: "흰 종이 가운데에 {hero}를 크게 그린 그림 한 점, 위쪽에 크레용 손글씨 헤드라인 가운데 정렬, 그림 옆에 카피를 작은 손글씨로. 혜택은 크레용으로 그린 {A} 별 안에, 브랜드명과 정보 줄은 맨 아래 깔끔한 고딕 한 줄", en: "one large drawing of {hero} in the middle of white paper; the crayon headline centered above; the tagline in small handwriting beside the drawing; the offer inside a crayon-drawn {A} star; brand name and info line as one line of clean gothic at the bottom" },
    palette: { ko: "흰 도화지, 크레용 4~5색({B}, {A} 포함), 덜 칠해져 종이가 비치는 면", en: "white drawing paper, 4–5 crayon colors including {B} and {A}, fills loose enough for paper to show through" },
    texture: { ko: "크레용의 왁스 결, 종이 요철에 걸린 질감, 색연필 해칭. 디지털 브러시처럼 매끈한 선 금지", en: "waxy crayon texture catching the paper tooth, colored-pencil hatching; no smooth digital-brush strokes" },
    imagery: { ko: "크레용으로 그린 {hero}", en: "{hero}, drawn in crayon" },
  },
  {
    id: "bwdoc", group: "photo", isNew: true, label: "흑백 다큐 사진", emoji: "🎬", hint: "메이커 스토리", en: "black-and-white documentary photo", photo: true,
    brief: { ko: "작업 중인 메이커를 담은 흑백 다큐멘터리 사진 — 일하는 손, 작업장의 빛, 연출 없는 진짜 순간으로 브랜드의 진정성을 보여 주는 컷", en: "a black-and-white documentary photo of the maker at work — working hands, workshop light, an unstaged real moment that shows the brand's sincerity" },
    type: { ko: "헤드라인은 Noto Serif KR 같은 한글 명조를 중간 크기로 흰색, 정보는 작은 고딕", en: "a Korean Myeongjo (in the style of Noto Serif KR) for the headline, medium, in white; small gothic for info" },
    layout: { ko: "사진이 캔버스를 채우고, 아래쪽 1/3이 어두운 작업대·바닥으로 자연스럽게 가라앉음. 헤드라인과 카피는 그 어두운 영역에 가운데 정렬, 브랜드명은 맨 위 가운데 작게, 정보 줄은 맨 아래. 혜택은 {B} 가는 밑줄로만 강조", en: "the photo fills the canvas, the bottom third settling naturally into a dark workbench or floor; headline and tagline centered in that dark area; the brand name small at top center; the info line at the very bottom; the offer emphasized only with a thin {B} underline" },
    palette: { ko: "흑백(풍부한 회색 계조), 색은 {B} 밑줄 하나뿐", en: "black and white with a rich grey scale; the only color is one {B} underline" },
    texture: { ko: "흑백 필름 입자, 창으로 드는 한 줄기 빛, 깊은 그림자. 인위적 HDR 금지", en: "black-and-white film grain, a single shaft of window light, deep shadows; no artificial HDR" },
    imagery: { ko: "실제 다큐 사진, 만드는 손과 작업 과정(얼굴은 보이지 않거나 옆모습): {hero}", en: "a real documentary photo: hands and process making {hero} (face hidden or in profile)" },
  },
  {
    id: "blueprint", group: "graphic", isNew: true, label: "제품 해부도", emoji: "📘", hint: "기술·구조", en: "exploded technical drawing",
    brief: { ko: "제품을 층층이 분해해 보여 주는 기술 도면 스타일 — 가는 선화, 치수선, 번호 표시로 만듦새와 구조를 설명하는 이미지", en: "a technical-drawing style that shows the product exploded into layers — fine line art, dimension lines and numbered callouts explaining build and structure" },
    type: { ko: "헤드라인은 Pretendard SemiBold 같은 고딕, 번호와 정보는 작은 모노스페이스", en: "a gothic (in the style of Pretendard SemiBold) for the headline; numbers and info in small monospace" },
    layout: { ko: "가운데에 {hero}를 위아래로 분해한 등각 선화(부품 사이 점선 축), 각 부품에 원 번호 ①②③. 헤드라인과 카피는 맨 위 가운데, 번호별 설명은 읽을 수 없는 짧은 회색 막대, 혜택은 오른쪽 아래 도면 표제란 안에, 브랜드명은 표제란 맨 위", en: "an isometric exploded line drawing of {hero} in the center (parts separated along dotted axes), each part with a circled number; headline and tagline centered at the top; each numbered description as short illegible grey bars; the offer inside a drawing title block at bottom-right with the brand name at its top" },
    palette: { ko: "미색 또는 짙은 {B} 바탕에 흰·먹색 가는 선, {A}는 번호에만", en: "an off-white or deep {B} ground with fine white or ink lines; {A} only on numbers" },
    texture: { ko: "제도 펜의 일정한 가는 선, 아주 옅은 모눈. 3D 렌더·광택 금지", en: "even technical-pen lines, faint grid paper; no 3D render or gloss" },
    imagery: { ko: "{hero} — 분해 등각 선화로", en: "{hero}, as an isometric exploded line drawing" },
  },
  {
    id: "memo", group: "photo", isNew: true, label: "손메모·포스트잇", emoji: "🗒️", hint: "솔직 고백", en: "handwritten memo and sticky notes", photo: true,
    brief: { ko: "작업대 위 실물 메모지·포스트잇에 창업자가 직접 쓴 솔직한 한마디 — 광고 같지 않은, 사장님 일기장 같은 피드", en: "a candid line hand-written by the founder on real memo paper and sticky notes on the workbench — feels like the owner's notebook, not an ad" },
    type: { ko: "모든 문구는 볼펜·마커 손글씨(또박또박), 헤드라인만 굵은 마커로 크게. 활자체 없음", en: "all text in ballpoint or marker handwriting (neat), only the headline in bold marker, large; no typeset fonts" },
    layout: { ko: "위에서 찍은 작업대: 가운데 큰 줄노트 한 장에 헤드라인과 카피, 옆에 비스듬히 붙은 {A} 포스트잇에 혜택, 아래쪽 작은 메모지에 정보 줄. 한쪽 모서리에 {hero}가 일부만 걸쳐 보임, 브랜드명은 메모지 맨 아래 서명처럼", en: "an overhead workbench: headline and tagline on one large lined note in the center, the offer on an {A} sticky note stuck at an angle beside it, the info line on a small note below; {hero} partly visible at one corner; the brand name like a signature at the bottom of the note" },
    palette: { ko: "나무 작업대, 흰 줄노트, {A} 포스트잇, 잉크는 먹색과 {B}", en: "a wooden workbench, white lined paper, an {A} sticky note; ink in black and {B}" },
    texture: { ko: "실제 종이 섬유, 볼펜 눌린 자국, 자연광 그림자. 화면 캡처·앱 UI 금지", en: "real paper fibers, pen indentations, daylight shadows; no screenshots or app UI" },
    imagery: { ko: "실제 부감 사진: 메모들과 {hero}", en: "a real overhead photo: the notes and {hero}" },
  },
  {
    id: "pixel", group: "graphic", isNew: true, label: "도트 픽셀 그래픽", emoji: "👾", hint: "레트로 게임", en: "pixel-art graphic",
    brief: { ko: "8비트 게임 같은 도트 픽셀 일러스트 — 큼직한 네모 점으로 그린 제품과 장면, 장난스럽고 레트로한 청년 감성", en: "an 8-bit-game-style pixel illustration — the product and scene drawn in chunky square pixels, playful retro youth energy" },
    type: { ko: "헤드라인은 굵고 각진 한글 고딕(도트 폰트 아님, 정확한 맞춤법), 정보는 작은 고딕", en: "a bold, angular Korean gothic for the headline (not a pixel font, spelled exactly); small gothic for info" },
    layout: { ko: "가운데에 {hero}를 큰 도트 일러스트로, 그 아래 도트 바닥 한 줄. 헤드라인은 위쪽 가운데, 카피는 그림 아래, 혜택은 도트로 그린 하트·코인 모양 옆 작은 글자, 브랜드명과 정보 줄은 맨 아래. 화면 UI·점수판·버튼 같은 가짜 게임 UI 없음", en: "{hero} as a large pixel illustration in the center with a pixel ground line beneath; headline centered at the top; tagline below the art; the offer as small text beside a pixel heart or coin; brand name and info line at the bottom; no fake game UI such as score bars or buttons" },
    palette: { ko: "제한된 6색 팔레트: {B}, {A}, 먹색, 미색, 두 가지 중간색 — 평면", en: "a limited 6-color palette: {B}, {A}, ink, cream and two mid-tones — flat" },
    texture: { ko: "또렷한 정사각 픽셀, 안티앨리어싱 없음. 글로우·스캔라인·네온 금지", en: "crisp square pixels, no anti-aliasing; no glow, scanlines or neon" },
    imagery: { ko: "{hero} — 도트 픽셀 아트로", en: "{hero}, as pixel art" },
  },
  {
    id: "menuboard", group: "type", isNew: true, label: "메뉴·가격 보드", emoji: "📋", hint: "카페·식당", en: "menu board poster",
    brief: { ko: "동네 카페·식당 벽에 붙은 메뉴판 같은 타이포 포스터 — 가는 괘선, 점선 리더, 정갈한 가격 표기, 작은 제품 그림 하나", en: "a typographic poster like the menu board on a neighborhood café or restaurant wall — fine rules, dotted leaders, tidy prices and one small product illustration" },
    type: { ko: "헤드라인은 굵은 한글 명조 또는 레트로 고딕을 가운데, 메뉴 줄은 작은 고딕(가격은 숫자만 굵게)", en: "a bold Korean Myeongjo or retro gothic headline, centered; menu lines in small gothic with only prices in bold" },
    layout: { ko: "맨 위 가운데 브랜드명 → 헤드라인 → 가는 이중 괘선 → 메뉴 목록 4~6줄(이름 자리는 읽을 수 없는 회색 막대, 오른쪽 끝까지 점선 리더). 목록에서 대표 한 줄만 목록의 가격을 실제 숫자로 굵게, 혜택은 목록 옆 {A} 원형 도장. 맨 아래 가운데 카피와 정보 줄, 오른쪽 아래 구석에 {hero} 작은 선화", en: "brand name at top center → headline → a thin double rule → a menu list of 4–6 lines (item names as illegible grey bars with dotted leaders to the right edge); only one featured line shows the listed price in bold; the offer as a round {A} stamp beside the list; tagline and info line centered at the bottom; a small line drawing of {hero} in the bottom-right corner" },
    palette: { ko: "미색 종이(또는 짙은 {B} 바탕에 미색 글자), 먹색, {A} 도장", en: "cream paper (or a deep {B} board with cream type), ink-black, an {A} stamp" },
    texture: { ko: "평면 인쇄, 종이 결 또는 무광 보드. 분필 효과·네온 간판 금지", en: "flat print, paper grain or a matte board; no chalk effect or neon signage" },
    imagery: { ko: "{hero} — 한 색 작은 선화로", en: "{hero}, as a small one-color line drawing" },
  },
];

/** 스타일을 고르지 않았을 때: 홍보물 × 브랜드 무드 → 기본 스타일 */
export const DEFAULT_STYLE: Record<Exclude<OutputId, "logo">, Record<string, string>> = {
  poster: { nature: "daylight", premium: "editorial", warm: "riso", minimal: "swiss", playful: "bigtype", heritage: "craftlabel" },
  cardnews: { nature: "daylight", premium: "editorial", warm: "doodle", minimal: "swiss", playful: "comic", heritage: "flyer" },
  product: { nature: "daylight", premium: "sculpt", warm: "kitchen", minimal: "studio", playful: "flash", heritage: "kitchen" },
  mood: { nature: "daylight", premium: "sculpt", warm: "kitchen", minimal: "studio", playful: "filmsnap", heritage: "craftlabel" },
  sns: { nature: "daylight", premium: "studio", warm: "filmsnap", minimal: "studio", playful: "flash", heritage: "craftlabel" },
  event: { nature: "travelposter", premium: "editorial", warm: "riso", minimal: "swiss", playful: "bigtype", heritage: "flyer" },
};

/** 3단계 '추천' 탭: 홍보물마다 먼저 보여 줄 스타일 (무드 기본값은 맨 앞에 따로 붙여요) */
export const RECOMMENDED_STYLES: Record<Exclude<OutputId, "logo">, string[]> = {
  poster: ["bigtype", "riso", "travelposter", "bauhaus", "editorial", "market", "zine", "swiss"],
  cardnews: ["comic", "doodle", "filmsnap", "infographic", "bigtype", "editorial", "knolling", "memo"],
  product: ["studio", "sculpt", "kitchen", "flash", "knolling", "macro", "handheld", "daylight"],
  mood: ["filmsnap", "sculpt", "daylight", "macro", "travelposter", "sticker", "bwdoc", "kitchen"],
  sns: ["flash", "filmsnap", "doodle", "handheld", "mascot", "sticker", "bigtype", "collage"],
  event: ["bigtype", "riso", "banner", "travelposter", "market", "sticker", "comic", "swiss"],
};

/** 지금 홍보물·무드에 맞는 추천 스타일 목록 (무드 기본값이 맨 앞) */
export function recommendedStyles(output: OutputId, mood: string | null): string[] {
  if (output === "logo") return [];
  const type = OUTPUT_TYPES.find((o) => o.id === output);
  const first = DEFAULT_STYLE[output][mood ?? "nature"] ?? DEFAULT_STYLE[output].nature;
  return [first, ...RECOMMENDED_STYLES[output]].filter((id, i, a) => a.indexOf(id) === i && (type?.styles.includes(id) ?? false));
}

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
