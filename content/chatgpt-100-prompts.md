# 사진 한 장으로 광고 만드는 ChatGPT 프롬프트 100개

프롬프트 문장 구조는 원문 그대로입니다. 장면을 빌더 문장으로 다시 쓰지 않았습니다. 칸만 채워 복사하는 화면은 `/photo-prompts` 입니다.

원문: [프롬왓 Notion 페이지](https://nifty-licorice-663.notion.site/ChatGPT-100-3fefd99f0e5f816b8389dd3836fd64df)

- 기준일: 2026-10-20
- 제작: 프롬왓
- 도구: ChatGPT 이미지 2.5
- 1~4번: 실제 생성 결과를 확인한 원문
- 5~100번: 응용용. 번호별 생성 결과를 검증한 예시는 아님. 사진과 생성 시점에 따라 결과가 달라질 수 있음

> 이 정리는 공개 Notion 페이지의 프롬프트를 분류·복사하기 쉽게 옮긴 것입니다. 저작권은 원작자(프롬왓)에게 있습니다.

## 쓰는 방법

1. [ChatGPT](https://chatgpt.com/)에서 새 대화를 열고 제품 사진을 첨부한다.
2. 1~3번은 제품 사진 1장. 4번(텀블러 배너)은 인물 사진 → 제품 사진 순서로 2장.
3. 1~4번은 제품 설명과 따옴표 안 문구를 직접 바꾼다. 5~100번은 `[대괄호]` 칸을 채운다.
4. 프롬프트 끝에 `Use ONLY these exact strings`가 있으면, 본문에서 바꾼 문구를 그 목록에도 똑같이 넣는다. 같은 대괄호가 여러 번 나오면 모두 같은 값으로 바꾼다.
5. 전체를 보내 이미지를 만든 뒤 글자·가격·제품 모양을 확인한다. 수정할 때는 바꿀 부분과 유지할 부분을 함께 적는다. 선택한 영역 밖도 달라질 수 있다.
6. 사진에 없는 구조·치수·효능은 생성 결과만 보고 사실로 쓰지 말고, 실제 제품 정보와 대조한다.

제품군 순서(5~100번 각 분류 안): 식품 · 음료 · 뷰티 · 패션 · 생활용품 · 전자기기 · 반려용품 · 꽃 · 향초 · 주얼리 · 운동용품 · 문구

## 목차

| 번호 | 분류 | 비율 | 개수 |
| --- | --- | --- | --- |
| 1–4 | 영상 예시 4가지 (실제 생성 검증) | 포스터 2:3 / 피드 4:5 / 상세 9:16 / 배너 16:9 | 4 |
| 5–16 | 포스터 12가지 | 세로 2:3 | 12 |
| 17–28 | 피드 광고 12가지 | 4:5 | 12 |
| 29–40 | 상세페이지 12가지 | 세로 9:16 | 12 |
| 41–52 | 홈페이지 배너 12가지 | 가로 16:9 | 12 |
| 53–64 | 메뉴판·가격표 12가지 | 세로 3:4 | 12 |
| 65–76 | 영상 썸네일 12가지 | 가로 16:9 | 12 |
| 77–88 | 매장 POP 12가지 | 세로 3:4 | 12 |
| 89–100 | 스토리 광고 12가지 | 세로 9:16 | 12 |

---

## 영상 예시 4가지 (실제 생성 검증) (1–4)

비율: 포스터 2:3 / 피드 4:5 / 상세 9:16 / 배너 16:9

페이지에 넣은 사진과 생성 결과가 함께 있는 원문. 1~3번은 제품 사진 1장, 4번은 인물+제품 각 1장.

### 1. 쿠키 포스터

- 첨부: 쿠키를 찍은 폰 사진 1장
- 바꿀 곳: 쿠키 설명, 큰 제목 두 개(바삭/쭈욱), 가격·제품명·브랜드명
- 참고: 쿠키가 갈라지며 초콜릿이 늘어나는 장면이라, 다른 제품을 넣으면 장면 설명도 함께 바꿔야 함.

```
Generate this image. Use the attached casual smartphone photo only as the product reference for the homemade chocolate chip cookie (chunky texture, chocolate chunks, golden-brown color). Create an original, award-level Korean bakery poster, vertical 2:3, flat full-bleed print artwork with its own concept: the break moment. Warm saturated caramel-orange background. In the exact center one big thick cookie is being pulled apart in mid-air into two halves, a long glossy rope of molten chocolate stretching horizontally between them, crumbs and chocolate chunks bursting outward. A gigantic ultra-bold Korean headline in deep chocolate brown is split around the cookie: "바삭" huge above it and "쭈욱" huge below it; the cookie halves overlap the inner edges of both words and the chocolate rope crosses in front of the letters for rich layered depth. A cream-colored round scalloped bakery seal sticker tilted at upper right reading "3,500원", product name "수제 초코칩 쿠키" in small cream bold type at the bottom, brand wordmark "CRUMB" tiny at top left. Palette: caramel orange, chocolate brown, cream. Crisp high-speed studio food photography, hard key light, crisp shadows, rich saturated color. Use ONLY these exact strings: "바삭", "쭈욱", "3,500원", "수제 초코칩 쿠키", "CRUMB". No other text, no watermark.
```

### 2. 앰플 피드 광고

- 첨부: 앰플 병을 찍은 폰 사진 1장
- 바꿀 곳: 병의 모양·색, 광고 문구 두 줄, 라벨의 브랜드명
- 참고: 숲속 물가 장면도 내 제품에 맞게 바꿀 것. 문구를 수정하면 Use ONLY 목록도 같게.

```
Generate this image. Use the attached casual smartphone photo only as the product reference for the amber glass dropper bottle with black dropper (shape, proportions, glass color). Create a quiet, luxurious skincare Instagram feed ad, 4:5, in the editorial style of a premium clean-beauty brand campaign. The bottle rests on a smooth pale travertine stone that sits in a shallow pool of crystal-clear spring water inside a sunlit forest glade in the early morning. Dappled sunlight falling through green leaves casts soft leaf shadows and shimmering water caustics across the stone and the glass, warm honey-amber light glows through the bottle, and a single glossy droplet hangs from the tip of the raised dropper just above it. A few dewy fern fronds and soft moss frame the edges, gentle mist in the far background. Natural palette of sage green, warm honey amber and stone beige, airy negative space at the top, shallow depth of field, crisp macro detail on the glass and water, soft film-like natural color. Elegant minimal typography: a thin refined serif headline at the top center "Let your skin breathe again." and a small light sans-serif line under it "AURA Botanical Ampoule". A minimal label on the bottle reading "AURA". Use ONLY these exact strings: "Let your skin breathe again.", "AURA Botanical Ampoule", "AURA". No other text, no watermark.
```

### 3. 운동화 상세페이지

- 첨부: 운동화를 찍은 폰 사진 1장
- 바꿀 곳: 운동화 설명, 한국어 문구 네 줄, 브랜드명과 색상 견본
- 참고: 소재·밑창·색상은 실제 제품 정보에 맞출 것. 결과물은 상세페이지용 세로 이미지 한 장(배송·교환 안내는 별도).

```
Generate this image. Use the attached casual smartphone photo only as the product reference for the plain white low-top canvas sneakers (shape, sole, laces, stitching). Create a refined Korean fashion brand product detail page, tall vertical 9:16, in the calm minimal editorial style of a premium Seoul basics label. Top section: a sunlit lifestyle photo of someone sitting on warm concrete steps in the morning, cropped at the knees, wearing light wide-leg trousers and the white sneakers, long soft window-frame shadows across the ground. Middle section: on a warm off-white linen backdrop, one sneaker shown large in clean side profile with a soft natural shadow, and a neat row of three square close-up crops underneath (canvas weave texture, rubber sole edge, lace eyelets), each with a thin small Korean caption. Bottom section: the pair shown from above on light oak with a small color swatch row (white, oatmeal, charcoal). Plenty of white space, thin elegant lines, soft natural daylight, muted palette of off-white, oatmeal beige and charcoal. Korean text in clean thin sans-serif, exact strings only: "매일 신고 싶은 기본" as the headline over the top photo, "부드러운 캔버스", "가벼운 밑창", "단단한 아일렛", and the brand wordmark "PLAIN". No other text, no watermark.
```

### 4. 텀블러 배너

- 첨부: 인물 사진 1장 → 텀블러 폰 사진 1장 (이 순서)
- 바꿀 곳: 텀블러 설명, 네 가지 색상·무늬, 광고 문구 네 줄, 브랜드명
- 참고: 프롬프트의 first/second가 첨부 순서를 가리킴. 인물은 본인 또는 사용 허락을 받은 사진만.

```
Generate this image. Use the first attached photo only for the woman's identity (her face and hair color); restyle hair, pose, outfit, light and framing as described. Use the second attached photo only as the product reference for the tumbler shape (straight-walled tumbler with a clear flat lid); the brushed steel one stays in the set, and the other versions use the exact same shape in powder-coated colors. Create a hyper-realistic premium lifestyle brand website hero banner, wide 16:9, that looks like a real commercial photo shoot finished in Adobe Photoshop: true-to-life skin texture with natural pores and fine baby hairs, real fabric texture, physically accurate harsh summer sunlight, then a clean professional retouch and composite with crisp cutout edges, subtle soft drop shadows under the floating labels, perfectly balanced color grading. Scene: bright summer sun casts sharp window-blind shadows across a warm cream plaster wall. In the center, the woman with her long soft wavy hair in a loose half-up style, tiny black oval sunglasses pushed up on her head, a ruffled white cotton tube top and a thin gold necklace, sips from the brushed steel tumbler through a pastel pink straw with a playful confident look, natural realistic body proportions. From the left and right frame edges, four real arms with natural skin and small bracelets reach in, each hand holding the same tumbler in a different design: butter-yellow and pink candy stripes, mint green with tiny lemons, cherry red with white polka dots, sky blue with clouds. Next to each tumbler floats a small rounded semi-transparent dusty-pink pill label designed like a clean vector graphic, with a witty caption in white bold sans-serif: "Ice still there at 5pm", "Desk hydration era", "Road trip mode", "Main character sip". A small clean wordmark "STILL" printed on each tumbler. Sun-bleached pastel palette, editorial fashion campaign quality. Use ONLY these exact strings: "Ice still there at 5pm", "Desk hydration era", "Road trip mode", "Main character sip", "STILL". No other text, no watermark.
```

---

## 포스터 12가지 (5–16)

비율: 세로 2:3

큰 글자가 시선을 끄는 홍보물. 제품이 글자와 겹쳐 놓이는 장면이 많아서, 배경이 단순한 정면 사진이 잘 맞음.

### 5. 식품 · 야시장 국물 요리의 붉은 붓글씨 포스터

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, texture, toppings and plating). Create a night-market street-food poster, vertical 2:3, flat full-bleed print artwork. Deep lacquer-red background with warm bokeh of hanging paper lanterns at the top. The dish stands large in the lower center on a dark steel counter with thick steam curling upward, and the steam passes in front of the bottom of an enormous hand-brushed calligraphy headline "[헤드라인]" in cream and gold that fills the upper half. A small round gold seal stamp at the lower right reads "[가격]", the dish name "[제품명]" in bold cream sits under the dish. Palette of lacquer red, charcoal black, cream and gold, hard warm key light, glistening sauce highlights, rich food photography. Use ONLY these exact strings: "[헤드라인]", "[가격]", "[제품명]". No other text, no watermark.
```

### 6. 음료 · 반으로 갈라진 색 배경과 얼음 튐 포스터

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [혜택] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (bottle or cup shape, liquid color, label and cap). Create a summer cold-drink poster, vertical 2:3, flat full-bleed artwork. The background is split diagonally into citrus yellow on the left and deep teal on the right. The drink stands tall in the center, cut out with a crisp edge, and a crown of ice cubes and clear splash bursts around it, some droplets in front of the glass and some behind the headline. A giant rounded sans-serif headline "[헤드라인]" in white curves along the upper part of the frame and its lower letters are partly covered by the glass. A small white circle badge near the glass reads "[혜택]", with "[제품명]" in bold under the glass. Hard summer sunlight, high saturation, condensation beads on the surface. Use ONLY these exact strings: "[헤드라인]", "[혜택]", "[제품명]". No other text, no watermark.
```

### 7. 뷰티 · 미술관 전시 포스터처럼 놓은 스킨케어

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [제품명] [서브문구]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (container shape, cap, color and finish). Create a quiet museum-exhibition style beauty poster, vertical 2:3, flat full-bleed print artwork. A soft blush-pink studio wall with a tall arch shape outlined in a thin darker pink line. The product stands on a pale plaster plinth at the center of the arch, lit by one soft window light that throws a long gentle shadow, with a few dry pampas stems at the edge. A very large thin-stroke serif headline "[헤드라인]" in deep rosewood sits at the top and the product slightly overlaps its last letters. Small exhibition-style caption block at the bottom: "[제품명]" and "[서브문구]" in light sans-serif. Palette of blush, cream and rosewood, airy negative space, matte print feel. Use ONLY these exact strings: "[헤드라인]", "[제품명]", "[서브문구]". No other text, no watermark.
```

### 8. 패션 · 복사기 질감 콜라주의 스트릿 포스터

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [기간] [브랜드명] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (garment cut, color, fabric texture and details). Create a streetwear drop poster, vertical 2:3, flat full-bleed artwork in a photocopied-collage style. Black, off-white and acid-green palette with coarse halftone grain and torn paper edges. The garment is cut out large at a slight tilt in the center with strips of masking tape holding its corners, a hard flash-photo shadow behind it. Oversized ultra-bold grotesque headline "[헤드라인]" in acid green running up the left edge, partly hidden behind the garment, plus a small stamped box "[기간]" in black at the top right. Brand label "[브랜드명]" and "[제품명]" in small black type at the bottom, scribbled arrows and star doodles in white marker. Use ONLY these exact strings: "[헤드라인]", "[기간]", "[브랜드명]", "[제품명]". No other text, no watermark.
```

### 9. 생활용품 · 북유럽 파스텔 도형 위의 생활 소품 포스터

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and proportions). Create a friendly Scandinavian home-goods poster, vertical 2:3, flat full-bleed artwork. Soft sage green background with large overlapping cream, terracotta and butter-yellow geometric shapes (circle, arch, half-moon). The product sits on a small light-wood step in the center with a long soft shadow falling across the shapes. A big rounded bold headline "[헤드라인]" in deep forest green at the top, the product overlapping its bottom edge slightly. A cream pill label at lower left reads "[서브문구]" and a small round terracotta sticker at the right reads "[가격]", with "[제품명]" under the product in medium weight type. Clean daylight, gentle shadows, cheerful and tidy. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[가격]", "[제품명]". No other text, no watermark.
```

### 10. 전자기기 · 네온 외곽선이 흐르는 다크 출시 포스터

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [기간]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (body shape, color, ports and button layout). Create a tech product launch poster, vertical 2:3, flat full-bleed artwork. Near-black navy gradient background with a faint perspective grid floor. The device floats in the center, tilted slightly, lit by a cool cyan rim light with thin neon contour lines flowing around its silhouette like an energy trace. Large wide-tracking headline "[헤드라인]" in white across the upper third with a subtle glow, the device overlapping its lower edge. Three small spec callouts "[포인트1]", "[포인트2]", "[포인트3]" connected to the device by hairline leader lines, and the product name "[제품명]" with the date "[기간]" in small light type at the bottom. Cyan and violet accents, crisp reflections on the body. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[제품명]", "[기간]". No other text, no watermark.
```

