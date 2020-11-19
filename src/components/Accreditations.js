import React from 'react';
import styled from 'styled-components';
import Quidos from '../assets/images/Quidos-White.png';
import Napit from '../assets/images/napit-logo-2017.webp';
import Gas from '../assets/images/gas-safe.png';

const AccreditationsStyles = styled.div`
  @media only screen and (min-width: 100px) {
    background: var(--altBackground);
    .acc__content {
      padding: 3rem 0;
      width: 90%;
      margin: 0 auto;
      text-align: center;
      color: var(--altColour);

      h4 {
        font-size: clamp(1.6rem, 50%, 2rem);
      }
      p {
        margin: 1rem 0;
      }
      &__img {
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        width: 100%;
        &__box {
          margin: 0 auto;
          background: #d0d0d0;
          margin-bottom: 1rem;
          padding: 1rem;
          border-radius: 2px;
          width: 55%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          &:nth-child(1) img {
            padding: 0.25rem 0;
          }
          &:nth-child(2) img {
            padding: 0.25rem 0;
          }
          &:nth-child(3) {
            padding: 0.4rem;
            img {
              width: 50%;
              height: 80% !important;
            }
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .acc__content {
      width: 80%;
    }
  }
  @media only screen and (min-width: 550px) {
    .acc__content {
      &__img {
        display: flex;
        flex-direction: row;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    padding: 2rem 0;
    .acc__content {
      width: 60%;
      &__img {
        display: flex;
        flex-direction: row;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .acc__content {
      width: 60%;
      padding: 2rem 0;
      &__img {
        width: 70%;
        padding-top: 1rem;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    padding-top: 2rem;
    .acc__content {
      max-width: var(--maxWidth);
      padding-top: 1rem;

      h4 {
        font-size: 1.9rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    .acc__content {
      &__img {
        &__box {
          &:nth-child(1) {
            max-width: 200px;
          }
          &:nth-child(2) {
            max-width: 200px;
          }
          &:nth-child(3) {
            max-width: 190px;
          }
        }
      }
    }
  }
`;
const Accreditations = () => (
  <AccreditationsStyles>
    <div className="acc__content">
      <h4 className="underline-alt">Our Accreditations</h4>
      <p>
        At Sorted, we understand the complexities involved in navigating
        ever-changing legislation, but we’re experts at helping landlords and
        property managers stay compliant with certification.
      </p>
      <p>
        For your professional piece of mind, we conduct Gas Safety Certificates,
        Electrical Inspection Condition Reports, PAT tests, Energy Performance
        Certificates, Legionella Risk Assessments and HMO licences.
      </p>

      <div className="acc__content__img">
        {/* <div className="acc__content__img__box">
          <Image alt="Quidos Accreditations" filename="Quidos-White.png" />
        </div>
        <div className="acc__content__img__box">
          <Image alt="Gas Safe Accreditations" filename="gas-safe.png" />
        </div>
        <div className="acc__content__img__box">
          <Image alt="Napit Accreditations" filename="napit-logo-2017.webp" />
        </div> */}
        <div className="acc__content__img__box">
          <img src={Quidos} alt="Quidos Accreditations" />
        </div>
        <div className="acc__content__img__box">
          <img src={Napit} alt="Napit Accreditations" />
        </div>
        <div className="acc__content__img__box">
          <img src={Gas} alt="Gas Safe Accreditations" />
        </div>
      </div>
    </div>
  </AccreditationsStyles>
);

export default Accreditations;
