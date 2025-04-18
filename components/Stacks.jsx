import { stacks, designtech } from '@/public/data/stacks'
import Stack from './Stack'

const Stacks = () => {
  return (
    <>
    <section className='stack'>
      <h3 className='h3 stack-title'>My Tech Stack</h3>

      <ul className='grid grid-cols-2 gap-5 my-10 lg:grid-cols-6 md:grid-cols-3'>
        {stacks.map((stack, i) => (
          <Stack key={i} stack={stack} />
        ))}
      </ul>
    </section>
    <section className='stack'>
        <h3 className='h3 stack-title'>File to code</h3>
        <ul className='grid grid-cols-2 gap-5 my-10 lg:grid-cols-6 md:grid-cols-3'>
          {designtech.map((tool, i) => (
            <Stack key={i} stack={tool} />
          ))}
        </ul>
      </section>
    </>
  )
}

export default Stacks
