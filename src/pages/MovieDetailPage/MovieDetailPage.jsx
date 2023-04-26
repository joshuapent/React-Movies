import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetailPage({movies}) {
  const { movieName } = useParams();
  return (
    <div>
      { movies.filter(movie => movie.title === movieName).map((movie) => (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.posterPath} alt="" className="MovieCardBG" />
          <h2>Release Date: {movie.releaseDate}</h2>
          <h3>Cast: {movie.cast.join(', ')}</h3>
        </div>
      ))}
    </div>
  )
}

export default MovieDetailPage