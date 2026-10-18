import {
  AVOID_CHIPS,
  BACKDROPS,
  BRAND_COLORS,
  CARD_MODES,
  EVENT_KINDS,
  FIELDS,
  LOCAL_SCENES,
  LOGO_TYPES,
  MOOD_KINDS,
  MOODS,
  OUTPUT_TYPES,
  PLATFORMS,
  PRODUCT_SHOTS,
  STYLES,
  TARGETS,
  byId,
  resolveStyle,
  type OutputId,
} from "@/data/options";
import { colorLabel, textItems, usesStyle } from "@/lib/prompt";
import { FACT_KEYS, type BuilderState, type CopyKey, type FactKey, type InfoMode, type ShowKey } from "@/lib/state";
import type { ResolvedCopy } from "@/lib/suggest";
import { Chips, Field, MultiChips, StepCard, Toggle, chipClass, inputClass } from "../ui";
import InfoRow, { ModeSwitch } from "./InfoRow";

type Common = { state: BuilderState; onPatch: (p: Partial<BuilderState>) => void };

const FACT_META: Record<FactKey, { label: string; placeholder: string }> = {
  benefit: { label: "혜택·이벤트", placeholder: "예: 오픈 기념 아메리카노 1+1" },
  price: { label: "가격", placeholder: "예: 250g 12,000원" },
  date: { label: "오픈일·일정", placeholder: "예: 11월 7일(토) 오픈 / 매주 토 오후 2시" },
  place: { label: "위치", placeholder: "예: 양평군 양서면 / 양평역 1번 출구 앞" },
  contact: { label: "연락처·예약", placeholder: "예: 예약 010-0000-0000 / @인스타계정" },
};

