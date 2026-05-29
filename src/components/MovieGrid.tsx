import type { Movie } from "../types";
import { MovieListing } from "./MovieListing";


type MovieGridProps = {
    movieData: Movie[];
    deleteMovie: ({ id }: { id: string }) => void;
    editMovie: ({ id }: { id: string }) => void;
}

export const MovieGrid = ({ movieData, deleteMovie, editMovie }: MovieGridProps) => {
    return (
        <div className='movie-listing-wrapper'>
            {movieData.map((movie) => (
                <MovieListing
                    key={movie.id}
                    movie={movie}
                    deleteMovie={deleteMovie}
                    editMovie={editMovie}
                />
            ))}
        </div>
    )
}

