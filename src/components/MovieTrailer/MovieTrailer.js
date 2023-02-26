import {useEffect, useState} from "react";
import YouTube from "react-youtube";

import {moviesService} from "../../services";
import {urls} from "../../configs";

const MovieTrailer = ({id}) => {
    const [state, setState] = useState();

    const getTrailer = async (id) => {
        const {data} = await moviesService.getMovieByID(`${id}${urls.videos}`)
        if (data && data.results) {
            const trailer = data.results.find(item => item.name === "Official Trailer")
            setState(trailer ? trailer : data.results[0])
        }
    }

    useEffect(() => {
        getTrailer(id)
    }, [id])

    return (
        <div className={"player_block w80"}>
            {state &&
                <>
                    <YouTube
                        className={"player"}
                        videoId={state.key}
                        opts={
                            {   width: '100%',
                                height: '100%',
                                playerVars: {
                                    autoplay: 0,
                                    controls: 1,
                                    cc_load_policy: 0,
                                    fs: 0,
                                    iv_load_policy: 0,
                                    modestbranding: 0,
                                    rel: 0,
                                    showinfo: 1,
                                },
                            }
                        }
                    />
                </>
            }
        </div>
    );
};

export {MovieTrailer};