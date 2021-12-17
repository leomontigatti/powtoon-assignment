import React from 'react'
import { Modal } from 'react-bootstrap'
import './CustomModal.css'

function CustomModal ({ movie, show, closeModal }) {
    
    const movieBackdropPath = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    const movieReleaseYear = movie.release_date.slice(0, 4)
    const movieCapitalizedTitle = movie.title.toUpperCase()
    const movieRatingStars = Math.round(movie.vote_average) * 10

    return (
        <Modal show={show} onHide={closeModal} size="lg" centered>
            <Modal.Body style={{ 
                backgroundImage: `url(${movieBackdropPath})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                filter: "blur(5px)",
                WebkitFilter: "blur(5px)"
            }}>
            </Modal.Body>
            <div className="modalText">
                <p className="h2">{movieCapitalizedTitle}</p>
                <div className="stars-outer">
                    <div className="stars-inner" style={{
                        width: movieRatingStars
                    }}>
                    </div>
                </div>
                <hr />
                <div>
                    <p>
                        <span>
                            <i className="fas fa-calendar-week"></i>
                        </span> {movieReleaseYear}
                    </p>
                </div>  
                <p>Original title: {movie.original_title}</p>
                <p>{movie.overview}</p>
            </div>
        </Modal>
    )
}

export { CustomModal }