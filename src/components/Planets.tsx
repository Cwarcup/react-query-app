import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Planet } from '../types/PlanetTypes'
import { BounceLoader } from 'react-spinners'

const Planets = () => {
  // fn to fetch data, returns a promise
  const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/planets/')
    return res.json()
  }

  // fetchPlanets is the async function that fetches the data
  const { isLoading, isError, data } = useQuery(['planets'], fetchPlanets)

  console.log(data)

  if (isLoading)
    return (
      <div>
        <BounceLoader color={'#00BFFF'} loading={isLoading} size={60} />
      </div>
    )

  if (isError) return <div>Error: An error has occurred.</div>

  return (
    <>
      <h2>Planets</h2>
      <div>
        {data.results.map((planet: Planet) => (
          <div key={planet.name}>
            <h3>{planet.name}</h3>
            <p>Population: {planet.population}</p>
            <p>Terrain: {planet.terrain}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Planets
