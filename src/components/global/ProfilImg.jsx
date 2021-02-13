import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ProfilImgWrapper = styled(Img)`
  border-radius: 50%;
  border: 5px solid ${themeGet('color.default', '#454360')};
`;

const ProfilImg = () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    query ProfilPicture {
      file(name: { eq: "profil" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <ProfilImgWrapper
      fixed={data.file.childImageSharp.fixed}
      objectFit="cover"
      objectPosition="50% 50%"
      alt={intl.formatMessage({ id: 'about.name' })}
    />
  );
};

export default ProfilImg;
