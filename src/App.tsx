import './App.css'
import movieEntries from '../data/movies.json';
import type { MovieListing as Movie } from './types';
import './index.css'
import { useState } from 'react';

function App() {

  const completeMovieList = [...movieEntries] as Movie[];
  const [movieData, setMovieData] = useState(completeMovieList)

  const deleteMovie = ({ id }: { id: string }) => {
    setMovieData(movieData.filter((movie) => movie.id != id))
  }

  const editMovie = ({ id }: { id: string }) => {
    const newMovieData = movieData.map((movie) => {
      if (movie.id == id) {
        const newRtScore = movie.rt_score = (Number(movie.rt_score) - 1) + ""
        return { ...movie, rt_score: newRtScore } as Movie;
      } else {
        return movie;
      }
    });
    setMovieData(newMovieData);
  }

  const MovieListing = ({ movie }: { movie: Movie }) => {
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

  const getRemovedMovies = (): Movie[] => {
    const removedMovies = completeMovieList.filter((x) => !movieData.includes(x));
    console.log(removedMovies.length);
    return removedMovies;
  }


  const addOneMovie = () => {
    const removedMovies = getRemovedMovies();
    if (removedMovies.length == 0) console.log("There are no removed movies");
    if (removedMovies.length == 0) return;
    const newMovieList: Movie[] = [...movieData];
    newMovieList.push(removedMovies[0])
    setMovieData(newMovieList);
  }

  const addMultipleMovies = () => {
    const removedMovies = getRemovedMovies();
    const newMovieList: Movie[] = [...movieData].concat(removedMovies.slice(0, 4));
    setMovieData(newMovieList);
  }

  const remove4Movies = () => {
    let counter = 0;
    setMovieData(movieData.filter(() => counter++ >= 4))
  }
  const resetToDefaultMovies = () => {
    setMovieData(movieEntries as Movie[]);
  }

  return (
    <>
      <div className='heading' style={{ width: '100%', display: 'flex' }}>
        <div className='heading-title' style={{ textAlign: 'left' }}>
          <h2>My  collection</h2>
          <p>View and manage your collection</p>
        </div>
        <div className='heading-buttons' style={{ display: 'flex' }}>
          <button onClick={() => addOneMovie()}>
            Add one movie
          </button>
          <button onClick={() => addMultipleMovies()}>
            Add multiple movies
          </button>
          <button onClick={() => remove4Movies()}>
            Remove 4 movies
          </button>
          <button onClick={() => resetToDefaultMovies()}>
            Reset to default movies
          </button>
        </div>
      </div>
      <div className='movie-listing-wrapper'>
        {movieData.map((movie) => (
          <MovieListing movie={movie} />
        ))}
      </div>
    </>
  )
}

export default App
