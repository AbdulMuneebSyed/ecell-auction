import type { Team, Player } from "./types";

// Update the teams array to remove teamRating and teamBalance
const teams: Team[] = [
  {
    teamId: "CSK",
    teamName: "Chennai Super Kings",
    teamImage: "/images/csk.png",
    numberofplayers: 25,
    player_bought: ["p1", "p2", "p3"],
    numberForeign: 8,
    colorCode: "#FFCC00",
  },
  {
    teamId: "DC",
    teamName: "Delhi Capitals",
    teamImage: "/images/dc.png",
    numberofplayers: 23,
    player_bought: ["p4", "p5"],
    numberForeign: 7,
    colorCode: "#0078BC",
  },
  {
    teamId: "GT",
    teamName: "Gujarat Titans",
    teamImage: "/images/gt.png",
    numberofplayers: 24,
    player_bought: ["p6", "p7", "p8"],
    numberForeign: 6,
    colorCode: "#1C1C1C",
  },
  {
    teamId: "KKR",
    teamName: "Kolkata Knight Riders",
    teamImage: "/images/kkr.png",
    numberofplayers: 25,
    player_bought: ["p9", "p10"],
    numberForeign: 8,
    colorCode: "#3A225D",
  },
  {
    teamId: "MI",
    teamName: "Mumbai Indians",
    teamImage: "/images/mi.png",
    numberofplayers: 26,
    player_bought: ["p11", "p12", "p13"],
    numberForeign: 7,
    colorCode: "#004BA0",
  },
  {
    teamId: "KXIP",
    teamName: "Punjab Kings",
    teamImage: "/images/kixp.png",
    numberofplayers: 24,
    player_bought: ["p14", "p15"],
    numberForeign: 6,
    colorCode: "#ED1B24",
  },
  {
    teamId: "RR",
    teamName: "Rajasthan Royals",
    teamImage: "/images/rr.png",
    numberofplayers: 23,
    player_bought: ["p16", "p17"],
    numberForeign: 7,
    colorCode: "#FF69B4",
  },
  {
    teamId: "RCB",
    teamName: "Royal Challengers Bangalore",
    teamImage: "/images/rcb.png",
    numberofplayers: 25,
    player_bought: ["p18", "p19", "p20"],
    numberForeign: 8,
    colorCode: "#EC1C24",
  },
  {
    teamId: "SRH",
    teamName: "Sunrisers Hyderabad",
    teamImage: "/images/srh.png",
    numberofplayers: 24,
    player_bought: ["p21", "p22"],
    numberForeign: 7,
    colorCode: "#FF822A",
  },
  {
    teamId: "LSG",
    teamName: "Lucknow Super Giants",
    teamImage: "/images/lsg.png",
    numberofplayers: 23,
    player_bought: ["p23", "p24"],
    numberForeign: 6,
    colorCode: "#A0E0FF",
  },
  {
    teamId: "GT2",
    teamName: "Gujarat Lions",
    teamImage: "/images/gl.png", // Placeholder path
    numberofplayers: 22,
    player_bought: [],
    numberForeign: 7,
    colorCode: "#FF6F00",
  },
  {
    teamId: "KTK",
    teamName: "Kerala Tuskers Kerala",
    teamImage: "/images/kt.png", // Placeholder path
    numberofplayers: 21,
    player_bought: [],
    numberForeign: 6,
    colorCode: "#A52A2A",
  },
  {
    teamId: "PWI",
    teamName: "Pune Warriors India",
    teamImage: "/images/pwi.png", // Placeholder path
    numberofplayers: 23,
    player_bought: [],
    numberForeign: 6,
    colorCode: "#0047AB",
  },
  {
    teamId: "RPSG",
    teamName: "Rising Pune Supergiants",
    teamImage: "/images/rps.png", // Placeholder path
    numberofplayers: 24,
    player_bought: [],
    numberForeign: 7,
    colorCode: "#800080",
  },
  {
    teamId: "DC_HYD",
    teamName: "Deccan Chargers",
    teamImage: "/images/dc (2).png", // Placeholder path
    numberofplayers: 22,
    player_bought: [],
    numberForeign: 7,
    colorCode: "#1C3F94",
  },
  {
    teamId: "DD",
    teamName: "Delhi Daredevils",
    teamImage: "/images/dd.png", // Placeholder path
    numberofplayers: 23,
    player_bought: [],
    numberForeign: 6,
    colorCode: "#DA251D",
  },
];



