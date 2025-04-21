import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./TitleCards.css";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzE4MTBjYzQzOTAzOGExNTZhMTk4NzBjYTExNjE5NSIsIm5iZiI6MTc0NTI0MjYwOC4zNzIsInN1YiI6IjY4MDY0OWYwNDIxYTMwOTc1Y2FhYzBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-LPpGApE-g0jfmdDUCniSACB97nHoWsh6RXtd7co9UE",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results) {
          setApiData(res.results);
        } else {
          setError("No results found.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load data.");
        setLoading(false);
      });

    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="card-list" ref={cardsRef}>
        {!loading &&
          !error &&
          apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              {card.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                  alt={card.original_title || "Movie image"}
                  title={card.original_title}
                />
              ) : (
                <div className="fallback-img">No Image</div>
              )}
              <p>{card.original_title || card.title}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TitleCards;
