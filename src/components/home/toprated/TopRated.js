import { React, useEffect, useState } from "react";
import { fetchTopratedMovies } from "../../../service";
import * as s from "./styled";
import Flex from "../../styled_components/Flex";
import { Link } from "react-router-dom";

export default function TopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setTopRatedMovies(await fetchTopratedMovies());
    };
    fetchApi();
  }, []);
  const displayTopRated = topRatedMovies.slice(0, 6).map((item) => {
    return (
      <div key={item.id}>
          <Link to={`/movie/${item.id}`}>
        <s.imgStyle src={item.poster} alt={item.title} />
        <p>{item.title}</p>
        <p>{item.rating}</p>
        </Link>
      </div>
    );
  });
  return (
    <>
        <h3>Top Rated</h3>
      <Flex justify={"space-evenly"} align={"center"}>
          {displayTopRated}</Flex>
    </>
  );
}
