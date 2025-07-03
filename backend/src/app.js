// app.js
// Main Express server setup

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import contactRoutes from './routes/contact.js';
import newsletterRoutes from './routes/newsletter.js';
import impactRoutes from './routes/impact.js';
import adminRoutes from './routes/admin.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/contact', contactRoutes);
app.use('/newsletter', newsletterRoutes);
app.use('/impact', impactRoutes);
app.use('/admin', adminRoutes); // optional

// Root route
app.get('/', (req, res) => {
  res.send('Visionaries Kibera API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 