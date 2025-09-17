import express from 'express';
import { leadController } from './features/leads/controllers/lead.controller';

const router = express.Router();

router.get('/api/leads', leadController.getLeads);

router.post('/api/lead', leadController.createLead);

export default router;
