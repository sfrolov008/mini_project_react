import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {FaAngleLeft, FaAngleRight, FaSistrix} from "react-icons/fa"

import {movieActions} from "../../redux";
import {searchValidator} from "../../validators/searchValidator";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {MovieGenres} from "../MovieGenres/MovieGenres";

const MoviesList = () => {
    const {movies} = useSelector(state => state.movies);
    const [queryParams, setQueryParams] = useSearchParams({page: '1', query: '', with_genres: ''});
    const dispatch = useDispatch();
    const [searchState, setSearchState] = useState();
    const [genreState, setGenreState] = useState();
    const {handleSubmit, reset, register} = useForm({
        mode: 'all',
        resolver: joiResolver(searchValidator)
    });

    const searchMovie = (data) => {
        setQueryParams({query: data.query, page: '1'})
        setSearchState(data)
        reset()
    }

    const sortByGenre = (id) => {
        setQueryParams({with_genres: id, page: '1'})
        setGenreState(id)
    }

    useEffect(() => {
        if (searchState) {
            dispatch(movieActions.searchMovie({query: queryParams.get('query'), page: queryParams.get('page')}))
        } else if (genreState) {
            dispatch(movieActions.getAllMovies({
                with_genres: queryParams.get('with_genres'),
                page: queryParams.get('page')
            }))
        } else {
            dispatch(movieActions.getAllMovies({page: queryParams.get('page')}))
        }
    }, [dispatch, queryParams, searchState, genreState])

    const next = () => setQueryParams(q => ({
        query: queryParams.get('query'),
        with_genres: queryParams.get('with_genres'),
        page: +queryParams.get('page') + 1
    }))
    const prev = () => setQueryParams(query => ({
        query: queryParams.get('query'),
        with_genres: queryParams.get('with_genres'),
        page: +queryParams.get('page') - 1
    }))

    return (<div className={"df fdc rg30"}>
        <div className={"search_block df aic jcfe"}>
            <form className={"search_form df aic jcsb"} onSubmit={handleSubmit(searchMovie)}>
                <input className={"search_input w80 h100"} type="text" {...register('query')}/>
                <button className={"search_button w20 h100"}><FaSistrix className={"FaSistrix"}/></button>
            </form>
        </div>
        <div>
            <MovieGenres sortByGenre={sortByGenre}/>
        </div>
        <div className={"movie_list_nav h50 df aic jcsa"}>
            <button disabled={(queryParams.get('page') <= 1)} onClick={prev}><FaAngleLeft/></button>
            <button disabled={(queryParams.get('page') >= 500)} onClick={next}><FaAngleRight/></button>
        </div>
        <div className={"df fw jcc aic rg30 cg30"}>
            {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
        <div className={"movie_list_nav h50 df aic jcsa"}>
            <button disabled={(queryParams.get('page') <= 1)} onClick={prev}><FaAngleLeft/></button>
            <button disabled={(queryParams.get('page') >= 500)} onClick={next}><FaAngleRight/></button>
        </div>
    </div>);
};

export {MoviesList};