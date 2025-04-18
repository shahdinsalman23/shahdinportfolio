const Certification = () => {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <ion-icon name='book-outline'></ion-icon>
        </div>

        <h3 className='h3'>Certification</h3>
      </div>

      <ol className='timeline-list'>
        <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
          Certified Cloud Applied Generative AI Engineer | PIAIC
          </h4>

          <span className='text-sm mb-2'>2023 — 2024</span>

          {/* <p className='timeline-text'>
            Emboldened in several disciplines including project management,
            business operations and product design.
          </p> */}
        </li>

        <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
          CPISM | Aptech Learning Center
          </h4>

          <span className='text-sm mb-2'>2020 - 2023</span>

          {/* <p className='timeline-text'>
            Partaken courses in frontend web development with React.js and
            backend web development with Ruby on Rails.
          </p> */}
        </li>
      </ol>
    </section>
  )
}

export default Certification
