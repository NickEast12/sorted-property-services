import { Link } from 'gatsby';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import styled from 'styled-components';

const CookieStyles = styled.div`
  @media only screen and (min-width: 10px) {
    position: fixed;
    bottom: 0.25rem;
    width: 100%;
    z-index: 100;
    .cookie__wrapper {
      text-align: center;
      width: 99%;
      margin: 0 auto;
      background: black;
      padding: 2rem;
      border-radius: 4.5px;
      justify-content: center;
      align-items: center;
      align-content: center;
      button {
        padding: 0.5rem;
        margin-top: 15px;
        width: 70%;
      }
      p {
        font-size: 0.95rem;
      }
      &__content {
      }
    }
  }
  @media only screen and (min-width: 768px) {
    bottom: 1rem;
    .cookie__wrapper {
      width: 50%;
      max-width: 400px;
      padding: 1.5rem;
      button {
        width: 50%;
      }
    }
  }
`;

const Cookie = () => (
  <CookieStyles>
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-analytics"
      disableStyles
      containerClasses="cookie__wrapper"
      contentClasses="cookie__wrapper__content"
    >
      <p>
        This website uses cookies. By using this website you consent to our use
        of these cookies. For more information visit our
        <Link to="/"> Privacy Policy</Link>
      </p>
    </CookieConsent>
  </CookieStyles>
);

export default Cookie;
