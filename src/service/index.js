import axios from "axios";

const apiKey = "d5ef5162cee1cf9a83dfdc232a7880f1";
const url = "https://api.themoviedb.org/3";
const nowPlayingUrl = `${url}/movie/now_playing`;
const topRatedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const posterUrl = "https://image.tmdb.org/t/p/original/";


export const fetchMovies = async () => {
  try {
    const { data } = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: "en-US",
        page: 1,
      },
    });
    const posterUrl = "https://image.tmdb.org/t/p/original/";
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularity"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: "en-US",
        page: 1,
      },
    });
    const modifiedData = data["genres"].map((g) => ({
      id: g["id"],
      name: g["name"],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchCast = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
      params: {
        api_key: apiKey,
      },
    });
    const modifiedData = data["cast"].map((c) => ({
      id: c["id"],
      character: c["character"],
      name: c["name"],
      img: "https://image.tmdb.org/t/p/w200" + c['profile_path']
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchMoviesByGenre = async (genre_id) => {
  try {
    const { data } = await axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: "en-US",
        page: 1,
        with_genres: genre_id,
      },
    });
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularity"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchPeople = async () => {
  try {
    const { data } = await axios.get(personUrl, {
      params: {
        api_key: apiKey
      },
    });
    const modifiedData = data["results"].map((p) => ({
      id: p["id"],
      popularity: p["popularity"],
      name: p["name"],
      profileImg: "https://image.tmdb.org/t/p/w200" + p["profile_path"],
      known: p["known_for_department"],
    }));
    return modifiedData;
  } catch (error) {}
};
export const fetchTopratedMovies = async () => {
  try {
    const { data } = await axios.get(topRatedUrl, {
      params: {
        api_key: apiKey,
        language: "en-US",
        page: 1,
      },
    });
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularity"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchMovieDetail = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: "en-US",
      },
    });
    return data;
  } catch (error) {}
};
export const fetchMovieVideos = async (id) => {
try {
  const {data} = await axios.get(`${movieUrl}/${id}/videos`, {
    params: {
      api_key: apiKey,
    }
  })
  return data['results'][0];
} catch (error) {
  
}
};

export const fetchSimilarMovies = async (id) => {
  try {
    const {data} = await axios.get(`${movieUrl}/${id}/similar`, {
      params: {
        api_key: apiKey,
        language: "en-US"
      }
    })
    const modifiedData = data["results"].map((m) => ({
      id: m["id"],
      backPoster: posterUrl + m["backdrop_path"],
      popularity: m["popularity"],
      title: m["title"],
      poster: posterUrl + m["poster_path"],
      overview: m["overview"],
      rating: m["vote_average"],
    }));
    return modifiedData;
  } catch (error) {
    
  }
};