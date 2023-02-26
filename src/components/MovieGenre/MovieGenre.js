const MovieGenre = ({genre, sortByGenre}) => {
    const {id, name}=genre

    return (
        <div onClick={()=>sortByGenre(`${id}`)} className={"genre"}>
            {name}
        </div>
    );
};

export {MovieGenre};