// Update the players array to add basePrice
const players: Player[] = [
  {
    playerId: "p1",
    playerName: "MS Dhoni",
    rating: 4.8,
    boughtAt: 12.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "csk",
    role: "Wicketkeeper",
    Nationality: "Indian",
  },
  {
    playerId: "p2",
    playerName: "Ravindra Jadeja",
    rating: 4.7,
    boughtAt: 16.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "csk",
    role: "All-rounder",
    Nationality: "Indian",
  },
  {
    playerId: "p3",
    playerName: "Moeen Ali",
    rating: 4.5,
    boughtAt: 8.0,
    basePrice: 1.5,
    isSold: true,
    pool: "A",
    soldto: "csk",
    role: "All-rounder",
    Nationality: "Foreign",
  },
  {
    playerId: "p4",
    playerName: "Rishabh Pant",
    rating: 4.6,
    boughtAt: 15.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "dc",
    role: "Wicketkeeper",
    Nationality: "Indian",
  },
  {
    playerId: "p5",
    playerName: "Anrich Nortje",
    rating: 4.4,
    boughtAt: 6.5,
    basePrice: 1.5,
    isSold: true,
    pool: "B",
    soldto: "dc",
    role: "Bowler",
    Nationality: "Foreign",
  },
  {
    playerId: "p6",
    playerName: "Hardik Pandya",
    rating: 4.7,
    boughtAt: 15.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "gt",
    role: "All-rounder",
    Nationality: "Indian",
  },
  {
    playerId: "p7",
    playerName: "Rashid Khan",
    rating: 4.8,
    boughtAt: 15.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "gt",
    role: "Bowler",
    Nationality: "Foreign",
  },
  {
    playerId: "p8",
    playerName: "Shubman Gill",
    rating: 4.5,
    boughtAt: 8.0,
    basePrice: 1.5,
    isSold: true,
    pool: "A",
    soldto: "gt",
    role: "Batsman",
    Nationality: "Indian",
  },
  {
    playerId: "p9",
    playerName: "Andre Russell",
    rating: 4.6,
    boughtAt: 12.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "kkr",
    role: "All-rounder",
    Nationality: "Foreign",
  },
  {
    playerId: "p10",
    playerName: "Sunil Narine",
    rating: 4.5,
    boughtAt: 6.0,
    basePrice: 1.5,
    isSold: true,
    pool: "B",
    soldto: "kkr",
    role: "All-rounder",
    Nationality: "Foreign",
  },
  {
    playerId: "p11",
    playerName: "Rohit Sharma",
    rating: 4.8,
    boughtAt: 16.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "mi",
    role: "Batsman",
    Nationality: "Indian",
  },
  {
    playerId: "p12",
    playerName: "Jasprit Bumrah",
    rating: 4.9,
    boughtAt: 15.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "mi",
    role: "Bowler",
    Nationality: "Indian",
  },
  {
    playerId: "p13",
    playerName: "Kieron Pollard",
    rating: 4.5,
    boughtAt: 6.0,
    basePrice: 1.5,
    isSold: true,
    pool: "B",
    soldto: "mi",
    role: "All-rounder",
    Nationality: "Foreign",
  },
  {
    playerId: "p14",
    playerName: "KL Rahul",
    rating: 4.6,
    boughtAt: 17.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "pbks",
    role: "Batsman",
    Nationality: "Indian",
  },
  {
    playerId: "p15",
    playerName: "Kagiso Rabada",
    rating: 4.5,
    boughtAt: 9.25,
    basePrice: 1.5,
    isSold: true,
    pool: "A",
    soldto: "pbks",
    role: "Bowler",
    Nationality: "Foreign",
  },
  {
    playerId: "p16",
    playerName: "Sanju Samson",
    rating: 4.5,
    boughtAt: 14.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "rr",
    role: "Wicketkeeper",
    Nationality: "Indian",
  },
  {
    playerId: "p17",
    playerName: "Jos Buttler",
    rating: 4.7,
    boughtAt: 10.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "rr",
    role: "Wicketkeeper",
    Nationality: "Foreign",
  },
  {
    playerId: "p18",
    playerName: "Virat Kohli",
    rating: 4.9,
    boughtAt: 17.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "rcb",
    role: "Batsman",
    Nationality: "Indian",
  },
  {
    playerId: "p19",
    playerName: "Glenn Maxwell",
    rating: 4.6,
    boughtAt: 14.25,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "rcb",
    role: "All-rounder",
    Nationality: "Foreign",
  },
  {
    playerId: "p20",
    playerName: "Mohammed Siraj",
    rating: 4.4,
    boughtAt: 7.0,
    basePrice: 1.0,
    isSold: true,
    pool: "B",
    soldto: "rcb",
    role: "Bowler",
    Nationality: "Indian",
  },
  {
    playerId: "p21",
    playerName: "Kane Williamson",
    rating: 4.5,
    boughtAt: 14.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "srh",
    role: "Batsman",
    Nationality: "Foreign",
  },
  {
    playerId: "p22",
    playerName: "Bhuvneshwar Kumar",
    rating: 4.3,
    boughtAt: 8.5,
    basePrice: 1.5,
    isSold: true,
    pool: "B",
    soldto: "srh",
    role: "Bowler",
    Nationality: "Indian",
  },
  {
    playerId: "p23",
    playerName: "KL Rahul",
    rating: 4.7,
    boughtAt: 17.0,
    basePrice: 2.0,
    isSold: true,
    pool: "A",
    soldto: "lsg",
    role: "Batsman",
    Nationality: "Indian",
  },
  {
    playerId: "p24",
    playerName: "Quinton de Kock",
    rating: 4.5,
    boughtAt: 6.75,
    basePrice: 1.5,
    isSold: true,
    pool: "B",
    soldto: "lsg",
    role: "Wicketkeeper",
    Nationality: "Foreign",
  },
  {
    playerId: "p25",
    playerName: "Suryakumar Yadav",
    rating: 4.6,
    boughtAt: 0,
    basePrice: 2.0,
    isSold: false,
    pool: "A",
    soldto: "",
    role: "Batsman",
    Nationality: "Indian",
  },
  {
    playerId: "p26",
    playerName: "Jofra Archer",
    rating: 4.7,
    boughtAt: 0,
    basePrice: 2.0,
    isSold: false,
    pool: "A",
    soldto: "",
    role: "Bowler",
    Nationality: "Foreign",
  },
  {
    playerId: "p27",
    playerName: "Shreyas Iyer",
    rating: 4.4,
    boughtAt: 0,
    basePrice: 1.5,
    isSold: false,
    pool: "B",
    soldto: "",
    role: "Batsman",
    Nationality: "Indian",
  },
  {
    playerId: "p28",
    playerName: "Trent Boult",
    rating: 4.5,
    boughtAt: 0,
    basePrice: 1.5,
    isSold: false,
    pool: "B",
    soldto: "",
    role: "Bowler",
    Nationality: "Foreign",
  },
];

// API functions
export async function getTeams(): Promise<Team[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return teams;
}

export async function getTeamById(teamId: string): Promise<Team | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return teams.find((team) => team.teamId === teamId);
}

export async function getTeamPlayers(teamId: string): Promise<Player[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return players.filter((player) => player.soldto === teamId);
}

export async function getPlayers(): Promise<Player[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return players;
}

export async function getPlayerById(
  playerId: string
): Promise<Player | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return players.find((player) => player.playerId === playerId);
}
