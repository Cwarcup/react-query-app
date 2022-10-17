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
  const { isLoading, isError, data } = useQuery(['Persons', fetchDataParams], () =>
    FetchData(fetchDataParams),
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
      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>
      <div>
        {data.results.map((Person: any) => (
          <PersonCard key={Person.name} {...Person} />
        ))}
      </div>
    </>
  )
}

export default Persons
