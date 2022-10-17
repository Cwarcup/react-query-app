import { PersonFetchTypes } from '../types/PersonFetchTypes'
import { PlanetsData } from '../types/PlanetsFetchType'
import { ParamType } from '../types/FetchParamType'

export const FetchData = async (param: ParamType): Promise<any> => {
  const res = await fetch(`https://rickandmortyapi.com/api/${param.term}?page=${param.page}`)
  return res.json()
}
