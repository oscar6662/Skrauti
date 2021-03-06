import express from 'express';
import dotenv from 'dotenv';
import { query } from '../db/db.js';
import { requireAuthentication } from './auth.js';
import { validVoter } from './vote.js';

dotenv.config();

export const router = express.Router();

router.get('/api/candidates', requireAuthentication, validVoter, async (req, res) => {
  const q = 'SELECT * FROM candidates';
  try {
    const data = await query(q);
    res.json(data.rows);
  } catch (e) {
    res.json(e);
  }
});
