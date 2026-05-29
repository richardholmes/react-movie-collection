import './App.css'
import movieEntries from '../data/movies.json';
import type { Movie as Movie } from './types';
import { useState } from 'react';
import { MovieGrid } from './components/MovieGrid';
import { FunctionBar } from './components/FunctionBar';
import { themeAtom } from './atoms';
import { useAtomValue } from 'jotai';

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

  const theme = useAtomValue(themeAtom)

  return (
    <div className={`main theme-${theme}`}>
      <div className='heading' style={{ width: '100%', display: 'flex' }}>
        <div className='heading-title' style={{ textAlign: 'left' }}>
          <h2>My  collection</h2>
          <p>View and manage your collection</p>
        </div>
        <FunctionBar
          addOneMovie={addOneMovie}
          addMultipleMovies={addMultipleMovies}
          remove4Movies={remove4Movies}
          resetToDefaultMovies={resetToDefaultMovies}
          movieData={movieData}
        />
      </div>

      <MovieGrid movieData={movieData} deleteMovie={deleteMovie} editMovie={editMovie} />
    </div>
  )
}

export default App
