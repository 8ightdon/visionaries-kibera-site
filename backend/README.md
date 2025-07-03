# Visionaries Kibera Backend

## Setup

1. Copy `.env.example` to `.env` and fill in your Supabase credentials and admin password.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

## Endpoints
- `POST /contact` – Save contact form entries
- `POST /newsletter` – Save newsletter emails
- `GET /impact` – Get impact stats
- `/admin` – (optional) Admin dashboard

## Environment Variables
- `SUPABASE_URL` – Your Supabase project URL
- `SUPABASE_KEY` – Service role key
- `ADMIN_PASSWORD` – Password for admin route
- `PORT` – Port to run server (default: 5000) 