### 11. 반려용품 · 햇살 노란 바탕의 발자국 컨페티 포스터

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [혜택] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and stitching). Create a cheerful pet-shop poster, vertical 2:3, flat full-bleed artwork. Sunshine-yellow background with scattered white paw-print confetti and a big soft cream circle behind the product. The product sits in the center on a small light-blue mat, and a happy fluffy dog looks up at it from the lower right, tongue out, while paw prints trail across the ground toward it. A chunky rounded headline "[헤드라인]" in deep blue fills the top, with the product overlapping the bottom of the letters. A bright red heart-shaped badge at upper right reads "[혜택]", and "[제품명]" is written in bold blue under the product. Bright cheerful daylight, warm saturated color, playful pet-store energy. Use ONLY these exact strings: "[헤드라인]", "[혜택]", "[제품명]". No other text, no watermark.
```

### 12. 꽃 · 어두운 이끼색 정물화 속의 부케 포스터

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [제품명] [서브문구] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (flower types, colors, wrapping and arrangement). Create a botanical still-life poster, vertical 2:3, flat full-bleed print artwork in the mood of a Dutch oil painting. Deep moss-green background with a thin cream art-nouveau frame line. The bouquet stands in a dark glazed vase on a stone ledge, lit by a single soft side light that makes the petals glow and leaves a few fallen petals on the ledge. An elegant high-contrast serif headline "[헤드라인]" in cream at the top, the tallest stems overlapping its bottom edge. Small centered caption "[제품명]" and a thin ornamental divider with "[서브문구]" below, small gold numerals "[가격]" at the bottom right. Palette of moss green, blush pink and antique gold. Use ONLY these exact strings: "[헤드라인]", "[제품명]", "[서브문구]", "[가격]". No other text, no watermark.
```

### 13. 향초 · 크게 번지는 불빛과 연기의 가을 저녁 포스터

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [제품명] [서브문구]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (vessel shape, wax color, lid and label). Create a cozy autumn-evening candle poster, vertical 2:3, flat full-bleed artwork. Dark chestnut-brown room background with a huge warm amber glow behind the lit candle in the center and a single thin curl of smoke drawn upward. A few dried leaves, a cinnamon stick and a woolen blanket edge in the foreground. Flowing script headline "[헤드라인]" in glowing cream across the top that reads as if lit by the flame, the smoke curling between its letters. "[제품명]" in small spaced capitals under the candle and a small ember-orange tag at the lower right reading "[서브문구]". Warm candle-only lighting, soft glow, rich amber and brown palette. Use ONLY these exact strings: "[헤드라인]", "[제품명]", "[서브문구]". No other text, no watermark.
```

### 14. 주얼리 · 검정 벨벳 위로 내려오는 빛줄기 포스터

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [브랜드명] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (design, metal color, stone shape and proportions). Create a luxury jewelry poster, vertical 2:3, flat full-bleed print artwork. Pure black velvet background with one narrow beam of warm light falling diagonally from the top left onto the piece, which rests on a small block of black marble at the center, tiny star-shaped sparkles on its stones. Thin gold hairlines frame the poster. A large high-contrast serif headline "[헤드라인]" in pale champagne gold across the upper third, with the beam of light cutting through its letters. "[브랜드명]" in small spaced capitals at the top, "[제품명]" and "[가격]" in thin gold type at the bottom center. Deep contrast, crisp metal and gem reflections, quiet and expensive. Use ONLY these exact strings: "[헤드라인]", "[브랜드명]", "[제품명]", "[가격]". No other text, no watermark.
```

### 15. 운동용품 · 사선으로 쪼개진 스피드 캠페인 포스터

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and grip details). Create a sports campaign poster, vertical 2:3, flat full-bleed artwork. Dynamic diagonal split of electric orange and matte black with horizontal motion-blur speed streaks sweeping across. The product is cut out large at a forceful angle in the center with sharp edge light and chalk dust or sweat spray flying off it. A massive condensed ultra-bold headline "[헤드라인]" in white stacked in two lines on the black side, the product overlapping the lower line. A small orange rectangle tag "[서브문구]" at the top left and a bold white box "[가격]" at the bottom right, with "[제품명]" in bold under the product. High-contrast dramatic lighting, gritty athletic texture. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[가격]", "[제품명]". No other text, no watermark.
```

### 16. 문구 · 종이 오림 콜라주 놀이터 포스터

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [혜택] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, material and cover design). Create a playful stationery poster, vertical 2:3, flat full-bleed artwork in a paper-cut collage style. Bright cobalt blue background layered with torn paper shapes in tomato red, sunny yellow and mint, each with a soft paper shadow. The product sits in the center propped against a stack of colorful scattered pencils, washi tape strips and paper clips. A huge hand-cut chunky headline "[헤드라인]" in sunny yellow at the top with a hand-drawn scribble underline in white, the product overlapping its lower letters. A round red sticker at the upper right reads "[혜택]", and "[제품명]" is written with a white marker on a taped label at the bottom. Cheerful primary colors, crisp daylight, tactile texture. Use ONLY these exact strings: "[헤드라인]", "[혜택]", "[제품명]". No other text, no watermark.
```

---

## 피드 광고 12가지 (17–28)

비율: 4:5

인스타 피드용 세로 광고 시안. 제품이 잘 보이는 장면을 고르고, 큰 제목과 보조 문구는 짧게.

### 17. 식품 · 접시 위 한 입이 확대되는 사선 구도 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [혜택] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, texture, toppings and plating). Create an Instagram feed ad, 4:5, flat full-bleed artwork. Warm butter-cream background with a diagonal band of tomato red cutting across the lower half. The dish is shot from a 45-degree angle at the center-right with a fork lifting one bite that stretches or drips, and a small circular magnified inset at the upper left showing the texture of that bite with a thin red ring. Chunky friendly headline "[헤드라인]" in dark brown at the top left, the fork tip overlapping its last letter. A red pill button shape reads "[혜택]" at the bottom and "[제품명]" in bold beside it. Soft window light, glossy sauce highlights, appetizing and bright. Use ONLY these exact strings: "[헤드라인]", "[혜택]", "[제품명]". No other text, no watermark.
```

### 18. 음료 · 얼음과 거품이 쌓인 카페 시즌 한정 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [제품명] [기간]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (bottle or cup shape, liquid color, label and cap). Create a cafe seasonal-menu Instagram feed ad, 4:5, flat full-bleed artwork. Smooth dusty-lavender background with a pale oat-colored round table top at the bottom. The drink stands in the center with dripping condensation, a swirl of cream on top and a few edible flower petals falling around it, one petal in front of the cup. A modern thin serif headline "[헤드라인]" in deep plum above, with a tiny hand-drawn sparkle beside it. A small cream tag lower left reads "[서브문구]" and "[제품명]" in light sans-serif under the cup, a round plum sticker at lower right reads "[기간]". Soft diffused light, creamy pastel palette, calm and premium. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[제품명]", "[기간]". No other text, no watermark.
```

### 19. 뷰티 · 물결치는 제형 리본이 감싸는 세럼 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [제품명] [포인트1]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (container shape, cap, color and finish). Create a skincare Instagram feed ad, 4:5, flat full-bleed artwork. Soft sky-blue gradient background with gentle water ripples. The product floats slightly above a shallow pool in the center and a glossy translucent ribbon of its texture swirls around it, passing in front on one side and behind on the other, with a few clean droplets in the air. Thin refined headline "[헤드라인]" in deep navy at the top, small line "[서브문구]" under it. "[제품명]" in small spaced capitals below the pool and a tiny white circle badge reads "[포인트1]". Crisp specular highlights, airy and fresh, quiet clean-beauty style. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[제품명]", "[포인트1]". No other text, no watermark.
```

### 20. 패션 · 거리 한복판 한 벌 룩 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [브랜드명] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (garment cut, color, fabric texture and details). Create a fashion-brand Instagram feed ad, 4:5, flat full-bleed artwork. A sunlit city crosswalk at golden hour, the garment displayed on a plain wooden mannequin torso standing in the middle of the empty crossing, long soft shadows stretching across the zebra stripes, blurred buildings behind. A thin tall condensed headline "[헤드라인]" in white runs vertically along the left edge, partly overlapped by the mannequin's shadow. "[브랜드명]" in small spaced capitals at the top and "[제품명]" with "[가격]" in clean sans-serif at the bottom left. Warm peach-and-teal color grade, editorial film look. Use ONLY these exact strings: "[헤드라인]", "[브랜드명]", "[제품명]", "[가격]". No other text, no watermark.
```

### 21. 생활용품 · 아침 식탁 위 쓰임새를 보여주는 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and proportions). Create a home-goods Instagram feed ad, 4:5, flat full-bleed artwork. A bright morning kitchen counter with pale oak and white tile, the product in use in the center with a hand entering from the right edge to hold it naturally, small props like a lemon, a linen towel and a plant in the background. A friendly rounded headline "[헤드라인]" in warm charcoal across the top, with three small round icon-style labels "[포인트1]", "[포인트2]", "[포인트3]" floating beside the product on thin lines. "[제품명]" in a soft cream rectangle at the bottom left and "[가격]" in bold at the right. Soft daylight, clean and practical. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[제품명]", "[가격]". No other text, no watermark.
```

### 22. 전자기기 · 책상 위 한 대, 화면 속이 보이는 제품 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (body shape, color, ports and button layout). Create a gadget Instagram feed ad, 4:5, flat full-bleed artwork. A tidy minimalist desk seen from above at an angle, warm walnut surface, a coffee cup and a notebook at the edges, the device centered with a soft glow from its screen or indicator lights. Thick pastel mint rectangle behind the device cut at an angle for depth. Bold modern headline "[헤드라인]" in dark charcoal at the top, three tiny capsule labels "[포인트1]", "[포인트2]", "[포인트3]" along the bottom. "[제품명]" in medium weight type and "[가격]" in a black rounded box at the right. Crisp reflections, soft shadows, cool-warm contrast. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[제품명]", "[가격]". No other text, no watermark.
```

