import { Planet } from './PlanetTypes'

export type PlanetsData = {
  count: number
  next: string
  previous: string | null
  results: Planet[]
}
