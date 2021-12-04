function MovieList (props) {
    
    return (
        <div className="container" id="movieList">
            { props.children }
        </div>
    );
};

export { MovieList };