### 23. 반려용품 · 강아지 눈높이로 본 바닥 컷 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [제품명] [혜택]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and stitching). Create a pet-product Instagram feed ad, 4:5, flat full-bleed artwork shot from dog-eye level at floor height. A sunny living-room floor with light wood planks and a soft blurred sofa behind, the product in the foreground center very close to the camera, and a curious puppy nose entering the frame from the lower right edge. Warm golden afternoon light with long window shadows. Rounded friendly headline "[헤드라인]" in deep teal at the top, a small yellow speech-bubble "[서브문구]" next to the puppy. "[제품명]" in bold at the bottom left and a round teal badge "[혜택]" at the bottom right. Warm saturated color, shallow depth of field. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[제품명]", "[혜택]". No other text, no watermark.
```

### 24. 꽃 · 현관문 앞에 놓인 오늘의 꽃다발 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [브랜드명] [제품명] [가격] [서브문구]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (flower types, colors, wrapping and arrangement). Create a flower-shop Instagram feed ad, 4:5, flat full-bleed artwork. A wrapped bouquet leaning against a sage-green painted front door on a doorstep with a tiny handwritten delivery tag, morning sun making dappled leaf shadows on the door and stone step. Fresh petals scattered on the step, a kraft paper wrap with a thin ribbon. An elegant script headline "[헤드라인]" in white at the upper left over the door, "[브랜드명]" in small capitals at the top right. A kraft-paper tag at the lower left reads "[제품명]" and "[가격]" and a small cream circle sticker reads "[서브문구]". Soft natural light, fresh and warm. Use ONLY these exact strings: "[헤드라인]", "[브랜드명]", "[제품명]", "[가격]", "[서브문구]". No other text, no watermark.
```

### 25. 향초 · 욕실 선반 위 저녁 휴식 장면 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [제품명] [포인트1]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (vessel shape, wax color, lid and label). Create a candle Instagram feed ad, 4:5, flat full-bleed artwork. A calm evening bathroom shelf, the lit candle in the center beside a folded towel and a small plant, with a rolling bath behind it slightly steamed, window dusk blue light mixed with the warm candle glow, soft reflections on a white tile wall. A thin elegant serif headline "[헤드라인]" in white across the top, small line "[서브문구]" below it. "[제품명]" in small spaced capitals at the bottom center and a tiny pill label "[포인트1]" at the lower left. Palette of dusk blue, warm amber and white, gentle bokeh, relaxing mood. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[제품명]", "[포인트1]". No other text, no watermark.
```

### 26. 주얼리 · 손끝에 걸린 반지 클로즈업 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [브랜드명] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (design, metal color, stone shape and proportions). Create a jewelry Instagram feed ad, 4:5, flat full-bleed artwork. An extreme close-up of a hand with natural skin and a neat nude manicure holding the piece between finger and thumb against a soft ivory silk background with gentle folds, one side-lit highlight making the metal and stones sparkle, a few tiny light flares. A refined thin serif headline "[헤드라인]" in deep brown at the top left, "[브랜드명]" in small spaced capitals at the top right. "[제품명]" and "[가격]" in small light sans-serif at the bottom with a thin line above them. Warm champagne palette, shallow depth of field, intimate and delicate. Use ONLY these exact strings: "[헤드라인]", "[브랜드명]", "[제품명]", "[가격]". No other text, no watermark.
```

### 27. 운동용품 · 땀방울과 함께 정지된 순간 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [혜택] [제품명] [서브문구]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and grip details). Create a fitness Instagram feed ad, 4:5, flat full-bleed artwork. A dark concrete gym wall with one hard overhead light, the product in the center of the frame with chalk dust frozen mid-air around it and bright sweat droplets, lime-green accent light strip on the right. Giant bold italic headline "[헤드라인]" in white across the middle, partly passing behind the product for depth. A lime-green rectangle at the bottom reads "[혜택]" with "[제품명]" in black bold type inside it, tiny line "[서브문구]" at the top left. High-contrast gritty look, crisp motion freeze, energetic. Use ONLY these exact strings: "[헤드라인]", "[혜택]", "[제품명]", "[서브문구]". No other text, no watermark.
```

### 28. 문구 · 책상 위 하루 계획이 채워진 플랫레이 피드 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, material and cover design). Create a stationery Instagram feed ad, 4:5, flat-lay seen from directly above. A warm cream paper desk with a soft grid texture, the product placed slightly off center on top of an open planner page with small handwritten-looking marks, surrounded by neatly arranged pens, a small plant leaf and a paper clip, a soft shadow from a lamp at the top corner. Chunky hand-lettered headline "[헤드라인]" in navy at the top with a colored highlighter swipe behind the key word. A pastel pink sticky-note at the lower left reads "[서브문구]", "[제품명]" in medium weight under the product, a small yellow circle reads "[가격]". Cozy, tidy, soft daylight. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[제품명]", "[가격]". No other text, no watermark.
```

---

## 상세페이지 12가지 (29–40)

비율: 세로 9:16

제품 특징을 위에서 아래로 보여주는 세로 이미지 한 장. 쇼핑몰 상세 전체가 필요하면 배송·교환 안내는 따로 더함.

### 29. 식품 · 재료에서 완성까지 이어지는 세로 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [서브문구] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, texture, toppings and plating). Create a Korean food-brand product detail page, tall vertical 9:16, in three stacked sections on a warm cream canvas. Top: the finished product large on a rustic wooden board with the key raw ingredients scattered around it, headline "[헤드라인]" in deep brown serif above. Middle: a row of three round ingredient close-ups, each with a thin caption "[포인트1]", "[포인트2]", "[포인트3]" and a hand-drawn arrow back to the product. Bottom: a cut-open cross-section close-up and a small olive-green seal "[서브문구]" next to the price "[가격]" and the name "[제품명]". Natural window light, earthy palette of cream, olive and brown, calm editorial layout with generous white space. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[서브문구]", "[가격]", "[제품명]". No other text, no watermark.
```

### 30. 음료 · 맛 층이 보이는 단면과 시즌 색 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (bottle or cup shape, liquid color, label and cap). Create a beverage product detail page, tall vertical 9:16, in three stacked sections. Top: saturated berry-pink background with the bottle large at a slight tilt and a headline "[헤드라인]" in white above it, fruit pieces and water splash overlapping the bottle edge. Middle: a pale blush band showing a glass of the drink in cross-section with labeled layers "[포인트1]", "[포인트2]", "[포인트3]" using thin leader lines. Bottom: a clean white band with a row of three bottles in different flavor colors, "[제품명]" and "[가격]" in a bold rounded box. Crisp cold-drink photography, juicy colors, clean sans-serif type. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[제품명]", "[가격]". No other text, no watermark.
```

### 31. 뷰티 · 성분 이야기를 한 줄로 풀어낸 병 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [서브문구] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (container shape, cap, color and finish). Create a skincare product detail page, tall vertical 9:16, in a clean pharmacy-style layout on a soft white-to-sage canvas. Top: the bottle standing on a pale stone with leaf shadows and a thin serif headline "[헤드라인]". Middle: a row of three circular macro close-ups of the key ingredients, each with a thin caption "[포인트1]", "[포인트2]", "[포인트3]" and a tiny line icon. Then a texture swatch smear of the product across a clean glass surface with a droplet. Bottom: a minimalist box with "[제품명]", "[서브문구]" and "[가격]". Soft diffused light, muted sage, white and pale gold palette, lots of calm white space. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[제품명]", "[서브문구]", "[가격]". No other text, no watermark.
```

### 32. 패션 · 핏과 소재를 보여주는 룩북형 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [브랜드명] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (garment cut, color, fabric texture and details). Create a fashion product detail page, tall vertical 9:16, in a lookbook layout on a warm light-gray canvas. Top: a full-length styled look on a mannequin or hanger in a plain studio with a headline "[헤드라인]" in thin condensed type. Middle: a neat row of three square detail crops (fabric weave, stitching, button or zipper) with captions "[포인트1]", "[포인트2]", "[포인트3]". Then a row of small color swatches for the available colors and a clean flat-lay of the garment folded on pale oak. Bottom: brand wordmark "[브랜드명]", "[제품명]" and "[가격]" in thin type. Soft studio light, muted neutral palette, tidy grid with thin lines. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[브랜드명]", "[제품명]", "[가격]". No other text, no watermark.
```

### 33. 생활용품 · 쓰는 순서를 네 칸으로 보여주는 사용법 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [포인트4] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and proportions). Create a home-goods product detail page, tall vertical 9:16, with a clear how-to-use layout on a clean white canvas with pastel mint accents. Top: the product in a bright kitchen scene with headline "[헤드라인]" in friendly rounded type. Middle: a 2x2 grid of four small photo panels showing the product being used step by step by hands in natural poses, each with a numbered circle and a short caption "[포인트1]", "[포인트2]", "[포인트3]", "[포인트4]". Then a size comparison with a hand for scale. Bottom: a mint rounded box with "[제품명]" and "[가격]". Daylight, tidy and trustworthy, light shadows. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[포인트4]", "[제품명]", "[가격]". No other text, no watermark.
```

### 34. 전자기기 · 부위별 기능을 짚어주는 분해도형 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [포인트4] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (body shape, color, ports and button layout). Create an electronics product detail page, tall vertical 9:16, in a clean tech-spec layout with a dark navy header and a white lower body. Top: the device floating over the navy field with a glowing cyan rim and headline "[헤드라인]" in white. Middle: an exploded-view style image with parts floating slightly apart and four thin leader lines to labels "[포인트1]", "[포인트2]", "[포인트3]", "[포인트4]". Then a lifestyle shot of the device on a desk beside a laptop. Bottom: a spec-table-style strip and a bold black box with "[제품명]" and "[가격]". Cool crisp lighting, accurate reflections, organized grid. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[포인트4]", "[제품명]", "[가격]". No other text, no watermark.
```

### 35. 반려용품 · 보호자가 궁금한 점부터 답하는 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] [서브문구]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and stitching). Create a pet-product detail page, tall vertical 9:16, in a warm and friendly layout on a cream canvas with peach and sky-blue shapes. Top: a happy pet beside the product on a light floor with headline "[헤드라인]" in rounded type. Middle: three speech-bubble style panels each with a close-up of the product's feature and a caption "[포인트1]", "[포인트2]", "[포인트3]", and a size-guide illustration with a small ruler line. Bottom: a rounded peach box with "[제품명]" and "[가격]" and a small badge "[서브문구]". Soft daylight, cozy palette, cheerful but tidy. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[제품명]", "[가격]", "[서브문구]". No other text, no watermark.
```

### 36. 꽃 · 계절 구성과 포장을 보여주는 꽃집 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] [서브문구]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (flower types, colors, wrapping and arrangement). Create a flower-shop product detail page, tall vertical 9:16, on a soft cream canvas with sage-green lines. Top: the bouquet large in a hand against a plain plaster wall, headline "[헤드라인]" in a delicate serif. Middle: three round close-ups of the main flowers each with a small name caption "[포인트1]", "[포인트2]", "[포인트3]", then a photo of the wrapped bouquet on a craft table with ribbon and tag, and a small care-tips strip with line icons. Bottom: "[제품명]", "[가격]" and a delivery note "[서브문구]" in a thin-bordered box. Soft morning light, fresh pastel palette, airy and gentle. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[제품명]", "[가격]", "[서브문구]". No other text, no watermark.
```

### 37. 향초 · 향의 세 단계를 색으로 나눈 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (vessel shape, wax color, lid and label). Create a scented-candle product detail page, tall vertical 9:16, with three color-blocked sections. Top: deep amber background, the lit candle large with a soft glow and headline "[헤드라인]" in cream serif. Middle: a taupe band with three small circles showing the fragrance notes as simple still-life photos (top, middle, base) captioned "[포인트1]", "[포인트2]", "[포인트3]". Then a wax pool close-up and a burn-time line icon strip. Bottom: an ivory band with the candle and its lid side by side, "[제품명]" and "[가격]". Warm candle glow, rich amber, taupe and ivory palette, calm elegant spacing. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[제품명]", "[가격]". No other text, no watermark.
```

### 38. 주얼리 · 착용 사진과 크기 비교가 있는 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] [브랜드명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (design, metal color, stone shape and proportions). Create a jewelry product detail page, tall vertical 9:16, on an ivory canvas with thin gold lines. Top: the piece worn on a model's hand or neck, cropped to show only the relevant body part, soft window light, headline "[헤드라인]" in thin serif. Middle: a close-up macro of the stone or metal detail, then a size-reference image beside a coin or fingertip, and a row of three small square photos for the metal color options captioned "[포인트1]", "[포인트2]", "[포인트3]". Bottom: a small box with "[제품명]", "[가격]" and the brand "[브랜드명]". Delicate, expensive feel, soft champagne palette, plenty of space. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[제품명]", "[가격]", "[브랜드명]". No other text, no watermark.
```

