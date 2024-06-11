import React from "react";

function MovieCard({ title, desc, img, no_likes, id }) {
  return (
    <div>
      <div className="top">
        <div className="img">
          <img src="vite.svg" alt="img" />
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default MovieCard;
