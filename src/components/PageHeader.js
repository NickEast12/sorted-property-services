import React from 'react';
import styled from 'styled-components';
import Image from './Image';

const PageHeaderStyles = styled.div`
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
`;

const PageHeader = ({ title }) => {
  console.log('header');
  return (
    <PageHeaderStyles>
      <div className="header__content">
        <h1>{title}</h1>
      </div>
      <div className="header__img">
        <Image alt="Property Services" filename="background2.png" />
      </div>
    </PageHeaderStyles>
  );
};

export default PageHeader;
