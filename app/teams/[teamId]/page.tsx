import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";

// New data fetching function
interface Team {
  teamName: string;
  teamImage?: string;
  colorCode: string;
  numberofplayers?: number;
  numberForeign?: number;
}

interface Player {
  _id: string;
  playerName: string;
  Nationality: string;
  rating?: number;
  role?: string;
  boughtAt?: number;
  pool?: string;
}

interface TeamWithPlayersResponse {
  success: boolean;
  team?: Team;
  players?: Player[];
}

async function getTeamWithPlayers(teamId: string): Promise<TeamWithPlayersResponse> {
  try {
    const response = await fetch(
      `http://localhost:8080/api/teamsplayers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ teamID: teamId }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch team data");
    }

    const data: TeamWithPlayersResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching team with players:", error);
    return { success: false };
  }
}

export default async function TeamDetailsPage({
  params,
}: {
  params: { teamId: string };
}) {
  const data = await getTeamWithPlayers(params.teamId);
  console.log( data);
  if (!data.success || !data.team) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Team not found</h1>
          <Link
            href="/teams"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Teams
          </Link>i
        </div>
      </div>
    );
  }

  const { team, players } = data;
  const playersList = players || [];
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/teams"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 mb-6 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Link>

        <div className="flex items-center gap-4 mb-8">
          {/* <Image
            src={ "/placeholder.svg"}
            alt={team.teamName}
            width={80}
            height={80}
            className="rounded-full"
            style={{ backgroundColor: team.colorCode }}
          /> */}
          <div>
            <h1 className="text-2xl font-bold">{team.teamName}</h1>
            <div className="flex gap-4 mt-2 text-sm">
              <div>
                <span className="text-gray-500 dark:text-gray-400">
                  Players:
                </span>{" "}
                {team.numberofplayers || 0}
              </div>
              <div>
                <span className="text-gray-500 dark:text-gray-400">
                  Foreign:
                </span>{" "}
                {team.numberForeign || 0}
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-medium mb-4">Team Players</h2>

        {playersList.length === 0 ? (
          <div className="text-center p-8 border border-gray-200 dark:border-gray-700 rounded-md">
            <p className="text-gray-500 dark:text-gray-400">
              No players bought yet
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {playersList.map((player) => (
              <Card
                key={player._id}
                className="p-4 border-t-4 hover:shadow-md transition-shadow"
                style={{ borderTopColor: team.colorCode }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{player.playerName}</h3>
                  <Badge
                    className={
                      player.Nationality === "Indian"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                        : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                    }
                  >
                    {player.Nationality}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                  <span>{player.rating || "N/A"}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Role</p>
                    <p>{player.role || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Price</p>
                    <p>₹{player.boughtAt || 0}Cr</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Pool</p>
                    <p>{player.pool || "N/A"}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
