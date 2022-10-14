import React from 'react'

type Props = {
  text: string
}

const HeaderText = ({ text }: Props) => {
  return <div className='text-teal sans text-6xl tracking-wider'>{text}</div>
}

export default HeaderText
