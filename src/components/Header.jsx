import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import { navigation } from '../contants/Navigation'
import { Clapperboard, CircleUserRound } from 'lucide-react'

const Header = () => {
  const location = useLocation()
  const removeSpace = location?.search?.slice(3)?.split('%20')?.join(' ')
  const [searchInput, setSearchInput] = useState(removeSpace)
  const navigate = useNavigate()

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`)
    }
  }, [searchInput])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-black/70 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/">
          <Clapperboard className="w-7 h-7 text-white hover:animate-pulse duration-300" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 ml-8">
          {navigation.map((nav) => (
            <NavLink
              key={nav.label}
              to={nav.href}
              className={({ isActive }) =>
                `text-sm px-3 py-2 rounded transition duration-300 ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              {nav.label}
            </NavLink>
          ))}
        </nav>

        {/* Search and Profile */}
        <div className="flex items-center gap-4">
          <form
            onSubmit={handleSubmit}
            className="hidden lg:flex items-center bg-gray-700/80 px-3 py-1.5 rounded-full focus-within:ring-0"
          >
            <input
              type="text"
              placeholder="Search for Movies, TV Shows and more"
              className="bg-transparent text-white placeholder-gray-300 px-4 py-1 outline-none w-[300px] lg:w-[400px]"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button type="submit" className="text-white text-xl">
              <IoSearch />
            </button>
          </form>

          <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border border-gray-500 hover:border-white transition-all duration-300">
            <CircleUserRound className="w-full h-full text-white p-2 hover:animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
