import React from 'react'
import { Planet } from '../types/PlanetTypes'

const PlanetCard = (planet: Planet) => {
  return (
    <div className='py-4 pyx-8 bg-sand my-8 rounded-md text-darkBlue'>
      <h3>{planet.name}</h3>
      <p>Type: {planet.type}</p>
      <p>dimension: {planet.dimension}</p>
      <p>Number of known residents: {planet.residents.length}</p>
    </div>
  )
}

export default PlanetCard
