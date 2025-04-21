import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzE4MTBjYzQzOTAzOGExNTZhMTk4NzBjYTExNjE5NSIsIm5iZiI6MTc0NTI0MjYwOC4zNzIsInN1YiI6IjY4MDY0OWYwNDIxYTMwOTc1Y2FhYzBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-LPpGApE-g0jfmdDUCniSACB97nHoWsh6RXtd7co9UE",
    },
  };

  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    if (cardsRef.current) {
      cardsRef.current.addEventListener("wheel", handlewheel);
    }

    // Cleanup function to remove event listener
    return () => {
      if (cardsRef.current) {
        cardsRef.current.removeEventListener("wheel", handlewheel);
      }
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title || "Movie image"} // Fixed typo and added alt text fallback
              />
              <p>{card.original_title}</p> {/* Fixed: corrected the typo */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
