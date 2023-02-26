import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

import {posterURL} from "../../configs";

const MoviesListCard = ({movie}) => {
    const {id, title, vote_average, poster_path} = movie

    return (
        <div className={"card"}>
            <Link className={"link"}  to={`/movie/${id}`}>
                {poster_path ?
                    <img className={"card_img"} src={`${posterURL}/${poster_path}`} alt={title}/>
                    : <div className={"card_no_img df aic jcc"}> Not found image </div>
                }
            </Link>
            <div className={"card_desc df fdc jcse"}>
                <h4>{title}</h4>
                <p>Rated:{vote_average}</p>
            </div>
            <div>
                <StarRatings
                    starDimension={'20'}
                    starRatedColor="gold"
                    rating={vote_average}
                    numberOfStars={Math.ceil(vote_average)}
                    starSpacing={'4'}
                ></StarRatings>
            </div>
        </div>
    );
};

export {MoviesListCard};