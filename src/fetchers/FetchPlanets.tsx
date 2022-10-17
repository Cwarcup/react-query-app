import { PlanetsData } from '../types/PlanetsFetchType'

export const fetchPlanets = async (term: string): Promise<PlanetsData> => {
  const res = await fetch(`https://swapi.dev/api/${term}/`)
  return res.json()
}
