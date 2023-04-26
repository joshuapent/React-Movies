import React from 'react'
import ActorCard from '../../components/ActorCard/ActorCard'
import './ActorListPage.css'

function ActorListPage(props) {
  const castSet = new Set()
  props.movies.map((movie, idx) => (
    movie.cast.map((actor) => (
      castSet.add(actor)))
    ))
  const totalCast = Array.from(castSet)
  
  return (
    <div className="actorPage">
      {totalCast.map((actor) => (
        <div className="actor">
          < ActorCard actor={actor}/>
        </div>
      ))}
    </div>
  )
}

export default ActorListPage