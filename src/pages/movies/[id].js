import {
  getMovieDetail,
  getSimilarMovies,
  getMovieCast,
} from "../../../helper";

import Image from "next/image";
import Card from "@/components/movieDetail/card";
import ScrollContainer from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

const MovieDetail = ({ detail, similars, creadits }) => {
  const genres = detail.genres.map((item) => <p key={item.id}>{item.name}</p>);
  const coutnries = detail.production_countries.map((item) => (
    <p key={item.iso_3166_1}>{item.name}</p>
  ));
  const languages = detail.spoken_languages.map((item) => (
    <p key={item.iso_639_1}>{item.english_name}</p>
  ));
  const director = creadits.crew
    .filter((item) => item.job === "Director")
    .map((item) => <span key={item.id}>{item.name}</span>);

  const cinematograph = creadits.crew
    .filter((item) => item.job === "Director of Photography")
    .map((item) => <span key={item.id}>{item.name}</span>);

  const producer = creadits.crew
    .filter((item) => item.job === "Producer")
    .map((item) => <span key={item.id}>{item.name}</span>);

  const similarCards = similars.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      year={item.release_date}
      rate={item.vote_average}
      imgPath={item.poster_path}
      genre="its will be ok"
      id={item.id}
    />
  ));

  const castElements = creadits.cast.map((item) => (
    <div key={item.id}>
      <span>{item.name}</span>
      <span>{item.character}</span>
    </div>
  ));

  return (
    <div>
      {detail.backdrop_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
          width={250}
          height={300}
          alt={detail.title}
          className=" rounded-t-md w-auto h-auto"
        />
      ) : null}

      <Image
        src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
        width={250}
        height={300}
        alt={detail.title}
        className=" rounded-t-md w-auto h-auto"
        priority
      />
      <p>{detail.title}</p>
      <p>{director}</p>
      <p>{cinematograph}</p>
      <p>Producer</p>
      <div>{genres}</div>
      <p>{detail.overview}</p>
      <div>{coutnries}</div>
      <p>{detail.release_date}</p>
      <p>{detail.runtime}</p>
      <div>{languages}</div>
      <p> {detail.vote_average}</p>
      <ScrollContainer className="flex gap-4 items-start h-auto overflow-x-scroll w-[100vw]	">
        {similarCards}
      </ScrollContainer>
      <ScrollContainer className="flex gap-4 items-start h-auto overflow-x-scroll w-[100vw]	">
        {castElements}
      </ScrollContainer>
    </div>
  );
};

export default MovieDetail;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const movieId = params.id;
  try {
    const detail = await getMovieDetail(movieId);
    const similars = await getSimilarMovies(movieId);
    const creadits = await getMovieCast(movieId);
    return {
      props: {
        detail,
        similars,
        creadits,
      },
    };
  } catch (error) {
    console.error(error);
  }
};
