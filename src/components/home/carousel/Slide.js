import { useState, useEffect } from "react";
import { fetchMovies } from "../../../service/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Slide() {
  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setNowPlaying(await fetchMovies());
    };
    fetchApi();
  }, []);

  const movies = nowPlaying.splice(0, 5).map((item, index) => {
    return (
      <div key={index}>
        <a href={`movie/${item.id}`}>
        <img src={item.backPoster} alt={item.title} />
        <p className="legend">{item.title}</p>
        </a>
      </div>
    );
  });
  return (
    <Carousel
    dynamicHeight={true}
    showThumbs={false}
    autoPlaystopOnHover
    interval={5000}
    infiniteLoop
    >
      {movies}
    </Carousel>
  );
}
