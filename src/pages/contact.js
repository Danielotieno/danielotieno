import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const contact = () => {
  return (
    <Layout>
      <SEO title='Contact' description='Contact Me page' />
      <section className='contact-page'>
        <article className='contact-form'>
          <h3>Contact Me</h3>
          <form action='https://formspree.io/xvowvoen' method='POST'>
            <div className='form-group'>
              <input
                type='text'
                name='Full Name'
                className='form-control'
                placeholder='Full Name'
                required
              />
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Email'
                required
              />
              <textarea
                name='Message'
                rows='6'
                className='form-control'
                placeholder='Message'
                required></textarea>
            </div>
            <button type='submit' className='submit-btn btn'>
              Send Message
            </button>
          </form>
        </article>
      </section>
    </Layout>
  );
};

export default contact;
