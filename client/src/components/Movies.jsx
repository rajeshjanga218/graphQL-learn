import React, { useState } from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";

const QUERY_ALL_MOVIES = gql`
  query getAllMovies {
    movies {
      id
      name
    }
  }
`;

const GET_MOVIE = gql`
  query getMovie($name: String) {
    movie(name: $name) {
      id
      name
    }
  }
`;

function Movies() {
  const [inputText, setInputText] = useState("");
  const { data, loading, error } = useQuery(QUERY_ALL_MOVIES);
  const [
    getMovieByName,
    { data: movieData, error: movieError, loading: movieLoaing },
  ] = useLazyQuery(GET_MOVIE);
  console.log(movieData);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  // const handleSearchBtn = () => {
  //   getMovieByName({
  //     variables: {
  //       name: inputText,
  //     },
  //   });
  // };
  return (
    <div>
      <h1>List of Movies</h1>
      <ul>
        {data &&
          data.movies.map((movie) => <li key={movie.id}>{movie.name}</li>)}
      </ul>
      <div>
        <h1>search movie and its details</h1>
        <input
          type="text"
          className=""
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            getMovieByName({
              variables: {
                name: inputText,
              },
            })
          }
        >
          search
        </button>
        <div>
          {movieData &&
            movieData.movie.map((item) => <div key={item.id}>{item.name}</div>)}
        </div>
      </div>
    </div>
  );
}

export default Movies;
