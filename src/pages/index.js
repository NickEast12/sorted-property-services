import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ClientCards from '../components/ClientCards';
import Image from '../components/Image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ServicesCard from '../components/ServicesCard';
import Icon from '../svgs/email.svg';
import Quidos from '../assets/images/Quidos-White.png';
import Napit from '../assets/images/napit-logo-2017.webp';
import Gas from '../assets/images/gas-safe.png';

const BodyStyles = styled.div`
  @media only screen and (min-width: 100px) {
    width: 100%;
    height: 100%;
    background: var(--altBackground);
    padding-top: 1rem;
    .cards__wrapper {
    }
  }
  @media only screen and (min-width: 768px) {
    .cards__wrapper {
      .service__cards {
        &:nth-child(odd) {
          display: flex;
          position: relative;
          margin-bottom: 1rem;
          .services__img {
            top: 1rem;
            right: 0;
            width: 40%;
            position: absolute;
            .gatsby-image-wrapper {
              width: 250px;
              margin: 0 auto;
            }
          }
          .services__content {
            width: 60%;
          }
        }
        &:nth-child(even) {
          position: relative;
          margin-bottom: 1rem;
          .services__img {
            top: 1rem;
            left: 0;
            width: 40%;
            position: absolute;
            .gatsby-image-wrapper {
              width: 250px;
              margin: 0 auto;
            }
          }
          .services__content {
            width: 60%;
            margin: 0 0 0 auto;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .cards__wrapper {
      padding: 2rem 0;
      .service__cards {
        &:nth-child(odd) {
          .services__img {
            top: 1rem;
            right: 0;
            width: 50%;
            .gatsby-image-wrapper {
              width: 300px;
              margin: 0 auto;
            }
          }
          .services__content {
            width: 50%;
            button {
              font-size: 1.25rem;
            }
          }
        }
        &:nth-child(even) {
          .services__img {
            width: 50%;
            .gatsby-image-wrapper {
              width: 300px;
            }
          }
          .services__content {
            width: 50%;
            button {
              font-size: 1.25rem;
            }
          }
        }
      }
    }
  }
`;

const index = () => {
  const i = 'help';
  return (
    <Layout>
      <SEO title="Boo" />
      <MainHeader />
      <BodyStyles>
        <div className="cards__wrapper">
          <ServicesCard
            img="electrical.png"
            title="Electrical"
            text="Fully qualified and experienced electrical engineers will solve all your electrical needs – from a faulty light switch and smoke alarm installation to a complete rewire and a full EICR."
            link="/what-we-do/#electrical"
          />
          <ServicesCard
            img="gas.png"
            title="Gas &amp; Plumbing"
            text="Gas-safe registered engineers and installers can assist with any heating or boiler-related problems – whether it’s a complete central heating replacement or a new boiler installation. "
            link="/what-we-do/#gasandplumbing"
          />
          <ServicesCard
            img="trade.png"
            title="Multi-trade"
            text="From plastering and tiling to hanging wallpaper and garden maintenance, there isn’t a job that our multi-trade team can’t put their experienced hands to."
            link="/what-we-do/#multi-trade"
          />
        </div>
        <WhatSetsUsApart />
        <Clients />
        <Accreditations />
      </BodyStyles>
    </Layout>
  );
};

const MainHeaderStyles = styled.div`
  @media only screen and (min-width: 100px) {
    width: 100%;
    height: 78vh;
    position: relative;
    background: var(--mainColour);
    .title {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      &__content {
        padding: 1rem 0;
        span {
          color: var(--altColour);
        }
      }
      &__img {
        .gatsby-image-wrapper {
          width: 100%;
          object-fit: center !important;
          position: absolute;
          top: 0;
        }
      }
      &__btn {
        margin-top: 0.85rem;
        button {
          background: var(--altColour);
          color: var(--white);
          width: 60%;
          font-size: clamp(1rem, 50%, 1.4rem);
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    height: 82vh;
    .title {
      padding-top: 3rem;
      &__btn {
        margin-top: 2rem;
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .title {
      padding-top: 2rem;
      &__content {
        h1 {
          font-size: 2.5rem;
          font-weight: 700;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    height: 89vh;
    .title {
      padding-top: 5rem;
      &__content {
        padding: 1rem 0;
        width: 60%;
        margin: 0 auto;
        h1 {
          font-size: 3rem;
        }
      }
      &__img {
        margin: 0 auto;
        width: 60%;
        .gatsby-image-wrapper {
          width: 100%;
          object-fit: center !important;
          position: absolute;
          top: 0;
        }
      }
      &__btn {
        button {
          width: 20%;
          font-size: 1.2rem;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    height: 92vh;
  }
  @media only screen and (min-width: 1280px) {
    height: 86vh;
    .title {
      padding-top: 2.5rem;
      &__content {
      }
      &__img {
        width: 55%;
      }
    }
  }
`;
const MainHeader = () => (
  <MainHeaderStyles>
    <div className="title">
      <div className="title__content">
        <h1>
          Your <span>one-stop shop</span> for property managers
        </h1>
      </div>
      <div className="title__img">
        <Image alt="Property Services" filename="background2.png" />
      </div>
      <div className="title__btn">
        <Link to="/why-sorted">
          <button type="button">Find out more</button>
        </Link>
      </div>
    </div>
  </MainHeaderStyles>
);

