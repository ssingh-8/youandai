# You and AI Server

A lightweight API server built with [Hono](https://hono.dev/) for handling contact form submissions. This server validates form data, sends email notifications via Resend, and stores submissions in Supabase.

## Features

- 🚀 **Fast & Lightweight** - Built with Hono for optimal performance
- ✉️ **Email Notifications** - Automatic email sending via Resend API
- 💾 **Database Storage** - Contact submissions stored in Supabase
- ✅ **Input Validation** - Schema validation using Zod
- 🔒 **CORS Enabled** - Configured for Next.js frontend integration

## Tech Stack

- [Hono](https://hono.dev/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Zod](https://github.com/colinhacks/zod) - Schema validation
- [Resend](https://resend.com/) - Email delivery
- [Supabase](https://supabase.com/) - Database & backend services

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend API key (for email notifications)
- Supabase project (for data storage)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ssingh-8/youandaiserver.git
cd youandaiserver
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=8787

# Resend Configuration
RESEND_API_KEY=your_resend_api_key
RESEND_FROM=onboarding@resend.dev
RESEND_TO=your_email@example.com

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Usage

### Development

Run the server in development mode with hot reload:
```bash
npm run dev
```

### Production

Build and run the production server:
```bash
npm run build
npm start
```

The server will start on `http://localhost:8787` (or the PORT you specified).

## API Endpoints

### Health Check
```http
GET /health
```

**Response:**
```json
{
  "ok": true,
  "time": "2025-10-30T12:00:00.000Z"
}
```

### Submit Contact Form
```http
POST /contact
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "goals": "Looking to integrate AI solutions"
}
```

**Response:**
```json
{
  "ok": true
}
```

**Validation Rules:**
- `name`: Minimum 2 characters
- `email`: Valid email format
- `company`: Minimum 2 characters  
- `goals`: Minimum 5 characters

## CORS Configuration

The server is currently configured to accept requests from:
- `http://localhost:3000`

To add more origins, update the CORS configuration in `src/index.ts`:
```typescript
app.use('*', cors({ 
  origin: ['http://localhost:3000', 'https://yourdomain.com'], 
  allowMethods: ['POST','GET','OPTIONS'] 
}));
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port (default: 8787) | No |
| `RESEND_API_KEY` | Resend API key for sending emails | Yes (for email) |
| `RESEND_FROM` | Sender email address | Yes (for email) |
| `RESEND_TO` | Recipient email address | Yes (for email) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes (for DB) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes (for DB) |

## Project Structure

```
.
├── src/
│   ├── index.ts      # Main application logic & routes
│   └── node.ts       # Node.js server entry point
├── package.json      # Dependencies & scripts
├── tsconfig.json     # TypeScript configuration
└── .gitignore        # Git ignore rules
```

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

