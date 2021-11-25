import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import path, {dirname} from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import {
  router as authRouter,
  isAuthenticated,
  requireAuthentication,
} from './controllers/user/auth.js';
import { router as candidateRouter } from './controllers/user/candidates.js';
import { router as voteRouter } from './controllers/user/vote.js';
import { userData, userIsAdmin } from './controllers/user/users.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static(path.join(__dirname, '/../client/build')));
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(authRouter);
app.use(candidateRouter);
app.use(voteRouter);


app.get('/api/authenticated', async (req, res) => {
  return res.json(await isAuthenticated(req));
});

app.get('/api/user/isadmin', async (req, res) => {
  return res.json(await userIsAdmin(req));
});

app.get('/api/user/name', requireAuthentication, async (req, res) => {
  const data = await userData(req.cookies.token);
  return res.json(data.data.personal.name_full);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../client/build/index.html'));
});

function notFoundHandler(req, res) {
  res.status(500).json({ error: 'Something went wrong' });
}

function errorHandler(err, req, res) {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
}

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});