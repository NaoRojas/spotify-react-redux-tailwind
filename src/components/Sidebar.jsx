import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'

import { logo } from '../assets'
import { links } from '../assets/constants'

const NavLinks = ({ handleClick }) => (
  <nav className="mt-10">
    {links.map((link, index) => (
      <NavLink
        to={link.to}
        key={link.name}
        className="flex flex-row justify-start items-center font-medium text-gray-400 hover:text-cyan-400 my-8"
        onClick={() => handleClick && handleClick()}
      >
        <link.icon className="w-6 h-6 mr-2" />
        {link.name}
      </NavLink>
    ))}
  </nav>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} className="w-full h-14 object-contain" alt="" />
        <NavLinks></NavLinks>
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className="w-6 h-6 text-white mr-2"
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-graient-to-tl
        from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition 
        ${mobileMenuOpen ? 'left-0' : '-left-full'}`}
      >
        <img
          src={logo}
          className="w-full h-14 object-contain select-none"
          alt=""
        />
        <NavLinks
          handleClick={() => {
            setMobileMenuOpen(false)
          }}
        ></NavLinks>
      </div>
    </>
  )
}
export default Sidebar
