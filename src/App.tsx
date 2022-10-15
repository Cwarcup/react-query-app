import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './components/Navbar'
import Planets from './components/Planets'
import People from './components/People'

function App() {
  const queryClient = new QueryClient()

  // passed to navbar to set the page
  const [page, setPage] = useState('planets')

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar setPage={setPage} />
      <div className='App'>{page === 'planets' ? <Planets /> : <People />}</div>
    </QueryClientProvider>
  )
}

export default App
