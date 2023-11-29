import React from 'react'
import'./css.css'

function DestinationCard({place}) {
    return (
        <div className='imgs'>
                <img src={place.img}></img>
                <h3>{place.destination}</h3>
                <p>{place.description} </p>

        </div>
    )
}

export default DestinationCard
