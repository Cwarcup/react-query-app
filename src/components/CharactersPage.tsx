import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { PacmanLoader } from 'react-spinners'
import { FetchData } from '../fetchers/FetchData'
import CharacterCard from './CharacterCard'
import { Character } from '../types/RickAndMortyTypes'

const CharactersPage = () => {
  const [page, setPage] = React.useState(1)

  // parameters to pass to the FetchData function
  const fetchDataParams = {
    term: 'character',
    page: page,
  }

  // FetchData is the async function that fetches the data
  // passing in the term 'people' to fetchPeople
  const { isLoading, isError, data } = useQuery(
    ['characters', fetchDataParams],
    () => FetchData(fetchDataParams),
    {
      keepPreviousData: true,
    },
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
      <h2>Characters</h2>
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
        {data.results.map((character: Character, index: number) => (
          <CharacterCard key={`${character.name}-${index}`} {...character} />
        ))}
      </div>
    </>
  )
}

export default CharactersPage
