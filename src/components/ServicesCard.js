import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const ServicesCardStyles = styled.div`
  @media only screen and (min-width: 100px) {
    padding: 0.75rem 0;
    .services__img {
      width: 100%;

      margin: 0 auto -2rem auto;
      .gatsby-image-wrapper {
        width: 50%;
        margin: 0 auto;
      }
    }
    .services__content {
      background: var(--altColour);
      text-align: center;
      padding: 2.5rem 0;
      &__wrapper {
        width: 90%;
        margin: 0 auto;
        h2 {
          font-size: clamp(1.6rem, 50%, 2rem);
        }
        p {
          margin: 0.75rem 0;
        }
        a {
          button {
            margin-top: 1rem;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    padding: 1rem 0;
  }
`;

const ServicesCard = ({ img, title, text, link }) => (
  <ServicesCardStyles>
    <div className="services__img">
      <Image alt="Property Services" filename={img} />
    </div>
    <div className="services__content">
      <div className="services__content__wrapper">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to={link}>
          <button type="button">Find out more</button>
        </Link>
      </div>
    </div>
  </ServicesCardStyles>
);

export default ServicesCard;

// img = 'test.png';
// title = 'Electrical';
// text = 'lorem lorem lorem';
// link = '/test';
