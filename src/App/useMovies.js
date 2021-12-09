import { useState, useEffect } from 'react';

function useMovies () {

    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState({});
    const [movieList, setMovieList] = useState([])
    // const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=54ffed57deb5a7a8688be4de3007e578&language=en-US&page=1');
            const json = await response.json();
            setMovieList([...json.results])
          }
        fetchMovies()
    }, []);

    const moviePosterPath = posterPath => 'https://image.tmdb.org/t/p/w500' + posterPath;

    const handleClose = () => setShowModal(false);
    const handleShow = movie => {
        setShowModal(true);
        setSelectedMovie(movie)
    };

    const [sortingOption, setSortingOption] = useState('');
    
    function handleChange (event) {

        const selectedValue = event.target.value;
        setSortingOption(selectedValue);

        const sortByTitle = (a, b) => {
            var titleA = a.title.toLowerCase();
            var titleB = b.title.toLowerCase();

            if (titleA < titleB) {
                return -1;
            } else if (titleA > titleB) {
                return 1;
            } else {
                return 0;
            };
        };

        const sortByRating = (a, b) => a.vote_average - b.vote_average;

        if (selectedValue === 'nameAscending') {
            movieList.sort(sortByTitle);
        } else if (selectedValue === 'nameDescending') {
            movieList.sort(sortByTitle);
            movieList.reverse();
        } else if (selectedValue === 'rating') {
            movieList.sort(sortByRating);
            movieList.reverse();
        };
    };

    return {
        moviePosterPath,
        handleClose,
        handleShow,
        showModal,
        selectedMovie,
        handleChange,
        sortingOption,
        movieList
    };
};

export { useMovies };