/**
 * 만든 사람 (화면 크레딧 전용 — 프롬프트에는 넣지 않아요)
 * 문의 메일 주소는 이 한 곳에서만 바꿔요. 비워 두면 메일 링크·'문의하기' 버튼이 숨겨져요.
 */
export const CREATOR_EMAIL = "";

export const CREATOR = {
  name: "양○○ (애즈몽)",
  intro: "양평군 청년 창업 AI 활용 교육 강사 · 이 도구를 기획하고 만들었어요",
};

/** 메일 주소가 있을 때만 mailto 링크, 없으면 null */
export const creatorMailto = (subject = "양평 브랜드공방 문의"): string | null =>
  CREATOR_EMAIL ? `mailto:${CREATOR_EMAIL}?subject=${encodeURIComponent(subject)}` : null;
