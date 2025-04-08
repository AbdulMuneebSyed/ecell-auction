import { NextResponse } from "next/server";
import { getPlayerById } from "@/lib/api";
export async function GET(
  request: Request,
  { params }: { params: { playerId: string } }
) {
  try {
    const player = await getPlayerById(params.playerId);

    if (!player) {
      return NextResponse.json({ error: "Player not found" }, { status: 404 });
    }

    return NextResponse.json(player);
  } catch (error) {
    console.error("Error fetching player:", error);
    return NextResponse.json(
      { error: "Failed to fetch player" },
      { status: 500 }
    );
  }
}
