import { Education, Experiences, Skills } from '@/components'
import Certification from '@/components/Certification'

const ResumePage = () => {
  return (
    <article className='resume active' data-page='resume'>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>

      {/* experience */}
      <Experiences />

      {/* education */}
      <Certification/>

      {/* education */}
      <Education />

      {/* skills */}
      {/* <Skills /> */}
    </article>
  )
}

export default ResumePage
