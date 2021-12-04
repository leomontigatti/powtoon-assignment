import { useState } from 'react';
import movies from '../mocks/topRatedMovies.json';

function useMovies () {

    const moviesList = movies;

    const moviePosterPath = posterPath => 'https://image.tmdb.org/t/p/w500' + posterPath;

    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});

    const handleClose = () => setShowModal(false);
    const handleShow = movie => {
        setShowModal(true);
        setSelectedMovie(movie)
    };

    return {
        moviesList,
        moviePosterPath,
        handleClose,
        handleShow,
        showModal,
        selectedMovie,
    };
};

export { useMovies };