import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { PacmanLoader } from 'react-spinners'
import { Person } from '../types/PersonTypes'
import { fetchPeople } from '../fetchers/FetchPeople'
import PersonCard from './PersonCard'

const Persons = () => {
  // fetchPersons is the async function that fetches the data
  // passing in the term 'people' to fetchPeople
  const { isLoading, isError, data } = useQuery(['Persons', 'people'], () => fetchPeople('people'))

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
      <div>
        {data.results.map((Person: Person) => (
          <PersonCard key={Person.name} {...Person} />
        ))}
      </div>
    </>
  )
}

export default Persons
