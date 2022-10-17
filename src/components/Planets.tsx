import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { PacmanLoader } from 'react-spinners'
import { Planet } from '../types/PlanetTypes'
import PlanetCard from './PlanetCard'
import { FetchData } from '../fetchers/FetchData'

const Planets = () => {
  // state to store the page number
  const [page, setPage] = React.useState(1)

  // parameters for the fetchPlanets function
  const fetchDataParams = {
    term: 'planets',
    page: page,
  }

  // fetchPlanets is the async function that fetches the data
  const { isLoading, isError, data } = useQuery(['planets', fetchDataParams], () => FetchData(fetchDataParams))

  console.log('data', data)

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
      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>
      <div>
        {data.results.map((planet: any) => (
          <PlanetCard key={planet.name} {...planet} />
        ))}
      </div>
    </>
  )
}

export default Planets
