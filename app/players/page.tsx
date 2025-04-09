"use client";
import { useState, useEffect } from "react";
import { RefreshCw, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PlayerPagination() {
  interface Player {
    playerId: string;
    playerName: string;
    role: string;
    nationality: string;
    isSold: boolean;
    basePrice: number;
    boughtAt?: number;
  }

  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPlayers(currentPage);
  }, [currentPage]);

  interface FetchPlayersResponse {
    data: Player[];
    pagination: {
      totalPages: number;
    };
  }

  const fetchPlayers = async (page: number): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch("http://192.168.152.92:8080/api/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ page }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch players");
      }

      const data: FetchPlayersResponse = await response.json();
      console.log("Data fetched:", data);
      setPlayers(data.data || []);
      setTotalPages(data.pagination.totalPages || 1);
    } catch (err: any) {
      setError(err.message);
    } finally {
      console.log("Players fetched:", players);
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchPlayers(currentPage);
  };

  if (loading && !isRefreshing) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg font-medium text-blue-600">
          Loading players...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded border border-red-200">
        <p className="text-red-600">Error: {error}</p>
        <button
          onClick={() => fetchPlayers(currentPage)}
          className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/" // Update this to your desired back destination
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back 
        </Link>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Player List</h2>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 px-3 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          aria-label="Refresh player list"
        >
          <RefreshCw
            className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
          />
          <span>{isRefreshing ? "Refreshing..." : "Refresh"}</span>
        </button>
      </div>

      {isRefreshing && (
        <div className="w-full bg-blue-50 text-blue-600 text-center py-2 mb-4 rounded">
          Refreshing player data...
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {players.map((player) => (
          <div
            key={player.playerId + player.playerName}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
          >
            <div className="font-medium text-lg">{player.playerName}</div>
            <div className="text-sm text-gray-600">
              {player.role} • {player.nationality}
            </div>

            <div className="mt-2 flex justify-between items-center">
              <span
                className={`text-sm font-medium px-2 py-1 rounded ${
                  player.isSold
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {player.isSold ? "Sold" : "Unsold"}
              </span>

              <span className="font-medium">
                {player.isSold
                  ? `₹${player.boughtAt?.toLocaleString() || "N/A"}`
                  : `₹${player.basePrice}`}
              </span>
            </div>
          </div>
        ))}
      </div>

      {players.length === 0 && (
        <div className="text-center p-8 text-gray-500">No players found</div>
      )}

      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400"
              : "bg-blue-100 text-blue-700 hover:bg-blue-200"
          }`}
        >
          Previous
        </button>

        <span className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400"
              : "bg-blue-100 text-blue-700 hover:bg-blue-200"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
