import React from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from '../../components/MovieCard/MovieCard'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'


function MoviesListPage(props) {
  return (
    <div>
        {props.movies.map((movie, idx) => (
          <div className="movie">
            < MovieCard movie={movie} key={movie + ' #' + idx} index={idx}/>
            < MovieDetailPage />
          </div>
        )) }
    </div>
  )
}

export default MoviesListPage