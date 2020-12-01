import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo_white.png';
import Image from './Image';

const CovidUpdateStyles = styled.section`
  @media only screen and (min-width: 100px) {
    width: 100%;
    background: var(--black);
    /* background: RGB(58, 121, 255); */

    div {
      padding: 0.5rem 0;
      width: 90%;
      margin: 0 auto;
      text-align: center;
      max-width: var(--maxWidth);

      p {
        font-size: 0.75rem;

        color: var(--white);
        span {
          font-weight: 600;
          color: var(--mainColour);
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    div {
      p {
        font-size: 0.8rem;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    div {
      p {
        font-size: 0.95rem;
      }
    }
  }
`;

const NavStyles = styled.nav`
  @media only screen and (min-width: 100px) {
    width: 100%;
    height: 100%;
    background: var(--altColour);
    position: sticky;
    top: 0rem;
    padding: 1rem 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px var(--mainColour);
    .mobile-nav-wrapper {
      width: 90%;
      margin: 0 auto;

      position: relative;
    }
    .mobile-logo {
      width: auto;
      text-align: center;
      img {
        width: 140px;
      }
    }
    .hamburger {
      width: 20%;
      cursor: pointer;
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 0.25rem;
      right: 0;
      text-align: center;
      margin: 0 0 auto 0;
      outline: none !important;
      div {
        text-align: center;
        margin: 10px auto 0 auto;
        width: 25px;
        height: 2px;
        opacity: 1;
        background: var(--mainColour);
        transform-origin: 3px;
        transition: all 0.25s ease;
        &:nth-child(1) {
          transform: ${({ open }) => (open ? 'rotate(40deg)' : 'rotate(0deg)')};
        }
        &:nth-child(2) {
          transform: ${({ open }) =>
            open ? 'rotate(-40deg)' : 'rotate(0deg)'};
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileNavStyles = styled.div`
  @media only screen and (min-width: 100px) {
    @keyframes liAnimation {
      to {
        opacity: 1;
        transform: translateY(0px);
        z-index: 50;
      }
    }
    width: 100%;
    background: var(--altColour);
    opacity: 1;
    z-index: 100;
    position: absolute;
    top: 4.98rem;
    left: 0;
    height: ${({ open }) => (open ? '86vh' : '0')};
    max-height: ${({ open }) => (open ? '1000rem' : '0')};
    transition: all 0.5s ease-in-out;
    div {
      display: ${({ open }) => (open ? 'block' : 'none')};
      width: 80%;
      margin: 0 auto;
      text-align: center;
      ul {
        list-style: none;
        padding: 0.5rem 0;
        a {
          text-decoration: none;
          &:nth-child(1) li {
            animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.5s
              forwards;
          }
          &:nth-child(2) li {
            animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.75s
              forwards;
          }
          &:nth-child(3) li {
            animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 0.95s
              forwards;
          }
          &:nth-child(4) li {
            animation: ${({ open }) => (open ? 'liAnimation' : '')} 0.65s 1.1s
              forwards;
          }
          li {
            padding: 1rem 0;
            opacity: 0;
            transform: translateY(-10px);
            text-align: center;
            font-weight: 600;
            font-size: clamp(1.1rem, 50%, 1.5rem);
          }
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    div {
      ul {
        padding-top: 3rem;
        a {
          li {
            padding: 1.15rem 0;
            font-size: clamp(1.2rem, 50%, 1.5rem);
          }
        }
      }
    }
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CovidUpdateStyles>
        <div>
          <p>
            <span>COVID-19 Update: </span>
            We’ve briefed and equipped our tradespeople in response to the
            coronavirus crisis.
          </p>
        </div>
      </CovidUpdateStyles>
      <NavStyles open={open}>
        <div className="mobile-nav-wrapper">
          <div className="mobile-logo">
            <Link to="/">
              <img src={Logo} alt="Sorted Logo" />
            </Link>
          </div>
          <div
            className="hamburger"
            onClick={() => setOpen(!open)}
            onKeyDown={() => setOpen(!open)}
            role="button"
            tabIndex={0}
            open={open}
          >
            <div />
            <div />
          </div>
        </div>
        <MobileNavStyles open={open}>
          <div>
            <ul>
              <Link to="/why-sorted">
                <li>Why Sorted</li>
              </Link>
              <Link to="/what-we-do">
                <li>What we do</li>
              </Link>
              <a href="/">
                <li>0203 962 5050 </li>
              </a>
              <Link to="/contact">
                <li>
                  <button type="button">Contact Us</button>
                </li>
              </Link>
            </ul>
          </div>
        </MobileNavStyles>
      </NavStyles>
      <DesktopNav />
    </>
  );
};

const DesktopNavStyles = styled.nav`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
    background: var(--altColour);
    border-bottom: solid 2px var(--mainColour);
    .desktop__inner {
      width: 90%;
      margin: 0 auto;
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      max-width: var(--maxWidth);
      ul {
        margin: 0;
        padding: 0;
        li:hover {
          color: var(--mainColour);
        }
      }
      a {
        text-decoration: none;
      }
      &__left {
        display: flex;
        list-style: none;
        align-items: center;

        gap: 1rem;
        &__logo {
          img {
            width: 150px;
          }
        }
      }
      &__right {
        list-style: none;
        display: flex;
        gap: 1rem;
        align-items: center;
        .num {
          font-weight: 600;
        }
        button {
          font-weight: 500;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .desktop__inner {
      width: 80%;
      font-size: 1.1rem;
    }
  }
`;
const DesktopNav = () => (
  <DesktopNavStyles>
    <div className="desktop__inner">
      <ul className="desktop__inner__left">
        <li className="desktop__inner__left__logo">
          <Link to="/">
            <img src={Logo} alt="Sorted Logo" />
          </Link>
        </li>
        <li>
          <Link to="/why-sorted">Why sorted</Link>
        </li>
        <li>
          <Link to="/what-we-do">What we do</Link>
        </li>
      </ul>
      <ul className="desktop__inner__right">
        <li className="num">
          <a href="tel:020 3962 5050">020 3962 5050</a>
        </li>
        <li>
          <Link to="/contact">
            <button type="button">Contact us</button>
          </Link>
        </li>
      </ul>
    </div>
  </DesktopNavStyles>
);

export default Nav;
