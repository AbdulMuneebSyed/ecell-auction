"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Star, Search, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Player } from "@/lib/types";

export default function PlayersPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [nationalityFilter, setNationalityFilter] = useState("all");

  const playersPerPage = 10;

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("/api/players");
        const data = await response.json();
        setPlayers(data);
        setFilteredPlayers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching players:", error);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  useEffect(() => {
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
  }, [searchTerm, roleFilter, nationalityFilter, players]);

  const indexOfLastPlayer = currentPage * playersPerPage;
  const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
  const currentPlayers = filteredPlayers.slice(
    indexOfFirstPlayer,
    indexOfLastPlayer
  );
  const totalPages = Math.ceil(filteredPlayers.length / playersPerPage);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-800"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-medium">Players</h1>
          <Link href="/">
            <Button variant="outline" size="sm">
              Back
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search players..."
              className="pl-10 border-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="border-gray-200 w-full md:w-48">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="Batsman">Batsman</SelectItem>
              <SelectItem value="Bowler">Bowler</SelectItem>
              <SelectItem value="All-rounder">All-rounder</SelectItem>
              <SelectItem value="Wicketkeeper">Wicketkeeper</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={nationalityFilter}
            onValueChange={setNationalityFilter}
          >
            <SelectTrigger className="border-gray-200 w-full md:w-48">
              <SelectValue placeholder="Nationality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Nationalities</SelectItem>
              <SelectItem value="Indian">Indian</SelectItem>
              <SelectItem value="Foreign">Foreign</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {currentPlayers.length === 0 ? (
          <div className="text-center p-8 bg-gray-50 rounded-md">
            <p className="text-gray-500">
              No players found matching your filters
            </p>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-100 mb-8 ">
              {currentPlayers.map((player) => (
                <div key={player.playerId} className="py-4 shadow-xl shadow-gray-400 mb-4 bg-white rounded-md p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="mb-3 sm:mb-0">
                      <div className="flex items-center mb-1">
                        <h3 className="font-medium mr-2">
                          {player.playerName}
                        </h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            player.Nationality === "Indian"
                              ? "bg-blue-50 text-blue-600"
                              : "bg-orange-50 text-orange-600"
                          }`}
                        >
                          {player.Nationality}
                        </span>
                        {player.isSold && (
                          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-600">
                            Sold
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="mr-3">{player.rating}</span>
                        <span>{player.role}</span>
                        <span className="mx-2">•</span>
                        <span>Pool: {player.pool}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      {player.isSold ? (
                        <div>
                          <div className="font-medium">
                            ₹{player.boughtAt}Cr
                          </div>
                          <Link href={`/teams/${player.soldto}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="mt-1 h-7 text-xs"
                            >
                              View Team
                            </Button>
                          </Link>
                        </div>
                      ) : (
                        <div>
                          <div className="text-sm text-gray-600">
                            Base Price
                          </div>
                          <div className="font-medium">
                            ₹{player.basePrice}Cr
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-sm">
              <div className="text-gray-600">
                {indexOfFirstPlayer + 1}-
                {Math.min(indexOfLastPlayer, filteredPlayers.length)} of{" "}
                {filteredPlayers.length}
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span>
                  {currentPage} / {totalPages || 1}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  disabled={currentPage === totalPages || totalPages === 0}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
