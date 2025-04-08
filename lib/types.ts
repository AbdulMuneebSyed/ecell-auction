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
  rating: number;
  boughtAt: number;
  basePrice: number; // Added base price
  isSold: boolean;
  pool: string;
  soldto: string;
  role: string;
  Nationality: string;
}
