const ContactPage = () => (
  <article className='contact active' data-page='contact'>
    <header>
      <h2 className='h2 article-title'>Contact</h2>
    </header>

    <section className='mapbox' data-mapbox>
      <figure>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32335424496!2d36.84739685!3d-1.3032089500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1721638069036!5m2!1sen!2ske'
          width='400'
          height='300'
          loading='lazy'
        ></iframe>
      </figure>
    </section>

    <section className='contact-form'>
      <h3 className='h3 form-title'>Contact Form</h3>

      <form action='#' className='form' data-form>
        <div className='input-wrapper'>
          <input
            type='text'
            name='fullname'
            className='form-input'
            placeholder='Full name'
            required
            data-form-input
          />

          <input
            type='email'
            name='email'
            className='form-input'
            placeholder='Email address'
            required
            data-form-input
          />
        </div>

        <textarea
          name='message'
          className='form-input'
          placeholder='Your Message'
          required
          data-form-input
        ></textarea>

        <button className='form-btn' type='submit' disabled data-form-btn>
          <ion-icon name='paper-plane'></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
)

export default ContactPage
