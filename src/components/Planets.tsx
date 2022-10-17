import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { PacmanLoader } from 'react-spinners'
import { Planet } from '../types/PlanetTypes'
import PlanetCard from './PlanetCard'
import { fetchPlanets } from '../fetchers/FetchPlanets'

const Planets = () => {
  // fetchPlanets is the async function that fetches the data
  const { isLoading, isError, data } = useQuery(['planets', 'planets'], () =>
    fetchPlanets('planets'),
  )

  if (isLoading)
    return (
      <div className='mt-10 grid place-items-center'>
        <PacmanLoader color='#00BFFF' />
      </div>
    )

  if (isError)
    return (
      <div className='mt-10 grid place-items-center'>
        <h1 className='text-4xl text-red-500'>Error fetching data</h1>
      </div>
    )

  // return if successful
  return (
    <>
      <h2>Planets</h2>
      <div>
        {data.results.map((planet: Planet) => (
          <PlanetCard key={planet.name} {...planet} />
        ))}
      </div>
    </>
  )
}

export default Planets
