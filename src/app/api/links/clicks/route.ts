import { NextResponse } from "next/server";
import { getAllClickCounts } from "@/lib/linkClicks";

// 모든 링크의 현재 클릭 수를 한번에 반환: { [linkId]: count }
export async function GET() {
  const counts = await getAllClickCounts();
  return NextResponse.json(counts);
}
