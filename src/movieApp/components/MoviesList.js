import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import AddMovie from "./AddMovie";
function MoviesList() {
    const { movies, search, rate } = useSelector(
        (state) => state.moviesReducer
    );

    return (
        <div className="movies-container">
            <h1>Movies List</h1>
            <AddMovie />
            <div className="movies-list">
                {movies
                    .filter((movie) =>
                        rate && !search
                            ? movie.rate === rate
                            : search && !rate
                            ? movie.title.toLowerCase().includes(search)
                            : rate && search
                            ? movie.title.toLowerCase().includes(search) &&
                              movie.rate === rate
                            : movie.title.toLowerCase().includes(search)
                    )
                    .map((movie) => {
                        return <MovieItem key={movie.id} {...movie} />;
                    })}
            </div>
        </div>
    );
}

export default MoviesList;