const WhatSetsUsApartStyles = styled.div`
  @media only screen and (min-width: 100px) {
    .why-us {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      color: var(--altColour);
      padding: 3rem 0;
      h2 {
        font-size: clamp(1.6rem, 50%, 2rem);
      }
      p {
        margin-top: 1rem;
      }
      ul {
        list-style: none;
        width: 90%;
        margin: 1rem auto;
        padding: 1rem 0;
        display: grid;
        text-align: center;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        justify-content: space-between;
        li {
          flex-grow: 2;
          align-items: center;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          text-align: center;
          svg {
            width: 50px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .why-us {
      padding: 3.5rem 0;
      ul {
        width: 60%;
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .why-us {
      padding: 4rem 0;
      width: 80%;
    }
  }
  @media only screen and (min-width: 768px) {
    background: white;
    .why-us {
      width: 70%;
      ul {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .why-us {
      width: 60%;
      h2 {
        font-size: 2.25rem;
      }
      p {
        font-size: 1.15rem;
        padding: 0.25rem 0;
      }
      ul li {
        font-size: 1.1rem;
      }
    }
  }
`;
const WhatSetsUsApart = () => (
  <WhatSetsUsApartStyles>
    <div className="why-us">
      <div className="whu-us__wrapper">
        <h2 className="underline-alt">What sets us apart</h2>
        <p>
          No other maintenance company has been built by property managers for
          property managers. And with over 30 years of combined property
          management.
        </p>
        <ul>
          <li>
            <Icon /> Point 1
          </li>
          <li>
            <Icon /> Point 2
          </li>
          <li>
            <Icon /> Point 3
          </li>
          <li>
            <Icon /> Point 4
          </li>
        </ul>
      </div>
    </div>
  </WhatSetsUsApartStyles>
);

const ClientsStyles = styled.div`
  .slick-slide {
    padding: 0 15px;
  }
  @media only screen and (min-width: 100px) {
    width: 100%;
    background: var(--altColour);
    .clients__wrapper {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      padding: 3rem 0;
      h3 {
        font-size: clamp(1.5rem, 50%, 1.9rem);
      }
      & > p {
        margin-top: 0.75rem;
        font-size: clamp(1rem, 50%, 1.4rem);
      }
      &__cards {
        width: 80%;
        margin: 1.5rem auto 0 auto;
      }
    }
  }
  @media only screen and (min-width: 375px) {
    .clients__wrapper {
      padding: 3.5rem 0;
      width: 80%;
    }
  }
  @media only screen and (min-width: 414px) {
    .clients__wrapper {
      width: 80%;
      padding: 4rem 0;
    }
  }
  @media only screen and (min-width: 1280px) {
    .clients__wrapper {
      h3 {
        font-size: 1.9rem;
      }
      p {
        font-size: 1.2rem;
        padding: 0.75rem 0;
      }
    }
  }
`;
const Clients = () => (
  <ClientsStyles>
    <div className="clients__wrapper">
      <h3 className="underline-background">Don't just take our word for it</h3>
      <p>What our clients have to say</p>
      <div className="clients__wrapper__cards">
        <ClientCards />
      </div>
    </div>
  </ClientsStyles>
);

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
        padding: 2rem 0;
        margin: 0 auto;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .acc__content {
      h4 {
        font-size: 1.9rem;
      }
      p {
        font-size: 1.2rem;
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

export default index;
