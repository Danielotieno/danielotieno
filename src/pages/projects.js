import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Projects from '../components/Projects';

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <section className='project-page'>
        <Projects projects={projects} title='All Projects' />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        live
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
  }
`;

export default ProjectsPage;
