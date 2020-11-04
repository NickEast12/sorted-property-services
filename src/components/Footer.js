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
  @media only screen and (min-width: 100px) {
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
            font-size: clamp(1rem, 50%, 1.4rem);
            li {
              padding: 0.5rem 0;
              color: var(--white);
              &:hover {
                color: var(--mainColour);
              }
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
            font-size: 0.85rem;
            span {
              margin-right: 5px;
              width: 5%;

              svg {
                width: 18px;
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
          width: 140px;
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
  }
  @media only screen and (min-width: 375px) {
    .footer {
    }
  }
  @media only screen and (min-width: 768px) {
    .footer {
      width: 90%;
      display: flex;
      justify-content: space-between;
      gap: 3rem;
      padding-bottom: 1rem;
      &__social,
      &__links {
        padding-top: 0;
        ul {
          padding: 0.5rem 0;
        }
      }
      &__social {
        ul {
          a {
            li {
              font-size: 0.9rem;
            }
          }
        }
      }
      &__logo {
        margin: 0;
        width: 0;
        padding: 2rem 0;
        flex-grow: 2;
        width: 0;
        img {
          width: 15 0px;
        }
      }
    }
    .legal {
      &__wrapper {
        &__right {
          width: 115px;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .footer {
      width: 80%;
    }
    .legal__wrapper {
      width: 80%;
    }
  }
  @media only screen and (min-width: 1280px) {
    .footer {
      padding: 2rem 0;
      &__links {
        h4 {
          font-size: 1.25rem;
        }
        ul a li {
          font-size: 1.05rem;
        }
      }
      &__social {
        flex-grow: 1;
        h4 {
          font-size: 1.25rem;
        }
        ul a li {
          font-size: 1.05rem;
        }
      }
      &__logo {
        padding: 2.5rem 0 0 0;
        text-align: right;
        img {
          width: 200px;
        }
      }
    }
    .legal {
      &__wrapper {
        &__left {
          p {
            font-size: 1rem;
          }
        }
        &__right {
          width: 15%;
          svg {
            width: 50px;
          }
        }
      }
    }
  }
`;

const Footer = () => (
  <FooterStyles>
    <div className="footer">
      <div className="footer__links">
        <h4 className="underline-background">Quick Links</h4>
        <ul>
          <Link to="/why-sorted">
            <li>Why Sorted</li>
          </Link>
          <Link to="/what-we-do">
            <li>What we do</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="footer__social">
        <h4 className="underline-background">Contact</h4>
        <ul>
          <Link to="/">
            <li>
              <span>
                <Email />
              </span>
              - workorders@sortedpropertyservices.co.uk
            </li>
          </Link>
          <Link to="/">
            <li>
              <span>
                <Phone />
              </span>
              - 020 3962 5050
            </li>
          </Link>
          <Link to="/">
            <li>
              <span>
                <Address />
              </span>
              - Unit 1 Ensign House, Rope Street, London SE16 7EX
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

export default Footer;
