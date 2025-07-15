
## 🧑‍💼 Job Portal 


A modern, fully responsive job portal web application built with React, Firebase Authentication, Supabase Database, and Tailwind CSS. This project allows users to search, filter, and apply for jobs seamlessly while ensuring secure authentication and clean UI/UX.

<p align="center"> <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react" height="28" style="margin: 4px;"> <img src="https://img.shields.io/badge/Firebase-11.9.0-FFCA28?style=for-the-badge&logo=firebase" height="28" style="margin: 4px;"> <img src="https://img.shields.io/badge/TailwindCSS-4.1.8-38B2AC?style=for-the-badge&logo=tailwind-css" height="28" style="margin: 4px;"> <img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite" height="28" style="margin: 4px;"> <img src="https://img.shields.io/badge/Supabase-Database-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" height="28" style="margin: 4px;"> </p>


## Live Demo: https://job-portal24.netlify.app


## 🚀 Features

## 🔐 Authentication

Email & Password Authentication (via Firebase)

Google OAuth for quick login/signup

Protected Routes – Only authenticated users can apply for jobs

Persistent Login – Users stay logged in across sessions

Forgot Password functionality

Automatic Redirects after login/signup/logout

## 💼 Job Listings

Fetching real-time job data from Supabase

Display of all job posts with clean card UI

Apply Now button visible only after login

No duplicate applications for same job

## 🔍 Advanced Job Filters

Users can filter jobs based on:

Job Role: Design, Development, Marketing, Finance, etc.

Job Type: Full-time, Part-time, Remote, Intern

Location: Popular Indian cities (Pune, Mumbai, Delhi, Bangalore, etc.)

Experience Level: Entry, Mid, Senior

Clear All – One-click reset of all filters

## 🎨 Modern UI/UX

Built with Tailwind CSS

Smooth hover effects (e.g., background color transitions)

Responsive design – Works on all screen sizes

Clean animations for buttons and transitions

Accessible and keyboard-friendly

---

## ⚙️ Tech Stack

| **Category**       | **Technology**                                |
| ------------------ | --------------------------------------------- |
| Frontend Framework | React                                         |
| Styling            | Tailwind CSS                                  |
| Animations         | Framer Motion                                 |
| Authentication     | Firebase Auth (Email/Password + Google OAuth) |
| Backend / Database | Supabase (PostgreSQL)                         |
| Routing            | React Router v6                               |
| Build Tool         | Vite                                          |
| Hosting            | Netlify                                       |

---

## 🧪 Getting Started Locally

# 1. To run this project on your local development server:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/job-portal.git
cd job-portal
```
# 2. Install dependencies
```
npm install
```
# 3. Setup environment variables

#Create a .env file and add:
```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```
# 4. Run the app
npm run dev

---

## 📁 Folder Structure


src/
│
├── components/       # Reusable UI Components
├── pages/            # Main Route Components (Home, Login, Signup, etc.)
├── context/          # Auth Context using Firebase
├── hooks/            # Custom React Hooks
├── utils/            # Utility functions like filter logic
├── assets/           # Static assets like images and icons
└── App.jsx           # Root component with routing logic


---

## ✅ Future Enhancements

* Employer dashboard for posting jobs
* Resume upload functionality
* Application status tracking
* Notifications and activity log
* Job bookmarks or saved jobs list
* Role-based access for admin/employer/user

---

## 🧠 Key Concepts & Learnings

* Building a real-world React project from scratch
* Working with Firebase Authentication flows (signup/login/Google OAuth/protected routes)
* Using Supabase as a scalable backend (PostgreSQL-based)
* Implementing complex filtering logic with controlled components
* Responsive design using Tailwind utility classes
* State management via context and hooks
* Clean, animated, interactive UI with transitions and effects

---

## 🌐 Let's Connect

I'm always open to new connections, collaborations, or opportunities. Feel free to reach out!
```

🔗 LinkedIn: linkedin.com/in/yogeshdumane

📧 Gmail: yogeshdumane987@gmail.com
```



## 📜 License

This project is licensed under the [MIT License](LICENSE).


