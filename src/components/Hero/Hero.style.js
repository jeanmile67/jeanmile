import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HeroWrapper = styled.section`
  background: ${themeGet('color.dark', '#353353')};
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
      color: #fff;
      font-size: 36px;
    }

    p {
      color: #fff;
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
        color: #fff;
      }
    }
  }

  &.light {
    background: #f9f9ff;

    .intro {
      h1 {
        color: $colordark;
      }

      span,
      p {
        color: $colordefault;
      }
    }

    .social-icons {
      li {
        a {
          color: $colordark;

          &:hover {
            color: $coloryellow;
          }
        }
      }
    }
  }
`;

export default HeroWrapper;
