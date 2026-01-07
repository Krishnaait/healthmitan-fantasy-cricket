import { Router, Request, Response } from "express";
import {
  getLiveMatchesFiltered,
  getUpcomingMatchesFiltered,
  getCompletedMatchesFiltered,
  getMatchDetails,
  getMatchSquad,
  getSeries,
  convertToIST,
} from "./cricketApi.js";
import { db } from "./db/index.js";
import { userTeams, teamPlayers, users } from "./db/schema.js";
import { eq } from "drizzle-orm";

const router = Router();

// --- Cricket API Routes ---

router.get("/api/matches", async (req: Request, res: Response) => {
  try {
    const [live, upcoming, completed] = await Promise.all([
      getLiveMatchesFiltered(),
      getUpcomingMatchesFiltered(),
      getCompletedMatchesFiltered(),
    ]);

    const formatMatches = (matches: any[]) =>
      matches.map((match) => ({
        ...match,
        dateTimeIST: match.dateTimeGMT ? convertToIST(match.dateTimeGMT) : match.date,
      }));

    res.json({
      success: true,
      data: {
        live: formatMatches(live),
        upcoming: formatMatches(upcoming),
        completed: formatMatches(completed),
      },
    });
  } catch (error) {
    console.error("Error fetching matches:", error);
    res.status(500).json({ success: false, error: "Failed to fetch matches" });
  }
});

router.get("/api/matches/:id", async (req: Request, res: Response) => {
  try {
    const match = await getMatchDetails(req.params.id);
    if (!match) return res.status(404).json({ success: false, error: "Match not found" });
    res.json({ success: true, data: { ...match, dateTimeIST: match.dateTimeGMT ? convertToIST(match.dateTimeGMT) : match.date } });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch match details" });
  }
});

router.get("/api/matches/:id/squad", async (req: Request, res: Response) => {
  try {
    const squad = await getMatchSquad(req.params.id);
    if (!squad) return res.status(404).json({ success: false, error: "Squad not found" });
    res.json({ success: true, data: squad });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch squad" });
  }
});

// --- Database Routes ---

router.post("/api/teams", async (req: Request, res: Response) => {
  try {
    const { userId, matchId, teamName, captainId, viceCaptainId, players } = req.body;

    // 1. Create the user team
    const [teamResult] = await db.insert(userTeams).values({
      userId,
      matchId,
      teamName,
      captainId,
      viceCaptainId,
    });

    const teamId = (teamResult as any).insertId;

    // 2. Add players to the team
    const playerValues = players.map((p: any) => ({
      userTeamId: teamId,
      playerId: p.id,
      playerName: p.name,
      playerRole: p.role,
      playerTeam: p.team,
    }));

    await db.insert(teamPlayers).values(playerValues);

    res.json({ success: true, data: { teamId } });
  } catch (error) {
    console.error("Error saving team:", error);
    res.status(500).json({ success: false, error: "Failed to save team" });
  }
});

router.get("/api/users/:userId/teams", async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const teams = await db.query.userTeams.findMany({
      where: eq(userTeams.userId, userId),
      with: {
        // You'd need to define relations in schema.ts for this to work perfectly with findMany
      }
    });
    res.json({ success: true, data: teams });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch user teams" });
  }
});

export default router;
