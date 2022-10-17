import React from 'react'
import { Person } from '../types/PersonTypes'

const PersonCard = (person: Person) => {
  return (
    <div className='py-4 pyx-8 bg-sand my-8 rounded-md text-darkBlue'>
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth year - {person.birth_year}</p>
    </div>
  )
}

export default PersonCard
