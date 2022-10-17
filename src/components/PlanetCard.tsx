import React from 'react'
import { Planet } from '../types/RickAndMortyTypes'

const PlanetCard = (planet: Planet) => {
  return (
    <>
      <div className='m-10 w-80'>
        <div className='rounded-lg border bg-sand px-4 pt-8 pb-10 shadow-lg'>
          <h1 className='my-1 text-center text-xl font-bold leading-8 text-gray-900'>
            {planet.name}
          </h1>
          <ul className='mt-3 divide-y rounded bg-lightSand py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow'>
            <li className='flex items-center py-3 text-sm'>
              <span>Type</span>
              <span className='ml-auto'>
                <span className='rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700'>
                  {planet.type}
                </span>
              </span>
            </li>
            <li className='flex items-center py-3 text-sm'>
              <span>Residents</span>
              <span className='ml-auto'>{planet.residents.length}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PlanetCard
