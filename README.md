# DevEvents - Event Management Platform

A modern, full-stack event management application built with Next.js, featuring a beautiful UI, database integration, and analytics.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Frontend:** React 19, Tailwind CSS v4, `tw-animate-css`
- **Database:** MongoDB & Mongoose
- **Analytics:** PostHog
- **Media/Images:** Cloudinary
- **UI Effects:** `ogl` (WebGL for interactive LightRays)
- **Fonts:** Schibsted Grotesk & Martian Mono (via `next/font`)

## ✨ Features

- **Event Discovery:** Browse and explore upcoming events with beautiful interactive UI elements.
- **Event Booking:** Users can easily book tickets for events.
- **Dynamic Routing:** Utilizing Next.js dynamic routes for individual event pages.
- **Analytics Integration:** Fully integrated with PostHog to capture user behavior and booking events.
- **Optimized Assets:** Uses Cloudinary for optimized image delivery.
- **Serverless Ready:** Configured with MongoDB connection caching to run optimally on Vercel's serverless edge network.

## ⚙️ Environment Variables

To run this project locally or deploy it, you need the following environment variables in your `.env.local`:

```env
# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com # Or your proxy route e.g., /ingest

# Base Application URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000 # Your deployment URL in production

# MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority

# Cloudinary Setup
CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
```

## 🛠️ Getting Started Locally

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env.local` file.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Deployment

This project is fully optimized for deployment on Vercel. See the provided instructions for detailed deployment steps.