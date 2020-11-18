import React from 'react';
import styled from 'styled-components';
import Bread from '../components/Breadcrums';
import CTA from '../components/CTA';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import PageServices from '../components/PageServices';
import SEO from '../components/SEO';

const ElectricalArray = [
  'EICR (Electrical Inspection Condition Report)',
  'PAT (Portable Appliance Testing)',
  'Consumer unit repair and replacement',
  'Electrical testing and inspections',
  'Lighting repairs, rewires and installation',
  'Smoke alarm installation and testing ',
];
const GasArray = [
  'Gas cylinder and boiler repairs, replacement and installation',
  'Maintenance, repairs and part replacements ',
  'Gas Safety Certificates ',
  'Multi-room plumbing',
  'Repairs and replacements of baths, sinks and showers ',
  'HIU (Head Interface Unit) repairs and services ',
  'Drainage – blockages, burst pipes and leaks',
];
const TradeArray = [
  'Painting, decorating and tiling ',
  'Plastering repairs and wall coverings',
  'Carpentry design and installation',
  'UPVC/wooden windows and doors replacements and glazing',
  'Kitchen and bathroom upgrades and replacements',
  'Security improvements ',
  'Garden maintenance ',
  'Appliance, garden and domestic waste disposal',
  'EPCs (Energy Performance Certificates)',
];

const WWDStyles = styled.div`
  @media only screen and (min-width: 100px) {
    width: 100%;
    background: var(--altBackground);
    padding-bottom: 1.5rem;
    .wwd__content {
      background: var(--altBackground);
      width: 90%;
      max-width: var(--maxWidth);
      margin: 0 auto;
      text-align: center;
      padding: 2rem 0 1rem 0;
      h2 {
        color: var(--black);
        font-size: 1rem;
        font-weight: 600;
        span {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--mainColour);
        }
      }
      p {
        color: var(--black);
        font-size: 0.9rem;
        margin: 1rem 0;
        span {
          color: var(--mainColour);
          font-weight: 800;
        }
      }
    }
    .wwd__cards {
      margin: 1rem 0;
      max-width: var(--maxWidth);
    }
  }
  @media only screen and (min-width: 768px) {
    .wwd__content {
      width: 80%;
      text-align: left;
    }
    .wwd__cards {
      margin: 1rem 0;
      section:nth-child(odd) {
        position: relative;
        .ps-img {
          width: 50%;

          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          .gatsby-image-wrapper {
            height: 100% !important;
            width: 100% !important;
          }
        }
        .ps-content {
          border-left: 5px solid var(--mainColour);
          padding: 1rem;
          width: 50%;
        }
      }
      section:nth-child(even) {
        position: relative;
        .ps-img {
          width: 50%;

          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          .gatsby-image-wrapper {
            height: 100% !important;
            width: 100% !important;
          }
        }
        .ps-content {
          width: 50%;
          margin: 0 0 0 auto;
          border-right: 5px solid var(--mainColour);
          padding: 1rem;
          width: 50%;
        }
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .wwd__content {
      width: 75%;
    }
    .wwd__cards {
      width: 95%;
      margin: 0 auto;
    }
  }
  @media only screen and (min-width: 1280px) {
    .wwd__content {
      width: 80%;
      h2 {
        font-size: 1.25rem;
        span {
          font-size: 1.35rem;
        }
      }
      p {
        font-size: 1.1rem;
      }
    }
    .wwd__cards {
      width: 100%;
    }
  }
`;

const WhatWeDoPage = ({ pageContext }) => (
  <Layout>
    <SEO title="What we do - Sorted Property Services" />
    <Bread breaddata={pageContext.breadcrumb} />
    <WWDStyles>
      <PageHeader title="What we do" img="background2.png" />
      <div className="wwd__content">
        <h2>
          <span>Sorted </span>offers a wide range of services, establishing a
          solid reputation for high quality work in the property maintenance
          industry. During each stage of your project, we ensure that every
          stakeholder is kept up to date, removing the risk of miscommunication
          and delays, creating minimal disruption.{' '}
        </h2>
        <p>
          Able to fulfil any volume of work, Sorted is committed to delivering
          superior quality with a quick turnaround, focused on keeping you happy
          and supported, while reinforcing the importance of uninterrupted
          communication. And our services cover every aspect of property
          maintenance, allowing you to hand the reigns to Sorted and take the
          headache out of property management.{' '}
        </p>
        <p>
          With Sorted, you can make one call to deal with multiple trades. And
          if any service that you require is not listed below, contact us on
          <span> 020 3962 5050 </span> as we still may be able to help.
        </p>
      </div>
      <div className="wwd__cards">
        <PageServices
          id="electrical"
          imgAlt="Electrical Works"
          img="placeholder.png"
          title="Electrical"
          intro="Safety is paramount to us at Sorted and we offer a full range of electrical facilities, including:"
          list={ElectricalArray}
        />
        <PageServices
          id="gasandplumbing"
          imgAlt="Gas &amp; Plumbing"
          img="plumbing-stock.png"
          title="Gas &amp; Plumbing"
          intro="Carried out by gas safe registered engineers, our gas &amp; plumbing services include:"
          list={GasArray}
        />
        <PageServices
          id="multi-trade"
          imgAlt="Multi-trade"
          img="trade-stock.png"
          title="Multi-trade"
          intro="At Sorted, we have a skilled professional to cover any type of job, including:"
          list={TradeArray}
        />
      </div>
    </WWDStyles>
    <CTA />
  </Layout>
);

export default WhatWeDoPage;
