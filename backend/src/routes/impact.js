// impact.js
import express from 'express';
const router = express.Router();

// GET /impact
// Returns impact stats (can be dynamic or hardcoded)
router.get('/', async (req, res) => {
  // You can fetch from Supabase if you want dynamic stats
  const stats = {
    youthTrained: 200,
    cleanUps: 35,
    ecoEnterprises: 12,
    researchProjects: 8
  };
  res.json(stats);
});

export default router; 