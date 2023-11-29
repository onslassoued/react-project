import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Destination() {

    const {list}=useSelector(state=>state.placeReducer)

    const {id}=useParams()
  return (
    <div>
      <h3 className='ti'>{list[id].destination}</h3>
      <p className='des'>{list[id].description}</p>
      <div className='vd'>
      <iframe width="560" height="315" src={list[id].vdURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
      </div>
    </div>
  )
}

export default Destination
