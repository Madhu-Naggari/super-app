Super App

A modern entertainment dashboard built with Next.js, TypeScript, Tailwind CSS, Zustand, and external APIs for Weather, News, and Movies.

Features

Authentication & Registration

- User Registration Form
- Name Validation
- Username Validation
- Email Validation
- Mobile Number Validation
- Terms & Conditions Validation
- React Hook Form + Zod Validation
- Data Persistence using Local Storage

Category Selection

- Entertainment Category Selection
- Minimum 3 Categories Required
- Category Persistence using Zustand and Local Storage

Dashboard

- User Profile Widget
- Weather Information Widget
- Notes Widget with Persistence
- News Feed Widget
- Auto-changing News Every 2 Seconds
- Circular Countdown Timer
- Responsive Layout

Entertainment Discovery

- Dynamic Movie Listings
- Movies Based on Selected Categories
- Movie Hover Animations
- Movie Details Modal
- Responsive Movie Grid

⸻

Tech Stack

Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

State Management

- Zustand

Form Handling

- React Hook Form
- Zod

API Integration

- OpenWeatherMap API
- News API
- OMDB API

Storage

- Browser Local Storage

⸻

Project Structure

src
│
├── app
│ ├── signup
│ ├── categories
│ ├── dashboard
│ └── movies
│
├── components
│ ├── auth
│ ├── category
│ ├── dashboard
│ └── movies
│
├── services
│ ├── weather.ts
│ ├── news.ts
│ └── movies.ts
│
├── store
│ └── useUserStore.ts
│
├── utils
│ └── localStorage.ts
│
└── schemas
└── signupSchema.ts

⸻

Environment Variables

Create a .env.local file in the project root.

NEXT_PUBLIC_WEATHER_API_KEY=YOUR_WEATHER_API_KEY
NEXT_PUBLIC_NEWS_API_KEY=YOUR_NEWS_API_KEY
NEXT_PUBLIC_OMDB_API_KEY=YOUR_OMDB_API_KEY

⸻

Installation

Clone the repository:

git clone <https://github.com/Madhu-Naggari/super-app.git>

Navigate into the project:

cd super-app

Install dependencies:

npm install

Run development server:

npm run dev

Open:

http://localhost:3000

⸻

Production Build

Build the application:

npm run build

Start production server:

npm start

⸻

APIs Used

OpenWeatherMap

Provides live weather information.

News API

Provides latest news updates with auto-refresh functionality.

OMDB API

Provides movie listings and detailed movie information.

⸻

Assignment Requirements Covered

✅ Authentication & Registration

✅ Form Validation

✅ Category Selection

✅ Minimum Category Restriction

✅ User Dashboard

✅ Weather Widget

✅ News Feed Widget

✅ Countdown Timer

✅ Notes Persistence

✅ Movie Discovery Page

✅ Dynamic API Integration

✅ Zustand State Management

✅ Responsive UI

✅ Tailwind CSS

✅ Local Storage Persistence

⸻

Deployment

Vercel

Deploy easily using Vercel:

npm run build

Netlify

Build and deploy:

npm run build

⸻

Author

Madhu Naggari

MERN Stack Developer

Frontend Development • Backend Development • UI/UX • Full Stack Development
