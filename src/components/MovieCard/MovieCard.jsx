import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard(props) {
  return (
    <div>
        <Link to={`/movies/${props.movie.title}`}>

        <h1>{props.movie.title}</h1>
        <img src={props.movie.posterPath} alt="" className="MovieCardBG" />
        <h2>{props.movie.releaseDate}</h2>
        </Link>
        <br />
    </div>
  )
}

export default MovieCard