import React from 'react';
import { ZoomIn } from 'react-feather';
import Img from 'gatsby-image';
import PortfolioItemWrapper, {
  PortfolioCategory,
  PortfolioTitle,
  PortfolioButton,
  PortfolioDetails,
  PortfolioThumb,
  PortfolioMask,
} from './PortfolioItem.style';

const PortfolioItem = ({ title, category, image }) => (
  <PortfolioItemWrapper className="shadow-dark">
    <PortfolioDetails>
      <PortfolioCategory>{category}</PortfolioCategory>
      <PortfolioTitle>{title}</PortfolioTitle>
      <PortfolioButton>
        <ZoomIn size={25} />
      </PortfolioButton>
    </PortfolioDetails>
    <PortfolioThumb>
      <Img fluid={image} alt={title} />
      <PortfolioMask />
    </PortfolioThumb>
  </PortfolioItemWrapper>
);

export default PortfolioItem;
