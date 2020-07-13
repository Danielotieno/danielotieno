import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import SocialLinks from '../constants/socialLinks';

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
            <span>Hello I'm</span>
          </div>
          <div>
            <h1>Daniel Otieno</h1>
            <h4>🔥 Software Developer</h4>
            <Link to='/contact' className='btn'>
              Contact Me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className='hero-img' />
      </div>
    </header>
  );
};

export default Hero;
