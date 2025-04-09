import type { Team, Player } from "./types";

// Update the teams array to remove teamRating and teamBalance
const teams: Team[] = [
  {
    teamId: "csk",
    teamName: "Chennai Super Kings",
    teamImage: "/images/csk.png",
    numberofplayers: 25,
    player_bought: ["p1", "p2", "p3"],
    numberForeign: 8,
    colorCode: "#FFCC00",
  },
  {
    teamId: "dc",
    teamName: "Delhi Capitals",
    teamImage: "/images/dc.png",
    numberofplayers: 23,
    player_bought: ["p4", "p5"],
    numberForeign: 7,
    colorCode: "#0078BC",
  },
  {
    teamId: "gt",
    teamName: "Gujarat Titans",
    teamImage: "/images/gt.png",
    numberofplayers: 24,
    player_bought: ["p6", "p7", "p8"],
    numberForeign: 6,
    colorCode: "#1C1C1C",
  },
  {
    teamId: "kkr",
    teamName: "Kolkata Knight Riders",
    teamImage: "/images/kkr.png",
    numberofplayers: 25,
    player_bought: ["p9", "p10"],
    numberForeign: 8,
    colorCode: "#3A225D",
  },
  {
    teamId: "mi",
    teamName: "Mumbai Indians",
    teamImage: "/images/mi.png",
    numberofplayers: 26,
    player_bought: ["p11", "p12", "p13"],
    numberForeign: 7,
    colorCode: "#004BA0",
  },
  {
    teamId: "pbks",
    teamName: "Punjab Kings",
    teamImage: "/images/pbks.png",
    numberofplayers: 24,
    player_bought: ["p14", "p15"],
    numberForeign: 6,
    colorCode: "#ED1B24",
  },
  {
    teamId: "rr",
    teamName: "Rajasthan Royals",
    teamImage: "/images/rr.png",
    numberofplayers: 23,
    player_bought: ["p16", "p17"],
    numberForeign: 7,
    colorCode: "#FF69B4",
  },
  {
    teamId: "rcb",
    teamName: "Royal Challengers Bangalore",
    teamImage: "/images/rcb.png",
    numberofplayers: 25,
    player_bought: ["p18", "p19", "p20"],
    numberForeign: 8,
    colorCode: "#EC1C24",
  },
  {
    teamId: "srh",
    teamName: "Sunrisers Hyderabad",
    teamImage: "/images/srh.png",
    numberofplayers: 24,
    player_bought: ["p21", "p22"],
    numberForeign: 7,
    colorCode: "#FF822A",
  },
  {
    teamId: "lsg",
    teamName: "Lucknow Super Giants",
    teamImage: "/images/lsg.png",
    numberofplayers: 23,
    player_bought: ["p23", "p24"],
    numberForeign: 6,
    colorCode: "#A0E0FF",
  },
];

// Update the players array to add basePrice

// API functions
export async function getTeams(): Promise<Team[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return teams;
}

