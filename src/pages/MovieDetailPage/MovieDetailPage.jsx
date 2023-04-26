import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetailPage({movies}) {
  const { movieName } = useParams();
  console.log(movieName)
  console.log(movies)
  return (
    <div>
      { movies.filter(movie => movie.title === movieName).map((movie) => (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.posterPath} alt="" className="MovieCardBG" />
          <h2>{movie.releaseDate}</h2>
        </div>
      ))}
        <h1>heyo</h1>
    </div>
  )
}

export default MovieDetailPage