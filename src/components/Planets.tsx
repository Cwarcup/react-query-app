import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { PacmanLoader } from 'react-spinners'
import { Planet } from '../types/RickAndMortyTypes'
import PlanetCard from './PlanetCard'
import { FetchData } from '../fetchers/FetchData'
import Header from '../TailwindComponents/HeaderText'

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
    <div className='flex flex-col items-center'>
      <Header text='Planets' />
      <div className='flex w-80 justify-between mt-5'>
        <button
          className='bg-sand hover:bg-lightSand text-darkBlue font-bold py-2 px-4 rounded'
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <span>{page}</span>
        <button
          className='bg-sand hover:bg-lightSand text-darkBlue font-bold py-2 px-4 rounded'
          onClick={() => setPage((old) => (!data || !data.info.next ? old : old + 1))}
          disabled={!data || !data.info.next}
        >
          Next Page
        </button>
      </div>
      <div>
        {data.results.map((location: Planet, index: number) => (
          <PlanetCard key={`${location.name}-${index}`} {...location} />
        ))}
      </div>
    </div>
  )
}

export default Planets
