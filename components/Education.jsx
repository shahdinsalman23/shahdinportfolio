const Education = () => {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <ion-icon name='book-outline'></ion-icon>
        </div>

        <h3 className='h3'>Education</h3>
      </div>

      <ol className='timeline-list'>
        <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
            Intermediate | Govt Boys Degree College 
          </h4>

          <span className='text-sm mb-2'>2020 — 2022</span>

          {/* <p className='timeline-text'>
            Emboldened in several disciplines including project management,
            business operations and product design.
          </p> */}
        </li>

        <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
            Matriculation | Ghazali Public Grammer School
          </h4>

          <span className='text-sm mb-2'>2018 - 2020</span>

          {/* <p className='timeline-text'>
            Partaken courses in frontend web development with React.js and
            backend web development with Ruby on Rails.
          </p> */}
        </li>
      </ol>
    </section>
  )
}

export default Education