### 39. 운동용품 · 사용 장면과 스펙 수치가 맞물린 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and grip details). Create a sports-gear product detail page, tall vertical 9:16, in a bold athletic layout. Top: black field with the product cut out at a diagonal and a neon-lime headline "[헤드라인]" in condensed italic type. Middle: an action shot of the product in use outdoors at sunrise, then three icon tiles with big numerals and captions "[포인트1]", "[포인트2]", "[포인트3]". Then a close-up of the grip or material texture. Bottom: a lime box with "[제품명]" and "[가격]". Strong contrast, crisp lighting, dynamic crops, sturdy sans-serif type. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[제품명]", "[가격]". No other text, no watermark.
```

### 40. 문구 · 필기감과 구성품을 펼쳐 보이는 상세페이지

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, material and cover design). Create a stationery product detail page, tall vertical 9:16, on a soft cream paper-texture canvas with pastel accents. Top: the product on a desk with a handwritten-looking headline "[헤드라인]" in navy. Middle: three close-up panels showing a writing sample, the paper texture and the binding or tip, captioned "[포인트1]", "[포인트2]", "[포인트3]", then a flat-lay of everything included arranged neatly with small labels. Bottom: a yellow sticky-note style box with "[제품명]" and "[가격]". Soft overhead daylight, cheerful pastels, neat grid with tape corners. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[제품명]", "[가격]". No other text, no watermark.
```

---

## 홈페이지 배너 12가지 (41–52)

비율: 가로 16:9

쇼핑몰·브랜드 홈페이지용 가로 시안. 올리기 전에 모바일에서 잘리는 부분과 글자 크기를 확인.

### 41. 식품 · 갓 구운 빵이 쏟아지는 베이커리 가로 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [서브문구] [혜택] [브랜드명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, texture, toppings and plating). Create a bakery website hero banner, wide 16:9, flat full-bleed artwork. Warm toasted-beige background with a wooden counter along the bottom. The product sits in the center-right with more of the same baked goods tumbling softly out of a paper bag at the right edge and a cloud of flour dust in the air. On the left a large friendly serif headline "[헤드라인]" in dark brown over two lines with a small line "[서브문구]" below, and a round cream button shape reading "[혜택]". "[브랜드명]" in small capitals at the top left. Golden morning light from the left, steam and crumbs, appetizing and warm. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[혜택]", "[브랜드명]". No other text, no watermark.
```

### 42. 음료 · 과일이 튀어 오르는 주스 스탠드 가로 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (bottle or cup shape, liquid color, label and cap). Create a juice-bar website hero banner, wide 16:9, flat full-bleed artwork. Bright turquoise background with a large pale-yellow circle behind the drink. The drink stands at the right with whole fruit halves and slices flying outward in a burst and juice droplets frozen mid-air, one slice passing in front of the cup. On the left a huge playful rounded headline "[헤드라인]" in white with a soft shadow on two lines, a small line "[서브문구]" below, and a coral round sticker reading "[가격]". "[제품명]" in bold white at the bottom left. Hard sunny light, vivid saturation, fresh and fun. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[가격]", "[제품명]". No other text, no watermark.
```

### 43. 뷰티 · 광이 도는 피부결 클로즈업 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [혜택] [제품명] [브랜드명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (container shape, cap, color and finish). Create a beauty-brand website hero banner, wide 16:9, flat full-bleed artwork. A soft champagne-peach gradient background, on the right a close-up of a model's cheek and jawline with a natural glowing skin texture and a fingertip of the cream touching it, the product jar tilted open in the lower foreground. On the left, an elegant thin serif headline "[헤드라인]" in deep brown on two lines with a small line "[서브문구]" under it and a thin outlined button "[혜택]". "[제품명]" and "[브랜드명]" in small spaced capitals at the top left. Soft beauty-dish light, delicate and luminous, plenty of negative space. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[혜택]", "[제품명]", "[브랜드명]". No other text, no watermark.
```

### 44. 패션 · 도시 옥상 석양 속 신상 가로 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [서브문구] [브랜드명] [기간]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (garment cut, color, fabric texture and details). Create a fashion-brand website hero banner, wide 16:9, flat full-bleed artwork. A city rooftop at sunset with a peach-to-lilac sky, the garment on a minimal steel rack in the center-right with a soft breeze lifting its fabric, long warm shadows across the concrete floor. On the left, a thin oversized condensed headline "[헤드라인]" in off-white on two lines, a small text link style line "[서브문구]" under it, and the wordmark "[브랜드명]" small at the top left. A tiny tag at the bottom right reads "[기간]". Warm film-like color grade, editorial calm, airy composition. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[브랜드명]", "[기간]". No other text, no watermark.
```

### 45. 생활용품 · 청소가 끝난 맑은 집 가로 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [혜택] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and proportions). Create a household-products website hero banner, wide 16:9, flat full-bleed artwork. A bright clean living room corner with a large window and white curtains in a soft breeze, sunlight making a crisp window-frame shadow across a light wood floor, the product standing on the floor on the right with a few soap bubbles floating by. Pale blue and white palette with fresh lemon-yellow accents. On the left, a bold friendly headline "[헤드라인]" in navy on two lines, a small line "[서브문구]" under it and a lemon-yellow rounded button "[혜택]". "[제품명]" in small bold type above the headline. Clean daylight, spotless and cheerful. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[혜택]", "[제품명]". No other text, no watermark.
```

### 46. 전자기기 · 어두운 방에서 화면이 켜지는 시네마틱 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [혜택] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (body shape, color, ports and button layout). Create an electronics website hero banner, wide 16:9, flat full-bleed artwork. A dark living room at night with a faint violet wall light, the device in the center-right glowing softly with a colorful screen or lit edge that spills light onto the wooden table and a cup beside it. Thin horizontal light streaks across the background. On the left, a clean modern headline "[헤드라인]" in white on two lines with a small line "[서브문구]" and a white outlined button "[혜택]". "[제품명]" in small spaced capitals at the top left. Cinematic contrast, crisp reflections, cool violet and warm amber palette. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[혜택]", "[제품명]". No other text, no watermark.
```

### 47. 반려용품 · 공원 잔디 위에서 신난 산책 가로 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [혜택] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and stitching). Create a pet-brand website hero banner, wide 16:9, flat full-bleed artwork. A sunny park lawn with a soft green blur of trees, a happy dog bounding toward the camera on the right with the product on or beside it, small grass blades and a bit of dust in the air, a bright blue sky. On the left, a big bouncy rounded headline "[헤드라인]" in deep green on two lines, a small line "[서브문구]" under it and a sunny-yellow circle badge "[혜택]". "[제품명]" in bold at the bottom left. Bright afternoon sun, saturated greens and yellows, joyful motion. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[혜택]", "[제품명]". No other text, no watermark.
```

### 48. 꽃 · 햇빛 드는 꽃가게 작업대 가로 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [서브문구] [혜택] [브랜드명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (flower types, colors, wrapping and arrangement). Create a flower-shop website hero banner, wide 16:9, flat full-bleed artwork. A sunlit florist workbench with a green apron edge, buckets of seasonal stems at the left edge, the finished arrangement in the center-right on a wooden table with petals and cut stems around it, a window light with soft leaf shadows on a whitewashed wall. On the left a delicate large serif headline "[헤드라인]" in deep green on two lines, a small line "[서브문구]" under it and a thin outlined button "[혜택]". "[브랜드명]" in small capitals at the top left. Fresh pastel palette, soft morning light, gentle and airy. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[혜택]", "[브랜드명]". No other text, no watermark.
```

### 49. 향초 · 눈 오는 창가 겨울 저녁 가로 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [혜택] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (vessel shape, wax color, lid and label). Create a candle-brand website hero banner, wide 16:9, flat full-bleed artwork. A wide window seat on a snowy winter evening, snow falling outside in deep blue dusk, the lit candle in the center-right on a wool blanket beside a book and a steaming mug, a warm reflection of the flame on the window glass. On the left a calm thin serif headline "[헤드라인]" in cream on two lines, a small line "[서브문구]" under it and a thin outlined button "[혜택]". "[제품명]" in small spaced capitals at the top left. Palette of dusk blue, amber and cream, cozy and quiet. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[혜택]", "[제품명]". No other text, no watermark.
```

### 50. 주얼리 · 대리석과 거울 조각의 프리미엄 가로 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [서브문구] [혜택] [브랜드명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (design, metal color, stone shape and proportions). Create a jewelry website hero banner, wide 16:9, flat full-bleed artwork. A pale gray marble surface with angled mirror shards and a soft ivory backdrop, the piece placed in the center-right on a small marble cube, its sparkles reflected in the mirror fragments, a delicate shadow cast across the marble. On the left a refined thin serif headline "[헤드라인]" in deep charcoal on two lines, a small line "[서브문구]" under it and a thin gold-outlined button "[혜택]". "[브랜드명]" in small spaced capitals at the top left. Cool ivory and gold palette, crisp reflections, quiet luxury. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[혜택]", "[브랜드명]". No other text, no watermark.
```

### 51. 운동용품 · 새벽 트랙의 달리기 캠페인 가로 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [혜택] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and grip details). Create a sports-brand website hero banner, wide 16:9, flat full-bleed artwork. An empty running track at dawn with a pink-orange sky and long low-angle shadows, the product in the right foreground on the track lanes with dust kicked up behind it and a silhouette of a runner far in the background. On the left a huge condensed italic headline "[헤드라인]" in white on two lines with a small line "[서브문구]" under it and a bold orange button "[혜택]". "[제품명]" in small bold type at the top left. Dramatic low sun, high contrast, warm orange and deep navy, energetic and clean. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[혜택]", "[제품명]". No other text, no watermark.
```

### 52. 문구 · 개강 준비 책상 위 컬러 블록 가로 배너

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [혜택] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, material and cover design). Create a stationery website hero banner, wide 16:9, flat full-bleed artwork. A back-to-school desk seen from above on a soft lilac background with large color-block shapes (mustard, mint, coral). The product sits on the right on an open notebook with pencils, washi tape and sticky notes arranged around it, a cast shadow from a desk lamp. On the left a bouncy hand-drawn style headline "[헤드라인]" in navy on two lines with a yellow highlighter swipe behind a word, a small line "[서브문구]" under it and a mustard round sticker "[혜택]". "[제품명]" in small bold type at the top left. Cheerful palette, crisp overhead daylight. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[혜택]", "[제품명]". No other text, no watermark.
```

---

## 메뉴판·가격표 12가지 (53–64)

비율: 세로 3:4

가게 안에 걸거나 세우는 메뉴판·가격표. 항목은 세 줄이 기본. 줄이 더 필요하면 메뉴·가격 칸을 한 쌍씩 더하고 Use ONLY에도 같이 넣음.

### 53. 식품 · 정식집 오늘의 메뉴 칠판 스타일 메뉴판

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, texture, toppings and plating). Create a restaurant menu board, vertical 3:4, flat full-bleed print artwork. A dark green chalkboard texture with a thin cream chalk border. The dish from the attached photo is shown large on a round plate at the top right, steam rising. A hand-lettered chalk headline "[헤드라인]" in cream at the top left. Three menu lines on the left in neat chalk type: "[메뉴1]" with "[가격1]", "[메뉴2]" with "[가격2]", "[메뉴3]" with "[가격3]" separated by dotted leader lines, a small chalk doodle of a spoon and a tiny yellow tag "[서브문구]". "[매장명]" at the bottom in chalk capitals. Warm overhead light, chalk dust texture, cozy and readable. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

### 54. 음료 · 과일 컬러 블록으로 나눈 주스바 메뉴판

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (bottle or cup shape, liquid color, label and cap). Create a juice-bar menu board, vertical 3:4, flat full-bleed print artwork. Three horizontal color blocks (orange, pink, green) each with a cut-out fruit. The drink from the attached photo stands large overlapping the top block with fruit slices around it. Bold rounded headline "[헤드라인]" in white at the top. Each block holds one line: "[메뉴1]" and "[가격1]" on orange, "[메뉴2]" and "[가격2]" on pink, "[메뉴3]" and "[가격3]" on green, in bold white type. A small white circle sticker "[서브문구]" at the corner and "[매장명]" in small capitals at the bottom. Bright flat light, juicy saturated palette, easy to read from a distance. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

### 55. 뷰티 · 피부 관리 가격표를 정리한 미니멀 시술 메뉴판

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (container shape, cap, color and finish). Create a skincare-shop treatment menu board, vertical 3:4, flat full-bleed print artwork. A soft warm-white background with a pale rose arch shape at the top holding the product from the attached photo on a small stone. Thin serif headline "[헤드라인]" in rosewood under the arch. Three treatment lines in clean light sans-serif with thin lines between: "[메뉴1]" with "[가격1]", "[메뉴2]" with "[가격2]", "[메뉴3]" with "[가격3]", and a small line "[서브문구]" in italic. "[매장명]" in small spaced capitals at the bottom with a thin line above. Soft daylight, blush and cream palette, spa-like calm. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

