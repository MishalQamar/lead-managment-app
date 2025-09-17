import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/api/leads', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.post('/api/leads', async (req: Request, res: Response) => {
  const { name, email, status } = req.body;

  res.json({ message: 'Lead created successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
