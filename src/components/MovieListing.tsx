import type { Movie } from "../types"

type MovieListingProps = {
    movie: Movie;
    deleteMovie: ({ id }: { id: string }) => void;
    editMovie: ({ id }: { id: string }) => void;
}

export const MovieListing = ({ movie, deleteMovie, editMovie }: MovieListingProps) => {
    return (
        <div className='movie-listing'>
            <img src={movie.image} width='100%' style={{ borderRadius: '1em' }} />
            <p className='name'>{movie.title}</p>
            <p style={{ marginBottom: '1.5em' }}>{movie.original_title}</p>
            <p><span style={{ fontWeight: 'bold' }}>Release date:</span> {movie.release_date}</p>
            <p><span style={{ fontWeight: 'bold' }}>Director:</span> {movie.director}</p>
            <p><span style={{ fontWeight: 'bold' }}>Producer:</span> {movie.producer}</p>
            <p><span style={{ fontWeight: 'bold' }}>RT:</span> {movie.rt_score}</p>
            <div style={{ display: 'flex', justifyItems: 'center', margin: '1em 0' }}>
                <button onClick={() => editMovie({ id: movie.id })}>
                    Edit
                </button>
                <button style={{ color: 'red' }} onClick={() => { deleteMovie({ id: movie.id }) }}>
                    Delete
                </button>
            </div>
        </div >
    )
}
