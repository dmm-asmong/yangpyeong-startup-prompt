# AI 상업적 이미지 생성 프롬프트 실무 종합 가이드북
> 조사된 10종의 전문 프롬프트 자료를 주제별로 분류·통합한 소장용 참고자료입니다.  
> 원자료의 프롬프트 공식, 실전 예시, 키워드, 주의사항을 원문 그대로 정리하여 필요할 때 바로 찾아 활용할 수 있습니다.

---

## 📑 목차
1. [1. 상업용 이미지 생성 기본 공식 & 실무 구조](#1-상업용-이미지-생성-기본-공식--실무-구조)
2. [2. 텍스트 정확히 넣기 & 다국어(한글+영문) 제어 기법](#2-텍스트-정확히-넣기--다국어한글영문-제어-기법)
3. [3. 한국어 캘리그라피 & 감성 폰트 제어법](#3-한국어-캘리그라피--감성-폰트-제어법)
4. [4. 제품 광고 디자인 & 캘리그라피 조화 배치 공식](#4-제품-광고-디자인--캘리그라피-조화-배치-공식)
5. [5. 전문가 애용 프롬프트 키워드 사전 (치트시트)](#5-전문가-애용-프롬프트-키워드-사전-치트시트)
6. [6. 제품 광고 & 스마트폰 액세서리 실전 프롬프트](#6-제품-광고--스마트폰-액세서리-실전-프롬프트)
7. [7. 실무·현업 실제 활용 프롬프트 사례 모음](#7-실무현업-실제-활용-프롬프트-사례-모음)
8. [8. 검수 체크리스트](#8-검수-체크리스트)

---

# 1. 상업용 이미지 생성 기본 공식 & 실무 구조

### 1. 상업용 이미지 프롬프트의 핵심: '디자인 브리프' 작성
상업용 ChatGPT 이미지 생성의 핵심은 단순한 "이미지 요청"이 아니라 **ʻ디자인 브리프(Design Brief)ʼ**를 쓰는 것입니다.  
OpenAI 공식 가이드에서도 **장면 → 피사체 → 세부 요소 → 제약 조건** 순으로 구조화하고, 용도(광고·UI·인포그래픽 등)를 명시할 것을 권장합니다.

#### 6칸 실무 템플릿
```text
[용도] 광고 이미지 / 제품 사진 / 강의 슬라이드 / SNS 썸네일
[장면·배경] 장소, 시간대, 계절, 배경 소품
[피사체] 인물·제품의 외형, 포즈, 표정, 재질
[구도·카메라] 클로즈업, 전신, 아이레벨, 탑뷰, 여백 위치
[조명·색감] 자연광, 스튜디오 조명, 골든아워, 브랜드 컬러
[제약] 정확한 문구, 제외할 요소, 유지할 요소, 화면비
```

---

### 2. 바로 쓰는 기본 프롬프트 틀
```text
[상업적 광고 이미지]를 제작해줘.
- 제품/서비스: [예: 무선 이어폰]
- 핵심 메시지: [예: 하루 종일 편안한 착용감]
- 타깃: [예: 25~35세 직장인]
- 용도: [예: 인스타그램 광고, 홈페이지 배너, 인쇄 전단]
- 화면 비율: [예: 1:1, 4:5, 16:9]
- 스타일: [예: 미니멀, 프리미엄, 따뜻한 라이프스타일, 클린 테크]
- 배경: [예: 밝은 베이지 배경, 사무실 책상, 자연광 스튜디오]
- 구도: [예: 제품 중앙 배치, 여백 충분, 상단에 헤드라인 공간]
- 색상: [예: 아이보리·베이지·딥그린]
- 포함 텍스트: [예: "하루 종일, 편안하게"]
- 금지: 실존 인물 얼굴, 타사 로고, 타사 캐릭터, 복잡한 배경, 저해상도 느낌
```

---

### 3. 상업용 품질을 높이는 프롬프트 마무리 문구
프롬프트 끝에 아래 문구를 덧붙이면 결과가 안정적입니다:
- 상업적 사용을 전제로 깔끔하고 전문적인 품질로 제작해줘.
- 텍스트는 맞춤법과 띄어쓰기를 정확히 지켜줘.
- 중요한 문구는 이미지 중앙 또는 시선이 먼저 가는 위치에 배치해줘.
- 배경과 글자의 대비를 충분히 확보해줘.
- 실사 사진처럼 보이되 부자연스러운 손·손가락·문자는 없게 해줘.
- 브랜드 아이덴티티에 맞게 일관된 색상과 분위기를 유지해줘.
- 실존 인물, 연예인, 타사 로고, 타사 캐릭터, 저작권 있는 일러스트는 포함하지 마.

---

### 4. 상업적 사용 시 꼭 확인할 점 (저작권 & 법적 기준)
- **실존 인물·연예인·브랜드 로고·타사 캐릭터 제외:** OpenAI 이용약관상 동의와 필요한 권리 없이 타인의 얼굴·초상을 재현하는 것은 제한됩니다.
- **AI 생성물 귀속:** 이용약관상 생성물 권리는 원칙적으로 사용자에게 귀속되나, 타사 상표나 저작물이 포함되지 않아야 합니다.
- **실제 사진 오인 방지:** “실제 사진인 것처럼” 허위 과장 표현은 피하고, 필요 시 AI 생성 이미지임을 명확히 합니다.
- **참고 이미지 권리:** 업로드한 사진·일러스트를 변형해 쓸 때도 원본에 대한 정당한 사용 권리가 있어야 합니다.
- **중요 정보 분리:** 가격, 일정, 약관, 연락처처럼 오류가 치명적인 정보는 이미지에 직접 생성하지 않고 Canva, 피그마 등에서 텍스트 레이어로 얹는 편이 가장 안전합니다.

---

### 5. 실무 작업 꿀팁
1. **한 번에 완성하려 하지 말고 단계별로 수정하기:**  
   “조명을 더 따뜻하게”, “배경 속 나무를 삭제”처럼 한 번에 한 가지 변화만 요청하는 방식이 디버깅에 유리합니다.
2. **ʻ바꿀 것ʼ과 ʻ유지할 것ʼ을 분리하기:**  
   “얼굴·포즈·배경·카메라 앵글은 유지하고, 의상만 교체”처럼 쓰면 피사체나 제품이 변형되는 문제를 줄입니다.
3. **참고 이미지는 번호와 역할을 부여하기:**  
   “Image 1: 제품 사진, Image 2: 스타일 레퍼런스. Image 2의 색감을 Image 1에 적용해줘.”

---

# 2. 텍스트 정확히 넣기 & 다국어(한글+영문) 제어 기법

### 1. 텍스트 정확히 넣는 기본 5단계 공식
```text
[문구 위치] + [정확한 문구] + [서체·크기·색상] + [반복 횟수] + [제외 조건]
```

#### 핵심 필수 영문 표현
```text
Text (EXACT, verbatim, no extra characters):
"정확히 넣고 싶은 문구"
Render this text exactly once, clearly and legibly.
No extra text, no watermark, no unrelated logos.
No misspelled or duplicated characters.
```
- `no extra characters`, `exactly once`, `no misspelled or duplicated characters`가 오탈자와 중복 생성을 줄이는 핵심 장치입니다.

---

### 2. 글자별 지정이 필요한 경우 (브랜드명·고유명사)
브랜드명, 한글 고유명사, 영문 이름, 특수문자가 있을 때는 글자 단위로 표기합니다.
```text
Text (EXACT, verbatim, no extra characters):
"미래AI랩"

Spell the Korean brand name exactly as follows:
미 / 래 / A / I / 랩

Render it exactly once, centered, in bold Korean sans-serif.
No additional characters, spaces, punctuation, or logos.
```

---

### 3. 텍스트 위치 및 여백 제어 키워드
| 원하는 배치 | 영문 프롬프트 표현 | 설명 |
|---|---|---|
| **상단 제목** | `Place the headline in the upper third of the image.` | 상단 1/3 영역에 헤드라인 배치 |
| **하단 문구** | `Place the text in the lower third, with a safe margin from the bottom edge.` | 하단 1/3 영역, 바닥 여백 확보 |
| **좌측 제목** | `Place the text on the left side, leaving the right side for the subject.` | 좌측 텍스트, 우측 피사체 배치 |
| **중앙 정렬** | `Center the text horizontally and vertically.` | 화면 정중앙 배치 |
| **여백 확보** | `Leave generous negative space around the text.` | 텍스트 주변에 충분한 여백 확보 |
| **가독성 확보** | `Ensure high contrast between the text and background.` | 글자와 배경 간의 높은 대비 확보 |

#### 서체·스타일 지정 예시
```text
Typography:
Bold modern Korean sans-serif, clean and minimal.
White text with a subtle dark overlay behind it for readability.
Large headline size, tight but readable letter spacing.
```

---

### 4. 영문 텍스트와 한글을 함께 섞을 때의 핵심 규칙
영문과 한글을 섞을 때는 각 문구를 언어 라벨과 함께 따옴표로 분리하고, 역할·위치·서체·크기 위계를 명확히 지정합니다. 한글은 언어를 `Korean`으로 명시해야 깨짐을 방지할 수 있습니다.

#### 다국어 혼용 기본 템플릿
```text
[제품/서비스] 광고 이미지를 만들어줘.

[비주얼]
- 제품: [제품명·색상·재질]
- 배경: [배경·소품·분위기]
- 제품 위치: [예: 화면 중앙, 오른쪽 3분의 1]
- 조명: [예: 부드러운 자연광, 스튜디오 조명]
- 화면 비율: [예: 1:1, 4:5, 16:9]

[텍스트 구성]
English headline (EXACT TEXT, verbatim, 한 번만):
"SMART CHARGE"
Korean subheadline (EXACT TEXT, verbatim, 한 번만):
"놓기만 해도 빠르게 충전"

Typography:
- 영문 헤드라인: 현대적인 bold sans-serif, 큰 크기, 상단 중앙, 한 줄
- 한글 부제목: 깔끔한 한국어 고딕체, 중간 크기, 영문 아래 중앙, 한 줄
- 한글과 영문의 시각적 위계를 명확히 구분해줘.
- 한글은 한글 음절 단위로 자연스럽게 표현하고, 자모가 분리되거나 변형되지 않게 해줘.
- 두 언어 모두 배경과 충분한 대비를 유지하고, 깨끗한 자간과 줄간격으로 읽기 쉽게 해줘.

[금지 조건]
- 위에 적은 문구 외에 다른 문구, 영문·한글 번역, 반복 텍스트, 워터마크, 타사 로고는 넣지 마.
- 철자·띄어쓰기·대소문자·문장부호를 변경하지 마.
```

#### 추천 영문+한글 카피 조합표
| 용도 | 영문 헤드라인 (1~3단어) | 한글 서브헤드라인 (1줄 핵심 혜택) |
|---|---|---|
| **제품 광고** | SMART CHARGE | “놓기만 해도 빠르게 충전” |
| **폰케이스** | LIGHT & SLIM | “가볍게 감싸는 편안함” |
| **카드지갑** | MAGSAFE READY | “필요한 카드, 한 번에” |
| **이어폰** | ALL-DAY COMFORT | “하루 종일, 편안하게” |
| **세일 배너** | LIMITED OFFER | “지금 구매 시 20% 할인” |

---

### 5. 텍스트가 틀렸을 때의 수정 프롬프트
처음 결과가 틀리면 전체를 다시 만들기보다, 이전 이미지를 입력으로 넣고 텍스트만 고쳐 달라고 요청합니다.

#### 기본 수정
```text
Edit this image.
Change ONLY the headline text to:
"생성형 AI, 업무의 새로운 습관"
Keep the same layout, font style, color, position, background, lighting, and composition.
Do not add any other text.
```

#### 강한 고정 수정 (문구가 계속 틀릴 때)
```text
The previous text was incorrect.
Replace all visible text with exactly this Korean phrase:
"생성형 AI, 업무의 새로운 습관"
Render it exactly once.
Do not add, translate, abbreviate, or repeat any characters.
```

---

# 3. 한국어 캘리그라피 & 감성 폰트 제어법

### 1. 캘리그라피 프롬프트의 기본 원리
한국어 캘리그라피·감성 폰트는 폰트 이름보다 **붓의 종류, 잉크 질감, 글자 흐름, 배경 재질, 여백**을 묘사하는 것이 핵심입니다.  
문구는 반드시 따옴표로 고정하고, `Korean` 언어와 `정확히 한 번` 조건을 함께 넣습니다.

#### 캘리그라피 기본 공식 틀
```text
Korean calligraphy text (EXACT TEXT, verbatim, 한 번만):
"원하는 문구"

Typography:
- 한국어 캘리그라피 스타일
- [붓글씨 / 손글씨 / 둥근 펜글씨] 느낌
- [굵고 힘찬 / 얇고 섬세한 / 부드럽게 흐르는] 획
- [검은 먹 / 짙은 브라운 잉크 / 크림색 글씨]
- [붓 끝의 갈라짐, 먹 번짐, 잉크 농담, 자연스러운 필압 변화]
- 글자는 좌에서 우로 자연스럽게 흐르게
- 정형화된 디지털 폰트 느낌은 피하고, 사람이 직접 쓴 듯한 리듬감

Layout:
- [중앙 / 상단 / 오른쪽]에 배치
- [한 줄 / 두 줄]로 구성
- 넉넉한 여백과 여백의 미
- 배경과 충분한 대비, 읽기 쉬운 크기

Background:
- [미색 한지 / 크림색 종이 / 따뜻한 베이지 / 흰 종이]
- 은은한 종이 질감, 최소한의 배경 요소

Constraints:
- 문구를 정확히 한 번만 렌더링해줘.
- 한글 자모가 분리·변형되거나 깨지지 않게 해줘.
- 철자·띄어쓰기·문장부호를 바꾸지 마.
- 추가 문구, 영문 문구, 워터마크, 타사 로고는 넣지 마.
```

---

### 2. 원하는 느낌별 스타일 키워드
| 원하는 느낌 | 프롬프트 추천 표현 |
|---|---|
| **전통 붓글씨** | 한국 전통 서예, 붓글씨, 먹의 농담, 붓 끝 갈라짐, 한지 질감 |
| **감성 손글씨** | 부드러운 한국어 손글씨, 따뜻한 잉크, 자연스러운 기울기, 손으로 쓴 듯한 결 |
| **세련된 모던 캘리** | 모던 한국어 캘리그라피, 얇은 고딕 기반 손글씨, 넓은 자간, 미니멀 |
| **귀엽고 포근함** | 둥근 한국어 손글씨, 부드러운 곡선, 따뜻한 파스텔 색, 손그림 느낌 |
| **고급·차분함** | 우아한 세리프 느낌의 한국어 타이포그래피, 넓은 자간, 크림·브라운 톤 |
| **강한 메시지** | 굵고 힘찬 붓글씨, 강한 필압, 대비 뚜렷한 검은 먹, 미니멀 배경 |

---

### 3. 실전 예시: 감성 캘리그라피 ("오늘도, 나답게")
```text
한국어 캘리그라피 감성 이미지를 만들어줘.

Korean calligraphy text (EXACT TEXT, verbatim, 한 번만):
"오늘도, 나답게"

Typography:
- 부드럽고 감성적인 한국어 손글씨 캘리그라피
- 얇고 흐르는 붓결, 자연스러운 필압 변화
- 획 끝이 살짝 가늘어지는 우아한 마감
- 짙은 브라운 잉크 느낌
- 글자는 좌에서 우로 자연스럽게 흐르게
- 정형화된 디지털 폰트가 아니라 사람이 손으로 쓴 듯한 온기와 리듬감

Layout:
- 문구를 화면 중앙에 배치
- 한 줄 또는 자연스러운 두 줄 구성
- 넉넉한 여백과 여백의 미
- 읽기 쉬운 크기와 깨끗한 자간

Background:
- 미색 한지 질감의 따뜻한 배경
- 은은한 종이 결, 최소한의 소품
- 아침 햇살이 살짝 스미는 조용한 분위기

Constraints:
- 문구를 정확히 한 번만 넣어줘.
- 한글 자모 분리·변형·깨짐 없이 자연스럽게 표현해줘.
- 철자와 띄어쓰기를 정확히 지켜줘.
- 추가 문구, 영문 문구, 워터마크, 타사 로고는 넣지 마.
- 화면 비율: 4:5. 인스타그램 감성 카드뉴스 표지용으로 제작해줘.
```

---

### 4. 캘리그라피 수정용 프롬프트
```text
이미지의 배경, 구도, 색감은 그대로 유지해줘.
기존 텍스트는 모두 지우고, 아래 한국어 문구만 정확히 한 번 넣어줘.

Korean calligraphy text (EXACT TEXT, verbatim, 한 번만):
"새로 넣을 문구"

Typography:
- 부드럽고 감성적인 한국어 캘리그라피
- 얇고 흐르는 붓결, 자연스러운 필압 변화
- 짙은 브라운 잉크
- 화면 중앙, 읽기 쉬운 크기
- 한글 자모 분리·변형 없이 자연스럽게 표현

Constraints:
- 기존 문구, 추가 문구, 영문 문구, 워터마크는 넣지 마.
- 철자와 띄어쓰기를 정확히 지켜줘.
- 배경과 충분한 대비를 유지해줘.
```

---

# 4. 제품 광고 디자인 & 캘리그라피 조화 배치 공식

### 1. 배치 원칙: "제품은 주인공, 캘리그라피는 감정, 고딕체는 정보"
- **제품과 글자가 겹치지 않게:** 캘리그라피를 제품 위에 얹기보다 제품 주변의 빈 공간(여백)에 배치합니다.
- **한 문장만 사용:** “마음을 담아”, “오늘도, 나답게”처럼 1문장(2~6글자)으로 짧게 유지합니다.
- **크기 위계 만들기:** 캘리그라피는 가장 크고 감성적으로, 제품명·가격·CTA는 작고 또렷한 고딕체로 배치합니다.
- **대비 확보:** 밝은 배경에는 짙은 브라운·네이비·먹색, 어두운 배경에는 크림·아이보리 글씨가 좋습니다.
- **폰트 2개 이내:** [캘리그라피 1개 + 정보용 고딕체 1개] 조합이 가장 깔끔합니다.

---

### 2. 추천 배치 3가지
| 배치 유형 | 제품 위치 | 캘리그라피 위치 | 어울리는 용도 |
|---|---|---|---|
| **상단 중앙형** | 화면 중앙·하단 | 상단 중앙, 넉넉한 여백 | 인스타 피드, 감성 제품 광고 |
| **좌우 분할형** | 오른쪽 3분의 2 | 왼쪽 여백, 왼쪽 정렬 | 쇼핑몰 배너, 상세페이지 |
| **하단 중앙형** | 화면 중앙·상단 | 하단 중앙, 짧은 한 줄 | 브랜드 무드 광고, 카드뉴스 |

---

### 3. 실전 광고 프롬프트 예시 (아이보리 폰케이스 & "마음을 담아")
```text
프리미엄 스마트폰 액세서리 광고 이미지를 만들어줘.

[제품·배경]
- 제품: 아이보리 실리콘 폰케이스
- 배경: 미색 한지 질감의 따뜻한 배경, 원목 받침대
- 제품 위치: 화면 오른쪽 3분의 2 지점, 45도 클로즈업
- 조명: 왼쪽에서 들어오는 부드러운 자연광, 자연스러운 그림자
- 화면 비율: 4:5

[캘리그라피]
Korean calligraphy headline (EXACT TEXT, verbatim, 한 번만):
"마음을 담아"
Typography:
- 부드럽고 감성적인 한국어 캘리그라피
- 얇고 자연스럽게 흐르는 붓결
- 짙은 브라운 잉크 느낌
- 화면 왼쪽 여백에 왼쪽 정렬로 배치
- 제품과 겹치지 않게 넉넉한 여백 확보
- 캘리그라피가 화면에서 가장 먼저 눈에 들어오는 헤드라인 역할

[보조 정보]
- 제품명과 가격은 이미지에 넣지 말고, 하단에 깔끔한 고딕체 텍스트를 넣을 여백만 만들어줘.
- 보조 텍스트 영역은 작고 정돈된 느낌으로, 캘리그라피보다 시선을 덜 빼앗게 해줘.

[금지 조건]
- 문구를 정확히 한 번만 넣어줘.
- 한글 자모 분리·변형·깨짐 없이 자연스럽게 표현해줘.
- 철자·띄어쓰기·문장부호를 바꾸지 마.
- 추가 문구, 영문 문구, 워터마크, 타사 로고는 넣지 마.
- 제품의 형태·색상·재질은 왜곡하지 마.
```

---

### 4. 피해야 할 배치 5가지
1. 제품 로고·버튼·질감 위에 캘리그라피를 겹치는 배치
2. 캘리그라피를 너무 크게 만들어 제품보다 눈에 더 띄게 하는 배치
3. 붓글씨로 가격·할인율·연락처까지 쓰는 배치
4. 배경이 복잡한데 글자 대비가 약한 배치
5. 캘리그라피, 고딕체, 세리프체를 3개 이상 섞는 배치

---

# 5. 전문가 애용 프롬프트 키워드 사전 (치트시트)

전문가들은 막연한 형용사 대신 아래의 **7단계 조립 공식**을 활용합니다:
```text
[피사체와 행동] + [배경/환경] + [구도·카메라] + [조명] + [색감·분위기] + [스타일] + [품질·출력 조건]
```

### 1. 품질 & 사실감 키워드

| 키워드 | 효과 |
|---|---|
| `photorealistic` | 사진처럼 사실적인 결과 |
| `professional photography` | 상업·편집 사진 느낌 |
| `highly detailed`, `sharp focus`, `crisp details` | 디테일과 선명도 강조 |
| `8K`, `high resolution` | 고해상도 느낌 |
| `DSLR photo`, `RAW photo` | 실제 카메라 촬영 느낌 |
| `commercial e-commerce style` | 이커머스 상업 사진 톤 |

---

### 2. 구도 & 카메라 키워드

| 분류 | 키워드 |
|---|---|
| 인물 중심 | `portrait`, `headshot`, `close-up`, `three-quarter view` |
| 전신·관계 표현 | `full-body shot`, `medium shot`, `wide shot` |
| 공간감 & 화각 | `wide-angle lens`, `aerial view`, `bird’s-eye view` |
| 감성 인물·제품 | `85mm portrait lens`, `shallow depth of field`, `bokeh` |
| 시점·앵글 | `low-angle shot`, `high-angle shot`, `eye-level`, `overhead shot` (top-down / flat lay) |
| 안정된 화면 구성 | `centered composition`, `rule of thirds`, `symmetrical composition` |

---

### 3. 조명 키워드

| 키워드 | 효과 |
|---|---|
| `soft natural light`, `window light` | 자연스럽고 부드러운 느낌 (실패 없는 기본 조명) |
| `golden hour` | 따뜻하고 감성적인 저녁 빛 |
| `cinematic lighting` | 영화 같은 명암과 분위기 |
| `studio lighting`, `softbox lighting` | 제품·인물 촬영용 균일한 상업 조명 |
| `dramatic side light`, `rim light` | 입체감과 극적인 윤곽 대비 |
| `neon glow`, `backlit` | 도시적, 미래적, 역동적인 역광 분위기 |

---

### 4. 색감 & 분위기 키워드

| 키워드 | 효과 |
|---|---|
| `warm tones`, `cozy`, `bright and airy` | 친근하고 편안한 교육·브랜딩 이미지 |
| `muted colors`, `pastel tones`, `minimal` | 차분하고 세련된 느낌 |
| `vibrant colors`, `energetic` | 광고·행사·홍보용 강한 인상 |
| `moody`, `dark and moody` | 드라마틱하거나 서사적인 이미지 |
| `ethereal`, `dreamy`, `cinematic` | 감성적, 예술적 결과물 |

---

### 5. 스타일별 키워드

| 분류 | 키워드 |
|---|---|
| 실사 사진 | `photorealistic`, `editorial photography`, `documentary photography` |
| 일러스트 | `digital illustration`, `flat illustration`, `vector art`, `minimal line art` |
| 회화풍 | `oil painting`, `watercolor`, `impressionist style` |
| 3D·그래픽 | `3D render`, `Unreal Engine 5`, `Octane render`, `clay style` |
| 애니메이션 | `anime style`, `cel shading`, `Studio Ghibli style` |
| 레트로 | `1980s retro`, `film grain`, `Polaroid photo` |

---

### 6. 레이아웃 & 네거티브(제외) 키워드

| 키워드 | 효과 |
|---|---|
| `clean background, centered composition` | 정보가 잘 보이는 구성 |
| `ample text-safe area` / `generous negative space` | 제목·문구를 넣을 여백 확보 |
| `clear visual hierarchy` | 시각적 위계가 분명한 디자인 |
| `limited color palette` | 2~4색으로 절제된 브랜드 톤 |
| `no text` | AI가 엉뚱한 가짜 글자를 만들지 않도록 지정 |
| **Negative Prompt (제외 표현)** | `blurry, low quality, distorted, deformed hands, extra fingers, watermark, text, logo, duplicate, ugly, oversaturated, checkerboard background` |

---

### 7. 투명 배경 로고 & 오브젝트 생성법
PNG 또는 WebP 출력과 투명 배경 설정을 함께 지정해야 하며, JPEG는 투명도를 지원하지 않습니다.
```text
Create an original, non-infringing logo for an AI education brand called "혜영AI랩".
Brand feeling: Warm, trustworthy, modern, and educational.
Design: Simple vector-like mark combining a lightbulb and a graduation cap, strong silhouette, balanced negative space, scalable at small sizes.
Style: Flat design, minimal strokes, no gradients unless essential.
Output: Single centered logo, generous padding, fully transparent background, clean alpha edges.
Constraints: No solid backdrop, no scenery, no checkerboard pattern, no shadow, no watermark, no extra text.
```

---

# 6. 제품 광고 & 스마트폰 액세서리 실전 프롬프트

### 1. 제품 광고용 기본 복사형 프롬프트
```text
상업용 제품 광고 이미지를 만들어줘.

[제품]
- 제품명 / 종류: [예: 무선 이어폰, 유기농 화장품, 텀블러]
- 핵심 특징: [예: 가벼운 착용감, 촉촉한 보습, 보온 유지]
- 색상·재질: [예: 아이보리 매트 소재, 투명한 유리병, 스테인리스]

[광고 목적]
- 사용 채널: [예: 인스타그램 광고, 쇼핑몰 상세페이지, 배너]
- 타깃: [예: 20~30대 직장인, 육아맘, 시니어]
- 전달할 느낌: [예: 프리미엄, 편안함, 신뢰감, 활기참]

[장면·구도]
- 배경: [예: 밝은 미니멀 스튜디오, 원목 테이블, 욕실 선반, 주방 조명대]
- 제품 배치: [예: 화면 중앙, 오른쪽 3분의 1 지점, 제품을 정면으로]
- 카메라: [예: 아이레벨 클로즈업, 45도 각도, 탑뷰]
- 여백: [예: 왼쪽 또는 상단에 헤드라인용 넉넉한 여백]

[조명·색감]
- 조명: [예: 부드러운 자연광, 스튜디오 소프트박스, 따뜻한 골든아워]
- 색상: [예: 아이보리·베이지·딥그린, 화이트·블루, 파스텔 핑크]
- 분위기: [예: 깔끔하고 고급스러움, 따뜻한 일상감, 산뜻한 청결감]

[문자]
- 포함 문구: "정확히 넣을 문구"
- 위치: [예: 상단 중앙]
- 스타일: [예: 깔끔한 한국어 산세리프체, 흰색 또는 짙은 네이비]
- 문구는 정확히 한 번만, 선명하고 읽기 쉽게 넣어줘.

[금지 조건]
- 실존 인물, 연예인, 타사 로고, 타사 캐릭터, 워터마크는 넣지 마.
- 제품의 형태·색상·로고를 왜곡하거나 바꾸지 마.
- 요청하지 않은 영문 문구, 추가 텍스트, 복잡한 소품은 넣지 마.
- 화면 비율: [예: 1:1, 4:5, 16:9]
- 상업 광고 수준의 선명하고 자연스러운 결과물로 만들어줘.
```

---

### 2. [실제 제품 사진이 있을 때] 원본 유지 및 배경 교체 프롬프트
OpenAI 공식 가이드에서도 제품 추출·목업 시 제품 형태와 라벨 가독성 유지, 깨끗한 실루엣, 불필요한 그림자 제거를 명시할 것을 권장합니다.

```text
첨부한 제품 사진을 사용해 상업용 광고 이미지를 만들어줘.

- 제품의 형태, 색상, 재질, 라벨, 로고, 비율은 원본 그대로 유지해줘.
- 제품을 변형하거나 다른 제품으로 바꾸지 마.
- 배경은 [예: 밝은 원목 테이블 위, 부드러운 아침 햇살이 들어오는 미니멀한 공간]으로 만들어줘.
- 제품은 [예: 화면 중앙]에 자연스럽게 놓고, 바닥에는 은은하고 사실적인 그림자를 넣어줘.
- 조명은 [예: 왼쪽 위에서 들어오는 부드러운 자연광]으로 하고, 제품 표면의 질감이 선명하게 보이게 해줘.
- 오른쪽 또는 상단에 한국어 헤드라인을 넣을 넉넉한 여백을 확보해줘.
- 문구는 이미지에 넣지 말고 여백만 만들어줘.

금지: 타사 로고, 실존 인물, 워터마크, 과도한 소품, 제품 왜곡, 배경과 어울리지 않는 색감.
화면 비율: [예: 4:5]. 상업용 제품 광고 사진처럼 깔끔하고 고급스럽게 제작해줘.
```

---

### 3. 완성 예시 모음

#### 예시 A. 프리미엄 무선 이어폰
```text
프리미엄 무선 이어폰 상업 광고 이미지를 만들어줘.
- 제품: 아이보리 매트 소재의 무선 이어폰 충전 케이스.
- 배경: 밝은 미니멀 스튜디오, 연한 베이지 배경, 원목 받침대.
- 구도: 제품을 화면 중앙에 두고, 살짝 45도 각도에서 바라본 클로즈업.
- 조명: 왼쪽 위에서 들어오는 부드러운 자연광, 제품 표면에 은은한 하이라이트.
- 색감: 아이보리·베이지·딥그린, 깔끔하고 고급스러운 톤.
- 문구: 상단 중앙에 "하루 종일, 편안하게"를 정확히 한 번만 넣어줘.
  깔끔한 한국어 산세리프체, 짙은 네이비 색상으로 선명하게 표현해줘.
- 금지: 실존 인물, 타사 로고, 타사 캐릭터, 워터마크, 추가 영문 문구, 제품 형태 왜곡.
- 화면 비율: 4:5. 인스타그램 광고용으로 상업적 품질을 유지해줘.
```

#### 예시 B. 스마트폰 케이스 (아이보리 실리콘)
```text
아이보리 실리콘 스마트폰 케이스 상업 광고 이미지를 만들어줘.
- 밝은 미니멀 스튜디오의 연한 베이지 배경 위, 원목 받침대에 케이스를 놓아줘.
- 케이스는 화면 중앙에 두고, 살짝 45도 각도의 클로즈업으로 촬영한 듯 표현해줘.
- 왼쪽 위에서 부드러운 자연광이 들어오고, 제품 아래에는 자연스러운 그림자가 생기게 해줘.
- 실리콘 특유의 부드러운 매트 질감과 얇고 가벼운 느낌이 잘 보이게 해줘.
- 상단 중앙에 "가볍게 감싸는 편안함"이라는 한국어 문구를 정확히 한 번만 넣어줘. 깔끔한 한국어 산세리프체, 짙은 네이비 색상으로 선명하게 표현해줘.
- 실존 스마트폰 브랜드 로고, 타사 로고, 실존 인물, 워터마크, 추가 영문 문구는 넣지 마.
- 제품 형태와 색상은 왜곡하지 마. 화면 비율은 4:5, 인스타그램 광고용으로 제작해줘.
```

#### 예시 C. 무선 충전 패드 (배너용 16:9)
```text
화이트와 실버 톤의 무선 충전 패드 상업 광고 이미지를 만들어줘.
- 밝은 흰색 대리석 책상 위에 충전 패드를 놓고, 그 위에 일반적인 스마트폰 한 대를 자연스럽게 올려줘.
- 스마트폰에는 브랜드 로고나 식별 가능한 인터페이스가 보이지 않게 해줘.
- 충전 패드에서 은은한 인디케이터 불빛이 나오고, 주변은 깔끔하게 정리된 느낌으로 표현해줘.
- 왼쪽 위에서 들어오는 부드러운 자연광, 제품 표면의 금속 질감과 반사가 자연스럽게 보이게 해줘.
- 오른쪽에 "놓기만 해도 빠르게 충전"이라는 한국어 헤드라인을 넣을 여백을 확보해줘.
- 문구는 이미지에 넣지 말고 여백만 만들어줘.
- 타사 로고, 실존 인물, 워터마크, 과도한 소품은 넣지 마.
- 제품의 형태·색상·비율은 유지하고, 16:9 배너용으로 상업적 품질로 제작해줘.
```

---

# 7. 실무·현업 실제 활용 프롬프트 사례 모음

실제 공개된 사례(OpenAI, Shopify, Midjourney 공식 문서 및 커뮤니티) 중심의 바로 쓸 수 있는 프롬프트들입니다.

### 1. 실사 인물 사진 (라이프스타일 에디토리얼)
> 출처: OpenAI 공식 프롬프팅 가이드 실제 예시
```text
A candid portrait of a woman in her 30s working at a sunlit desk,
soft coastal daylight, shallow depth of field, subtle film grain,
natural color balance, editorial lifestyle photography
```
- **활용:** 강사 프로필, 워크숍 홍보, 브랜드 소개 이미지

---

### 2. AI 교육 강의·워크숍 일러스트
> 출처: OpenAI ChatGPT 이미지 생성 교육 자료 예시 확장
```text
Create a simple but polished editorial illustration of a Korean adult learner
practicing generative AI on a laptop at a clean desk,
warm natural light, friendly and modern atmosphere,
minimal background, muted pastel palette, no text
```
- **활용:** 강의 안내문, 뉴스레터 표지, 교육 프로그램 포스터

---

### 3. 제품·굿즈 사진 (Shopify Midjourney 실전 예시)
> 출처: Shopify 실전 가이드
```text
/imagine a hyper-realistic product photo of an AI literacy workbook
on a light wooden desk, soft morning sunlight, shallow depth of field,
clean minimal background, warm neutral tones, 1:1
```
- **활용:** 전자책 표지, 워크북 홍보, 클래스 상품 이미지

---

### 4. 프레젠테이션 슬라이드 템플릿
> 출처: Shopify 브랜드 컬러 지정 예시
```text
/imagine a template for a clean, minimalist presentation slide,
use colors #3be8b0 and #1aafd0,
generous white space, simple geometric accents, no text
```
- **활용:** 교육 슬라이드 배경, 강의 썸네일, 워크숍 자료 표지

---

### 5. 미래적 AI 콘셉트 이미지
> 출처: Midjourney 커뮤니티 공유 사례
```text
A young professional wearing AR glasses interacting with holographic data,
futuristic digital tools and floating interface patterns,
background showing interactive AI model displays,
captured with a Sony Alpha A7 III camera and Kodak Vision3 film stock,
cinematic lighting, cool blue tones with orange accents --ar 35:23 --v 6.1
```
- **활용:** AI 에이전트, 디지털 전환, 에듀테크 주제 표지 이미지

---

### 6. 사무공간 & 업무 압박 표현
> 출처: Midjourney 실전 공유 사례
```text
A close-up photorealistic image of a worried marketing employee
at a cluttered office desk overwhelmed by campaign materials,
website UI cascading over the desk, stark lighting,
coffee cup near the edge, late-night clock,
shot with a Sony A7R IV, 80mm lens,
dark blue and purple gradient background, neon lighting --ar 5:6 --style raw --v 6.1
```
- **활용:** 업무 자동화, AI 도입 필요성, 디지털 업무 효율화 자료

---

### 7. 레트로 에디토리얼 인물
> 출처: Midjourney 잡지 화보 스타일 예시
```text
1980s high-concept editorial magazine portrait of a technology professional,
confident attitude, retro business clothing, washed photography style,
muted colors, ethereal ambiance, ISO 400, f/8.0, 1/640 sec,
medium close-up, Hasselblad X2D 100C camera --v 6.1
```
- **활용:** 강연자 소개, 세미나 포스터, 브랜드 아이덴티티 이미지

---

### 8. 3D 교육 소품 이미지
> 출처: Midjourney 3D 렌더링 예시
```text
3D render of school supplies—books, pens, and pencils—flying around
an orange backpack, flowers and plants growing from the bag,
blank tablet screen floating in the air,
inflatable plastic texture, Blender and Cinema 4D rendering,
yellow studio background --v 6.1
```
- **활용:** 초·중등 AI 교육, 학교 수업 안내, 키즈 콘텐츠 표지

---

### 9. 초간단 스타일 실험형
> 출처: Midjourney 공식 문서의 단어 치환 비교 실험법
```text
watercolor style cat
risograph style cat
ukiyo-e style cat
pixel art style cat
```
- **활용:** 교육 현장에서 “같은 주제, 다른 스타일”을 빠르게 비교 실습할 때 활용

---

### 10. 옥외 빌보드 광고 목업
> 출처: OpenAI 빌보드 광고 프롬프트 구조
```text
Create a realistic billboard mockup for an AI literacy workshop.
Scene: A modern city street at sunset, with a large highway billboard.
Text (EXACT, verbatim, no extra characters):
"AI, 배움의 방식을 바꾸다"
Typography: Bold Korean sans-serif, high contrast, centered, clean spacing. Render the text exactly once and make it perfectly legible.
Style: Premium outdoor advertising photography, cinematic but not overly stylized.
Constraints: No watermark, no unrelated logos, no additional text.
```

---

### 11. SNS 숏폼 썸네일 (9:16)
```text
"ChatGPT로 5분 만에 보고서 초안 만들기" 숏폼 썸네일을 만들어줘.
노트북 화면과 간단한 문서 아이콘, 밝은 데스크 환경을 배경으로 하고
중앙에 크고 읽기 쉬운 한국어 텍스트 "5분 만에 보고서 초안"을 배치해.
시선을 끄는 대비 색상, 깔끔한 레이아웃, 9:16 세로 비율, 유튜브 쇼츠 썸네일용.
과장된 표현·타사 로고·실존 인물 얼굴은 넣지 마.
```

---

### 12. 전단·포스터 (3:4 / A4 인쇄용)
```text
지역 시니어 대상 '스마트폰 기초 강좌' A4 전단 이미지를 만들어줘.
친절하고 밝은 톤, 큰 글씨, 명확한 정보 계층.
- 상단 제목: "스마트폰, 어렵지 않아요"
- 중간: 강좌 내용 아이콘 3개 — 사진 찍기, 문자 보내기, 유튜브 보기
- 하단: 일시·장소·신청 방법이 들어갈 여백
따뜻한 주황·크림·네이비 색상, 깔끔한 일러스트 스타일, 인쇄용 고해상도, 3:4 비율.
```

---

### 13. 교육용 인포그래픽 도식
```text
Create a clean educational infographic titled "생성형 AI 활용 3단계" for adult beginners.
Content:
1. 질문하기: 원하는 결과를 구체적으로 요청한다.
2. 검토하기: 사실관계와 저작권을 확인한다.
3. 활용하기: 결과를 수정해 업무·교육 자료로 완성한다.
Visual system:
Simple flat icons, clear arrows, readable Korean labels,
white background, muted blue and warm gray palette, generous white space.
Constraints:
No extra text, no decorative clutter, no tiny fonts, keep the three-step flow clear and easy to scan.
```

---

# 8. 검수 체크리스트

### 1. 생성 후 실무 검수 체크리스트
- [ ] 문구가 요청한 대로 **정확히 한 번만** 들어갔는가?
- [ ] 한글 자모 분리, 띄어쓰기, 문장부호가 왜곡 없이 정확한가?
- [ ] 글자가 배경과 충분히 대비되어 모바일에서도 읽기 쉬운가?
- [ ] 제목·부제·로고 자리 등 여백(Negative Space)이 의도대로 확보되었는가?
- [ ] 요청하지 않은 영문 외계어, 가짜 워터마크, 타사 로고가 생성되지 않았는가?
- [ ] 제품 사진의 경우, 원본의 형태·색상·재질·비율이 유지되었는가?
- [ ] 인물의 경우 손가락 왜곡이나 부자연스러운 표정이 없는가?
- [ ] 작은 글자나 복잡한 다이어그램이 필요할 때 high 품질 설정을 적용했는가?

