import type { Label } from "./options";

/**
 * 분야별 문구·장면 은행. {item} 은 창업 아이템 이름으로 바뀌어요.
 * subject: 제품·공간이 사진에 어떻게 보이는지 (사용자가 '생김새'를 적으면 그걸 써요)
 * lifestyle: 연출컷 배경 · motif: 그림 스타일용 단순한 형태
 */
export type FieldBank = {
  id: string;
  subject: Label;
  lifestyle: Label;
  motif: Label;
  headlines: string[];
  points: string[];
  hashtags: string[];
  /** 무드보드에 들어갈 재질·장면 조각 */
  board: Label;
};

export const FIELD_BANKS: Record<string, FieldBank> = {
  farm: {
    id: "farm",
    subject: { ko: "작은 유리병과 종이 상자에 담긴 신선한 농산물·가공품", en: "fresh farm produce and preserves in small glass jars and paper boxes" },
    lifestyle: { ko: "주말 아침 햇살이 드는 나무 식탁 위, 갓 수확한 재료가 곁에", en: "on a wooden breakfast table in weekend morning light, with freshly harvested produce beside it" },
    motif: { ko: "잎이 달린 열매 하나", en: "a single fruit with its leaves" },
    headlines: ["밭에서 바로 온 {item}", "아침에 딴 그대로, {item}", "양평 햇살로 키운 {item}", "정직하게 기른 {item}"],
    points: ["새벽에 수확해 당일 발송", "농약 걱정 없는 재배 방식", "소량 생산, 그래서 더 신선하게", "선물하기 좋은 정갈한 포장", "주문은 스마트스토어에서"],
    hashtags: ["#로컬푸드", "#농부시장", "#산지직송", "#제철과일"],
    board: { ko: "흙 묻은 손, 갓 딴 열매 바구니, 크래프트 포장지, 이른 아침 밭의 빛, 나무 상자 결", en: "soil-dusted hands, a basket of just-picked fruit, kraft wrapping paper, early-morning light over a field, wooden crate grain" },
  },
  cafe: {
    id: "cafe",
    subject: { ko: "도자기 잔에 담긴 커피와 갓 구운 빵", en: "coffee in a ceramic cup and freshly baked bread" },
    lifestyle: { ko: "큰 창으로 강과 산이 보이는 카페 창가 자리, 오후 햇살", en: "a window seat in a café overlooking a river and hills, in afternoon sun" },
    motif: { ko: "김이 오르는 커피잔 하나", en: "a single steaming coffee cup" },
    headlines: ["강이 보이는 창가, {item}", "오늘의 쉼표, {item}", "천천히 머무는 {item}", "매일 아침 굽는 {item}"],
    points: ["매일 아침 직접 굽는 빵", "남한강이 보이는 창가석", "로컬 재료로 만든 시그니처 음료", "반려견 동반 가능한 테라스", "주차 넉넉, 드라이브 코스에 딱"],
    hashtags: ["#양평카페", "#강뷰카페", "#베이커리카페", "#드라이브코스"],
    board: { ko: "라테 아트, 갓 구운 빵 단면, 원목 테이블, 창밖 강 풍경, 리넨 앞치마", en: "latte art, the crumb of fresh bread, a solid-wood table, a river view through a window, a linen apron" },
  },
  food: {
    id: "food",
    subject: { ko: "정갈하게 차린 대표 메뉴 한 상", en: "a neatly set table of the signature dish" },
    lifestyle: { ko: "따뜻한 조명의 식당 테이블, 김이 오르는 그릇과 수저", en: "a restaurant table in warm light, with steaming bowls and spoons" },
    motif: { ko: "김이 오르는 그릇 하나와 수저", en: "one steaming bowl with a spoon and chopsticks" },
    headlines: ["정성으로 끓인 {item}", "한 그릇의 위로, {item}", "동네가 아끼는 {item}", "양평 재료로 차린 {item}"],
    points: ["매일 새벽 직접 우리는 육수", "양평 농가에서 받은 제철 채소", "가족 모임 단체석 완비", "포장·예약 가능", "넉넉한 주차 공간"],
    hashtags: ["#양평맛집", "#로컬맛집", "#가족외식", "#맛집추천"],
    board: { ko: "김 오르는 뚝배기, 제철 채소, 놋그릇과 수저, 나무 테이블, 따뜻한 조명", en: "a steaming earthenware pot, seasonal vegetables, brass bowls and spoons, a wooden table, warm lighting" },
  },
  stay: {
    id: "stay",
    subject: { ko: "자연 속 아늑한 숙소와 캠핑 사이트", en: "a cozy lodge and campsite in nature" },
    lifestyle: { ko: "숲으로 둘러싸인 사이트, 해 질 녘 따뜻한 불빛의 텐트와 모닥불", en: "a site surrounded by forest at dusk, a tent glowing with warm light and a campfire" },
    motif: { ko: "산 능선 아래 작은 텐트 하나", en: "one small tent below a mountain ridge" },
    headlines: ["숲속에서 하룻밤, {item}", "별이 쏟아지는 {item}", "주말엔 {item}에서 쉬어요", "자연 그대로, {item}"],
    points: ["사이트 간격 넉넉한 프라이빗 구성", "개별 화장실·온수 샤워", "아이들이 뛰노는 잔디 마당", "장작·바비큐 세트 준비", "서울에서 1시간 거리"],
    hashtags: ["#양평캠핑", "#양평펜션", "#글램핑", "#주말여행"],
    board: { ko: "숲길, 모닥불 불씨, 린넨 침구, 텐트 천의 결, 별이 보이는 밤하늘", en: "a forest path, campfire embers, linen bedding, tent canvas texture, a starry night sky" },
  },
  craft: {
    id: "craft",
    subject: { ko: "손으로 빚은 도자기·공예품", en: "handmade ceramics and craft pieces" },
    lifestyle: { ko: "작업대가 보이는 공방 선반 위, 창으로 드는 오후 빛", en: "on a workshop shelf with the workbench in view, afternoon light through a window" },
    motif: { ko: "물레 위 둥근 그릇 하나", en: "one round bowl on a pottery wheel" },
    headlines: ["손끝으로 빚은 {item}", "하나뿐인 {item}", "오래 쓰는 물건, {item}", "흙에서 시작한 {item}"],
    points: ["모든 작품은 직접 손으로", "같은 모양이 없는 하나뿐인 디자인", "원데이 클래스 운영", "주문 제작·단체 선물 가능", "공방 방문 예약제"],
    hashtags: ["#공방", "#핸드메이드", "#도자기공방", "#원데이클래스"],
    board: { ko: "물레 위 젖은 흙, 유약 샘플, 손자국 남은 그릇, 공방 선반, 마른 꽃", en: "wet clay on a wheel, glaze test tiles, a bowl with fingerprints, workshop shelves, dried flowers" },
  },
  beauty: {
    id: "beauty",
    subject: { ko: "자연 원료로 만든 화장품·비누 제품", en: "skincare and soap made with natural ingredients" },
    lifestyle: { ko: "돌과 마른 풀잎이 놓인 욕실 선반, 부드러운 아침 빛", en: "on a bathroom shelf with stones and dried grasses, soft morning light" },
    motif: { ko: "잎 한 장과 작은 병 하나", en: "a single leaf and a small bottle" },
    headlines: ["피부가 쉬는 시간, {item}", "자연에서 온 {item}", "나를 돌보는 {item}", "순하게, 꾸준하게 {item}"],
    points: ["양평 허브로 만든 순한 원료", "민감한 피부도 편안하게", "소량 수작업 생산", "플라스틱을 줄인 포장", "1:1 맞춤 상담"],
    hashtags: ["#천연화장품", "#웰니스", "#수제비누", "#셀프케어"],
    board: { ko: "허브 잎, 비누 단면, 돌 위의 물방울, 리넨 수건, 아침 햇살", en: "herb leaves, a cut bar of soap, water drops on stone, a linen towel, morning sun" },
  },
  edu: {
    id: "edu",
    subject: { ko: "작은 클래스 작업 테이블과 재료", en: "a small class worktable with materials" },
    lifestyle: { ko: "밝은 작업실에서 사람들이 둘러앉아 무언가를 만드는 장면(얼굴보다 손 위주)", en: "people gathered around a table in a bright studio making something (hands rather than faces)" },
    motif: { ko: "책상 위 펼친 노트와 연필", en: "an open notebook and a pencil on a desk" },
    headlines: ["손으로 배우는 {item}", "처음이어도 괜찮아요, {item}", "주말에 배우는 {item}", "함께 만드는 {item}"],
    points: ["4~8명 소규모 정원", "재료와 도구 모두 준비", "처음 오셔도 따라 하기 쉬워요", "완성품은 집으로", "단체·기업 클래스 문의 환영"],
    hashtags: ["#원데이클래스", "#체험학습", "#주말클래스", "#취미클래스"],
    board: { ko: "작업 중인 손, 정리된 재료 트레이, 노트와 연필, 밝은 작업실 창, 완성품", en: "working hands, a tidy tray of materials, notebook and pencil, a bright studio window, finished pieces" },
  },
  pet: {
    id: "pet",
    subject: { ko: "반려견과 함께하는 제품·공간", en: "a product or place enjoyed together with a dog" },
    lifestyle: { ko: "넓은 잔디 마당에서 뛰노는 반려견, 맑은 오후", en: "a dog running on a wide lawn on a clear afternoon" },
    motif: { ko: "꼬리를 흔드는 강아지 한 마리", en: "one dog wagging its tail" },
    headlines: ["우리 아이도 함께, {item}", "마음껏 뛰어놀아요, {item}", "반려견이 먼저 웃는 {item}", "함께여서 좋은 {item}"],
    points: ["울타리 친 넓은 전용 잔디 마당", "반려견 전용 샤워 공간", "대형견도 함께 입실 가능", "반려견 웰컴 키트 제공", "근처 산책로 지도 안내"],
    hashtags: ["#반려견동반", "#애견펜션", "#댕댕이", "#반려견여행"],
    board: { ko: "잔디 위 발자국, 산책 줄, 강아지 털의 결, 나무 그늘, 물그릇", en: "paw prints on grass, a leash, the texture of dog fur, tree shade, a water bowl" },
  },
  it: {
    id: "it",
    subject: { ko: "노트북과 휴대폰 화면 속 서비스(화면 글자는 흐릿하게)", en: "a service shown on a laptop and phone screen (screen text blurred)" },
    lifestyle: { ko: "창가 책상 위 노트북과 휴대폰, 밝은 낮", en: "a laptop and phone on a desk by a window in bright daylight" },
    motif: { ko: "단순한 휴대폰 화면 하나(글자 대신 블록)", en: "one simple phone screen (blocks instead of text)" },
    headlines: ["동네 가게를 더 쉽게, {item}", "클릭 한 번이면, {item}", "작은 가게를 위한 {item}", "시간을 아껴 주는 {item}"],
    points: ["3분이면 시작하는 간단한 가입", "가입 없이 바로 쓰는 간편 모드", "지역 소상공인 맞춤 기능", "첫 달 무료 체험", "전화 상담 지원"],
    hashtags: ["#로컬서비스", "#소상공인", "#스타트업", "#창업"],
    board: { ko: "책상 위 노트북, 손으로 그린 화면 스케치, 포스트잇, 창밖 풍경, 커피잔", en: "a laptop on a desk, hand-drawn screen sketches, sticky notes, a window view, a coffee cup" },
  },
  etc: {
    id: "etc",
    subject: { ko: "브랜드의 대표 제품 또는 공간", en: "the brand's signature product or space" },
    lifestyle: { ko: "자연광이 드는 정돈된 공간", en: "a tidy space in natural light" },
    motif: { ko: "브랜드를 상징하는 단순한 형태 하나", en: "one simple shape that symbolizes the brand" },
    headlines: ["양평에서 시작하는 {item}", "새롭게 문을 연 {item}", "정성을 담은 {item}", "가까이에서 만나는 {item}"],
    points: ["양평에서 직접 운영해요", "작지만 꼼꼼하게", "방문 전 예약하면 더 편해요", "단골 혜택 준비", "문의는 언제든 편하게"],
    hashtags: ["#창업", "#소상공인", "#로컬브랜드"],
    board: { ko: "자연광, 나무 질감, 손으로 만든 소품, 동네 골목 풍경, 브랜드 컬러 종이", en: "natural light, wood texture, handmade objects, a neighborhood lane, brand-color paper" },
  },
};

export function fieldBank(id: string): FieldBank {
  return FIELD_BANKS[id] ?? FIELD_BANKS.etc;
}
