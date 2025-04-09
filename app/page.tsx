import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import log from "@/public/images/ipl-logo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white">
      <div className="w-full max-w-xs">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-gray-900 flex justify-center gap-3 items-center">
            <span>
              <Image src={log} alt="logo" width={64} height={64} />
            </span>{" "}
            <span>Dashboard</span>
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Know your teams and players
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/players" className="block">
            <div className="flex justify-between items-center p-4 border-l-4 border-purple-500 bg-white hover:bg-gray-50 transition-colors rounded">
              <span className="font-medium text-gray-900">
                Player List
              </span>
              <ChevronRight className="h-4 w-4 text-gray-500" />
            </div>
          </Link>

          <Link href="/teams" className="block">
            <div className="flex justify-between items-center p-4 border-l-4 border-orange-500 bg-white hover:bg-gray-50 transition-colors rounded">
              <span className="font-medium text-gray-900">
                Teams and their players
              </span>
              <ChevronRight className="h-4 w-4 text-gray-500" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
