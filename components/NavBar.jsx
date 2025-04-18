'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathName = usePathname()
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link
            href={'/'}
            className={`${pathName === '/' ? 'active' : null} navbar-link`}
          >
            About
          </Link>
        </li>

        <li className='navbar-item'>
          <Link
            href={'/resume'}
            className={`${
              pathName === '/resume' ? 'active' : null
            } navbar-link`}
          >
            Resume
          </Link>
        </li>

        <li className='navbar-item'>
          <Link
            href={'/portfolio'}
            className={`${
              pathName === '/portfolio' ? 'active' : null
            } navbar-link`}
          >
            Portfolio
          </Link>
        </li>

        {/* <li className='navbar-item'>
          <Link href={'/blog'} className={`${selected ? 'active': null} navbar-link`}>
            Blog
          </Link>
        </li> */}

        {/* <li className='navbar-item'>
          <Link href={'/contact'} className={`${selected ? 'active': null} navbar-link`}>
            Contact
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default NavBar
