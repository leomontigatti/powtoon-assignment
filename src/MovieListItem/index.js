import './MovieListItem.css'
import { Col, Image } from 'react-bootstrap'

function MovieListItem ({ id, moviePoster, openModal }) {
    return (
        <Col xs={3} className='p-1'>
            <Image src={moviePoster}
                alt="" 
                onClick={openModal} 
                id={id} 
                className="MoviePoster"
                rounded
            />
        </Col>
    )
}

export { MovieListItem }