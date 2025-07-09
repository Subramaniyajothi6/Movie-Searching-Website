# 🎬 Movie Maze

**Movie Maze** is a React-based movie searching website that allows users to search for movies and view their detailed information. It fetches data from the OMDB API and displays results in a clean and responsive UI.

### 🌐 Live Demo

👉 [Movie Maze is Live on Netlify](https://movie-maze-movie-searching-website.netlify.app/)

---

## 📸 Screenshots

### 🔍 Home Page
![Home Page](https://github.com/Subramaniyajothi6/Movie-Searching-Website/blob/main/Home-page.png)

### 🎥 Movie Details Page
![Movie Details](https://github.com/Subramaniyajothi6/Movie-Searching-Website/blob/main/Movie-Details.png)

---

## 🚀 Features

- 🔍 Search for movies, series, and episodes.
- 📄 View detailed descriptions of each result.
- 📱 Fully responsive design.
- 🧠 Built as part of learning React concepts and API integration.

---

## 🛠️ Built With

- **React** – JavaScript library for building user interfaces
- **Vite** – Next-generation frontend tooling
- **Tailwind CSS** – Utility-first CSS framework
- **React Router DOM** – For handling client-side routing
- **OMDB API** – Movie data source

---

## 📁 Environment Variables

> ⚠️ For security, API keys should not be hardcoded.

To run this project locally, create a `.env` file in the root (outside `src`) and add:

```
VITE_OMDB_API_KEY=your_api_key_here
```

Then, access it in your React code using:

```js
const apiKey = import.meta.env.VITE_OMDB_API_KEY;
```

---
## 📁 Project Structure

```
Movie-Maze/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── MovieDetail.jsx
│   ├── Movies.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Subramaniyajothi6/Movie-Searching-Website.git
cd Movie-Searching-Website

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 🤓 Learning Goals

This project was built to reinforce:

- React component design
- State management using hooks
- React Router for navigation
- Working with APIs
- Styling with Tailwind CSS

---

## 📬 Contact

Created with ❤️ by **Subramaniyajothi S**
