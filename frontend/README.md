Waris Backend - Jokes Frontend

A modern React + Vite frontend application that fetches jokes from a custom API and displays them in a clean, responsive, and professional UI.

Table of Contents

Project Overview

Features

Tech Stack

Installation

Running the Project

Custom API

Deployment

Contributing

License

Project Overview

This project demonstrates a React frontend fetching data from a custom backend API. The app displays jokes dynamically using Axios and showcases a professional, responsive interface with card-based layouts.

The project is built using Vite for fast development and optimized production builds.

Features

Fetches jokes from a custom backend API.

Displays jokes in responsive cards.

Professional UI with hover effects and clean typography.

Fully mobile-friendly and responsive grid layout.

Easy to deploy on Vercel or any static hosting.

Tech Stack

Frontend: React, Vite

API Requests: Axios

Styling: CSS (can be upgraded to Tailwind CSS)

Deployment: Vercel

Installation

Clone the repository:

git clone https://github.com/warisgulzar123/backend_project.git
cd backend_project/frontend


Install dependencies:

npm install

Running the Project Locally
npm run dev


Open your browser at http://localhost:5173

The frontend will fetch jokes from your custom API (/api/jokes).

Custom API

The app fetches jokes from a backend API endpoint. Example:

GET /api/jokes


The API should return an array of joke objects:

[
  { "id": 1, "joke": "Why did the chicken cross the road?" },
  { "id": 2, "joke": "I told my computer I needed a break..." }
]


Ensure each joke object has a unique id for proper rendering in React.

Fetching in App.jsx:

import axios from "axios";

useEffect(() => {
  axios.get("/api/jokes")
    .then((response) => setJokes(response.data))
    .catch((error) => console.error("Error fetching jokes:", error));
}, []);

Deployment

Push your frontend code to GitHub:

git add .
git commit -m "Deploy frontend"
git push origin main


Import the GitHub repository in Vercel:

Framework preset: Vite

Build command: npm run build

Output directory: dist

Your app will be live on a Vercel URL like:

https://your-project-name.vercel.app

Contributing

Fork the repository

Create a feature branch: git checkout -b feature-name

Commit your changes: git commit -m "Description"

Push to branch: git push origin feature-name

Open a pull request

License

This project is MIT licensed.
