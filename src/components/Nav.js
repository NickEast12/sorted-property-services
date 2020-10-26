import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/images/logo_white.png';
import Image from './Image';

const CovidUpdateStyles = styled.section`
  width: 100%;
  background: var(--mainColour);
  div {
    padding: 1rem 0;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    p {
      color: var(--black);
    }
  }
`;

const NavStyles = styled.nav`
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
        transform: ${({ open }) => (open ? 'rotate(-40deg)' : 'rotate(0deg)')};
      }
    }
  }
`;

const MobileNavStyles = styled.div`
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
`;

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CovidUpdateStyles>
        <div>
          <p>Covid Guidance</p>
        </div>
      </CovidUpdateStyles>
      <NavStyles open={open}>
        <div className="mobile-nav-wrapper">
          <div className="mobile-logo">
            <img src={Logo} alt="Sorted Logo" />
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
              <Link to="/">
                <li>Why Sorted</li>
              </Link>
              <Link to="/">
                <li>What we do</li>
              </Link>
              <a href="/">
                <li>0203 962 5050 </li>
              </a>
              <Link to="/">
                <li>
                  <button type="button">Contact Us</button>
                </li>
              </Link>
            </ul>
          </div>
        </MobileNavStyles>
      </NavStyles>
    </>
  );
};

export default Nav;
