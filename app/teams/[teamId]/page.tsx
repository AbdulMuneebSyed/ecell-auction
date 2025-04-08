import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import { getTeamById, getTeamPlayers } from "@/lib/api";

export default async function TeamDetailsPage({
  params,
}: {
  params: { teamId: string };
}) {
  const team = await getTeamById(params.teamId);
  const players = await getTeamPlayers(params.teamId);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        <Link
          href="/teams"
          className="inline-flex items-center text-gray-600 mb-8 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Teams
        </Link>

        <div className="flex items-center mb-12">
          <Image
            src={team.teamImage || "/placeholder.svg"}
            alt={team.teamName}
            width={80}
            height={80}
            className="mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold">{team.teamName}</h1>
            <div className="flex mt-2 text-sm text-gray-600">
              <div className="mr-6">
                <span>Players: {team.numberofplayers}</span>
              </div>
              <div>
                <span>Foreign Players: {team.numberForeign}</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-medium mb-6">Team Players</h2>

        {players.length === 0 ? (
          <div className="text-center p-6 bg-gray-50 rounded-md">
            <p className="text-gray-500">No players bought yet</p>
          </div>
        ) : (
          <div className="divide-y">
            {players.map((player) => (
              <div
                key={player.playerId}
                className="py-4 flex justify-between items-center"
              >
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium">{player.playerName}</h3>
                    <span
                      className={`ml-3 text-xs px-2 py-1 rounded-full ${
                        player.Nationality === "Indian"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-orange-50 text-orange-700"
                      }`}
                    >
                      {player.Nationality}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    {player.role} · Pool: {player.pool}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                    <span>{player.rating}</span>
                  </div>
                  <div className="mt-1 text-sm font-medium">
                    ₹{player.boughtAt}Cr
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
