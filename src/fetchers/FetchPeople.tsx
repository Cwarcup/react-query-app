import { PlanetsData } from '../types/PlanetsFetchType'

export const fetchPeople = async (): Promise<any> => {
  const res = await fetch('https://swapi.dev/api/people/')
  return res.json()
}
