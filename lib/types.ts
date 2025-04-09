export interface Team {
  teamId: string;
  teamName: string;
  teamImage: string;
  numberofplayers: number;
  player_bought: string[];
  numberForeign: number;
  colorCode: string;
}
export interface Player {
  playerId: string;
  playerName: string;
  role: string;
  Nationality: string;
  basePrice: number;
  rating: number;
  pool: number;
  isSold: boolean;
  boughtAt?: number;
}
