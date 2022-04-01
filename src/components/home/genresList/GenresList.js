import { React, useState, useEffect } from "react";
import { fetchGenre, fetchMoviesByGenre } from "../../../service/index";
import Flex from "../../styled_components/Flex";
import * as s from "./styled";

export default function GenresList() {
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  
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
      <s.BtnStyle
        key={index}
        type="button"
        onClick={() => {
          HandleGenreClick(item.id)
        }}
      >
        {item.name}
      </s.BtnStyle>
    );
  });
  return <Flex justify={"center"}>{displayGenres}</Flex>;
}
