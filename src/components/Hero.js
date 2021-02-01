import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';
import Typical from 'react-typical';

const profileImageQuery = graphql`
  {
    file(relativePath: { eq: "dp.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(profileImageQuery);
  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div className='span-heading'>
            <span>Hello &#128075;</span>
          </div>
          <div>
            <h1>Daniel Otieno</h1>
            <h4>
              I'm a{' '}
              <Typical
                steps={[
                  '🔥 Software Developer',
                  1000,
                  'Open Sourcer ✔️',
                  1000,
                  'Volunteer 🌱',
                  1000,
                  'Tech Evangelist 💻',
                  1000,
                  'YouTuber',
                  1000,
                ]}
                loop={Infinity}
                wrapper='b'
              />{' '}
            </h4>
            <Link to='/contact' className='btn'>
              Contact Me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className='hero-img' alt='Hero Daniel' />
      </div>
    </header>
  );
};

export default Hero;
