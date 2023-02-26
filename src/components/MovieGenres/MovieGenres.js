import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {genresAction} from "../../redux/slices/genreSlice";
import {MovieGenre} from "../MovieGenre/MovieGenre";

const MovieGenres = ({sortByGenre}) => {

    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(genresAction.getAllGenres())
    }, [dispatch])

    return (
        <div>
            <div className={"genres_list df fw "}>
                {genres.map(genre => <MovieGenre key={genre.id} genre={genre} sortByGenre={sortByGenre}/>)}
            </div>
        </div>
    );
};

export {MovieGenres};