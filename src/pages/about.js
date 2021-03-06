import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Title from '../components/Title';
import Cv from '../assets/daniel_cv.pdf';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import SEO from '../components/SEO';
import AbtImg from '../assets/danny-img.jpeg';

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { abt, info, stack } = nodes[0];
  return (
    <Layout>
      <SEO title='About' description='This is about me page' />
      <section className='about-page'>
        <div className='section-center about-center'>
          <img src={AbtImg} className='about-img' alt='About Daniel' />
          <article className='about-text'>
            <Title title={abt} />
            <p>{info}</p>
            <div className='about-stack'>
              {stack.map((item) => {
                return <span key={item.id}>{item.name}</span>;
              })}
            </div>
            <div className='cv'>
              <a href={Cv} className='btn' download>
                Download CV{' '}
                <span>
                  <FaCloudDownloadAlt />
                </span>
              </a>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          name
        }
        abt
        info
      }
    }
  }
`;

export default About;
