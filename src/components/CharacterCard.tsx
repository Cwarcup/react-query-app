import React from 'react'
import { Character } from '../types/RickAndMortyTypes'

const CharacterCard = (character: Character) => {
  console.log(character)
  return (
    <div className='mx-auto my-10 flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center'>
      <div className='shrink-0 my-4 md:mr-8 md:max-w-sm'>
        <img className='rounded-2xl' src={character.image} alt='' />
      </div>
      <div className='py- sm:py-8'>
        <a href='#' className='mb-6 block text-2xl font-medium text-gray-700'>
          {character.name}
        </a>
        <p className='mb-6 text-gray-500'>
          {character.status} - {character.species}
        </p>
        <div className='flex flex-col items-center'>
          <p className='ml-4 w-56'>
            <strong className='block font-medium text-gray-700'>
              Last known location: {character.location.name}
            </strong>
            <span className='text-sm text-gray-400'>Born: {character.origin.name}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
