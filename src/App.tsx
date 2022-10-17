import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Navbar from './components/Navbar'
import Planets from './components/Planets'
import CharactersPage from './components/CharactersPage'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const queryClient = new QueryClient()

  // passed to navbar to set the page
  const [page, setPage] = useState('planets')

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar setPage={setPage} />
        <div className='flex justify-center'>
          <Planets />
          <CharactersPage />
          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
