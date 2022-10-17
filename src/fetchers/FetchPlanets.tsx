import { PlanetsData } from '../types/PlanetsFetchType'

export const fetchPlanets = async (): Promise<PlanetsData> => {
  const res = await fetch('https://swapi.dev/api/planets/')
  return res.json()
}
