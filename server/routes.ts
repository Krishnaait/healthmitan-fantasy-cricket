import { Router, Request, Response } from "express";
import {
  getAllMatches,
  getLiveMatches,
  getUpcomingMatches,
  getCompletedMatches,
  getMatchDetails,
  getMatchSquad,
  getSeries,
} from "./cricketApi.js";

const router = Router();

/**
 * GET /api/matches - Get all matches categorized by status
 */
router.get("/api/matches", async (req: Request, res: Response) => {
  try {
    const [live, upcoming, completed] = await Promise.all([
      getLiveMatches(),
      getUpcomingMatches(),
      getCompletedMatches(),
    ]);

    res.json({
      success: true,
      data: {
        live,
        upcoming,
        completed,
      },
    });
  } catch (error) {
    console.error("Error fetching matches:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch matches",
    });
  }
});

/**
 * GET /api/matches/live - Get live matches only
 */
router.get("/api/matches/live", async (req: Request, res: Response) => {
  try {
    const matches = await getLiveMatches();
    res.json({
      success: true,
      data: matches,
    });
  } catch (error) {
    console.error("Error fetching live matches:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch live matches",
    });
  }
});

/**
 * GET /api/matches/upcoming - Get upcoming matches only
 */
router.get("/api/matches/upcoming", async (req: Request, res: Response) => {
  try {
    const matches = await getUpcomingMatches();
    res.json({
      success: true,
      data: matches,
    });
  } catch (error) {
    console.error("Error fetching upcoming matches:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch upcoming matches",
    });
  }
});

/**
 * GET /api/matches/completed - Get completed matches only
 */
router.get("/api/matches/completed", async (req: Request, res: Response) => {
  try {
    const matches = await getCompletedMatches();
    res.json({
      success: true,
      data: matches,
    });
  } catch (error) {
    console.error("Error fetching completed matches:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch completed matches",
    });
  }
});

/**
 * GET /api/matches/:id - Get specific match details
 */
router.get("/api/matches/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const match = await getMatchDetails(id);

    if (!match) {
      return res.status(404).json({
        success: false,
        error: "Match not found",
      });
    }

    res.json({
      success: true,
      data: match,
    });
  } catch (error) {
    console.error("Error fetching match details:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch match details",
    });
  }
});

/**
 * GET /api/matches/:id/squad - Get match squad
 */
router.get("/api/matches/:id/squad", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const squad = await getMatchSquad(id);

    if (!squad) {
      return res.status(404).json({
        success: false,
        error: "Squad not found",
      });
    }

    res.json({
      success: true,
      data: squad,
    });
  } catch (error) {
    console.error("Error fetching squad:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch squad",
    });
  }
});

/**
 * GET /api/series - Get all series
 */
router.get("/api/series", async (req: Request, res: Response) => {
  try {
    const series = await getSeries();
    res.json({
      success: true,
      data: series,
    });
  } catch (error) {
    console.error("Error fetching series:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch series",
    });
  }
});

export default router;
