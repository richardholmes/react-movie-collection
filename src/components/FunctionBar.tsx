
import type { Movie } from '../types';
import { useThemeContext, } from './../ThemeContext';

type FunctionBarProps = {
    addOneMovie: () => void;
    addMultipleMovies: () => void;
    remove4Movies: () => void;
    resetToDefaultMovies: () => void;
    movieData: Movie[];
}

export const FunctionBar = ({ addOneMovie, addMultipleMovies, remove4Movies, resetToDefaultMovies, movieData }: FunctionBarProps) => {
    const { theme, setTheme } = useThemeContext();
    return (
        <div className='function-bar'>
            <div className='theme-toggle-bar'>
                <label>
                    <input
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={(e) => {
                            console.log('toggling theme');
                            setTheme(e.target.checked ? 'dark' : 'light')
                        }}
                    />
                    Use dark mode
                </label>
            </div>
            <div className='heading-buttons'>
                <button onClick={() => addOneMovie()}>
                    Add one movie
                </button>
                <button onClick={() => addMultipleMovies()}>
                    Add multiple movies
                </button>
                <button onClick={() => remove4Movies()} disabled={!movieData.length}>
                    Remove 4 movies
                </button>
                <button onClick={() => resetToDefaultMovies()} >
                    Reset to default movies
                </button>
            </div>
        </div>
    )
}
