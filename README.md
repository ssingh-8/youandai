# You and AI - AI Consulting Platform

A full-stack AI consulting platform with a Next.js frontend and Hono API backend, organized as a monorepo.

## 🏗️ Project Structure

```
youandai/
├── client/          # Next.js frontend application
│   ├── src/
│   │   ├── app/       # Next.js app router pages
│   │   ├── components/ # React components
│   │   ├── hooks/     # Custom React hooks
│   │   └── lib/       # Utilities and Supabase clients
│   ├── public/        # Static assets
│   └── package.json
│
├── server/          # Hono API backend
│   ├── src/
│   │   ├── index.ts   # API routes and logic
│   │   └── node.ts    # Server entry point
│   └── package.json
│
├── package.json     # Root package.json for monorepo scripts
└── README.md        # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Resend API key (for email notifications)
- Supabase project (for database)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ssingh-8/youandai.git
cd youandai
```

2. **Install all dependencies:**
```bash
npm run install:all
```

Or install manually:
```bash
# Root dependencies
npm install

# Client dependencies
cd client && npm install && cd ..

# Server dependencies
cd server && npm install && cd ..
```

3. **Set up environment variables:**

Create `.env` file in the **client** directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_API_URL=http://localhost:8787
```

Create `.env` file in the **server** directory:
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

## 🎯 Development

### Run Both Client and Server Concurrently

From the **root** directory:
```bash
npm run dev
```

This will start:
- **Client**: http://localhost:3000
- **Server**: http://localhost:8787

### Run Individually

**Client only:**
```bash
npm run dev:client
# or
cd client && npm run dev
```

**Server only:**
```bash
npm run dev:server
# or
cd server && npm run dev
```

## 🏭 Production

### Build

```bash
# Build both client and server
npm run build

# Or individually
npm run build:client
npm run build:server
```

### Start Production Server

```bash
npm run start
```

## 📦 Tech Stack

### Frontend (Client)
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React hooks
- **Backend Client**: Supabase
- **TypeScript**: Full type safety

### Backend (Server)
- **Framework**: Hono (lightweight web framework)
- **Validation**: Zod
- **Email**: Resend API
- **Database**: Supabase
- **Runtime**: Node.js
- **TypeScript**: Full type safety

## 🔌 API Endpoints

### Health Check
```http
GET http://localhost:8787/health
```

### Contact Form Submission
```http
POST http://localhost:8787/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "goals": "Looking to integrate AI solutions"
}
```

## 📁 Detailed Structure

### Client Application

The frontend is a modern Next.js application with:
- **Landing Page**: Hero, services, testimonials, CTA sections
- **About Page**: Company information
- **Services Page**: AI consulting services overview
- **Contact Page**: Contact form with real-time validation
- **Blog & Case Studies**: Content pages
- **Live Chat**: Real-time chat functionality with Supabase

### Server Application

The backend is a lightweight Hono API that:
- Validates contact form submissions
- Sends email notifications via Resend
- Stores contact data in Supabase
- Provides health check endpoint
- Configured with CORS for Next.js integration

## 🔧 Configuration

### CORS Setup

The server is configured to accept requests from `http://localhost:3000` by default. For production, update the CORS configuration in `server/src/index.ts`:

```typescript
app.use('*', cors({ 
  origin: ['http://localhost:3000', 'https://yourdomain.com'], 
  allowMethods: ['POST','GET','OPTIONS'] 
}));
```

## 📝 Available Scripts

### Root Level
- `npm run dev` - Run both client and server in development
- `npm run build` - Build both client and server
- `npm run start` - Start both in production mode
- `npm run install:all` - Install all dependencies

### Client Scripts
- `npm run dev` - Start Next.js dev server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Server Scripts
- `npm run dev` - Start server with hot reload
- `npm run build` - Compile TypeScript
- `npm run start` - Start production server

## 🗄️ Database Schema

### Supabase Tables

**contact_messages**
- `id` (uuid, primary key)
- `name` (text)
- `email` (text)
- `company` (text)
- `goals` (text)
- `created_at` (timestamp)

## 🚀 Deployment

### Client Deployment (Vercel)

```bash
cd client
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Server Deployment

The server can be deployed to:
- **Vercel** (as a serverless function)
- **Railway**
- **Render**
- **Any Node.js hosting platform**

Make sure to set all environment variables in your hosting platform.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC

## 🔗 Links

- **Repository**: https://github.com/ssingh-8/youandai
- **Issues**: https://github.com/ssingh-8/youandai/issues

---

Built with ❤️ using Next.js and Hono

