
---

# 🎬 Netflix Clone — React + TMDB API + Firebase

A **modern, responsive Netflix-inspired web application** built with **React** and powered by **The Movie Database (TMDB)** API. Enjoy a sleek, immersive experience featuring trending movies, detailed previews, and a minimalist design that mirrors the feel of the real Netflix platform.

---

## 🔗 Live Demo

🌐 **[View Live Site](https://your-netflix-clone-demo-link.com)**  
📽️ Trailer integration, mobile-responsive, and dark UI aesthetics.

---

## ✨ Key Features

- 🎞️ Home page with dynamic banners & categorized movie rows
- 🔍 Browse **Trending**, **Top Rated**, **Now Playing**
- 🎬 Watch trailers fetched from **YouTube**
- 📱 Fully responsive design for all screen sizes
- ⚡ Fast loading via **Vite**
- 🔄 Smooth page routing with **React Router**

---

## 📸 UI Previews

### 🏠 Home Page  
> Dynamic hero banner + category-based scrollable rows  
![Home Screenshot](https://your-image-link/home.jpg)

### ▶️ Watch Page  
> Embedded YouTube trailer player with movie overview  
![Watch Screenshot](https://your-image-link/watch.jpg)

---

## 🛠 Tech Stack

| Tech         | Purpose                         |
|--------------|---------------------------------|
| React        | UI Development                  |
| Vite         | Fast build tool for React       |
| TMDB API     | Movie/TV data and trailers      |
| Axios        | API data fetching               |
| React Router | Page navigation                 |
| Tailwind CSS | Clean, responsive UI styling    |

---

## 🧩 Folder Structure

📦src ├── api/ │   └── tmdb.js           # Axios TMDB config ├── components/ │   ├── Banner.jsx        # Hero section │   ├── MovieRow.jsx      # Scrollable movie rows │   └── Navbar.jsx        # Top navigation ├── pages/ │   ├── Home.jsx │   └── Watch.jsx ├── App.jsx └── main.jsx

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone

2. Install Dependencies

npm install
# or
yarn install

3. Configure Environment

Create a .env file:

VITE_TMDB_API_KEY=your_tmdb_api_key_here

> 🔑 Get your TMDB API Key from themoviedb.org



4. Run Development Server

npm run dev
# or
yarn dev


---

🔌 TMDB API Usage

Trending: /trending/all/week

Movie Info: /movie/{id}

Trailer: /movie/{id}/videos

Search: /search/movie?query=


All requests include:

?api_key=VITE_TMDB_API_KEY


---

🚀 Deployment

Deploy to any static host:

Vercel

Netlify

Firebase Hosting


Add your API key as an environment variable when deploying.


---

👤 Author
Natnael Getachew 

---

📄 License

This project is open-sourced under the MIT License.


---

🙌 Special Thanks

TMDB for the API

Netflix for UI inspiration


---


