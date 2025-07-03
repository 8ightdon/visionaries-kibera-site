// newsletter.js
import express from 'express';
import supabase from '../db.js';

const router = express.Router();

// POST /newsletter
// Saves email to Supabase 'newsletter' table
router.post('/', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }
  const { error } = await supabase
    .from('newsletter')
    .insert([{ email }]);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json({ message: 'Signed up for newsletter.' });
});

export default router; 