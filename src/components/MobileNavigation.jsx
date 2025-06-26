import React from 'react'
import { NavLink } from 'react-router-dom'
import { mobileNavigation } from '../contants/Navigation'

const MobileNavigation = () => {
  return (
   <section className='sticky lg:hidden w-full bottom-0 left-0 right-0 bg-black/40 z-40 backdrop-blur-2xl '>
       <div className='  flex items-center justify-between h-full'>
        {mobileNavigation.map((nav, index) => {
            return (
            <NavLink key={nav.label + "mobileNavigation"} 
            to={nav.href}className={({isActive})=>`px-3 flex h-full items-center flex-col ${isActive &&"text-white"} justify-center py-2`}>
                <div className=''>
                   
                   <div className='text-2xl'>
                       {nav.icon}
                   </div>
                    <p className='text-sm'>{nav.label}</p>
                </div>
            </NavLink>
        )
       })}
     </div>
   </section>
  )
}

export default MobileNavigation