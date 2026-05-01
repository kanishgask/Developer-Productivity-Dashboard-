# 🚀 Developer Productivity Dashboard

A full-stack web application that tracks and visualizes developer activity using GitHub data. This dashboard provides insights into commits, repositories, coding streaks, and overall productivity.

---

## 📌 Features

* 📊 **Commit Analytics** – Total commits across repositories
* 🔥 **Coding Streaks** – Track daily contribution consistency *(extendable)*
* 📅 **Weekly Reports** – Analyze activity over the past 7 days *(extendable)*
* 🏆 **Leaderboard** – Compare productivity with other users *(future scope)*
* ⚡ Real-time data from GitHub API

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios

### Backend

* Node.js
* Express.js
* GitHub REST API

---

## 📁 Project Structure

```
dev-dashboard/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── github.js
│   ├── controllers/
│   │   └── githubController.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── Streak.js
│   │   │   ├── Commits.js
│   │   └── services/api.js
│   └── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/dev-dashboard.git
cd dev-dashboard
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
GITHUB_TOKEN=your_github_token_here
```

Run backend:

```bash
node server.js
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔗 API Endpoint

```
GET /api/github/:username
```

### Example:

```
http://localhost:5000/api/github/octocat
```

### Response:

```json
{
  "username": "octocat",
  "repoCount": 8,
  "totalCommits": 120
}
```

---

## 📈 Future Enhancements

* 📊 Graphs & Charts (Chart.js / Recharts)
* 🔐 GitHub OAuth Authentication
* 🗄️ MongoDB Integration
* 📉 Detailed commit history visualization
* 🌙 Dark mode UI
* 🏆 Global leaderboard system

---

## 🚀 Deployment

* Frontend: Vercel / Netlify
* Backend: Render / Railway

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 💡 Author

**Your Name**
GitHub: https://github.com/kanishgask

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