### 56. 패션 · 수선 서비스 가격을 안내하는 태그형 메뉴판

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (garment cut, color, fabric texture and details). Create a tailoring-shop service board, vertical 3:4, flat full-bleed print artwork. A kraft-paper background with a thin dark-navy double border and a measuring-tape strip across the top. The garment from the attached photo hangs neatly on a wooden hanger at the right with a few pins and chalk marks on it. Condensed headline "[헤드라인]" in navy at the top left. Three service lines in stamped-style type on the left: "[메뉴1]" with "[가격1]", "[메뉴2]" with "[가격2]", "[메뉴3]" with "[가격3]", and a small red stamp reading "[서브문구]". "[매장명]" at the bottom in small capitals. Warm paper texture, navy and brick-red palette, classic workshop feel. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

### 57. 생활용품 · 리필스테이션 용량별 가격표

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and proportions). Create a refill-station price board, vertical 3:4, flat full-bleed print artwork. A pale sage background with large cream circles and a tidy wooden shelf at the bottom holding the product from the attached photo. Friendly rounded headline "[헤드라인]" in deep green at the top. Three refill lines in medium sans-serif, each beside a small bottle icon drawn in thin lines: "[메뉴1]" with "[가격1]", "[메뉴2]" with "[가격2]", "[메뉴3]" with "[가격3]", and a round green sticker "[서브문구]". "[매장명]" at the bottom in small bold capitals. Soft natural light, calm green and cream palette, clean and easy to scan. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

### 58. 전자기기 · 수리·케이스 교체 비용 안내 메뉴판

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (body shape, color, ports and button layout). Create a gadget repair shop price board, vertical 3:4, flat full-bleed print artwork. A dark charcoal background with thin cyan circuit-style lines along the edges. The device from the attached photo sits at the top center on a small anti-static mat with a few neat tools beside it. Bold modern headline "[헤드라인]" in white under it. Three service lines in clean monospaced-looking type, each with a small icon: "[메뉴1]" with "[가격1]", "[메뉴2]" with "[가격2]", "[메뉴3]" with "[가격3]", plus a cyan rounded label "[서브문구]". "[매장명]" in small capitals at the bottom. Cool rim light, crisp details, dark-mode look with cyan accents. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

### 59. 반려용품 · 반려견 미용 코스 가격표

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and stitching). Create a pet-grooming price board, vertical 3:4, flat full-bleed print artwork. A pale sky-blue background with cream paw-print patterns and a bubble border. The product from the attached photo sits at the top right next to a freshly groomed fluffy dog wrapped in a towel. Rounded friendly headline "[헤드라인]" in deep navy at the top left. Three course lines on cream rounded tags: "[메뉴1]" with "[가격1]", "[메뉴2]" with "[가격2]", "[메뉴3]" with "[가격3]", and a small yellow bone-shaped sticker reading "[서브문구]". "[매장명]" at the bottom in bold rounded type. Bright soft light, cheerful palette, bubbles and paws. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

### 60. 꽃 · 꽃집 사이즈별 꽃다발 가격표

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (flower types, colors, wrapping and arrangement). Create a flower-shop price board, vertical 3:4, flat full-bleed print artwork. A warm cream background with a hand-drawn thin green vine border. The bouquet from the attached photo is shown at the top in a kraft wrap, with two smaller watercolor-style vignettes beside it. Delicate serif headline "[헤드라인]" in deep green at the top. Three size lines separated by small flower icons: "[메뉴1]" with "[가격1]", "[메뉴2]" with "[가격2]", "[메뉴3]" with "[가격3]", and a small pink round tag "[서브문구]". "[매장명]" in script at the bottom. Soft natural light, fresh pastel and green palette, gentle hand-made feel. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

### 61. 향초 · 향초 만들기 체험 클래스 메뉴판

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (vessel shape, wax color, lid and label). Create a candle-workshop class menu, vertical 3:4, flat full-bleed print artwork. A warm terracotta wall background with a small wooden shelf at the bottom holding the candle from the attached photo and a few wicks and jars. Thin serif headline "[헤드라인]" in cream at the top. Three class lines in light cream sans-serif separated by thin lines with a tiny flame icon: "[메뉴1]" with "[가격1]", "[메뉴2]" with "[가격2]", "[메뉴3]" with "[가격3]", and a small cream circle sticker "[서브문구]". "[매장명]" in small spaced capitals at the bottom. Soft warm glow from the candle, terracotta and cream palette, cozy atelier mood. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

### 62. 주얼리 · 주문 제작 반지 옵션별 가격표

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (design, metal color, stone shape and proportions). Create a custom jewelry price board, vertical 3:4, flat full-bleed print artwork. A deep emerald-green background with a thin gold double border. The piece from the attached photo rests on a small cushion at the top center with a soft spotlight. Elegant thin serif headline "[헤드라인]" in champagne gold under it. Three option lines in light gold sans-serif with thin lines between: "[메뉴1]" with "[가격1]", "[메뉴2]" with "[가격2]", "[메뉴3]" with "[가격3]", and a small gold-outlined badge "[서브문구]". "[매장명]" in small spaced capitals at the bottom. Deep contrast, gold and emerald palette, quiet luxury. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

### 63. 운동용품 · 대여·강습 요금을 안내하는 체육관 메뉴판

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and grip details). Create a sports-rental and lesson price board, vertical 3:4, flat full-bleed print artwork. A black background with a bold electric-yellow diagonal stripe pattern in one corner. The product from the attached photo is cut out at the top right at a dynamic angle with a soft glow. Condensed italic headline "[헤드라인]" in white at the top left. Three price lines in bold sans-serif inside dark gray bars: "[메뉴1]" with "[가격1]", "[메뉴2]" with "[가격2]", "[메뉴3]" with "[가격3]", and a yellow tag reading "[서브문구]". "[매장명]" in bold capitals at the bottom. High contrast, sturdy and sporty, readable at a glance. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

### 64. 문구 · 맞춤 도장·인쇄 메뉴판

- 첨부: 제품 사진 1장
- 바꿀 칸: [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, material and cover design). Create a custom stamp and print-shop menu board, vertical 3:4, flat full-bleed print artwork. A soft cream background with a faint dot grid, ink-stamp impressions in navy and red scattered along the edges. The product from the attached photo sits at the top right with an ink pad and a few paper samples. Playful hand-lettered headline "[헤드라인]" in navy at the top left. Three option lines with small stamp icons: "[메뉴1]" with "[가격1]", "[메뉴2]" with "[가격2]", "[메뉴3]" with "[가격3]", and a red round stamp reading "[서브문구]". "[매장명]" at the bottom in small capitals. Warm paper texture, navy and red palette, tidy and charming. Use ONLY these exact strings: "[헤드라인]", "[메뉴1]", "[가격1]", "[메뉴2]", "[가격2]", "[메뉴3]", "[가격3]", "[서브문구]", "[매장명]". No other text, no watermark.
```

---

## 영상 썸네일 12가지 (65–76)

비율: 가로 16:9

작게 줄어도 읽혀야 하는 큰 글자 위주에요. 글자는 짧을수록 정확히 나와요.

### 65. 식품 · 한입 베어 문 단면 클로즈업 먹방 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, texture, toppings and plating). Create a video thumbnail, wide 16:9, flat full-bleed artwork. A bright yellow background with a thick white rounded outline around the cut-out subject. The dish is shown in an extreme close-up on the right half with one bite taken out, cheese or sauce stretching from it, steam rising. Giant two-line chunky headline "[헤드라인]" on the left in white with a thick black outline and a yellow highlight on one word, a red arrow pointing at the bitten part, and a small red rounded label "[서브문구]" at the top left. Tiny "[제품명]" in black on a white sticker at the bottom. Saturated punchy color, hard flash light, extremely readable at small size. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[제품명]". No other text, no watermark.
```

### 66. 음료 · 색이 확 바뀌는 비포애프터 음료 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (bottle or cup shape, liquid color, label and cap). Create a video thumbnail, wide 16:9, flat full-bleed artwork. The frame is split down the middle by a jagged white lightning line: the left half is a dull gray pre-mix glass of plain liquid, the right half is the vivid finished drink from the attached photo with ice and a splash in electric magenta and orange. Giant headline "[헤드라인]" in bold white with a thick dark-purple outline across the top, a big yellow arrow between the halves and a small yellow circle label "[포인트1]" at the lower right. "[제품명]" in a black rounded box at the bottom left. Hard saturated light, strong contrast, highly clickable. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[제품명]". No other text, no watermark.
```

### 67. 뷰티 · 제품 하나로 달라진 화장대 비교 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [포인트1] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (container shape, cap, color and finish). Create a video thumbnail, wide 16:9, flat full-bleed artwork. A clean pink-and-white vanity scene. On the left a small cropped before-photo box of a messy vanity with several tiny bottles, with a red cross mark on it; on the right the product from the attached photo stands large alone on a tidy pastel-pink surface with sparkles around it. Big bold rounded headline "[헤드라인]" in white with a thick raspberry outline at the top, a small white speech bubble "[서브문구]" next to the product and a yellow star badge "[포인트1]". "[제품명]" in raspberry bold type at the bottom. Bright soft light, saturated pastel contrast, easy to read at thumbnail size. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[포인트1]", "[제품명]". No other text, no watermark.
```

### 68. 패션 · 입자마자 달라지는 착장 변신 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (garment cut, color, fabric texture and details). Create a video thumbnail, wide 16:9, flat full-bleed artwork. A bold diagonal split with a plain gray left side showing a faded generic outfit on a hanger and a vivid cobalt right side showing the garment from the attached photo styled sharply on a hanger with a few sparkle accents. A huge black condensed headline "[헤드라인]" in white with a thick black outline across the center overlapping both sides, a hand-drawn yellow arrow from left to right and a small yellow tag "[가격]" at the lower right. "[제품명]" in bold white on a black bar at the bottom left. Punchy high contrast, flat studio light, clear at small size. Use ONLY these exact strings: "[헤드라인]", "[가격]", "[제품명]". No other text, no watermark.
```

### 69. 생활용품 · 쓰기 전과 후를 한 화면에 보여주는 정리 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [서브문구] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and proportions). Create a video thumbnail, wide 16:9, flat full-bleed artwork. On the left a cluttered messy kitchen drawer with a red X, on the right the same drawer neatly organized using the product from the attached photo, bright and tidy, with a green check mark. Big chunky headline "[헤드라인]" in white with a thick forest-green outline across the top, a yellow circle label "[포인트1]" with an arrow at the product, and a small tag "[서브문구]" at the lower left. "[제품명]" in bold on a white rounded box at the bottom right. Bright flat daylight, saturated green and yellow accents, instant before and after. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[서브문구]", "[제품명]". No other text, no watermark.
```

### 70. 전자기기 · 개봉 순간 놀란 표정 대신 제품이 말하는 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [서브문구] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (body shape, color, ports and button layout). Create a video thumbnail, wide 16:9, flat full-bleed artwork. A deep electric-blue background with radiating light rays behind the device, which is shown very large at the center-right with its glowing edge and a rim light. Several small floating icons suggesting its functions drift around it. A giant headline "[헤드라인]" in white with a thick dark-blue outline over two lines on the left, a red number circle "[포인트1]" at the top right and a small yellow label "[서브문구]" under the headline. "[제품명]" in bold on a black rounded bar at the bottom. High contrast, crisp reflections, easy to read at a glance. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[서브문구]", "[제품명]". No other text, no watermark.
```

### 71. 반려용품 · 반려견 반응이 주인공인 후기 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [서브문구] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and stitching). Create a video thumbnail, wide 16:9, flat full-bleed artwork. A warm sunny orange background, a fluffy dog with wide excited eyes in a close-up on the right side beside the product from the attached photo, a tiny sparkle on the dog's nose. A giant bouncy headline "[헤드라인]" in white with a thick brown outline on two lines at the left, a red heart-shaped sticker "[포인트1]" at the upper right and a yellow speech bubble "[서브문구]" near the dog. "[제품명]" in bold on a white rounded box at the bottom left. Bright warm light, saturated and joyful, readable at a glance. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[서브문구]", "[제품명]". No other text, no watermark.
```

