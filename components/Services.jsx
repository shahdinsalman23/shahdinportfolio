import { services } from '@/public/data/services'
import Service from './Service'

const Services = () => {
  return (
    <section className='service'>
      <h3 className='h3 service-title'>What I'm Doing</h3>

      <ul className='service-list'>
        {services.map((service, i) => (
          <Service key={i} service={service} />
        ))}
      </ul>
    </section>
  )
}

export default Services
