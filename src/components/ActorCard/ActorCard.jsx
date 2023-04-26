import React from 'react'

function ActorCard({actor}) {

  return (

    <div className="actor-card" style={{backgroundImage: "url('https://picsum.photos/id/200/200')"}}>
        <h1>{actor}</h1>
        <br />
    </div>
  )
}

export default ActorCard