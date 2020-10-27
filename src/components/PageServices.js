import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const PageServicesStyles = styled.div`
  width: 90%;
  margin: 0 auto 2rem auto;
  border-radius: 3px;
  background: var(--white);
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
      text-decoration: underline 2px var(--mainColour);
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
`;

const PageServices = ({ id, imgAlt, img, title, intro, list }) => {
  console.log(list);
  return (
    <PageServicesStyles id={id}>
      <div className="ps-img">
        <Image alt={imgAlt} filename={img} />
      </div>
      <div className="ps-content">
        <h3>{title}</h3>
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
