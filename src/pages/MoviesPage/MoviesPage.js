import {MoviesList} from "../../components";

const MoviesPage = () => {
    return (
        <div className={"main_block w100 df jcc"}>
            <div className={"main_content w95 mh100-vh df fdc rg30"}>
                    <MoviesList/>
            </div>
        </div>
    );
};

export {MoviesPage};