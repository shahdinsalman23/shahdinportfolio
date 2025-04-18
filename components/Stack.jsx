import Image from 'next/image'

const Stack = ({ stack }) => {
  const { title, url } = stack
  return (
    <li className='flex flex-col items-center stack-item'>
      <div className='stack-icon-box'>
        <Image height={40} width={40} src={url} alt={title} loading='lazy' />
      </div>
      <div className='stack-content-box'>
        <p className='text-sm font-semibold text-gray-300'>{title}</p>
      </div>
    </li>
  )
}

export default Stack
