import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo_white.png';
import Email from '../svgs/email.svg';
import Phone from '../svgs/phone.svg';
import Address from '../svgs/pin.svg';
import Facebook from '../svgs/facebook.svg';
import Linkedin from '../svgs/linkedin.svg';
import Twitter from '../svgs/twitter.svg';
import Instagram from '../svgs/instagram.svg';

const FooterStyles = styled.footer`
  width: 100%;
  .footer {
    width: 90%;
    margin: 0 auto;
    padding-top: 1.5rem;
    &__links,
    &__social {
      padding: 0.5rem 0 0 0;
      h4 {
        font-weight: 700;
        text-decoration: underline 2px var(--mainColour);
        width: 40%;
        font-size: clamp(1.1rem, 50%, 1.4rem);
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        padding: 1rem 0;
        a {
          text-decoration: none;
          font-size: clamp(1.1rem, 50%, 1.4rem);
          li {
            padding: 0.5rem 0;
            color: var(--white);
          }
        }
      }
    }
    &__social {
      ul a {
        li {
          display: flex;
          align-items: center;
          align-self: center;
          align-content: center;
          span {
            margin-right: 5px;
            svg {
              width: 20px;
              fill: var(--mainColour);
            }
          }
        }
      }
    }
    &__logo {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      padding: 1rem 0 2rem 0;
      img {
        width: 70%;
        text-align: center;
      }
    }
  }
  .legal {
    width: 100%;
    background: var(--mainColour);
    color: var(--altColour);
    padding: 0.75rem 0;
    &__wrapper {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      &__left {
        width: auto;
        p {
          font-size: 0.8rem;
        }
      }
      &__right {
        display: flex;
        width: 30%;
        height: 100%;
        justify-content: space-between;
        svg {
          width: 15px;
          fill: var(--altColour);
        }
      }
    }
  }
`;

const Footer = () => {
  console.log('te4st');
  return (
    <FooterStyles>
      <div className="footer">
        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <Link to="/">
              <li>Link 1</li>
            </Link>
            <Link to="/">
              <li>Link 1</li>
            </Link>
            <Link to="/">
              <li>Link 1</li>
            </Link>
          </ul>
        </div>
        <div className="footer__social">
          <h4>Contact</h4>
          <ul>
            <Link to="/">
              <li>
                <span>
                  <Email />
                </span>
                - email
              </li>
            </Link>
            <Link to="/">
              <li>
                <span>
                  <Phone />
                </span>
                - Phone
              </li>
            </Link>
            <Link to="/">
              <li>
                <span>
                  <Address />
                </span>
                - Address
              </li>
            </Link>
          </ul>
        </div>
        <div className="footer__logo">
          <img src={Logo} alt="Sorted Logo" />
        </div>
      </div>
      <div className="legal">
        <div className="legal__wrapper">
          <div className="legal__wrapper__left">
            <p>&copy; Sorted Property Services {new Date().getFullYear()}</p>
          </div>
          <div className="legal__wrapper__right">
            <Instagram />
            <Facebook />
            <Twitter />
            <Linkedin />
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
