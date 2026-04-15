# React + Vite

# 🎬 Movie Explorer

A modern and responsive single-page web application built using React.js that allows users to search, browse, and explore movies using data from The Movie Database (TMDB) API.

---

## 🚀 Features

* 🔍 Search movies by name
* 🎬 Browse popular movies
* ⭐ View movie ratings
* 📄 Movie details popup (modal view)
* 🔗 Direct link to full movie details (TMDB website)
* 💡 Search suggestions (auto-complete)
* 🎛️ Filter movies by categories (Action, Comedy, Romance)
* ⏳ Loading animation for better UX
* ❌ Graceful error handling
* 📱 Fully responsive design (mobile, tablet, desktop)
* 🎨 Modern UI with background image and smooth animations

---

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Pure CSS (no frameworks)
* **API:** The Movie Database (TMDB)
* **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
movie-app/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieModal.jsx
│   │   ├── Loader.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── api.js
│   ├── App.jsx
│   └── App.css
│
│── .env (ignored)
│── package.json
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your TMDB API key:

```
VITE_API_KEY=your_api_key_here
```

⚠️ Note: Never upload your `.env` file to GitHub.

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/your-username/movie-explorer.git
```

2. Navigate to the project folder:

```
cd movie-explorer
```

3. Install dependencies:

```
npm install
```

4. Add your API key in `.env`

5. Start the development server:

```
npm run dev
```

6. Open in browser:

```
http://localhost:5173
```

---

## 🌐 API Used

This project uses the TMDB API to fetch movie data.

* Popular Movies Endpoint
* Search Movies Endpoint

---

## 🎯 Key Concepts Implemented

* Component-based architecture
* State management using React Hooks
* API integration using Fetch
* Conditional rendering (loading, error, empty state)
* Responsive design using CSS Grid & Media Queries
* Environment variables for secure API handling

---

## 📸 Demo Features

* Search for any movie (e.g., "Avengers")
* Click on a movie card to view details
* Use filter buttons for quick browsing
* Hover effects and animations for better UI

---

## 🔒 Security

* API keys are stored securely using `.env`
* `.env` is excluded from version control using `.gitignore`

---

## 🚀 Future Enhancements

* 🎥 Add movie trailer (YouTube integration)
* ❤️ Add favorites/watchlist feature
* 🌙 Dark/Light mode toggle
* 📄 Dedicated movie details page
* 🔄 Pagination for large datasets

---

## 👨‍💻 Author

Developed by Preksha Tomar

---

## ⭐ Acknowledgements

* The Movie Database (TMDB) for providing the API
* React.js community

---

## 📌 Conclusion

This project demonstrates the ability to build a fully functional, responsive, and interactive web application using modern frontend technologies while integrating external APIs and maintaining clean architecture.

---



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
