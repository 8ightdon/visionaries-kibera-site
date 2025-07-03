// contact.js
import express from 'express';
import supabase from '../db.js';

const router = express.Router();

// POST /contact
// Saves contact form data to Supabase 'contacts' table
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  const { error } = await supabase
    .from('contacts')
    .insert([{ name, email, message }]);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json({ message: 'Contact form submitted successfully.' });
});

export default router; 