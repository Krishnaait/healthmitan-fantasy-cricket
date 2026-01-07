import express, { Request, Response } from 'express';
import {
  getMatches,
  getMatchInfo,
  getMatchSquad,
  getMatchScore,
  getMatchesByStatus,
  convertToIST,
} from '../services/cricketApiService';

const router = express.Router();

// Get all matches categorized by status
router.get('/', async (req: Request, res: Response) => {
  try {
    const matches = await getMatches();
    
    // Categorize matches by status
    const live: any[] = [];
    const upcoming: any[] = [];
    const completed: any[] = [];
    
    matches.forEach((match) => {
      const formattedMatch = {
        ...match,
        dateTimeIST: match.dateTimeGMT ? convertToIST(match.dateTimeGMT) : match.date,
      };
      
      const status = match.status.toLowerCase();
      if (status.includes('live') || status.includes('inprogress')) {
        live.push(formattedMatch);
      } else if (status.includes('completed') || status.includes('finished') || status.includes('won')) {
        completed.push(formattedMatch);
      } else {
        upcoming.push(formattedMatch);
      }
    });
    
    res.json({
      success: true,
      data: {
        live,
        upcoming,
        completed,
      },
    });
  } catch (error) {
    console.error('Error in GET /matches:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch matches' });
  }
});

// Get matches by status (live, upcoming, completed)
router.get('/status/:status', async (req: Request, res: Response) => {
  try {
    const { status } = req.params;
    if (!['live', 'upcoming', 'completed'].includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid status' });
    }

    const matches = await getMatchesByStatus(status as 'live' | 'upcoming' | 'completed');
    res.json({
      success: true,
      data: matches.map((match) => ({
        ...match,
        dateTimeIST: match.dateTimeGMT ? convertToIST(match.dateTimeGMT) : match.date,
      })),
    });
  } catch (error) {
    console.error('Error in GET /matches/status/:status:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch matches by status' });
  }
});

// Get specific match info
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const match = await getMatchInfo(id);

    if (!match) {
      return res.status(404).json({ success: false, error: 'Match not found' });
    }

    res.json({
      success: true,
      data: {
        ...match,
        dateTimeIST: match.dateTimeGMT ? convertToIST(match.dateTimeGMT) : match.date,
      },
    });
  } catch (error) {
    console.error('Error in GET /matches/:id:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch match' });
  }
});

// Get match squad
router.get('/:id/squad', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const squad = await getMatchSquad(id);

    if (!squad || squad.length === 0) {
      return res.status(404).json({ success: false, error: 'Squad not found' });
    }

    res.json({ success: true, data: squad });
  } catch (error) {
    console.error('Error in GET /matches/:id/squad:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch squad' });
  }
});

// Get match score
router.get('/:id/score', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const score = await getMatchScore(id);

    if (!score) {
      return res.status(404).json({ success: false, error: 'Score not found' });
    }

    res.json({ success: true, data: score });
  } catch (error) {
    console.error('Error in GET /matches/:id/score:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch score' });
  }
});

export default router;
