import Image from "next/image";
import Link from "next/link";
import { getTeams } from "@/lib/api";

export default async function TeamsPage() {
  const teams = await getTeams();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto pt-12 px-6">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 border-black/50 border-[1px] p-1 px-2 rounded-xl hover:text-gray-900 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>
        <div className="flex items-center justify-center mb-16">
          <Image
            src="/images/ipl-logo.png"
            alt="IPL Logo"
            width={80}
            height={80}
            className="mr-4"
          />
          <h1 className="text-3xl font-bold text-gray-900">Teams</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teams.map((team) => (
            <Link
              href={`/teams/${team.teamId}`}
              key={team.teamId}
              className="block"
            >
              <div className="flex flex-col items-center group">
                <div
                  className="w-24 h-24 rounded-full mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: team.colorCode }}
                >
                  <Image
                    src={team.teamImage || "/placeholder.svg"}
                    alt={team.teamName}
                    width={64}
                    height={64}
                    className="object-cover rounded-full w-full h-full"
                  />
                </div>
                <h2 className="text-center font-medium text-gray-800">
                  {team.teamName}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
