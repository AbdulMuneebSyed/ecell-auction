import { NextResponse } from "next/server";
import { getTeamById } from "@/lib/api";

export async function GET(
  request: Request,
  { params }: { params: { teamId: string } }
) {
  try {
    const team = await getTeamById(params.teamId);

    if (!team) {
      return NextResponse.json({ error: "Team not found" }, { status: 404 });
    }

    return NextResponse.json(team);
  } catch (error) {
    console.error("Error fetching team:", error);
    return NextResponse.json(
      { error: "Failed to fetch team" },
      { status: 500 }
    );
  }
}
