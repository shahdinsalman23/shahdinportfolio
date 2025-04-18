import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project }) => {
  const { title, media, link, category } = project
  return (
    <li
      className='project-item active'
      data-filter-item
      data-category='applications'
    >
      <Link href={link} target='_blank'>
        <figure className='project-img'>
          <div className='project-item-icon-box'>
            <ion-icon name='eye-outline'></ion-icon>
          </div>

          <Image
            sizes='100vh'
            width={0}
            height={0}
            src={media}
            alt={title}
            loading='lazy'
          />
        </figure>

        <h3 className='project-title'>{title}</h3>

        <p className='project-category'>{category}</p>
      </Link>
    </li>
  )
}

export default Project
