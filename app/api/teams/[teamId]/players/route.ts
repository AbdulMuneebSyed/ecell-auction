import { NextResponse } from "next/server";
import { getTeamPlayers } from "@/lib/api";

export async function GET(
  request: Request,
  { params }: { params: { teamId: string } }
) {
  try {
    const players = await getTeamPlayers(params.teamId);
    return NextResponse.json(players);
  } catch (error) {
    console.error("Error fetching team players:", error);
    return NextResponse.json(
      { error: "Failed to fetch team players" },
      { status: 500 }
    );
  }
}
