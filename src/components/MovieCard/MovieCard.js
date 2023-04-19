import "./MovieCard.css";

const MovieCard = ({Poster, Title, Type, Year, Id, handleClick}) => {


        return (
            <div className="card-container" onClick={(e) => handleClick(e)}>
                    <img src={Poster} alt="poster-pics" style={{width: "20rem"}} />
                    <p>{Title}</p>
                    <span>{Year}</span>
            </div>
        )

}

export default MovieCard;