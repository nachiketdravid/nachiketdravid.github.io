import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from './icon';
import TextLink from './links/text-link';
import TechList from './tech-list';
import { mq } from './_shared/media';
import { StyledContentLink } from './_shared/styled-content-link';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { StyledImageContainer } from './_shared/styled-image-container';
import { contentBox, flexCenter, flexEnd } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';

const StyledFeaturedProject = styled.article`
  display: flex;
  grid-gap: 2.5rem;
  padding: 10px;
  margin : 10px;
  width: 90%;
  height:auto;

  ${mq.lt.md} {
    flex-direction : column;
  }

  ${mq.sm} {
    flex-direction : column;
    width:60%;
  }

`;

const StyledProjectInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  width:100%;
`;

const StyledDescription = styled.section`
  ${contentBox}
  max-height: 180px;
  padding: 10px;
  overflow: auto;

  ::-webkit-scrollbar-track {
    border: 1px solid #000;
    padding: 2px 0;
    background-color: #404040;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }


  > p {
    margin: 0;
    font-size: 0.8rem;
  }
`;

const StyledLinkContainer = styled.section`
  ${flexEnd};
  margin: 10px 0;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--body-color);

    &:hover {
      color: var(--primary-color);
    }
  }

  & svg {
    margin: 0 0.5rem;
  }
`;

const StyledArchiveContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;

const FeaturedProjectsContainer = styled.div`
  display: flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  width: 100%;
`;

const FeaturedProjects = ({ featured }) => {
  const featuredProjects = featured.map((project, index) => {
    const coverImage = project.frontmatter.cover_image ? project.frontmatter.cover_image.childImageSharp.fluid : null;

    const title = project.frontmatter.title;
    const demoLink = project.frontmatter.demo_link;
    const repoLink = project.frontmatter.repo_link;
    const demoLinkLabel = `featured project ${title} demo`;
    const repoLinkLabel = `featured project ${title} repo`;

    return (
      <StyledFeaturedProject key={title + index}>
        <a
          aria-label={demoLink ? demoLinkLabel : repoLink ? repoLinkLabel : `featured project ${title}`}
          href={demoLink ? demoLink : repoLink ? repoLink : '#'}
          target="_blank"
          rel="noopener"
        >
          {coverImage && (
            <StyledImageContainer hasHover>
              <Img fluid={coverImage} />
            </StyledImageContainer>
          )}
        </a>
        <StyledProjectInfoContainer>
          <StyledContentLink href={demoLink ? demoLink : repoLink ? repoLink : '#'} target="_blank" rel="noopener">
            <StyledH2>{title}</StyledH2>
          </StyledContentLink>
          <StyledDescription dangerouslySetInnerHTML={{ __html: project.html }} />
          <TechList techs={project.frontmatter.techs} />
          <StyledLinkContainer>
            {repoLink && (
              <a href={repoLink} target="_blank" rel="noopener" title="Repository Link" aria-label={repoLinkLabel}>
                <Icon icon="github" prefix="fab" />
              </a>
            )}
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener" title="Demo Link" aria-label={demoLinkLabel}>
                <Icon icon="external-link-alt" />
              </a>
            )}
          </StyledLinkContainer>
        </StyledProjectInfoContainer>
      </StyledFeaturedProject>
    );
  });

  return (
    <StyledSection id="projects">
      <StyledH1>Featured Projects</StyledH1>
      <FeaturedProjectsContainer>{featuredProjects}</FeaturedProjectsContainer>
      <StyledArchiveContainer>
        <TextLink label="View More Projects" link="/projects" />
      </StyledArchiveContainer>
    </StyledSection>
  );
};

FeaturedProjects.propTypes = {
  featured: PropTypes.array.isRequired,
};

export default FeaturedProjects;
