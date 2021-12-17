import 'bootstrap/dist/css/bootstrap.min.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { MovieList } from '../MovieList'
import { MovieListItem } from '../MovieListItem'
import { CustomModal } from '../CustomModal'
import { CustomSelect, SORT_TYPE_POPULARITY, SORT_TYPE_RATING, SORT_TYPE_NAME_ASCENDING, SORT_TYPE_NAME_DESCENDING } from '../CustomSelect'
import { CustomNavbar } from '../CustomNavbar'

function App() {
    
    const [selectedMovie, setSelectedMovie] = useState(null)
    const showModal = selectedMovie !== null
    const [movieList, setMovieList] = useState([])
    const [sortingOption, setSortingOption] = useState('')
    const [currentPage, setCurrentPage] = useState(4)

    useEffect(() => {
        async function firstThreePages () {
            const list = []
            for (let i = 1; i <= 3; i++) {
                let movies = await fetchMovies(i)
                list.push(...movies)
            }
            setMovieList(list)
        }
        firstThreePages()
    }, [])

    async function fetchMovies (pageNumber) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=54ffed57deb5a7a8688be4de3007e578&language=en-US&page=${pageNumber}`)
        const json = await response.json()
        return json.results
    }

    const handleNextPage = async () => {
        const movies = await fetchMovies(currentPage)
        setMovieList([...movieList, ...movies])
        setCurrentPage(currentPage + 1)
    }

    function handleChange (event) {
        const selectedValue = event.target.value
        setSortingOption(selectedValue)
    }

    const handleClose = () => {
        setSelectedMovie(null)
    }
    const handleShow = movie => {
        setSelectedMovie(movie)
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        })
    }

    return (
        <Container className="p-0">
            <CustomNavbar
                scrollToTop={scrollToTop}
            >
                <CustomSelect
                    onChange={handleChange}
                    sortBy={sortingOption}
                />
            </CustomNavbar>

            <MovieList>
                <InfiniteScroll
                    dataLength={movieList.length}
                    next={handleNextPage}
                    hasMore={true}
                    style={{overflow: 'visible'}}
                >
                    <Row>
                        {movieList.sort(sortingAlgorithms[sortingOption]).map(movie => 
                            <MovieListItem
                                key={movie.id}
                                moviePoster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                openModal={() => handleShow(movie)}
                            />
                        )}
                    </Row>
                </InfiniteScroll>
            </MovieList>

            {selectedMovie && 
                <CustomModal
                    show={showModal}
                    closeModal={handleClose}
                    movie={selectedMovie}
                />
            }
        </Container>
    )
}

const sortingAlgorithms = {
    [SORT_TYPE_RATING]: (a, b) =>  b.vote_average - a.vote_average,
    [SORT_TYPE_POPULARITY]: (a, b) => b.popularity - a.popularity,
    [SORT_TYPE_NAME_ASCENDING]: (a, b) => {
        var titleA = a.title.toLowerCase()
        var titleB = b.title.toLowerCase()

        if (titleA < titleB) {
            return -1
        } else if (titleA > titleB) {
            return 1
        } else {
            return 0
        }
    },
    [SORT_TYPE_NAME_DESCENDING]: (a, b) => {
        return sortingAlgorithms[SORT_TYPE_NAME_ASCENDING](a, b) * -1
    }
}

export default App