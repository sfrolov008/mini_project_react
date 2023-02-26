import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesPage} from "./pages";
import './App.css'

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<MoviesPage/>}/>
                <Route path={`movie/:id`} element={<MovieDetailsPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};