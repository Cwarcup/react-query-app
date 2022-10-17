import React from 'react'
import { Character } from '../types/RickAndMortyTypes'

const PersonCard = (character: Character) => {
  return (
    <div className='py-4 pyx-8 bg-sand my-8 rounded-md text-darkBlue'>
      <h3>{character.name}</h3>
    </div>
  )
}

export default PersonCard
