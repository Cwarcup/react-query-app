import React from 'react'

// accepts a string for props and returns a component
type Props = {
  text: string
}

const Buttons = ({ text }: Props) => {
  return (
    <button className='inline-flex items-center justify-center rounded-xl border border-transparent bg-slate-600 hover:bg-slate-300 px-5 py-3 font-medium'>
      {text}
    </button>
  )
}

export default Buttons