/* ───────────── 1. 브랜드 정보 ───────────── */
export function StepBrand({ state, onPatch }: Common) {
  const custom = state.color !== "auto" && !BRAND_COLORS.some((c) => c.id === state.color);
  const auto = colorLabel("auto", state.mood);
  const setFact = (k: FactKey, v: string) => onPatch({ facts: { ...state.facts, [k]: v } });
  return (
    <StepCard step={1} title="브랜드 정보" desc="내 창업 아이템을 알려 주세요. 적은 내용으로 문구·장면·해시태그를 골라요.">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="창업 아이템 · 제품/서비스" htmlFor="item">
          <input id="item" value={state.item} onChange={(e) => onPatch({ item: e.target.value })} placeholder="예: 수제 딸기잼, 강 뷰 카페" className={inputClass} />
        </Field>
        <Field label="브랜드명" htmlFor="brand">
          <input id="brand" value={state.brand} onChange={(e) => onPatch({ brand: e.target.value })} placeholder="예: 두물딸기" className={inputClass} />
        </Field>
      </div>
      <Field label="분야">
        <Chips ariaLabel="분야" options={FIELDS} value={state.field} onChange={(id) => id && onPatch({ field: id })} />
      </Field>
      <Field label="한 줄 소개 · 핵심 가치" htmlFor="oneLiner" hint="카피·홍보 문구에 쓰여요">
        <input id="oneLiner" value={state.oneLiner} onChange={(e) => onPatch({ oneLiner: e.target.value })} placeholder="예: 새벽에 딴 양평 딸기로 매주 소량만 끓여요" className={inputClass} />
      </Field>
      <Field label="타깃 고객" hint="여러 개 골라도 돼요">
        <MultiChips ariaLabel="타깃 고객" options={TARGETS} values={state.targets} onChange={(targets) => onPatch({ targets })} />
        <input
          aria-label="타깃 고객 직접 적기"
          value={state.targetText}
          onChange={(e) => onPatch({ targetText: e.target.value })}
          placeholder="직접 적기 (예: 주말 라이딩족, 캠핑 초보)"
          className={`${inputClass} mt-1`}
        />
      </Field>
      <Field label="브랜드 방향 · 무드">
        <Chips ariaLabel="브랜드 방향" options={MOODS} value={state.mood} onChange={(id) => id && onPatch({ mood: id })} />
      </Field>
      <Field label="브랜드 컬러" optional hint={state.color === "auto" ? `무드에 맞춰 ${auto.label}` : undefined}>
        <div role="radiogroup" aria-label="브랜드 컬러" className="flex flex-wrap items-center gap-2.5">
          <button type="button" role="radio" aria-checked={state.color === "auto"} onClick={() => onPatch({ color: "auto" })} className={chipClass(state.color === "auto")}>
            <span aria-hidden className="h-4 w-4 rounded-full ring-2 ring-white" style={{ backgroundColor: auto.hex }} />
            자동
          </button>
          {BRAND_COLORS.map((c) => (
            <button
              key={c.id}
              type="button"
              role="radio"
              aria-checked={state.color === c.id}
              aria-label={c.label}
              title={c.label}
              onClick={() => onPatch({ color: c.id })}
              className={`h-10 w-10 rounded-full border-2 transition ${state.color === c.id ? "scale-110 border-white ring-[3px] ring-moss" : "border-white shadow ring-1 ring-line"}`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
          <label className={`flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-bold ${custom ? "border-moss ring-[3px] ring-moss/30" : "border-line bg-card"}`}>
            <input
              type="color"
              aria-label="브랜드 컬러 직접 고르기"
              value={custom ? state.color : "#2f6b4f"}
              onChange={(e) => onPatch({ color: e.target.value })}
              className="h-6 w-7 cursor-pointer border-0 bg-transparent p-0"
            />
            직접 {custom && <span className="font-mono text-mute">{state.color.toUpperCase()}</span>}
          </label>
        </div>
      </Field>
      <Field label="제품·공간 생김새" htmlFor="look" optional hint="사진 속 주인공을 정확하게">
        <input id="look" value={state.look} onChange={(e) => onPatch({ look: e.target.value })} placeholder="예: 체크무늬 천을 씌운 250g 유리병, 크라프트 라벨" className={inputClass} />
      </Field>
      <div className="space-y-3">
        <Toggle
          checked={state.local}
          onChange={(local) => onPatch({ local })}
          label="🏞️ 양평 지역 느낌 담기"
          desc="두물머리 물안개·남한강·산과 들 같은 양평 분위기를 배경에 녹여요 (특정 장소를 그대로 베끼지는 않아요)"
        />
        {state.local && <Chips ariaLabel="지역 배경" options={LOCAL_SCENES} value={state.localScene} onChange={(id) => id && onPatch({ localScene: id })} />}
      </div>
      <details className="group rounded-2xl border border-line bg-paper/50 open:bg-white" open={FACT_KEYS.some((k) => state.facts[k])}>
        <summary className="cursor-pointer list-none px-4 py-4 text-base font-bold text-ink marker:hidden">
          🧾 홍보 정보 <span className="font-normal text-mute">(선택 · 가격·혜택·오픈일·위치·연락처)</span>
          <span className="float-right text-mute transition group-open:rotate-180">▾</span>
        </summary>
        <div className="space-y-3 px-4 pb-4">
          <p className="text-sm leading-relaxed text-mute">적은 정보만 이미지·문구에 들어가요. 비워 두면 빼요 — 앱이 가짜 가격이나 날짜를 지어내지 않아요.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {FACT_KEYS.map((k) => (
              <label key={k} className="text-sm font-bold text-ink">
                {FACT_META[k].label}
                <input
                  aria-label={FACT_META[k].label}
                  value={state.facts[k]}
                  onChange={(e) => setFact(k, e.target.value)}
                  placeholder={FACT_META[k].placeholder}
                  className={`${inputClass} mt-1.5 font-normal`}
                />
              </label>
            ))}
          </div>
        </div>
      </details>
    </StepCard>
  );
}

/* ───────────── 2. 홍보물 종류 ───────────── */
export function StepOutput({ state, onPatch, onOutput, copy }: Common & { onOutput: (id: OutputId) => void; copy: ResolvedCopy }) {
  const output = byId(OUTPUT_TYPES, state.output) ?? OUTPUT_TYPES[0];
  const platforms = PLATFORMS.filter((p) => output.platforms.includes(p.id));
  return (
    <StepCard step={2} title="무엇을 만들까요?" desc="홍보물 종류를 고르면 어울리는 사이즈와 구성이 자동으로 맞춰져요.">
      <div role="radiogroup" aria-label="홍보물 종류" className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        {OUTPUT_TYPES.map((o) => {
          const on = state.output === o.id;
          return (
            <button
              key={o.id}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => onOutput(o.id)}
              className={`relative rounded-2xl border p-4 text-left transition active:scale-[0.98] ${on ? "border-moss bg-moss text-white shadow-md" : "border-line bg-white hover:border-moss/60"}`}
            >
              <span className="text-2xl" aria-hidden>
                {o.emoji}
              </span>
              <span className="mt-1.5 block text-base font-extrabold">{o.label}</span>
              <span className={`block text-sm ${on ? "text-white/75" : "text-mute"}`}>{o.desc}</span>
              {o.draft && <span className={`absolute right-3 top-3 rounded-md px-1.5 py-0.5 text-[11px] font-bold ${on ? "bg-white/20" : "bg-sun-soft text-[#8a5a00]"}`}>시안</span>}
            </button>
          );
        })}
      </div>

      {state.output === "product" && (
        <>
          <Field label="사진 종류">
            <Chips ariaLabel="사진 종류" options={PRODUCT_SHOTS} value={state.productShot} onChange={(id) => id && onPatch({ productShot: id as BuilderState["productShot"] })} />
          </Field>
          {state.productShot === "cutout" && (
            <Field label="배경">
              <Chips ariaLabel="배경" options={BACKDROPS} value={state.backdrop} onChange={(id) => id && onPatch({ backdrop: id })} />
            </Field>
          )}
        </>
      )}
      {state.output === "mood" && (
        <Field label="구성">
          <Chips ariaLabel="무드 이미지 구성" options={MOOD_KINDS} value={state.moodKind} onChange={(id) => id && onPatch({ moodKind: id as BuilderState["moodKind"] })} />
        </Field>
      )}
      {state.output === "cardnews" && (
        <Field label="카드뉴스 구성" hint="내용 장은 3단계의 '카드뉴스 내용'으로 만들어요">
          <Chips ariaLabel="카드뉴스 구성" options={CARD_MODES} value={state.cardMode} onChange={(id) => id && onPatch({ cardMode: id as BuilderState["cardMode"] })} />
          {state.cardMode === "content" && copy.points.items.length > 0 && (
            <div role="radiogroup" aria-label="몇 번째 내용 장" className="mt-2 flex flex-wrap gap-2">
              {copy.points.items.map((p, i) => (
                <button key={i} type="button" role="radio" aria-checked={state.cardIndex === i} onClick={() => onPatch({ cardIndex: i })} className={chipClass(state.cardIndex === i)}>
                  {i + 2}장 · {p.length > 12 ? `${p.slice(0, 12)}…` : p}
                </button>
              ))}
            </div>
          )}
        </Field>
      )}
      {state.output === "event" && (
        <Field label="행사 종류">
          <Chips ariaLabel="행사 종류" options={EVENT_KINDS} value={state.eventKind} onChange={(id) => id && onPatch({ eventKind: id })} />
        </Field>
      )}
      {state.output === "logo" && (
        <Field label="로고 유형">
          <Chips ariaLabel="로고 유형" options={LOGO_TYPES} value={state.logoType} onChange={(id) => id && onPatch({ logoType: id })} />
          <p className="mt-2 rounded-xl bg-sun-soft px-3 py-2 text-sm leading-relaxed text-[#6b4a00]">
            ✒️ AI 로고는 방향을 고르는 <b>시안</b>이에요. 실제로 쓰기 전에 디자이너와 다듬고, 특허정보검색(KIPRIS)에서 비슷한 상표가 있는지 꼭 확인하세요.
          </p>
        </Field>
      )}

      {platforms.length > 1 && (
        <Field label="올릴 곳 · 사이즈" hint="프롬프트 비율이 바뀌어요">
          <div role="radiogroup" aria-label="플랫폼 사이즈" className="flex flex-wrap gap-2">
            {platforms.map((p) => {
              const on = state.platform === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => onPatch({ platform: p.id })}
                  className={`flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 text-left transition ${on ? "border-moss bg-moss text-white" : "border-line bg-white text-ink hover:border-moss/60"}`}
                >
                  <RatioIcon ratio={p.ratio} on={on} />
                  <span>
                    <span className="block text-[15px] font-bold leading-tight">{p.label}</span>
                    <span className={`block text-xs ${on ? "text-white/75" : "text-mute"}`}>
                      {p.ratio} · {p.px}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </Field>
      )}
    </StepCard>
  );
}

/** 비율 모양 아이콘 */
export function RatioIcon({ ratio, on, size = 24 }: { ratio: string; on?: boolean; size?: number }) {
  const [w, h] = ratio.split(":").map(Number);
  const scale = size / Math.max(w, h);
  return (
    <span className="grid shrink-0 place-items-center" style={{ width: size, height: size }} aria-hidden>
      <span className={`block rounded-[3px] border-2 ${on ? "border-white" : "border-mute/60"}`} style={{ width: Math.max(w * scale, 7), height: Math.max(h * scale, 7) }} />
    </span>
  );
}

/* ───────────── 3. 글자 · 디자인 ───────────── */
const COPY_META: Record<CopyKey, { label: string; placeholder: string; note?: string }> = {
  headline: { label: "헤드라인 (큰 제목)", placeholder: "예: 아침에 딴 그대로, 수제 딸기잼", note: "추천 문구를 쓰면 이미지 AI가 더 짧고 힘 있게 다듬어도 돼요." },
  tagline: { label: "카피 (한두 줄 설명)", placeholder: "예: 새벽에 딴 양평 딸기로 소량만 끓여요" },
  cta: { label: "행동 안내", placeholder: "예: 프로필 링크에서 주문하기" },
};

type DesignProps = Common & {
  copy: ResolvedCopy;
  onMode: (k: CopyKey, mode: InfoMode) => void;
  onValue: (k: CopyKey, value: string) => void;
  onShuffle: (k: CopyKey | "points") => void;
  onPoints: (p: Partial<BuilderState["points"]>) => void;
};

export function StepDesign({ state, onPatch, copy, onMode, onValue, onShuffle, onPoints }: DesignProps) {
  const output = byId(OUTPUT_TYPES, state.output) ?? OUTPUT_TYPES[0];
  const { noText } = textItems(state, copy);
  const set = state.output === "cardnews" && state.cardMode !== "cover";
  const copyKeys: CopyKey[] =
    state.output === "logo" ? ["tagline"] : output.priority.filter((k): k is CopyKey => k === "headline" || k === "tagline" || k === "cta");
  const showKeys = (["brand", ...FACT_KEYS] as ShowKey[]).filter((k) => output.priority.includes(k) || (state.output === "cardnews" && state.cardMode === "set"));
  const styleOn = usesStyle(state);
  const auto = resolveStyle(null, state.output, state.mood);
  const styles = STYLES.filter((s) => output.styles.includes(s.id));
  const toggleAvoid = (id: string) => onPatch({ avoid: state.avoid.includes(id) ? state.avoid.filter((a) => a !== id) : [...state.avoid, id] });
  const pm = state.points.mode;
  return (
    <StepCard step={3} title="글자 · 디자인" desc="이미지에 들어갈 글자와 디자인 스타일을 정해요. 글자는 적을수록 AI가 정확하게 써요.">
      {noText ? (
        <p className="rounded-2xl bg-moss-soft px-4 py-3 text-[15px] leading-relaxed text-moss-dark">📷 {noText} 글자가 필요하면 다른 사이즈를 고르세요.</p>
      ) : (
        <>
          {!set && state.output !== "logo" && (
            <div className="grid gap-3">
              {copyKeys.map((k) => (
                <InfoRow
                  key={k}
                  k={k}
                  label={state.output === "event" && k === "headline" ? "행사 제목" : COPY_META[k].label}
                  placeholder={COPY_META[k].placeholder}
                  note={COPY_META[k].note}
                  value={state.copy[k].value}
                  resolved={copy[k]}
                  onMode={onMode}
                  onValue={onValue}
                  onShuffle={onShuffle}
                />
              ))}
            </div>
          )}
          {state.output === "cardnews" && state.cardMode === "set" && (
            <div className="grid gap-3">
              {(["headline", "tagline"] as CopyKey[]).map((k) => (
                <InfoRow key={k} k={k} label={k === "headline" ? "표지 제목" : "표지 카피"} placeholder={COPY_META[k].placeholder} value={state.copy[k].value} resolved={copy[k]} onMode={onMode} onValue={onValue} onShuffle={onShuffle} />
              ))}
            </div>
          )}
          {state.output === "logo" && (
            <div className="space-y-3">
              <p className="rounded-2xl bg-paper px-4 py-3 text-[15px] text-ink">
                로고 글자: <b>{copy.brandName || "1단계에서 브랜드명을 적어 주세요"}</b>
              </p>
              <InfoRow
                k="tagline"
                label="보조 문구 (선택)"
                placeholder="예: 양평 용문산 자락"
                note="'직접 쓰기'로 적었을 때만 로고 아래에 작게 들어가요."
                value={state.copy.tagline.value}
                resolved={copy.tagline}
                onMode={onMode}
                onValue={onValue}
                onShuffle={onShuffle}
              />
            </div>
          )}
          {state.output === "cardnews" && (
            <div className={`rounded-2xl border p-4 ${pm === "omit" ? "border-dashed border-line bg-paper/50" : "border-line bg-white"}`}>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-[15px] font-bold text-ink">
                  카드뉴스 내용 <span className="font-normal text-mute">(장마다 한 줄, 최대 5장)</span>
                </p>
                <ModeSwitch value={pm} onChange={(mode) => onPoints({ mode })} label="카드뉴스 내용" />
              </div>
              {pm === "exact" && (
                <div className="grid gap-2">
                  {state.points.items.map((item, i) => (
                    <input
                      key={i}
                      aria-label={`내용 ${i + 1}`}
                      value={item}
                      onChange={(e) => {
                        const items = [...state.points.items];
                        items[i] = e.target.value;
                        onPoints({ items });
                      }}
                      placeholder={copy.points.suggestion[i] ? `예: ${copy.points.suggestion[i]}` : "비워 두면 이 장은 빼요"}
                      className={inputClass}
                    />
                  ))}
                </div>
              )}
              {pm === "ai" && (
                <div className="flex items-start gap-2">
                  <ol className="flex flex-1 flex-wrap gap-2">
                    {copy.points.suggestion.map((s, i) => (
                      <li key={s} className="rounded-xl bg-sun-soft px-3 py-1.5 text-[15px] text-ink">
                        {i + 2}장 · {s}
                      </li>
                    ))}
                  </ol>
                  <button type="button" onClick={() => onShuffle("points")} aria-label="카드뉴스 내용 다른 추천" className="shrink-0 rounded-2xl border border-line px-4 py-2 text-base hover:border-moss">
                    🔀
                  </button>
                </div>
              )}
              {pm === "omit" && <p className="text-sm text-mute">내용 장 없이 표지만 만들어요.</p>}
              {pm === "ai" && <p className="mt-2 text-sm text-mute">추천 내용은 분야별 예시예요. 내 가게와 다르면 &lsquo;직접 쓰기&rsquo;로 고쳐 주세요.</p>}
            </div>
          )}
          {showKeys.length > 0 && state.output !== "logo" && (
            <Field label="이미지에 넣을 정보" hint="1단계에 적은 것만 고를 수 있어요">
              <div role="group" aria-label="이미지에 넣을 정보" className="flex flex-wrap gap-2">
                {showKeys.map((k) => {
                  const value = k === "brand" ? state.brand.trim() : state.facts[k].trim();
                  const on = Boolean(value) && state.show[k];
                  const label = k === "brand" ? "브랜드명" : FACT_META[k].label;
                  return (
                    <button
                      key={k}
                      type="button"
                      aria-pressed={on}
                      disabled={!value}
                      onClick={() => onPatch({ show: { ...state.show, [k]: !state.show[k] } })}
                      title={value || "1단계에서 먼저 적어 주세요"}
                      className={`${chipClass(on)} disabled:cursor-not-allowed disabled:opacity-45`}
                    >
                      {on ? "✓ " : ""}
                      {label}
                    </button>
                  );
                })}
              </div>
            </Field>
          )}
        </>
      )}

      {styleOn && (
        <Field label="디자인 스타일" hint={state.style ? "다시 누르면 자동 추천으로" : `자동 추천: ${auto.label}`}>
          <Chips ariaLabel="디자인 스타일" allowDeselect options={styles} value={state.style} onChange={(style) => onPatch({ style })} />
          <p className="mt-2 text-sm text-mute">스타일마다 서체·구도·색 쓰는 법·질감이 달라요. 고르지 않으면 브랜드 무드에 맞춰 골라요.</p>
        </Field>
      )}
      {state.output !== "logo" && (
        <Field label="메인 장면 · 비주얼" htmlFor="scene" optional hint="비우면 분야·스타일에 맞춰 자동">
          <input
            id="scene"
            value={state.scene}
            onChange={(e) => onPatch({ scene: e.target.value, sceneEn: "" })}
            placeholder="예: 나무 도마 위 잼 병 두 개와 반으로 자른 딸기, 토스트 한 조각"
            className={inputClass}
          />
        </Field>
      )}
      <div className="grid gap-2.5 sm:grid-cols-2">
        {state.output !== "logo" && (
          <Toggle
            checked={state.refPhoto}
            onChange={(refPhoto) => onPatch({ refPhoto })}
            label="📎 내 제품 사진을 함께 올릴게요"
            desc="ChatGPT·Gemini에 실제 사진을 첨부하면, 제품 모양은 그대로 두고 배경·연출만 바꾸게 해요"
          />
        )}
        {(state.output === "poster" || state.output === "event") && (
          <Toggle checked={state.qrSlot} onChange={(qrSlot) => onPatch({ qrSlot })} label="QR 코드 빈칸 남기기" desc="예약·주문 링크 QR을 나중에 직접 붙일 정사각형 자리" />
        )}
      </div>
      <Field label="피할 것">
        <div role="group" aria-label="피할 것" className="flex flex-wrap gap-2">
          {AVOID_CHIPS.map((a) => {
            const on = state.avoid.includes(a.id);
            return (
              <button
                key={a.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggleAvoid(a.id)}
                className={`min-h-10 rounded-full border px-3.5 py-1.5 text-[15px] transition ${on ? "border-clay/40 bg-[#fbe9e1] text-[#8f3b1d]" : "border-line bg-white text-mute hover:border-moss/50"}`}
              >
                {on ? "🚫 " : ""}
                {a.label}
              </button>
            );
          })}
        </div>
      </Field>
    </StepCard>
  );
}
