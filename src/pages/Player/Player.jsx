import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzE4MTBjYzQzOTAzOGExNTZhMTk4NzBjYTExNjE5NSIsIm5iZiI6MTc0NTI0MjYwOC4zNzIsInN1YiI6IjY4MDY0OWYwNDIxYTMwOTc1Y2FhYzBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-LPpGApE-g0jfmdDUCniSACB97nHoWsh6RXtd7co9UE",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          console.warn("No trailer found for this movie.");
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  const handleBackClick = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="Back"
        className="back-button"
        onClick={handleBackClick}
      />

      {apiData.key ? (
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          width="90%"
          height="90%"
          frameBorder="0"
          title="Trailer"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="no-trailer-msg">Trailer not available</p>
      )}

      <div className="player-info">
        <p>📅 {apiData.published_at || "Unknown date"}</p>
        <p>🎬 {apiData.name || "Untitled Video"}</p>
        <p>📂 {apiData.type || "Unknown type"}</p>
      </div>
    </div>
  );
};

export default Player;
