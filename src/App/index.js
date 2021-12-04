import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMovies } from './useMovies';
import { MovieList } from '../MovieList';
import { MovieListItem } from '../MovieListItem';
import { CustomModal } from '../CustomModal';

function App() {
    
    const {
        moviesList,
        moviePosterPath,
        handleClose,
        handleShow,
        showModal,
        selectedMovie,
    } = useMovies();

    return (
        <>
            <MovieList>
                {moviesList.map(movie => 
                    <MovieListItem
                        {...movie}
                        key={movie.id}
                        posterPath={moviePosterPath(movie.poster_path)}
                        openModal={() => handleShow(movie)}
                    />
                )}
            </MovieList>
            
            {showModal && (
                <CustomModal
                    closeModal={handleClose}
                    show={showModal}
                    movieInfo={selectedMovie}
                />
            )}
        </>
    );
};

export default App;