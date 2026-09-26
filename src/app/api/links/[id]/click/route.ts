import { NextResponse } from "next/server";
import { incrementClickCount } from "@/lib/linkClicks";

// 특정 링크의 클릭 수를 1 증가시키고 갱신된 값을 반환
export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const clicks = await incrementClickCount(id);
  return NextResponse.json({ clicks });
}
