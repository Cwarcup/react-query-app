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
    term: 'location',
    page: page,
  }

  console.log('fetchDataParams', fetchDataParams)

  // fetchPlanets is the async function that fetches the data
  const { isLoading, isError, data } = useQuery(
    ['location', fetchDataParams],
    () => FetchData(fetchDataParams),
    {
      keepPreviousData: true,
    },
  )

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
      <button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>
        Previous Page
      </button>
      <span>{page}</span>
      <button
        onClick={() => setPage((old) => (!data || !data.info.next ? old : old + 1))}
        disabled={!data || !data.info.next}
      >
        Next Page
      </button>
      <div>
        {data.results.map((location: any) => (
          <PlanetCard key={location.name} {...location} />
        ))}
      </div>
    </>
  )
}

export default Planets
