import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';
const Project = ({ description, github, live, image, stack, title }) => {
  return (
    <div className='blog'>
      <article>
        <Image fluid={image.childImageSharp.fluid} className='blog-img' />
        <div className='blog-card'>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className='blog-footer'>
            <div className='project-stack'>
              {stack.map((item) => {
                return <span key={item.id}>{item.name}</span>;
              })}
            </div>
            <div className='project-links'>
              <a href={github}>
                <FaGithubSquare className='project-icon' />
              </a>
              <a href={live}>
                <FaShareSquare className='project-icon' />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Project;
