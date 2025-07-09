# 🧠 CodePath Capstone Project

A full-stack web application built using React and Supabase to allow users to create, view, and interact with posts in a streamlined UI. This project is part of the CodePath Capstone, focusing on applying modern frontend development practices and backend integration with Supabase.

---

## 🚀 Features

- 📝 Create, edit, and delete user posts
- 💬 Add and display comments on individual posts
- 📄 Dynamic routing between home, post creation, and individual post pages
- 🔐 User session and data persistence via local storage
- 🌐 Responsive UI components using React

---

## 🛠️ Technologies Used

- **Frontend**: React, Vite, JSX, CSS
- **Backend**: Supabase (PostgreSQL, Authentication, RESTful API)
- **Tooling**: ESLint, Node.js

---

## 📁 Project Structure

```bash
codepath-capstone-main/
├── public/               # Static assets
│   └── vite.svg
├── src/
│   ├── assets/           # Media and SVGs
│   ├── components/       # Reusable UI components
│   │   ├── Comment.jsx
│   │   ├── Header.jsx
│   │   ├── PostCard.jsx
│   │   └── PostForm.jsx
│   ├── pages/            # Application routes/pages
│   │   ├── CreatePost.jsx
│   │   ├── Home.jsx
│   │   └── PostPage.jsx
│   ├── utils/            # Utility functions
│   │   └── localStorage.js
│   ├── App.jsx           # Root component
│   ├── main.jsx          # React entry point
│   ├── index.css         # Global styles
│   └── supabase.js       # Supabase client config
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── .gitignore
