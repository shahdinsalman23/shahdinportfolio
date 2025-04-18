const Experiences = () => {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <ion-icon name='book-outline'></ion-icon>
        </div>

        <h3 className='h3'>Experience</h3>
      </div>

      <ol className='timeline-list'>
        <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
            Frontend Developer | Brandrevam
          </h4>

          <span className='text-sm mb-2'>May 2024 — Present</span>

          <p className='timeline-text'>
            Developed 5+ dynamic web applications using React.js and Next.js, focusing on scalability and optimal performance for 5,000+ monthly users.
          </p>
          <p className='timeline-text'>
            Integrated RESTful APIs to enable real-time data fetching and dynamic user interactions.
          </p>
          <p className='timeline-text'>
            Collaborated with UX/UI teams to translate Figma designs into responsive, pixel-perfect React components, reducing design-to-development time by 20%.
          </p>
        </li>

        <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
            Frontend Developer | Skysoft Tech
          </h4>

          <span className='text-sm mb-2'>Nov 2022 — Apr 2024</span>
          <p className='timeline-text'>
            Developed and maintained 15+ responsive web applications using HTML5, CSS3, and Bootstrap 5, improving user engagement by 40% through intuitive UI/UX design.
          </p>
          <p className='timeline-text'>
            Leveraged jQuery and JavaScript to enhance interactivity, reducing page load time by 25% through DOM optimization.
          </p>
          <p className='timeline-text'>
            Conducted cross-browser testing and resolved 95% of UI inconsistencies using Chrome DevTools and CSS Grid/Flexbox.
          </p>
        </li>

        {/* <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
            Tech Support | Luxury Internet Providers
          </h4>

          <span className='text-sm mb-2'>Jan 2021 — Sep 2021</span>

          <p className='timeline-text'>
            Designed a robust client support system for handling queries and
            onboarding processes leading to an increase in client satisfaction
            scores by 40%
          </p>
        </li> */}
      </ol>
    </section>
  )
}

export default Experiences
