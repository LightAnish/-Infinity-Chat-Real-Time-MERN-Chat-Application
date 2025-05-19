# 🌐 Infinity Chat – Real-Time MERN Chat App

Infinity Chat is a modern, full-stack real-time chat application built using the **MERN stack** (MongoDB, Express, React, Node.js). It supports real-time messaging with Socket.IO, user authentication with JWT, and profile management including image uploads via ImgBB API.

---

## 🚀 Features

- 🔐 **Authentication** – Secure signup/login with JWT & cookies
- 💬 **Real-Time Messaging** – Powered by Socket.IO
- 🧑‍💼 **User Profiles** – View and update user info with live image previews
- 📷 **Profile Picture Upload** – Upload images through ImgBB integration
- 📦 **Full MERN Stack** – Built with MongoDB, Express, React, Node.js
- 📱 **Responsive Design** – Clean UI optimized for both desktop and mobile

---

## 🛠️ Tech Stack

| Layer      | Technology                              |
|------------|------------------------------------------|
| Frontend   | React, React Hook Form, Axios, Tailwind |
| Backend    | Node.js, Express, MongoDB, Mongoose     |
| Real-Time  | Socket.IO                               |
| Auth       | JWT, Cookies (withCredentials)          |
| Media Host | ImgBB API                               |

---

## 📁 Folder Structure

```bash
infinity-chat/
│
├── client/          # React frontend
│   └── src/
│       └── components/
│       └── contexts/
│       └── pages/
│
├── server/          # Node.js + Express backend
│   └── controllers/
│   └── models/
│   └── routes/
│   └── middlewares/
│
├── .env             # Environment variables
└── README.md
