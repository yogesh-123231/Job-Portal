<div align="center">

# 💼 Job Portal

### *Find the job that really suits you — the whole planet is your playground!*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-job--portal24.netlify.app-f97316?style=for-the-badge)](https://job-portal24.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-yogesh--123231-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yogesh-123231/Job-Portal)

<br/>

<!-- Paste your GitHub CDN screenshot URL here -->

![Job Portal Preview](https://github.com/user-attachments/assets/4612073d-1015-4d1a-bcf4-0f06579be24e)

<br/>

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

</div>

---

## ✨ Features

| | Feature |
|---|---|
| 🔐 | **Auth** — Email/password + Google Sign-In via Firebase, forgot password flow |
| 🗄️ | **Live Job Listings** — Real-time data fetched from Supabase |
| 🔍 | **Smart Filtering** — Filter by category, job type, location & experience level |
| 📝 | **Post a Job** — Employers can submit job listings |
| 🗺️ | **Explore Page** — Career insights, roadmaps, salary info & remote roles |
| 📱 | **Fully Responsive** — Mobile-first design throughout |
| 🛡️ | **Protected Apply** — Login required before applying |

---

## 🧰 Tech Stack

**Frontend** — React 19, Vite, Tailwind CSS v4, React Router v7, React Icons, React Scroll

**Backend & Services** — Supabase (job listings DB), Firebase Auth (user authentication)

**Deployment** — Netlify

---

## 🏗️ Project Structure

```
Job-Portal/
├── src/
│   ├── Components/
│   │   ├── Hero.jsx          # Landing hero section
│   │   ├── JobList.jsx       # Filterable job listings (Supabase)
│   │   ├── PopularJobs.jsx   # Featured jobs section
│   │   ├── DreamJob.jsx      # CTA / inspiration section
│   │   ├── Navbar.jsx        # Responsive navigation
│   │   └── Footer.jsx
│   ├── Pages/
│   │   ├── Explore.jsx       # Career insights & roadmaps
│   │   ├── PostJob.jsx       # Job submission form
│   │   ├── Login.jsx         # Firebase login
│   │   ├── Signup.jsx        # Firebase signup
│   │   └── ForgotPassword.jsx
│   ├── context/
│   │   └── AuthContext.jsx   # Global auth state
│   ├── firebase/
│   │   └── firebase.js       # Firebase config & exports
│   └── supabaseClient.js     # Supabase client init
```

---

## 🚀 Getting Started

```bash
# 1. Clone & install
git clone https://github.com/yogesh-123231/Job-Portal.git
cd Job-Portal && npm install

# 2. Add environment variables
touch .env

# 3. Start dev server
npm run dev
```

#### `.env` setup
```env
# Firebase
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=

# Supabase
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

---

## 🗄️ Supabase Schema

The `jobs` table should include:

| Column | Type |
|---|---|
| `title` | text |
| `company` | text |
| `logo` | text (URL) |
| `description` | text |
| `category` | text |
| `type` | text[] |
| `location` | text |
| `experience` | text |

---

<div align="center">

**Made with ❤️ by [Yogesh Dumane](https://github.com/yogesh-123231)**

⭐ *Found it useful? Give it a star!*

</div>
