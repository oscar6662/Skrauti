import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { jwtOptions } from './login.js';
import {
  comparePasswords,
  findByEmail,
} from './user.js';
import { isNotEmptyString } from '../utils/utils.js';

dotenv.config();

export const router = express.Router();

const defaultTokenLifeTime = 60 * 60; // 1 klst

const {
  JWT_TOKEN_LIFETIME: tokenLifetime = defaultTokenLifeTime,
} = process.env;

router.post('/admin', async (req, res) => {
  const { email, password } = req.body;

  if (!isNotEmptyString(email) || !isNotEmptyString(password)) {
    return res.status(400).json({ error: 'Email or password cannot be empty.' });
  }

  const user = await findByEmail(email);
  if (!user) {
    return res.status(400).json({ error: 'Email not found' });
  }

  const rightPassword = await comparePasswords(password, user.password);

  if (rightPassword) {
    const payload = { id: user.id };
    const tokenOptions = { expiresIn: parseInt(tokenLifetime, 10) };
    const token = jwt.sign(payload, jwtOptions.secretOrKey, tokenOptions);
    return res.json({ token });
  }

  return res.status(401).json({ error: 'Invalid password' });
});
