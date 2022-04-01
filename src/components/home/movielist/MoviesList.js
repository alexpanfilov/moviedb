import {React, useState, useEffect} from "react";
import {fetchMoviesByGenre, fetchGenre} from "../../../service";
import Flex from "../../styled_components/Flex";
import Button from "../../styled_components/Button";
import * as s from "./styled";
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

export default function MoviesList() {

    const [movieByGenre, setMovieByGenre] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setGenres(await fetchGenre());
            setMovieByGenre(await fetchMoviesByGenre(28));
        };
        fetchApi();
    }, []);
    const HandleGenreClick = async (genre_id) => {
        setMovieByGenre(await fetchMoviesByGenre(genre_id));
    };

    const displayGenres = genres.map((item, index) => {
        return (
            <Button
                key={index}
                type="button"
                onClick={() => {
                    HandleGenreClick(item.id)
                }}
            >
                {item.name}
            </Button>
        );
    });

    const getMovies = movieByGenre.slice(0, 6).map((item) => {
        return (
            <div key={item.id}>
                <Link to={`/movie/${item.id}`}>
                    <s.imgStyle
                        className={s.imgStyle}
                        src={item.poster}
                        alt={item.title}
                    />
                </Link>
                <p>Rank: {item.rating}</p>
                <ReactStars
                    half={true}
                    count={10}
                    value={item.rating}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                    isHalf={true}
                    color={"gray"}
                    edit={false}
                ></ReactStars>
            </div>
        );
    });
    return (
        <>
            <h3>Popular Movies</h3>
            {displayGenres}
            <Flex justify={"space-evently"} align={"center"}>
                {getMovies}
            </Flex>
        </>
    );
}
