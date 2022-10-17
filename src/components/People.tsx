import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { PacmanLoader } from 'react-spinners'
import { FetchData } from '../fetchers/FetchData'
import PersonCard from './PersonCard'

const Persons = () => {
  const [page, setPage] = React.useState(1)

  // parameters to pass to the FetchData function
  const fetchDataParams = {
    term: 'people',
    page: page,
  }

  // FetchData is the async function that fetches the data
  // passing in the term 'people' to fetchPeople
  const { isLoading, isError, data } = useQuery(
    ['Persons', fetchDataParams],
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
      <h2>Persons</h2>
      <button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1}>
        Previous Page
      </button>
      <span>{page}</span>
      <button
        onClick={() => setPage((old) => (!data || !data.next ? old : old + 1))}
        disabled={!data || !data.next}
      >
        Next Page
      </button>
      <div>
        {data.results.map((Person: any) => (
          <PersonCard key={Person.name} {...Person} />
        ))}
      </div>
    </>
  )
}

export default Persons
