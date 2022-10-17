import { Person } from './PersonTypes'

export type PersonFetchTypes = {
  count: number
  next: string
  previous: string | null
  results: Person[]
}
