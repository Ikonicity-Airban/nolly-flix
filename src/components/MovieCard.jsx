function MovieCard({ title, desc, img, noLikes }) {
  return (
    <div className="movie-card">
      <div className="movie-card__top">
        <div className="movie-card__img">
          <img src={img} alt={title} />
        </div>
      </div>
      <div className="movie-card__bottom">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__desc">{desc}</p>
        <div className="movie-card__like">
          <i></i>
          <p className="movie-card__no-likes">{noLikes}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
