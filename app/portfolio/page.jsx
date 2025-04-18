'use client'
import { useRef, useState } from 'react'

// assets
import { projects } from '@/public/data/projects'
import Project from '@/components/Project'
import { FilterItem } from '@/components'

const PortfolioPage = () => {
  const [selected, setSelected] = useState('All')
  const [filtered, setFiltered] = useState(projects)
  const filterSelectRef = useRef(null)

  const filterItems = (category) => {
    setSelected(category)
    if (category === 'All') {
      setFiltered(projects)
    } else {
      const newProjects = projects.filter(
        (project) => project.category === category
      )
      setFiltered(newProjects)
    }
  }

  const handleSelectItem = (e) => {
    const newSelected = e.currentTarget.textContent
    setSelected((prevSelected) => {
      // Call filterItems with the new selected value
      filterItems(newSelected)
      return newSelected // Return the new selected value
    })
    // Toggle the active class based on the new selection
    if (filterSelectRef.current) {
      filterSelectRef.current.classList.toggle('active')
    }
  }

  return (
    <article className='portfolio active'>
      <header>
        <h2 className='h2 article-title'>Portfolio</h2>
      </header>

      <section className='projects'>
        <ul className='filter-list'>
          {['All', 'Design', 'Development'].map((category) => (
            <FilterItem
              key={category}
              category={category}
              selected={selected}
              filterItems={filterItems}
            />
          ))}
        </ul>

        <div className='filter-select-box'>
          <button
            className='filter-select'
            ref={filterSelectRef}
            onClick={(e) => {
              e.target.classList.toggle('active')
            }}
          >
            <div className='select-value'>{selected}</div>

            <div className='select-icon'>
              <ion-icon name='chevron-down'></ion-icon>
            </div>
          </button>
          <ul className='select-list'>
            <li className='select-item'>
              <button onClick={handleSelectItem}>All</button>
            </li>

            <li className='select-item'>
              <button onClick={handleSelectItem}>Design</button>
            </li>

            <li className='select-item'>
              <button onClick={handleSelectItem}>Applications</button>
            </li>

            <li className='select-item'>
              <button onClick={handleSelectItem}>Development</button>
            </li>
          </ul>
        </div>

        <ul className='project-list'>
          {filtered.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </ul>
      </section>
    </article>
  )
}

export default PortfolioPage
