import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './components/Navbar'
import Planets from './components/Planets'
import CharactersPage from './components/CharactersPage'

function App() {
  const queryClient = new QueryClient()

  // passed to navbar to set the page
  const [page, setPage] = useState('people')

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar setPage={setPage} />
        <div className='flex justify-center'>
          {page === 'planets' && <Planets />}
          {page === 'people' && <CharactersPage />}
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
