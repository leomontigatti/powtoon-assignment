import './MovieListItem.css';

function MovieListItem (props) {

    return (
        <img src={props.posterPath} 
            alt="" 
            onClick={props.openModal} 
            id={props.id} 
            className="MoviePoster"
        />
    );
};

export { MovieListItem };