import {Link} from "react-router-dom";
import {FaUser} from "react-icons/fa"
import {SiKinopoisk} from "react-icons/si"
import {RxHalf2} from "react-icons/rx"

import {useTheme} from "../../hooks/useThemeHook";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

const Header = () => {
    const {theme, setTheme} = useTheme();
    const dispatch = useDispatch();

    const switchLight = () => setTheme('light')
    const switchDark = () => setTheme('dark')

    return (
        <div className={"header w100 df aic jcsb"}>
            <div className={"header_home w50 df aic"}>
                <Link to={'/'} onClick={dispatch(movieActions.getAllMovies())}><SiKinopoisk className={"SiKinopoisk"}/></Link>
            </div>
            <div className={"header_options w50 df aic jcfe cg30"}>
                <div className={"df jcc aic"} onClick={theme === 'light' ? switchDark : switchLight}><RxHalf2/></div>
                <div className={"df jcc aic"}><FaUser/></div>
            </div>
        </div>
    );
};

export {Header};