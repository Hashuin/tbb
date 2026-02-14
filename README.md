# Wakfu Guild Endgame Boost

Landing page for the guild incentive program (230-245) with bilingual content, dark theme, boss gallery, and an interest form with optional Supabase storage.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Supabase (optional)

Create a `.env` file based on `.env.example` and set:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

The form will store entries in the `guild_interest` table when configured.

### Database Setup

Run the SQL scripts in Supabase SQL Editor:
1. `supabase-content-table.sql` - Creates the content management table
2. `supabase-auth-policies.sql` - Sets up Row Level Security policies

### Create Admin User

In Supabase Dashboard:
1. Go to **Authentication > Users**
2. Click **Add User**
3. Enter email (e.g., admin@tugremio.com) and password
4. Check **Auto Confirm User**
5. Click **Create User**

## Admin Panel

Access the admin panel at `/admin` with Supabase Auth.

**Features:**
- 🔐 **Supabase Authentication** - Secure login with email/password
- ✏️ Edit all content (Spanish/English)
- 🌐 Changes sync to Supabase and are visible to all users
- 💾 Export/Import configuration
- 🔄 Reset to default values
- 🚪 Logout button

**Security:**
- Email/password authentication via Supabase Auth
- Row Level Security (RLS) policies:
  - ✅ Anyone can **read** content
  - 🔒 Only **authenticated users** can **update** content
- Sessions managed by Supabase (secure tokens)
- Optional: Restrict to specific emails in RLS policies

**First Time Setup:**
1. Visit `/admin`
2. Click "Register" to create your admin account
3. Or use an account created in Supabase Dashboard
4. Login and start editing

**Optional - Restrict to specific emails:**
Uncomment the policy in `supabase-auth-policies.sql` to allow only specific emails.

## Assets

Wakfu assets are stored in `public/wakassets` and are intended for non-commercial, community use.
