import { PersonFetchTypes } from '../types/PersonFetchTypes'

export const fetchPeople = async (term: string): Promise<PersonFetchTypes> => {
  const res = await fetch(`https://swapi.dev/api/${term}/`)
  return res.json()
}
