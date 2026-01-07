import express from 'express';
import matchesRouter from './routes/matches.js';

const router = express.Router();

// API routes
router.use('/api/matches', matchesRouter);

export default router;
