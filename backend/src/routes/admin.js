// admin.js
import express from 'express';
import supabase from '../db.js';

const router = express.Router();

// GET /admin?password=...
// Returns all contact and newsletter entries if password matches
router.get('/', async (req, res) => {
  const { password } = req.query;
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  // Fetch contacts
  const { data: contacts, error: contactError } = await supabase.from('contacts').select('*');
  // Fetch newsletter
  const { data: newsletter, error: newsletterError } = await supabase.from('newsletter').select('*');
  if (contactError || newsletterError) {
    return res.status(500).json({ error: 'Failed to fetch data.' });
  }
  res.json({ contacts, newsletter });
});

export default router; 