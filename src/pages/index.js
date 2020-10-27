import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ClientCards from '../components/ClientCards';
import Image from '../components/Image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ServicesCard from '../components/ServicesCard';
import Icon from '../svgs/instagram.svg';

const BodyStyles = styled.div`
  @media only screen and (min-width: 100px) {
    width: 100%;
    height: 100%;
    background: var(--altBackground);
    .cards__wrapper {
    }
  }
  @media only screen and (min-width: 375px) {
    .cards__wrapper {
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
`;
const MainHeader = () => {
  console.log('heder');
  return (
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
          <Link to="/">
            <button type="button">Find out more</button>
          </Link>
        </div>
      </div>
    </MainHeaderStyles>
  );
};
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
        text-decoration: underline 3px var(--mainColour);
        text-decoration-color: var(--mainColour);
        text-decoration-line: underline;
        text-decoration-style: solid 3px;
        -webkit-text-decoration: underline 3px var(--mainColour);
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
`;
const WhatSetsUsApart = () => (
  <WhatSetsUsApartStyles>
    <div className="why-us">
      <div className="whu-us__wrapper">
        <h2>What sets us apart</h2>
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
`;
const Clients = () => (
  <ClientsStyles>
    <div className="clients__wrapper">
      <h3>Don't just take our work for it</h3>
      <p>What our clients have to say</p>
      <div className="clients__wrapper__cards">
        <ClientCards />
      </div>
    </div>
  </ClientsStyles>
);

const AccreditationsStyles = styled.div`
  background: var(--altBackground);
  .acc__content {
    padding: 3rem 0;
    width: 90%;
    margin: 0 auto;
    text-align: center;
    color: var(--altColour);

    h4 {
      text-decoration: underline 3px var(--mainColour);
      font-size: clamp(1.6rem, 50%, 2rem);
    }
    p {
      margin: 1rem 0;
    }
    &__img {
      width: 80%;
      margin: 2rem auto 0 auto;
      .gatsby-image-wrapper {
        width: 135px;
        margin: 1rem auto;
      }
    }
  }
`;
const Accreditations = () => (
  <AccreditationsStyles>
    <div className="acc__content">
      <h4>Our Accreditations</h4>
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
        <Image alt="Property Services" filename="quidos.png" />
        <Image alt="Property Services" filename="gassafe.jpg" />
        <Image alt="Property Services" filename="napit.jpg" />
      </div>
    </div>
  </AccreditationsStyles>
);

export default index;
