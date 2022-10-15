import React from 'react'
import { Planet } from '../types/PlanetTypes'

const PlanetCard = (planet: Planet) => {
  return (
    <div className='py-4 pyx-8 bg-sand my-8 rounded-md text-darkBlue'>
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  )
}

export default PlanetCard
