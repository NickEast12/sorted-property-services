import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const CTAStyles = styled.section`
  width: 100%;
  background: var(--mainColour);
  div {
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
    text-align: center;
    color: var(--black);
    h3 {
      font-size: clamp(1.4rem, 50%, 1.7rem);
      /* span {
        color: var(--white);
      } */
    }
    p {
      font-size: clamp(0.95rem, 50%, 1.1rem);
      padding: 0.75rem 0;
    }
    button {
      background: var(--altColour);
      margin-top: 0.5rem;
      color: var(--white);
      cursor: pointer;
    }
  }
`;

const CTA = () => (
  <CTAStyles>
    <div>
      <h3>
        Have any questions<span>?</span>
      </h3>
      <p>
        We’re here 24/7 and ready to help. Any questions, just call
        <span> 020 8879 6940 </span>.
      </p>
      <Link to="/">
        <button type="button">Contact us now</button>
      </Link>
    </div>
  </CTAStyles>
);

export default CTA;