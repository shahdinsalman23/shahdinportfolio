'use client'
import { profile } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { PiXLogoBold } from 'react-icons/pi'

const SideNav = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <aside className={`sidebar ${toggle ? 'active' : null}`}>
      <div className='sidebar-info'>
        <div className='avatar-box'>
          <Image src={profile} alt='Shahdin Salman' />
        </div>

        <div className='info-content'>
          <h1 className='name' title='Shahdin Salman'>
            Shahdin Salman
          </h1>

          <p className='title'>Frontend developer</p>
        </div>

        <button
          className='info_more-btn'
          onClick={() => setToggle((prev) => !prev)}
        >
          <span>{toggle ? 'Hide' : 'Show'} Contacts</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='m19 9l-7 7l-7-7'
            ></path>
          </svg>
        </button>
      </div>

      <div className='sidebar-info_more'>
        <div className='separator'></div>

        <ul className='contacts-list'>
          {/* email */}
          <li className='contact-item'>
            <div className='icon-box'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 512 512'
              >
                <rect
                  width={416}
                  height={320}
                  x={48}
                  y={96}
                  fill='none'
                  stroke='#3d7e81'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={32}
                  rx={40}
                  ry={40}
                ></rect>
                <path
                  fill='none'
                  stroke='#3d7e81'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={32}
                  d='m112 160l144 112l144-112'
                ></path>
              </svg>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>E-mail</p>

              <Link
                target='_blank'
                href='mailto:shahdinsalman@gmail.com'
                className='contact-link'
              >
                shahdinsalman@gmail.com
              </Link>
            </div>
          </li>

          {/* phone */}
          <li className='contact-item'>
            <div className='icon-box'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 512 512'
              >
                <rect
                  width={256}
                  height={480}
                  x={128}
                  y={16}
                  fill='none'
                  stroke='#3d7e81'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={32}
                  rx={48}
                  ry={48}
                ></rect>
                <path
                  fill='none'
                  stroke='#3d7e81'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={32}
                  d='M176 16h24a8 8 0 0 1 8 8h0a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16h0a8 8 0 0 1 8-8h24'
                ></path>
              </svg>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Phone</p>

              <Link
                target='_blank'
                href='tel:+923172675955'
                className='contact-link'
              >
                +92 317 2675955
              </Link>
            </div>
          </li>

          {/* location */}
          <li className='contact-item'>
            <div className='icon-box'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='#3d7e81'
                  d='M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5'
                ></path>
              </svg>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Location</p>

              <Link
                target='_blank'
                href={'https://maps.app.goo.gl/CAnQ8X6x7ukZ2vMj8'}
                className='contact-link'
              >
                Karachi, Pakistan
              </Link>
            </div>
          </li>

          {/* github */}
          <li className='contact-item'>
            <div className='icon-box'>
            <svg stroke="#3d7e81" fill="#3d7e81" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>GitHub</p>

              <Link
                target='_blank'
                href={'https://github.com/shahdinsalman23'}
                className='contact-link'
              >
                shahdinsalman23
              </Link>
            </div>
          </li>
        </ul>

        <div className='separator'></div>

        <ul className='social-list'>
          <li className='social-item'>
            <Link
              target='_blank'
              href='https://www.linkedin.com/in/shahdinsalman/'
              className='social-link'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1.3em'
                height='1.3em'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7M11.1 24.4H7.6V13h3.5zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1m15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z'
                ></path>
              </svg>
            </Link>
          </li>

          <li className='social-item'>
            <Link
              target='_blank'
              href='https://x.com/ShahdinTweets'
              className='social-link'
            >
              <PiXLogoBold />
            </Link>
          </li>

          <li className='social-item'>
            <Link target='_blank' href='https://www.instagram.com/_shahdin23' className='social-link'>
             <svg xmlns="http://www.w3.org/2000/svg"  width='1.2em'
                height='1.2em' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SideNav
