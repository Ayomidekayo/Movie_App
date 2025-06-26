import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='items-center bg-gray-600/35 text-neutral-400 py-2'>
      <div className='flex items-center justify-center gap-4 text-center'>
         <Link to="/">About</Link>
         <Link to="/">Linkdin </Link>
      </div>
      <p className='text-sm text-center'>Created by Kayode Ayomide</p>
    </footer>
  )
}

export default Footer