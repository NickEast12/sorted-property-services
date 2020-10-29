import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const PageServicesStyles = styled.section`
  @media only screen and (min-width: 100px) {
    width: 90%;
    margin: 0 auto 2rem auto;
    border-radius: 3px;
    background: var(--white);
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
    .ps-img {
      width: 100%;
      height: 10rem;
      .gatsby-image-wrapper {
        height: 10rem;
        border-radius: 2px;
      }
    }
    .ps-content {
      padding: 1rem;
      color: var(--black);
      h3 {
        color: var(--altColour);
        font-size: 1.4rem;
      }
      h5 {
        color: var(--altColour);
        margin: 0.5rem 0;
        font-size: 0.9rem;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          font-size: 0.85rem;
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    width: 80%;
    .ps-content {
      padding: 2rem 1rem;
    }
  }
`;

const PageServices = ({ id, imgAlt, img, title, intro, list }) => {
  console.log(list);
  return (
    <PageServicesStyles id={id}>
      <div className="ps-img">
        <Image alt={imgAlt} filename={img} />
      </div>
      <div className="ps-content">
        <h3 className="underline-white">{title}</h3>
        <h5>{intro}</h5>
        <ul>
          {list.map((items) => (
            <li key={items}>
              <span> - </span>
              {items}
            </li>
          ))}
        </ul>
      </div>
    </PageServicesStyles>
  );
};

export default PageServices;
