import React from 'react'

function MovieCard(props) {
  return (
    <div>
        <h1>{props.movie.title}</h1>
        <br />
    </div>
  )
}

export default MovieCard