### 72. 꽃 · 시든 꽃에서 새 꽃다발로 바뀌는 비교 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (flower types, colors, wrapping and arrangement). Create a video thumbnail, wide 16:9, flat full-bleed artwork. The left third shows a wilted grocery-store bunch of flowers in a plastic wrap, gray and drooping, with a red cross mark; the right two thirds shows the lush bouquet from the attached photo in glowing pastel color with soft petals flying, on a pale pink background. Giant rounded headline "[헤드라인]" in white with a thick pink-magenta outline across the top, a yellow arrow to the bouquet and a small white circle badge "[포인트1]". "[제품명]" in bold magenta on a white rounded box at the bottom right. Bright soft light, saturated pastels, easy to read at thumbnail size. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[제품명]". No other text, no watermark.
```

### 73. 향초 · 불 붙이는 순간 방 분위기가 바뀌는 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (vessel shape, wax color, lid and label). Create a video thumbnail, wide 16:9, flat full-bleed artwork. The left half is a cold blue-gray empty room with a red cross mark, the right half is the same room warm and glowing amber with the lit candle from the attached photo large at the center, a soft golden halo around the flame. Giant bold headline "[헤드라인]" in cream with a thick dark-brown outline over two lines across the top, a yellow arrow pointing at the flame and a small amber tag "[서브문구]". "[제품명]" in bold on a dark rounded bar at the bottom left. Strong warm-cool contrast, clear at small size. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[제품명]". No other text, no watermark.
```

### 74. 주얼리 · 가격보다 반짝임을 크게 보여주는 하울 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [가격] [서브문구] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (design, metal color, stone shape and proportions). Create a video thumbnail, wide 16:9, flat full-bleed artwork. A deep burgundy background with scattered gold sparkles. The piece from the attached photo is shown enormous in the center-right with a bright glint and a magnified circle inset showing its stone detail with a thin gold ring. Giant headline "[헤드라인]" in white with a thick dark outline on two lines at the left, a yellow circle price tag "[가격]" tilted at the top right and a small label "[서브문구]" under the headline. "[제품명]" in gold bold type on a black bar at the bottom. High contrast, glittering highlights, easy to read at a small size. Use ONLY these exact strings: "[헤드라인]", "[가격]", "[서브문구]", "[제품명]". No other text, no watermark.
```

### 75. 운동용품 · 한 달 변화를 한 장으로 압축한 챌린지 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [포인트1] [포인트2] [헤드라인] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and grip details). Create a video thumbnail, wide 16:9, flat full-bleed artwork. A dark gym background with a neon lime spotlight, on the left a small faded gray before-panel labeled "[포인트1]" and on the right a large vivid after-panel labeled "[포인트2]" showing the product from the attached photo in action with chalk dust bursting. Giant condensed italic headline "[헤드라인]" in white with a thick black outline across the top, a lime arrow between the panels. "[제품명]" in bold on a lime bar at the bottom left. High contrast, hard light, instantly readable. Use ONLY these exact strings: "[포인트1]", "[포인트2]", "[헤드라인]", "[제품명]". No other text, no watermark.
```

### 76. 문구 · 다꾸 한 장이 완성되는 과정 압축 썸네일

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, material and cover design). Create a video thumbnail, wide 16:9, flat full-bleed artwork. A bright lilac background with a close-up top-down view of a finished decorated journal page on the right using the product from the attached photo with stickers, washi tape and pens around it, and a small blank plain page on the left with a red X. Giant hand-lettered headline "[헤드라인]" in white with a thick navy outline across the top, a yellow arrow from the blank page to the finished one and a pink circle label "[포인트1]". "[제품명]" in bold navy on a white sticker at the bottom right. Saturated colors, crisp overhead light, readable at a glance. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[제품명]". No other text, no watermark.
```

---

## 매장 POP 12가지 (77–88)

비율: 세로 3:4

계산대·선반·진열대에 두는 작은 홍보물. 인쇄 전에 실제 크기에서 글자가 읽히는지 확인.

### 77. 식품 · 계산대 옆에 세우는 한정 메뉴 스탠드형 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [혜택] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, texture, toppings and plating). Create a store counter point-of-purchase card, vertical 3:4, flat full-bleed print artwork meant to stand in a small acrylic holder. Warm cream background with a bold tomato-red lower third shaped like a scalloped awning. The product from the attached photo sits large in the center with a small steam curl. A chunky friendly headline "[헤드라인]" in tomato red at the top, a round yellow starburst "[혜택]" at the upper right and the price "[가격]" in big white numerals on the red band, with "[제품명]" in cream under the price. Simple clean layout readable from two meters away, soft overhead light, appetizing colors. Use ONLY these exact strings: "[헤드라인]", "[혜택]", "[가격]", "[제품명]". No other text, no watermark.
```

### 78. 음료 · 냉장고 문에 붙이는 시원한 가격 안내 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (bottle or cup shape, liquid color, label and cap). Create a refrigerator-door shelf card, vertical 3:4, flat full-bleed print artwork. A frosty ice-blue background with frozen crystals along the edges. The bottle or cup from the attached photo is shown large in the center with condensation drops and a thin icy glow. Giant bold headline "[헤드라인]" in deep navy at the top with a white snow-like outline, a white round sticker "[포인트1]" at the left and the price "[가격]" in bold white numerals on a deep-blue rounded band at the bottom, with "[제품명]" in small bold capitals above the band. Cool crisp light, simple layout readable from a distance. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[가격]", "[제품명]". No other text, no watermark.
```

### 79. 뷰티 · 테스터 옆에 놓는 사용 순서 안내 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [서브문구] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (container shape, cap, color and finish). Create a beauty-counter tester card, vertical 3:4, flat full-bleed print artwork. A soft ivory background with a pale pink rounded panel at the center. The product from the attached photo stands at the top center on a tiny glass dish with a gentle highlight. A refined serif headline "[헤드라인]" in rosewood at the top. Below the product, a short three-step guide with small numbered circles and thin lines: "[포인트1]", "[포인트2]", "[포인트3]", and a small gold-outlined label "[서브문구]" with the price "[가격]" at the bottom beside "[제품명]". Soft beauty light, clean and elegant, easy to read at counter distance. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[서브문구]", "[가격]", "[제품명]". No other text, no watermark.
```

### 80. 패션 · 옷걸이 옆에 거는 신상 입고 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (garment cut, color, fabric texture and details). Create a clothing-rack hanging sign, vertical 3:4, flat full-bleed print artwork with a punched hole at the top center. A stark off-white background with a bold black frame and a diagonal electric-orange band. The garment from the attached photo is shown large at the center as a clean cut-out with a hard drop shadow. Big condensed headline "[헤드라인]" in black at the top, a round orange sticker "[포인트1]" overlapping the band and the price "[가격]" in bold black numerals at the bottom with "[제품명]" in small capitals above it. Flat bright light, high contrast, readable at a glance. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[가격]", "[제품명]". No other text, no watermark.
```

### 81. 생활용품 · 진열대 선반에 꽂는 쓰임새 한 줄 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and proportions). Create a shelf-edge talker card, vertical 3:4, flat full-bleed print artwork. A fresh mint background with a white speech-bubble shape in the upper half. The product from the attached photo is shown large at the bottom center in use with a small hand holding it. A friendly rounded headline "[헤드라인]" in deep teal inside the speech bubble, a lemon-yellow circle "[포인트1]" at the top right, and the price "[가격]" in bold white numerals on a teal rounded band at the bottom with "[제품명]" in small bold type above. Clean daylight, tidy shapes, instantly understandable. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[가격]", "[제품명]". No other text, no watermark.
```

### 82. 전자기기 · 체험존 책상 위 기능 요약 스탠드 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [혜택] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (body shape, color, ports and button layout). Create a demo-table feature stand card, vertical 3:4, flat full-bleed print artwork. A dark navy background with a thin cyan line frame. The device from the attached photo is shown large at the top center with a soft glow. A crisp headline "[헤드라인]" in white under it, then three icon rows with thin line icons: "[포인트1]", "[포인트2]", "[포인트3]". A cyan rounded label "[혜택]" at the upper right and the price "[가격]" in big white numerals at the bottom beside "[제품명]". Cool crisp light, tidy tech look, readable at table distance. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[혜택]", "[가격]", "[제품명]". No other text, no watermark.
```

### 83. 반려용품 · 간식 코너 선반에 붙는 강아지 추천 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and stitching). Create a pet-store shelf card, vertical 3:4, flat full-bleed print artwork. A sunny yellow background with a scalloped cream edge and paw-print patterns. The product from the attached photo is shown large at the center-right and a small cartoon-style dog cheeks puffed sits at the left with a blue ribbon rosette. Chunky rounded headline "[헤드라인]" in deep brown at the top, a red heart sticker "[포인트1]" at the upper right and the price "[가격]" in big white numerals on a blue band at the bottom with "[제품명]" above it. Bright cheerful light, readable from two meters. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[가격]", "[제품명]". No other text, no watermark.
```

### 84. 꽃 · 꽃집 앞 양동이 옆에 꽂는 오늘의 꽃 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (flower types, colors, wrapping and arrangement). Create a flower-bucket sign card, vertical 3:4, flat full-bleed print artwork meant to be clipped to a bucket. A kraft-paper tan background with a thin hand-drawn green border and a hand-written chalk look. The bouquet from the attached photo is drawn photographically at the center as a soft cut-out with a few loose petals. Elegant script headline "[헤드라인]" in deep green at the top, a small cream round label "[포인트1]" at the upper right and the price "[가격]" in bold dark green numerals at the bottom with "[제품명]" in small capitals above it. Soft natural light, warm paper texture, charming and simple. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[가격]", "[제품명]". No other text, no watermark.
```

### 85. 향초 · 시향 코너에 두는 향 설명 테이블 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (vessel shape, wax color, lid and label). Create a scent-corner table card, vertical 3:4, flat full-bleed print artwork. A deep brown background with a pale gold thin border. The candle from the attached photo is shown large at the center with a soft flame glow. A thin serif headline "[헤드라인]" in cream at the top, then three small round icons in a row with fragrance notes "[포인트1]", "[포인트2]", "[포인트3]" and the price "[가격]" in gold numerals at the bottom with "[제품명]" in small spaced capitals above it. Warm glow, rich brown and gold palette, calm and legible. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[가격]", "[제품명]". No other text, no watermark.
```

### 86. 주얼리 · 쇼케이스 유리 안에 세우는 신상 소개 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (design, metal color, stone shape and proportions). Create a jewelry showcase display card, vertical 3:4, flat full-bleed print artwork. A pure white matte card with a thin gold border and a small velvet-textured black circle at the center holding the piece from the attached photo with a soft spotlight and sparkles. A thin refined serif headline "[헤드라인]" in black at the top, a small gold-outlined label "[포인트1]" under it and the price "[가격]" in thin gold numerals at the bottom with "[제품명]" in small spaced capitals above it. Soft museum-like light, minimalist and precise, readable through glass. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[가격]", "[제품명]". No other text, no watermark.
```

### 87. 운동용품 · 매장 입구 벽에 붙이는 신제품 체험 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and grip details). Create a store entrance wall poster, vertical 3:4, flat full-bleed print artwork. A matte black background with bold neon-yellow diagonal slashes. The product from the attached photo is cut out huge in the center at an aggressive angle with sharp edge light. Giant condensed italic headline "[헤드라인]" in white at the top with a yellow underline, a round yellow sticker "[포인트1]" at the upper right and a bold yellow price block "[가격]" in black numerals at the bottom beside "[제품명]". High contrast, energetic, readable from the entrance. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[가격]", "[제품명]". No other text, no watermark.
```

### 88. 문구 · 계산대 옆 소품 코너의 포스트잇 스타일 POP

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [가격] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, material and cover design). Create a stationery counter card, vertical 3:4, flat full-bleed print artwork designed like a large sticky note. A pastel yellow note shape with a slightly curled corner on a soft pink background, a piece of washi tape holding the top. The product from the attached photo is placed at the lower center with a few pens and clips. A handwritten-looking headline "[헤드라인]" in navy at the top with a highlighter swipe, a small mint circle "[포인트1]" at the right and the price "[가격]" in bold navy on a taped label at the bottom with "[제품명]" in small type above. Soft daylight, cheerful pastels, instantly charming. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[가격]", "[제품명]". No other text, no watermark.
```

---

## 스토리 광고 12가지 (89–100)

비율: 세로 9:16

전체 화면 세로 광고. 앱 버튼에 가려지지 않게 위아래 여백을 남기도록 작성됨.

### 89. 식품 · 위에서 내려오는 재료가 한 접시로 완성되는 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [혜택] [서브문구] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, texture, toppings and plating). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with generous top and bottom safe space. A warm tomato-red background. Fresh ingredients fall from the top of the frame toward the finished dish from the attached photo, which sits at the lower center on a white plate with a steam curl and a crumb or herb trail connecting them. A chunky headline "[헤드라인]" in cream at the top, a round yellow sticker "[혜택]" at the right and a pill button "[서브문구]" near the bottom with "[제품명]" and "[가격]" in cream above it. Hard warm light, saturated and appetizing. Use ONLY these exact strings: "[헤드라인]", "[혜택]", "[서브문구]", "[제품명]", "[가격]". No other text, no watermark.
```

