import React from 'react';
import { ZoomIn } from 'react-feather';
import PortfolioItemWrapper, {
  PortfolioCategory,
  PortfolioTitle,
  PortfolioButton,
  PortfolioDetails,
  PortfolioThumb,
  PortfolioMask,
} from './PortfolioItem.style';

const PortfolioItem = ({ item }) => {
  const { title, category, image } = item;

  return (
    <PortfolioItemWrapper className="shadow-dark">
      <PortfolioDetails>
        <PortfolioCategory>{category}</PortfolioCategory>
        <PortfolioTitle>{title}</PortfolioTitle>
        <PortfolioButton>
          <ZoomIn size={25} />
        </PortfolioButton>
      </PortfolioDetails>
      <PortfolioThumb>
        <img src={image} alt={title} />
        <PortfolioMask />
      </PortfolioThumb>
    </PortfolioItemWrapper>
  );
};

export default PortfolioItem;
