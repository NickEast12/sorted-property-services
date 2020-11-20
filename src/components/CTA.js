import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const CTAStyles = styled.section`
  @media only screen and (min-width: 100px) {
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
  }

  @media only screen and (min-width: 1280px) {
    div {
      max-width: var(--maxPage);
      padding: 3rem 0;
      h3 {
        font-size: 1.85rem;
      }
      p {
        font-size: 1.1rem;
      }
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
        <span> 020 3962 5050 </span>.
      </p>
      <Link to="/contact">
        <button type="button">Contact us now</button>
      </Link>
    </div>
  </CTAStyles>
);

export default CTA;
