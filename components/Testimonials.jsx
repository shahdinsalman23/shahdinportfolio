import { avatar1, avatar2, avatar3, avatar4, iconQuote } from '@/public/images'
import Image from 'next/image'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <>
      {/* - testimonials */}
      <section className='testimonials'>
        <h3 className='h3 testimonials-title'>Testimonials</h3>

        <ul className='testimonials-list has-scrollbar'>
          <li className='testimonials-item'>
            <div className='content-card' data-testimonials-item>
              <figure className='testimonials-avatar-box'>
                <Image
                  src={avatar1}
                  alt='Daniel lewis'
                  width='60'
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className='h4 testimonials-item-title'
                data-testimonials-title
              >
                Daniel lewis
              </h4>

              <div className='testimonials-text' data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>

          <li className='testimonials-item'>
            <div className='content-card' data-testimonials-item>
              <figure className='testimonials-avatar-box'>
                <Image
                  src={avatar2}
                  alt='Jessica miller'
                  width='60'
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className='h4 testimonials-item-title'
                data-testimonials-title
              >
                Jessica miller
              </h4>

              <div className='testimonials-text' data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>

          <li className='testimonials-item'>
            <div className='content-card' data-testimonials-item>
              <figure className='testimonials-avatar-box'>
                <Image
                  src={avatar3}
                  alt='Emily evans'
                  width='60'
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className='h4 testimonials-item-title'
                data-testimonials-title
              >
                Emily evans
              </h4>

              <div className='testimonials-text' data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>

          <li className='testimonials-item'>
            <div className='content-card' data-testimonials-item>
              <figure className='testimonials-avatar-box'>
                <Image
                  src={avatar4}
                  alt='Henry william'
                  width='60'
                  data-testimonials-avatar
                />
              </figure>

              <h4
                className='h4 testimonials-item-title'
                data-testimonials-title
              >
                Henry william
              </h4>

              <div className='testimonials-text' data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* - testimonials modal */}
      <Testimonial />
    </>
  )
}

export default Testimonials
