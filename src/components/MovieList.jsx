import { movies } from "../movies";
import MovieCard from "./MovieCard";

function MovieList() {
  return (
    <section>
      <div className="movie_list_container">
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
