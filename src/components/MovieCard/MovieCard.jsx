import React from 'react'

function MovieCard(props) {
  return (
    <div>
        <h1>{props.movie.title}</h1>
        <img src={props.movie.posterPath} alt="" className="MovieCardBG" />
        <h2>{props.movie.releaseDate}</h2>
        <br />
    </div>
  )
}

export default MovieCard