### 90. 음료 · 세로로 길게 따라지는 음료 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [혜택] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (bottle or cup shape, liquid color, label and cap). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with safe space at the top and bottom. A bright mint-to-peach gradient background. The drink from the attached photo stands at the lower center while a long vertical stream of liquid pours down from the top edge into it, with ice cubes and droplets flying around. A bouncy headline "[헤드라인]" in white with a soft shadow at the top, a round white sticker "[혜택]" at the left and "[제품명]" with "[가격]" in a coral rounded box at the bottom. Bright summer light, vivid and cold. Use ONLY these exact strings: "[헤드라인]", "[혜택]", "[제품명]", "[가격]". No other text, no watermark.
```

### 91. 뷰티 · 아침 세안대 거울 속 루틴 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [포인트2] [포인트3] [서브문구] [제품명]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (container shape, cap, color and finish). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with safe space at the top and bottom. A bright bathroom morning with a round mirror, a white sink and a light-green wall, the product from the attached photo on the sink edge in the foreground with a few droplets, and the mirror reflecting a soft window glow. A thin serif headline "[헤드라인]" in white at the top, three small floating labels "[포인트1]", "[포인트2]", "[포인트3]" along a thin curved line and a pill button "[서브문구]" at the bottom with "[제품명]" above it. Fresh morning light, clean mint and white palette. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[포인트2]", "[포인트3]", "[서브문구]", "[제품명]". No other text, no watermark.
```

### 92. 패션 · 거울 앞 코디 변신이 이어지는 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [브랜드명] [서브문구] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (garment cut, color, fabric texture and details). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with safe space at the top and bottom. A lilac studio backdrop with a full-length standing mirror, the garment from the attached photo displayed on a mannequin in front of it, and three small circular inset photos at the right showing the same garment with different matching items. A thin oversized headline "[헤드라인]" in white at the top, "[브랜드명]" in small capitals above it, and a white pill button "[서브문구]" at the bottom with "[제품명]" and "[가격]" above it. Soft studio light, muted lilac palette, editorial calm. Use ONLY these exact strings: "[헤드라인]", "[브랜드명]", "[서브문구]", "[제품명]", "[가격]". No other text, no watermark.
```

### 93. 생활용품 · 손 안에서 바로 쓰는 장면 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [서브문구] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and proportions). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with safe space at the top and bottom. A close first-person view of two hands using the product from the attached photo in a bright kitchen, mid-action with natural movement and a few small bubbles or crumbs, a soft blurred plant and window behind. A friendly rounded headline "[헤드라인]" in navy at the top over a pale yellow band, a small green circle label "[포인트1]" near the hands and a pill button "[서브문구]" at the bottom with "[제품명]" and "[가격]" above it. Natural daylight, tidy and lively. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[서브문구]", "[제품명]", "[가격]". No other text, no watermark.
```

### 94. 전자기기 · 화면이 켜지고 기능이 하나씩 뜨는 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [포인트1] [포인트2] [포인트3] [헤드라인] [서브문구] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (body shape, color, ports and button layout). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with safe space at the top and bottom. A deep indigo background with soft light gradients, the device from the attached photo large at the center tilted slightly with its screen or lights glowing, and three floating translucent glass cards around it each holding one function "[포인트1]", "[포인트2]", "[포인트3]" with thin line icons. A crisp headline "[헤드라인]" in white at the top and a bright cyan pill button "[서브문구]" at the bottom with "[제품명]" and "[가격]" above it. Crisp reflections, cool indigo and cyan palette. Use ONLY these exact strings: "[포인트1]", "[포인트2]", "[포인트3]", "[헤드라인]", "[서브문구]", "[제품명]", "[가격]". No other text, no watermark.
```

### 95. 반려용품 · 현관문 열자 달려오는 반려견 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [서브문구] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and stitching). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with safe space at the top and bottom. A warm hallway with an open front door letting in golden light, an excited fluffy dog running toward the camera at the lower center with the product from the attached photo held in its mouth or beside it on the floor, small motion dust in the light. A bouncy rounded headline "[헤드라인]" in white with a soft brown shadow at the top, a yellow speech bubble "[포인트1]" near the dog and a pill button "[서브문구]" at the bottom with "[제품명]" and "[가격]" above it. Warm golden light, joyful and lively. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[서브문구]", "[제품명]", "[가격]". No other text, no watermark.
```

### 96. 꽃 · 포장되는 과정을 한 장으로 보여주는 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [서브문구] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (flower types, colors, wrapping and arrangement). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with safe space at the top and bottom. A top-down view of a florist table with kraft paper, scissors, twine and cut stems, the finished bouquet from the attached photo being tied by two hands at the lower center, petals and ribbon scattered, pale pink table surface. A script headline "[헤드라인]" in deep green at the top, a small cream round tag "[포인트1]" at the right and a pill button "[서브문구]" at the bottom with "[제품명]" and "[가격]" above it. Soft morning light, fresh pastel and green palette, warm and handmade. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[서브문구]", "[제품명]", "[가격]". No other text, no watermark.
```

### 97. 향초 · 퇴근 후 불을 켜는 저녁 의식 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [서브문구] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (vessel shape, wax color, lid and label). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with safe space at the top and bottom. A dim apartment living room at dusk with a window showing a violet city skyline, a hand lighting the candle from the attached photo with a long match at the lower center, the first flame blooming with a warm halo that spreads over a soft knit throw and a book. A thin serif headline "[헤드라인]" in cream at the top, a tiny label "[포인트1]" near the flame and a thin outlined pill button "[서브문구]" at the bottom with "[제품명]" and "[가격]" above it. Violet dusk mixed with warm amber candlelight, calm and cozy. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[서브문구]", "[제품명]", "[가격]". No other text, no watermark.
```

### 98. 주얼리 · 상자를 열면 반짝이는 언박싱 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [서브문구] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (design, metal color, stone shape and proportions). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with safe space at the top and bottom. A pair of hands with a neat manicure opening a small ivory gift box on a pale pink tabletop, the piece from the attached photo nestled in the box on cream satin with a bright sparkle, a ribbon draping over the edge, soft tissue paper at the sides. A refined serif headline "[헤드라인]" in deep rosewood at the top and a thin gold pill button "[서브문구]" at the bottom with "[제품명]" and "[가격]" above it. Soft window light, blush and gold palette, intimate and elegant. Use ONLY these exact strings: "[헤드라인]", "[서브문구]", "[제품명]", "[가격]". No other text, no watermark.
```

### 99. 운동용품 · 새벽 운동 시작 카운트다운 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [서브문구] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, material, color and grip details). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with safe space at the top and bottom. A dark pre-dawn street with a thin orange horizon glow, the product from the attached photo placed at the lower center on wet asphalt with a bright rim light and a few mist wisps, a faint trail of light streaks leading to it. A giant condensed italic headline "[헤드라인]" in white at the top, a bold orange circle "[포인트1]" at the right and an orange pill button "[서브문구]" at the bottom with "[제품명]" and "[가격]" above it. Dramatic contrast, deep navy and orange palette, energetic and clean. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[서브문구]", "[제품명]", "[가격]". No other text, no watermark.
```

### 100. 문구 · 노트가 한 장씩 채워지는 스터디 스토리 광고

- 첨부: 제품 사진 1장
- 바꿀 칸: [헤드라인] [포인트1] [서브문구] [제품명] [가격]

```
Generate this image. Use the attached photo only as the product reference for the [제품명] (shape, color, material and cover design). Create an Instagram story ad, vertical 9:16, flat full-bleed artwork with safe space at the top and bottom. A top-down desk view on a pale blue background with grid texture, the product from the attached photo at the lower center on an open notebook whose pages show a neat colorful study layout, a few highlighters and sticky notes around it, a mug in the corner. A handwritten-looking headline "[헤드라인]" in navy at the top with a yellow highlight swipe, a mint circle label "[포인트1]" near the notebook and a navy pill button "[서브문구]" at the bottom with "[제품명]" and "[가격]" above it. Soft daylight, cheerful pastels, tidy and motivating. Use ONLY these exact strings: "[헤드라인]", "[포인트1]", "[서브문구]", "[제품명]", "[가격]". No other text, no watermark.
```

---

## 번호별 한 줄 목록

