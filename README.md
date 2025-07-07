# 🚀 AI Job Application Assistant

A modern, fullstack web app to supercharge your job search with AI! This project helps you generate tailored cover letters, rewrite resume lines, and manage your job applications—all in one place.

## ✨ Features (Current State)
- **Frontend:** React + Tailwind CSS (fully set up, sample landing page working)
- **Backend:** Node.js + Express.js (API server running)
- **Database:** MongoDB-ready (models and connection scaffolded)
- **Authentication:** JWT-based register/login endpoints (testable now)
- **AI Integration:** OpenAI GPT-3.5-turbo endpoint scaffolded (for cover letter generation)

## 📁 Folder Structure
```
ai-job-helper/
├── client/   # React frontend (Tailwind CSS ready)
├── server/   # Node.js backend (Express, MongoDB, OpenAI)
├── .gitignore
├── README.md
└── package.json
```

## 🛠️ Getting Started
1. **Clone the repo**
2. **Install dependencies** for both `client` and `server`
3. **Set up your `.env`** in `server/` (MongoDB URI, OpenAI key, JWT secret)
4. **Run the backend:**
   ```bash
   cd server
   node server.js
   ```
5. **Run the frontend:**
   ```bash
   cd client
   npm start
   ```

## 🔑 Roadmap
- [x] Project scaffold & setup
- [x] User authentication (register/login)
- [x] Tailwind CSS integration
- [ ] Job profile model & endpoints
- [ ] Resume upload & line rewriter
- [ ] AI-powered cover letter generator (UI)
- [ ] Dashboard for saved jobs
- [ ] Production deployment (Vercel/Railway)

---

> **Current Status:**
> - Frontend and backend are both running.
> - Auth endpoints are ready for testing.
> - Ready for rapid feature development!

---

Made with ❤️ using React, Node.js, MongoDB, and OpenAI.
