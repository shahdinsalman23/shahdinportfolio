import { About, Services, Stacks } from '@/components'

export const dynamic = 'force-dynamic'

const HomePage = () => {
  return (
    // start here
    <article className='about active' data-page='about'>
      <About />
      <Services />
      <Stacks />
    </article>
  )
}

export default HomePage
