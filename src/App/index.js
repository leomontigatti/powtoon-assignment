import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMovies } from './useMovies';
import { MovieList } from '../MovieList';
import { MovieListItem } from '../MovieListItem';
import { CustomModal } from '../CustomModal';
import { CustomSelect } from '../CustomSelect';

function App() {
    
    const {
        moviePosterPath,
        handleClose,
        handleShow,
        showModal,
        selectedMovie,
        handleChange,
        sortingOption,
        movieList,
    } = useMovies();

    
    
    return (
        <>
            <CustomSelect
                onChange={ handleChange }
                sortBy={ sortingOption }
            />

            <MovieList>
                {movieList.map(movie => 
                    <MovieListItem
                        key={ movie.id }
                        posterPath={ moviePosterPath(movie.poster_path) }
                        openModal={ () => handleShow(movie) }
                    />
                )}
            </MovieList>
            
            <CustomModal
                show={ showModal }
                closeModal={ handleClose }
                movieInfo={ selectedMovie }
            />
        </>
    );
};

export default App;