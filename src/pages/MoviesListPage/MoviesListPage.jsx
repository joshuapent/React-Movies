import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'

function MoviesListPage(props) {
  return (
    <div>
        {props.movies.map((movie, idx) => (
          <div className="movie">
            < MovieCard movie={movie} key={movie + ' #' + idx} index={idx}/>
          </div>
        )) }
    </div>
  )
}

export default MoviesListPage