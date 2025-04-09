"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Star,
  Search,
  ChevronLeft,
  ChevronRight,
  Users,
  ArrowLeft,
  Filter,
} from "lucide-react";
import Link from "next/link";
import type { Player } from "@/lib/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function PlayersPage() {
  const [pools, setPools] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [selectedPool, setSelectedPool] = useState<number | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [nationalityFilter, setNationalityFilter] = useState("all");

  const playersPerPage = 8;

  // Fetch players when a pool is selected
  useEffect(() => {
    if (selectedPool !== null) {
      fetchPlayersByPool(selectedPool);
    }
  }, [selectedPool]);

  // Filter players when search or filters change
  useEffect(() => {
    if (players.length > 0) {
      let result = players;

      if (searchTerm) {
        result = result.filter((player) =>
          player.playerName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (roleFilter !== "all") {
        result = result.filter((player) => player.role === roleFilter);
      }

      if (nationalityFilter !== "all") {
        result = result.filter(
          (player) => player.Nationality === nationalityFilter
        );
      }

      setFilteredPlayers(result);
      setCurrentPage(1);
    }
  }, [searchTerm, roleFilter, nationalityFilter, players]);

  const fetchPlayersByPool = async (pool: number) => {
    setLoading(true);
    try {
      const response = await fetch("http://192.168.64.92:8080/api/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pool }),
      });

      const data = await response.json();
      if (data.success) {
        setPlayers(data.data);
        setFilteredPlayers(data.data);
      } else {
        console.error("Error fetching players:", data.message);
      }
    } catch (error) {
      console.error("Error fetching players:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToPoolsClick = () => {
    setSelectedPool(null);
    setPlayers([]);
    setFilteredPlayers([]);
    setSearchTerm("");
    setRoleFilter("all");
    setNationalityFilter("all");
  };

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = filteredPlayers.slice(
    indexOfFirstPlayer,
    indexOfLastPlayer
  );
  const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);

  // Render pools view
  if (selectedPool === null) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <div className="px-4 py-6 max-w-lg mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-medium">Player Pools</h1>
            <Link href="/">
              <Button variant="outline" size="sm" className="h-9">
                Back
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {pools.map((pool) => (
              <Card
                key={pool}
                className="cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
                onClick={() => setSelectedPool(pool)}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <span className="text-lg font-medium">{pool}</span>
                  </div>
                  <p className="text-sm font-medium">Pool {pool}</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Users className="h-3 w-3 mr-1" />
                    <span>View Players</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Render players view for selected pool
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="px-4 py-4 max-w-lg mx-auto">
        {/* Header with back button */}
        <div className="flex items-center mb-4">
          <Button
            variant="ghost"
            size="sm"
            className="mr-2 p-0 h-9 w-9"
            onClick={handleBackToPoolsClick}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-medium">Pool {selectedPool}</h1>
            <p className="text-xs text-gray-500">
              {filteredPlayers.length} players
            </p>
          </div>
        </div>

        {/* Search and filter bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search players..."
              className="pl-9 h-10 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 flex-shrink-0"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[60vh]">
              <>
                <SheetHeader>
                  <SheetTitle>Filter Players</SheetTitle>
                </SheetHeader>
                <div className="py-4 space-y-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">Role</label>
                    <select
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
                      value={roleFilter}
                      onChange={(e) => setRoleFilter(e.target.value)}
                    >
                      <option value="all">All Roles</option>
                      <option value="Batsman">Batsman</option>
                      <option value="Bowler">Bowler</option>
                      <option value="All-rounder">All-rounder</option>
                      <option value="Wicketkeeper">Wicketkeeper</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium block mb-2">
                      Nationality
                    </label>
                    <select
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm"
                      value={nationalityFilter}
                      onChange={(e) => setNationalityFilter(e.target.value)}
                    >
                      <option value="all">All Nationalities</option>
                      <option value="Indian">Indian</option>
                      <option value="Foreign">Foreign</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button
                      className="w-full"
                      onClick={() => {
                        setRoleFilter("all");
                        setNationalityFilter("all");
                      }}
                      variant="outline"
                    >
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </>
            </SheetContent>
          </Sheet>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
            <p className="mt-4 text-sm text-gray-500">Loading players...</p>
          </div>
        ) : currentPlayers.length === 0 ? (
          <div className="text-center p-6 bg-gray-50 rounded-lg mt-4">
            <p className="text-gray-500 text-sm">
              No players found matching your filters
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-6">
              {currentPlayers.map((player) => (
                <div
                  key={player.playerId}
                  className="border border-gray-200 rounded-lg p-3 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center flex-wrap gap-1 mb-1">
                        <h3 className="font-medium text-sm mr-1">
                          {player.playerName}
                        </h3>
                        <span
                          className={`text-xs px-1.5 py-0.5 rounded-full ${
                            player.Nationality === "Indian"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-orange-50 text-orange-600"
                          }`}
                        >
                          {player.Nationality}
                        </span>
                        {player.isSold && (
                          <span className="text-xs px-1.5 py-0.5 rounded-full bg-green-50 text-green-600">
                            Sold
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="mr-2">{player.rating}</span>
                        <span>{player.role}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      {player.isSold ? (
                        <div>
                          <div className="font-medium text-sm">
                            ₹{player.boughtAt}Cr
                          </div>
                          {/* <Link href={`/teams/${player.soldto}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 text-xs px-2 mt-1"
                            >
                              View Team
                            </Button>
                          </Link> */}
                        </div>
                      ) : (
                        <div>
                          <div className="text-xs text-gray-600">
                            Base Price
                          </div>
                          <div className="font-medium text-sm">
                            ₹{player.basePrice}Cr
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPlayers.length > playersPerPage && (
              <div className="flex justify-between items-center text-xs py-2">
                <div className="text-gray-600">
                  {indexOfFirstPlayer + 1}-
                  {Math.min(indexOfLastPlayer, filteredPlayers.length)} of{" "}
                  {filteredPlayers.length}
                </div>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                  >
                    <ChevronLeft className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center">
                    {currentPage}/{totalPages || 1}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-7 w-7"
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                  >
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
