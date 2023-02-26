import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

import {movieDetailActions} from "../../redux/slices/movieDetailsSlice";
import {posterURL} from "../../configs";
import {MovieTrailer} from "../MovieTrailer/MovieTrailer";

const MovieDetails = () => {
    const {movieDetails} = useSelector(state => state.movieDetails);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch(movieDetailActions.getMovieByID(id))
    }, [dispatch, id])

    const {
        backdrop_path, poster_path, title, overview, release_date, runtime, budget, genres, vote_average
    } = movieDetails

    return (<div className={"df fdc aic rg30"}>
        {movieDetails && <div className={"movie_details w90 df jcc"}>
            <div className={"movie_poster w40 df fdc aife jcc"}>
                {poster_path && <img src={`${posterURL}/${poster_path}`} alt={title}/>}
            </div>
            <div className={"movie_desc w60 df fdc rg20"}>
                <h2>{title}</h2>
                <div className={"badge_block w100 df fw cg15 rg15"}>
                    {genres && genres.map(genre => <div className={"badge df jcc aic"}
                                                        key={genre.id}>{genre.name}</div>)}
                </div>
                <div className={"movie_overview"}>
                    <h4>Overview</h4>
                    <p>{overview}</p>
                </div>
                <div className={"backdrop_img"}>
                    {backdrop_path && <img src={`${posterURL}/${backdrop_path}`} alt={title}/>}
                </div>
                {vote_average && <div>
                    <StarRatings starDimension={'30'}
                                 starRatedColor="gold"
                                 rating={vote_average}
                                 numberOfStars={Math.ceil(vote_average)}
                    ></StarRatings>
                </div>}
                <div className={"desc_item_info w100 df fw cg30"}>
                    <div>
                        <h4>Release date</h4>
                        <p>{release_date}</p>
                    </div>
                    <div>
                        <h4>Runtime</h4>
                        <p>{runtime}</p>
                    </div>
                    <div>
                        <h4>Budget</h4>
                        <p>{budget}</p>
                    </div>
                </div>
            </div>
        </div>}
        <div className={"movie_player w90 df jcc"}><MovieTrailer id={id}/></div>
    </div>);
};

export {MovieDetails};