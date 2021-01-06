import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HeroWrapper = styled.section`
  position: relative;
  padding: 0;
  height: 100vh;
  min-height: 100vh;

  .intro {
    margin: auto;
    max-width: 540px;
    text-align: center;
    position: relative;
    z-index: 1;

    h1 {
      color: ${themeGet('color.white', '#fff')};
      font-size: 36px;
    }

    p {
      color: ${themeGet('color.white', '#fff')};
      font-size: 18px;
      margin-bottom: 0;
    }

    span {
      display: inline-block;

      label {
        margin-bottom: 0;

        &::after {
          content: attr(value);
        }
      }
    }
  }

  .social-icons {
    li {
      a {
        color: ${themeGet('color.white', '#ffffff')};
      }
    }
  }

  .parallax {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;

    .layer {
      position: absolute;
    }

    .p1 {
      left: 10%;
      top: 10%;
    }

    .p2 {
      left: 25%;
      top: 30%;
    }

    .p3 {
      left: 15%;
      bottom: 30%;
    }

    .p4 {
      left: 10%;
      bottom: 10%;
    }

    .p5 {
      left: 45%;
      top: 10%;
    }

    .p6 {
      left: 40%;
      bottom: 10%;
    }

    .p7 {
      top: 20%;
      right: 30%;
    }

    .p8 {
      right: 30%;
      bottom: 20%;
    }

    .p9 {
      right: 10%;
      top: 10%;
    }

    .p10 {
      top: 45%;
      right: 20%;
    }

    .p11 {
      bottom: 10%;
      right: 10%;
    }
  }

  .social-icons {
    li {
      &:not(:last-child) {
        margin-right: 1.5rem;
      }
      a {
        font-size: 21px;
      }
    }
    &.light {
      li {
        a:hover {
          color: $coloryellow;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    section.home {
      padding: 300px 0;
    }
    .portfolio-filter {
      display: none;
    }
    .portfolio-item,
    .blog-item {
      max-width: 360px;
      margin: auto;
    }
    .blog-wrapper {
      margin: -20px 0;
      .blog-item {
        margin-top: 15px;
        margin-bottom: 15px;
      }
    }
    section.home .cta h1 {
      font-size: 52px;
    }
    section.home .cta p {
      font-size: 18px;
    }
    .pf-filter-wrapper {
      display: block;
    }
    .triangle-top-sm {
      &:before {
        content: '';
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
        position: absolute;
        left: 50%;
        top: -10px;
        transform: translateX(-7.5px);
      }
    }
    body.dark {
      .triangle-top-sm {
        &:before {
          border-bottom-color: #302f4e;
        }
      }
    }
  }
`;

export const ScrollDown = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export default HeroWrapper;
