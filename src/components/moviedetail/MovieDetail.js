import React, { useState, useEffect } from "react";
import { fetchCast, fetchMovieDetail, fetchMovieVideos, fetchSimilarMovies } from "../../service";
import * as s from "./styled";
import Button from "../styled_components/Button";
import Flex from '../styled_components/Flex';
import Modal from "react-modal";
import ReactPlayer from "react-player";

export default function MovieDetail({ match }) {
  let params = match.params;
  let genres = [];
  const [detail, setDetail] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showTrailer, setShowTrailer] = useState([]);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      setShowTrailer(await fetchMovieVideos(params.id));
      setCast(await fetchCast(params.id));
      setSimilarMovies(await fetchSimilarMovies(params.id));
    };
    fetchAPI();
  }, [params.id]);

  genres = detail.genres;

  const TrailerModal = (props) => {
    const YoutubeUrl = "https://www.youtube.com/embed/";
    return (
      <Modal {...props} isOpen={isOpen} style={s.ModalStyle}>
        <h2>{detail.title}</h2>
        <s.BtnClose onClick={() => setIsOpen(false)}>X</s.BtnClose>
        <ReactPlayer
          url={YoutubeUrl + showTrailer.key}
          playing
          width="100%"
        ></ReactPlayer>
      </Modal>
    );
  };

  let genresList;
  if (genres) {
      genresList = genres.map((g) => {
        return (<Button key={g.id}>{g.name}</Button>)
      });
  };

const displayCast = cast.slice(0,6).map((c) => {
    return (<div key={c.id}>
        <s.SMovieImg src={c.img} alt={c.name} /><p>{c.name}</p></div>)
})  

const displaySimilarMovies = similarMovies.slice(0,6).map((i)=> {
    return (
        <div key={i.id}>
            <a href={i.id}>
            <s.SMovieImg src={i.poster} alt={i.title} />
                <p>{i.title}</p>
            </a>
             <p>{i.rating}</p>
        </div> )
})

  return (
    <s.Article>
      <s.Img
        src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
        alt={detail.title}
      />
      <h1>Title: {detail.title}</h1>
      <button onClick={() => setIsOpen(true)}>Watch Trailer</button>
      <TrailerModal />
      <p>{genresList}</p>
      <p>Rating: {detail.vote_average}</p>
      <p>{detail.overview}</p>
      <Flex justify={"space-evently"} align={"center"}>{displayCast}</Flex>
      <Flex justify={"space-evently"} align={"center"}>{displaySimilarMovies}</Flex>
    </s.Article>
    
  );
}
