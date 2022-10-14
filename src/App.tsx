import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Planets from './components/Planets'
import People from './components/People'
import Buttons from './TailwindComponents/Buttons'
import HeaderText from './TailwindComponents/HeaderText'

function App() {
  // passed to navbar to set the page
  const [page, setPage] = useState('planets')

  return (
    <div className='App'>
      <Navbar setPage={setPage} />
      <body>
        {page === 'planets' ? <Planets /> : <People />}
        <Buttons text={'test'} />
        <HeaderText text={'This is a header'} />
      </body>
    </div>
  )
}

export default App
