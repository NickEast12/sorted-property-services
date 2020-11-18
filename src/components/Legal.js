import React from 'react';
import styled from 'styled-components';

const LegalStyles = styled.div`
  background: var(--white);
  padding: 2rem 0;
  .legal {
    max-width: 1150px;
    width: 90%;
    margin: 0 auto;
    color: var(--black);
    p {
      margin: 0.5rem 0;
    }
    div {
      margin: 1.5rem 0;
    }
    a,
    span {
      color: var(--mainColour);
      font-weight: 700;
    }
  }
`;

const Legal = ({ title, children }) => (
  <LegalStyles>
    <div className="legal">
      <h1>{title}</h1>
      {children}
    </div>
  </LegalStyles>
);

export default Legal;
