import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import PortfolioItem from './PortfolioItem';

const Portfolio = ({ portfolio }) => {
  const { category, title, image, popupLink, link } = portfolio;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };

  const handleIcon = () => {
    if (link) {
      return <i className="icon-link" />;
    }
    if (popupLink) {
      if (popupLink.length > 1) {
        if (popupLink.toString().match(/youtube/g)) {
          return <i className="icon-camrecorder" />;
        }
        return <i className="icon-picture" />;
      }
      if (popupLink.toString().match(/youtube/g)) {
        return <i className="icon-camrecorder" />;
      }
      return <i className="icon-magnifier-add" />;
    }
    return <i className="icon-magnifier-add" />;
  };

  return (
    <>
      {/* <a href={link || '!#'} className="work-image" onClick={handleLightbox}> */}
      <PortfolioItem title={title} category={category} image={image.childImageSharp.fluid} />
      {/* <div className="portfolio-item rounded shadow-dark">
          <div className="details">
            <span className="term text-capitalize">{category}</span>
            <h4 className="title">{title}</h4>
            <span className="more-button">{handleIcon()}</span>
          </div>
          <div className="thumb">
            <img src={image} alt="Portfolio-title" />
            <div className="mask" />
          </div>
        </div> */}
      {/* </a> */}
      {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
    </>
  );
};

export default Portfolio;
