import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './components/Navbar'
import Planets from './components/Planets'
import People from './components/People'
import Buttons from './TailwindComponents/Buttons'
import HeaderText from './TailwindComponents/HeaderText'

function App() {
  const queryClient = new QueryClient()

  // passed to navbar to set the page
  const [page, setPage] = useState('planets')

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Navbar setPage={setPage} />
        {page === 'planets' ? <Planets /> : <People />}
        <Buttons text={'test'} />
        <HeaderText text={'This is a header'} />
      </div>
    </QueryClientProvider>
  )
}

export default App
