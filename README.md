# 🚀 AI Job Application Assistant

A modern, fullstack web app to supercharge your job search with AI! This project helps you generate tailored cover letters, rewrite resume lines, and manage your job applications—all in one place.

## ✨ Features (Current State)
- **Frontend:** React + Tailwind CSS (fully set up, authentication and resume upload working)
- **Backend:** Node.js + Express.js (API server running, protected routes, resume endpoints)
- **Database:** MongoDB-ready (User and Resume models, connection working)
- **Authentication:** JWT-based register/login endpoints (fully functional)
- **Resume Upload:** Users can paste/upload resumes, which are saved to MongoDB
- **Protected Routes:** Backend endpoints require authentication
- **AI Integration:** OpenRouter endpoint scaffolded (for cover letter generation)

## 📁 Folder Structure
```
ai-job-helper/
├── client/   # React frontend (Tailwind CSS ready)
├── server/   # Node.js backend (Express, MongoDB, OpenRouter)
├── .gitignore
├── README.md
└── package.json
```

## 🛠️ Getting Started
1. **Clone the repo**
2. **Install dependencies** for both `client` and `server`
3. **Set up your `.env`** in `server/` (MongoDB URI, OpenRouter key, JWT secret)
4. **Run the backend:**
   ```bash
   cd server
   npm install
   npm start
   ```
5. **Run the frontend:**
   ```bash
   cd client
   npm install
   npm start
   ```

## 🔑 Roadmap
- [x] Project scaffold & setup
- [x] User authentication (register/login)
- [x] Tailwind CSS integration
- [x] Resume upload & storage
- [x] Protected backend routes
- [ ] Resume line rewriter (AI)
- [ ] AI-powered cover letter generator (UI)
- [ ] Dashboard for saved jobs
- [ ] Production deployment (Vercel/Railway)

---

> **Current Status:**
> - Frontend and backend are both running.
> - Auth endpoints and resume upload are ready for testing.
> - Resumes are saved in MongoDB and linked to users.
> - Ready for rapid feature development!

---

Made with ❤️ using React, Node.js, MongoDB, and OpenRouter.
