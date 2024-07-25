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
  query getMovie($input:){
    movie(){
        id
        name
    }
  }
`;

function Movies() {
  const [inputText, setInputText] = useState("");
  const { data, loading, error } = useQuery(QUERY_ALL_MOVIES);
  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;
  const [
    getMovie,
    { data: movieData, error: movieError, loading: movieLoaing },
  ] = useLazyQuery(QUERY_ALL_MOVIES);
  console.log(data);

  const handleSearchBtn = () => {};
  return (
    <div>
      <h1>List of Movies</h1>
      <ul>
        {data &&
          data.movies.map((movie) => <li key={movie.id}>{movie.name}</li>)}
      </ul>
      <h1>search movie and its details</h1>
      <input
        type="text"
        className=""
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button type="button" onClick={handleSearchBtn}>
        search
      </button>
    </div>
  );
}

export default Movies;
