# 양평 브랜드공방 · 양평군 창업 AI 활용 교육 홍보물 프롬프트 빌더

양평군청 창업과 'AI 활용 교육' 교육생(예비 창업자)용 실습 도구예요. 창업 아이템·분야·타깃 고객·브랜드 무드를 입력하면
홍보 포스터, 카드뉴스, 제품 이미지(누끼·연출컷), 브랜드 무드보드, SNS·스마트스토어·네이버 플레이스 이미지, 오픈·이벤트 안내,
로고 컨셉 시안용 **이미지 AI 프롬프트(한/영)** 와 **홍보 문구(슬로건·인스타 캡션·블로그·문자)** 를 만들어 줘요.

> 교육 실습용 비공식 도구로, 기관의 공식 서비스가 아니며 기관 로고·문장을 쓰지 않아요.

- 정적 사이트 (Next.js 16 App Router · React 19 · TypeScript · Tailwind v4)
- 서버 호출·로그인·저장 없음: 모든 처리는 브라우저 안에서만
- 폰트: Pretendard CDN (SRI 고정) — `next/font/google` 은 쓰지 않아요
- 보안 헤더: CSP, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy, COOP (`next.config.ts`)

## 구조

| 파일 | 내용 |
| --- | --- |
| `src/data/options.ts` | 분야·타깃·무드·지역 배경, 홍보물 종류, 사이즈, 디자인 스타일 36종(사진형·그래픽·인쇄형·일러스트·손작업형·타이포·편집형 4묶음, 홍보물별 추천), 컬러 |
| `src/data/fields.ts` | 분야별 헤드라인·카드뉴스 내용·장면·해시태그 |
| `src/data/examples.ts` | 갤러리 예시 12개 (가상 브랜드, `image` 칸은 선택) |
| `src/lib/prompt.ts` | 프롬프트 엔진 (스타일별 아트 디렉션, 글자 목록·개수 제한, 안전 영역, AI 티 금지 목록, 인쇄물 평면 규칙) |
| `src/lib/caption.ts` | 홍보 문구 템플릿 |

## 예시 이미지 넣기

1. 원본을 `raw-examples/<예시 id>.jpg` 로 저장 (git에는 올리지 않아요)
2. `python3 scripts/optimize-example-images.py` → `public/examples/<id>.<해시>.webp`
3. 빌드하면 이미지가 있는 예시만 이미지로, 없으면 색·문구 미리보기 카드로 보여요.
   (`examples.ts` 의 `image` 칸에 경로를 직접 적어도 돼요)

## 개발

```bash
npm install
npm run dev
npm run lint
npm run build
```
