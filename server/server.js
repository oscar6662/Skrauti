import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import path, {dirname} from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { router as userRouter } from './controllers/user/users.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static(path.join(__dirname, '/../client/build')));
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(userRouter);

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
