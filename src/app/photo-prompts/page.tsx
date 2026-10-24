import { redirect } from "next/navigation";

/** 예전 주소. 만들기의 '제품 사진으로 만들기'로 보냅니다. */
export default function PhotoPromptsPage() {
  redirect("/#photo");
}
