import React from 'react'
import NavDropdown from './NavDropdown'

type AppProps = {
  setPage: (page: string) => void
}

const Navbar = ({ setPage }: AppProps) => {
  return (
    <header className='mb-2 px-4 shadow'>
      <div className='relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between'>
        <a className='flex items-center text-3xl font-black' href='/'>
          <span>Schwifty Facts</span>
        </a>
        <input className='peer hidden' type='checkbox' id='navbar-open' />
        <label
          className='absolute right-0 mt-1 cursor-pointer text-xl sm:hidden'
          htmlFor='navbar-open'
        >
          <NavDropdown />
        </label>
        <nav
          aria-label='Header Navigation'
          className='peer-checked:block hidden pl-2 py-6 sm:block sm:py-0'
        >
          <ul className='flex flex-col gap-y-4 sm:flex-row sm:gap-x-8'>
            <li onClick={() => setPage('people')}>
              <a className='text-teal hover:text-blue-600' href='#'>
                Characters
              </a>
            </li>
            <li onClick={() => setPage('planets')}>
              <a className='text-teal hover:text-blue-600' href='#'>
                Planets
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
