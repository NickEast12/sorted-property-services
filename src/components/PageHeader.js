import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const PageHeaderStyles = styled.div`
  @media only screen and (min-width: 100px) {
    width: 100%;
    background: var(--mainColour);
    padding: 3rem 0;
    .header__content {
      text-align: center;
      padding: 0.25rem 0;
      h1 {
        color: var(--black);
      }
    }
    .header__img {
      width: 80%;
      margin: 0 auto;
      position: relative;
      img {
        position: absolute;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    position: relative;
    padding: 6rem 0;
    .header__content {
      text-align: left;
      width: 80%;
      margin: 0 auto;
    }
    .header__img {
      width: 50%;
      top: 0.5rem;
      right: 5rem;
      position: absolute;
    }
  }
  @media only screen and (min-width: 1024px) {
    .header__content {
      text-align: left;
      width: 75%;
      margin: 0 auto;
    }
    .header__img {
      width: 40%;
      top: 0.5rem;
      right: 5rem;
      position: absolute;
    }
  }
  @media only screen and (min-width: 1280px) {
    padding: 7rem 0;
    .header-wrap {
      width: 80%;
      max-width: var(--maxWidth);
      position: relative;
      margin: 0 auto;
      max-width: var(--pageMax);
    }
    .header__content {
      width: 100%;
      h1 {
        font-size: 2.5rem;
      }
    }
    .header__img {
      width: 40%;
      right: 0;
      top: -6rem;
    }
  }
`;

const PageHeader = ({ title, img }) => (
  <PageHeaderStyles>
    <div className="header-wrap">
      <div className="header__content">
        <h1>{title}</h1>
      </div>
      <div className="header__img">
        <Image alt="Property Services" filename={img} />
      </div>
    </div>
  </PageHeaderStyles>
);

export default PageHeader;
