import type { Metadata } from "next";
import PhotoLibrary from "@/components/PhotoLibrary";
import { SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "사진 한 장 프롬프트 100 | 양평 브랜드공방",
  description: "제품 사진 한 장으로 광고 이미지를 만드는 프롬프트 100개. 문장 구조는 원문 그대로 두고, 대괄호와 따옴표 문구만 바꿉니다.",
};

export default function PhotoPromptsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <SectionTitle
        eyebrow="사진 한 장 프롬프트"
        title="문장 구조는 그대로, 내 제품 칸만 바꿉니다"
        desc="프롬왓의 원문 100개입니다. 장면을 다시 쓰지 않았습니다. 사진을 첨부한 뒤 대괄호나 따옴표 안 문구만 채워 복사하세요. 1~4번은 실제 결과가 확인된 원문이고, 5~100번은 응용용이라 번호마다 결과를 확인한 것은 아닙니다."
      />
      <PhotoLibrary />
      <p className="mt-8 text-sm leading-relaxed text-mute">
        출처: 프롬왓, 2026-10-20, ChatGPT 이미지 2.5. 저작권은 원작자에게 있습니다. 예시의 브랜드명과 가격은 가상이며, 실제 상품에 쓸 때는 내 정보로 바꿉니다.
      </p>
    </section>
  );
}
