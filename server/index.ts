import express from 'express';
import dotenv from 'dotenv';
import { leadController } from './controllers/lead.controller';

dotenv.config();

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/api/leads', leadController.getLeads);

app.post('/api/lead', leadController.createLead);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