| 번호 | 분류 | 제목 | 바꿀 칸 |
| --- | --- | --- | --- |
| 1 | 영상 예시 4가지 | 쿠키 포스터 | 쿠키 설명, 큰 제목 두 개(바삭/쭈욱), 가격·제품명·브랜드명 |
| 2 | 영상 예시 4가지 | 앰플 피드 광고 | 병의 모양·색, 광고 문구 두 줄, 라벨의 브랜드명 |
| 3 | 영상 예시 4가지 | 운동화 상세페이지 | 운동화 설명, 한국어 문구 네 줄, 브랜드명과 색상 견본 |
| 4 | 영상 예시 4가지 | 텀블러 배너 | 텀블러 설명, 네 가지 색상·무늬, 광고 문구 네 줄, 브랜드명 |
| 5 | 포스터 | 식품 · 야시장 국물 요리의 붉은 붓글씨 포스터 | [헤드라인] [가격] [제품명] |
| 6 | 포스터 | 음료 · 반으로 갈라진 색 배경과 얼음 튐 포스터 | [헤드라인] [혜택] [제품명] |
| 7 | 포스터 | 뷰티 · 미술관 전시 포스터처럼 놓은 스킨케어 | [헤드라인] [제품명] [서브문구] |
| 8 | 포스터 | 패션 · 복사기 질감 콜라주의 스트릿 포스터 | [헤드라인] [기간] [브랜드명] [제품명] |
| 9 | 포스터 | 생활용품 · 북유럽 파스텔 도형 위의 생활 소품 포스터 | [헤드라인] [서브문구] [가격] [제품명] |
| 10 | 포스터 | 전자기기 · 네온 외곽선이 흐르는 다크 출시 포스터 | [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [기간] |
| 11 | 포스터 | 반려용품 · 햇살 노란 바탕의 발자국 컨페티 포스터 | [헤드라인] [혜택] [제품명] |
| 12 | 포스터 | 꽃 · 어두운 이끼색 정물화 속의 부케 포스터 | [헤드라인] [제품명] [서브문구] [가격] |
| 13 | 포스터 | 향초 · 크게 번지는 불빛과 연기의 가을 저녁 포스터 | [헤드라인] [제품명] [서브문구] |
| 14 | 포스터 | 주얼리 · 검정 벨벳 위로 내려오는 빛줄기 포스터 | [헤드라인] [브랜드명] [제품명] [가격] |
| 15 | 포스터 | 운동용품 · 사선으로 쪼개진 스피드 캠페인 포스터 | [헤드라인] [서브문구] [가격] [제품명] |
| 16 | 포스터 | 문구 · 종이 오림 콜라주 놀이터 포스터 | [헤드라인] [혜택] [제품명] |
| 17 | 피드 광고 | 식품 · 접시 위 한 입이 확대되는 사선 구도 피드 광고 | [헤드라인] [혜택] [제품명] |
| 18 | 피드 광고 | 음료 · 얼음과 거품이 쌓인 카페 시즌 한정 피드 광고 | [헤드라인] [서브문구] [제품명] [기간] |
| 19 | 피드 광고 | 뷰티 · 물결치는 제형 리본이 감싸는 세럼 피드 광고 | [헤드라인] [서브문구] [제품명] [포인트1] |
| 20 | 피드 광고 | 패션 · 거리 한복판 한 벌 룩 피드 광고 | [헤드라인] [브랜드명] [제품명] [가격] |
| 21 | 피드 광고 | 생활용품 · 아침 식탁 위 쓰임새를 보여주는 피드 광고 | [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] |
| 22 | 피드 광고 | 전자기기 · 책상 위 한 대, 화면 속이 보이는 제품 피드 광고 | [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] |
| 23 | 피드 광고 | 반려용품 · 강아지 눈높이로 본 바닥 컷 피드 광고 | [헤드라인] [서브문구] [제품명] [혜택] |
| 24 | 피드 광고 | 꽃 · 현관문 앞에 놓인 오늘의 꽃다발 피드 광고 | [헤드라인] [브랜드명] [제품명] [가격] [서브문구] |
| 25 | 피드 광고 | 향초 · 욕실 선반 위 저녁 휴식 장면 피드 광고 | [헤드라인] [서브문구] [제품명] [포인트1] |
| 26 | 피드 광고 | 주얼리 · 손끝에 걸린 반지 클로즈업 피드 광고 | [헤드라인] [브랜드명] [제품명] [가격] |
| 27 | 피드 광고 | 운동용품 · 땀방울과 함께 정지된 순간 피드 광고 | [헤드라인] [혜택] [제품명] [서브문구] |
| 28 | 피드 광고 | 문구 · 책상 위 하루 계획이 채워진 플랫레이 피드 광고 | [헤드라인] [서브문구] [제품명] [가격] |
| 29 | 상세페이지 | 식품 · 재료에서 완성까지 이어지는 세로 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [서브문구] [가격] [제품명] |
| 30 | 상세페이지 | 음료 · 맛 층이 보이는 단면과 시즌 색 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] |
| 31 | 상세페이지 | 뷰티 · 성분 이야기를 한 줄로 풀어낸 병 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [서브문구] [가격] |
| 32 | 상세페이지 | 패션 · 핏과 소재를 보여주는 룩북형 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [브랜드명] [제품명] [가격] |
| 33 | 상세페이지 | 생활용품 · 쓰는 순서를 네 칸으로 보여주는 사용법 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [포인트4] [제품명] [가격] |
| 34 | 상세페이지 | 전자기기 · 부위별 기능을 짚어주는 분해도형 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [포인트4] [제품명] [가격] |
| 35 | 상세페이지 | 반려용품 · 보호자가 궁금한 점부터 답하는 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] [서브문구] |
| 36 | 상세페이지 | 꽃 · 계절 구성과 포장을 보여주는 꽃집 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] [서브문구] |
| 37 | 상세페이지 | 향초 · 향의 세 단계를 색으로 나눈 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] |
| 38 | 상세페이지 | 주얼리 · 착용 사진과 크기 비교가 있는 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] [브랜드명] |
| 39 | 상세페이지 | 운동용품 · 사용 장면과 스펙 수치가 맞물린 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] |
| 40 | 상세페이지 | 문구 · 필기감과 구성품을 펼쳐 보이는 상세페이지 | [헤드라인] [포인트1] [포인트2] [포인트3] [제품명] [가격] |
| 41 | 홈페이지 배너 | 식품 · 갓 구운 빵이 쏟아지는 베이커리 가로 배너 | [제품명] [헤드라인] [서브문구] [혜택] [브랜드명] |
| 42 | 홈페이지 배너 | 음료 · 과일이 튀어 오르는 주스 스탠드 가로 배너 | [헤드라인] [서브문구] [가격] [제품명] |
| 43 | 홈페이지 배너 | 뷰티 · 광이 도는 피부결 클로즈업 배너 | [헤드라인] [서브문구] [혜택] [제품명] [브랜드명] |
| 44 | 홈페이지 배너 | 패션 · 도시 옥상 석양 속 신상 가로 배너 | [제품명] [헤드라인] [서브문구] [브랜드명] [기간] |
| 45 | 홈페이지 배너 | 생활용품 · 청소가 끝난 맑은 집 가로 배너 | [헤드라인] [서브문구] [혜택] [제품명] |
| 46 | 홈페이지 배너 | 전자기기 · 어두운 방에서 화면이 켜지는 시네마틱 배너 | [헤드라인] [서브문구] [혜택] [제품명] |
| 47 | 홈페이지 배너 | 반려용품 · 공원 잔디 위에서 신난 산책 가로 배너 | [헤드라인] [서브문구] [혜택] [제품명] |
| 48 | 홈페이지 배너 | 꽃 · 햇빛 드는 꽃가게 작업대 가로 배너 | [제품명] [헤드라인] [서브문구] [혜택] [브랜드명] |
| 49 | 홈페이지 배너 | 향초 · 눈 오는 창가 겨울 저녁 가로 배너 | [헤드라인] [서브문구] [혜택] [제품명] |
| 50 | 홈페이지 배너 | 주얼리 · 대리석과 거울 조각의 프리미엄 가로 배너 | [제품명] [헤드라인] [서브문구] [혜택] [브랜드명] |
| 51 | 홈페이지 배너 | 운동용품 · 새벽 트랙의 달리기 캠페인 가로 배너 | [헤드라인] [서브문구] [혜택] [제품명] |
| 52 | 홈페이지 배너 | 문구 · 개강 준비 책상 위 컬러 블록 가로 배너 | [헤드라인] [서브문구] [혜택] [제품명] |
| 53 | 메뉴판·가격표 | 식품 · 정식집 오늘의 메뉴 칠판 스타일 메뉴판 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 54 | 메뉴판·가격표 | 음료 · 과일 컬러 블록으로 나눈 주스바 메뉴판 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 55 | 메뉴판·가격표 | 뷰티 · 피부 관리 가격표를 정리한 미니멀 시술 메뉴판 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 56 | 메뉴판·가격표 | 패션 · 수선 서비스 가격을 안내하는 태그형 메뉴판 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 57 | 메뉴판·가격표 | 생활용품 · 리필스테이션 용량별 가격표 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 58 | 메뉴판·가격표 | 전자기기 · 수리·케이스 교체 비용 안내 메뉴판 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 59 | 메뉴판·가격표 | 반려용품 · 반려견 미용 코스 가격표 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 60 | 메뉴판·가격표 | 꽃 · 꽃집 사이즈별 꽃다발 가격표 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 61 | 메뉴판·가격표 | 향초 · 향초 만들기 체험 클래스 메뉴판 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 62 | 메뉴판·가격표 | 주얼리 · 주문 제작 반지 옵션별 가격표 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 63 | 메뉴판·가격표 | 운동용품 · 대여·강습 요금을 안내하는 체육관 메뉴판 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 64 | 메뉴판·가격표 | 문구 · 맞춤 도장·인쇄 메뉴판 | [제품명] [헤드라인] [메뉴1] [가격1] [메뉴2] [가격2] [메뉴3] [가격3] [서브문구] [매장명] |
| 65 | 영상 썸네일 | 식품 · 한입 베어 문 단면 클로즈업 먹방 썸네일 | [헤드라인] [서브문구] [제품명] |
| 66 | 영상 썸네일 | 음료 · 색이 확 바뀌는 비포애프터 음료 썸네일 | [헤드라인] [포인트1] [제품명] |
| 67 | 영상 썸네일 | 뷰티 · 제품 하나로 달라진 화장대 비교 썸네일 | [헤드라인] [서브문구] [포인트1] [제품명] |
| 68 | 영상 썸네일 | 패션 · 입자마자 달라지는 착장 변신 썸네일 | [헤드라인] [가격] [제품명] |
| 69 | 영상 썸네일 | 생활용품 · 쓰기 전과 후를 한 화면에 보여주는 정리 썸네일 | [헤드라인] [포인트1] [서브문구] [제품명] |
| 70 | 영상 썸네일 | 전자기기 · 개봉 순간 놀란 표정 대신 제품이 말하는 썸네일 | [헤드라인] [포인트1] [서브문구] [제품명] |
| 71 | 영상 썸네일 | 반려용품 · 반려견 반응이 주인공인 후기 썸네일 | [헤드라인] [포인트1] [서브문구] [제품명] |
| 72 | 영상 썸네일 | 꽃 · 시든 꽃에서 새 꽃다발로 바뀌는 비교 썸네일 | [헤드라인] [포인트1] [제품명] |
| 73 | 영상 썸네일 | 향초 · 불 붙이는 순간 방 분위기가 바뀌는 썸네일 | [헤드라인] [서브문구] [제품명] |
| 74 | 영상 썸네일 | 주얼리 · 가격보다 반짝임을 크게 보여주는 하울 썸네일 | [헤드라인] [가격] [서브문구] [제품명] |
| 75 | 영상 썸네일 | 운동용품 · 한 달 변화를 한 장으로 압축한 챌린지 썸네일 | [포인트1] [포인트2] [헤드라인] [제품명] |
| 76 | 영상 썸네일 | 문구 · 다꾸 한 장이 완성되는 과정 압축 썸네일 | [헤드라인] [포인트1] [제품명] |
| 77 | 매장 POP | 식품 · 계산대 옆에 세우는 한정 메뉴 스탠드형 POP | [헤드라인] [혜택] [가격] [제품명] |
| 78 | 매장 POP | 음료 · 냉장고 문에 붙이는 시원한 가격 안내 POP | [헤드라인] [포인트1] [가격] [제품명] |
| 79 | 매장 POP | 뷰티 · 테스터 옆에 놓는 사용 순서 안내 POP | [헤드라인] [포인트1] [포인트2] [포인트3] [서브문구] [가격] [제품명] |
| 80 | 매장 POP | 패션 · 옷걸이 옆에 거는 신상 입고 POP | [헤드라인] [포인트1] [가격] [제품명] |
| 81 | 매장 POP | 생활용품 · 진열대 선반에 꽂는 쓰임새 한 줄 POP | [헤드라인] [포인트1] [가격] [제품명] |
| 82 | 매장 POP | 전자기기 · 체험존 책상 위 기능 요약 스탠드 POP | [헤드라인] [포인트1] [포인트2] [포인트3] [혜택] [가격] [제품명] |
| 83 | 매장 POP | 반려용품 · 간식 코너 선반에 붙는 강아지 추천 POP | [헤드라인] [포인트1] [가격] [제품명] |
| 84 | 매장 POP | 꽃 · 꽃집 앞 양동이 옆에 꽂는 오늘의 꽃 POP | [헤드라인] [포인트1] [가격] [제품명] |
| 85 | 매장 POP | 향초 · 시향 코너에 두는 향 설명 테이블 POP | [헤드라인] [포인트1] [포인트2] [포인트3] [가격] [제품명] |
| 86 | 매장 POP | 주얼리 · 쇼케이스 유리 안에 세우는 신상 소개 POP | [헤드라인] [포인트1] [가격] [제품명] |
| 87 | 매장 POP | 운동용품 · 매장 입구 벽에 붙이는 신제품 체험 POP | [헤드라인] [포인트1] [가격] [제품명] |
| 88 | 매장 POP | 문구 · 계산대 옆 소품 코너의 포스트잇 스타일 POP | [헤드라인] [포인트1] [가격] [제품명] |
| 89 | 스토리 광고 | 식품 · 위에서 내려오는 재료가 한 접시로 완성되는 스토리 광고 | [헤드라인] [혜택] [서브문구] [제품명] [가격] |
| 90 | 스토리 광고 | 음료 · 세로로 길게 따라지는 음료 스토리 광고 | [헤드라인] [혜택] [제품명] [가격] |
| 91 | 스토리 광고 | 뷰티 · 아침 세안대 거울 속 루틴 스토리 광고 | [헤드라인] [포인트1] [포인트2] [포인트3] [서브문구] [제품명] |
| 92 | 스토리 광고 | 패션 · 거울 앞 코디 변신이 이어지는 스토리 광고 | [헤드라인] [브랜드명] [서브문구] [제품명] [가격] |
| 93 | 스토리 광고 | 생활용품 · 손 안에서 바로 쓰는 장면 스토리 광고 | [헤드라인] [포인트1] [서브문구] [제품명] [가격] |
| 94 | 스토리 광고 | 전자기기 · 화면이 켜지고 기능이 하나씩 뜨는 스토리 광고 | [포인트1] [포인트2] [포인트3] [헤드라인] [서브문구] [제품명] [가격] |
| 95 | 스토리 광고 | 반려용품 · 현관문 열자 달려오는 반려견 스토리 광고 | [헤드라인] [포인트1] [서브문구] [제품명] [가격] |
| 96 | 스토리 광고 | 꽃 · 포장되는 과정을 한 장으로 보여주는 스토리 광고 | [헤드라인] [포인트1] [서브문구] [제품명] [가격] |
| 97 | 스토리 광고 | 향초 · 퇴근 후 불을 켜는 저녁 의식 스토리 광고 | [헤드라인] [포인트1] [서브문구] [제품명] [가격] |
| 98 | 스토리 광고 | 주얼리 · 상자를 열면 반짝이는 언박싱 스토리 광고 | [헤드라인] [서브문구] [제품명] [가격] |
| 99 | 스토리 광고 | 운동용품 · 새벽 운동 시작 카운트다운 스토리 광고 | [헤드라인] [포인트1] [서브문구] [제품명] [가격] |
| 100 | 스토리 광고 | 문구 · 노트가 한 장씩 채워지는 스터디 스토리 광고 | [헤드라인] [포인트1] [서브문구] [제품명] [가격] |

## 출처

- [OpenAI 이미지 생성·편집 안내](https://help.openai.com/en/articles/11084440-images-in-chatgpt)
- [OpenAI 이미지 프롬프트 작성 가이드](https://openai.com/academy/image-generation/)
- [GPT 이미지 2.5 실무 레시피 상품 안내](https://www.latpeed.com/products/R9TNg)

페이지의 제품 사진·생성 결과·책 소개 이미지는 프롬왓 제공 자료입니다. 예시의 브랜드명과 가격은 가상이며, 실제 상품에 쓸 때는 내 정보로 바꿔야 합니다.
