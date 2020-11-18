import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import CTA from '../components/CTA';
import Bread from '../components/Breadcrums';
import SEO from '../components/SEO';

const WhySortedStyles = styled.div`
  @media only screen and (min-width: 100px) {
    width: 100%;
    background: var(--altBackground);
    .why__wrapper {
      width: 90%;
      max-width: var(--maxWidth);
      margin: 0 auto;
      text-align: center;
      padding: 2rem 0;
      color: var(--black);
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
    .why__team {
      background: var(--white);
      &__wrapper {
        width: 90%;
        max-width: var(--maxWidth);
        margin: 0 auto;
        text-align: center;
        padding: 2rem 0;
        h2 {
          color: var(--black);
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
    }
  }
  @media only screen and (min-width: 768px) {
    .why__wrapper {
      text-align: left;
      width: 80%;
    }
    .why__team {
      &__wrapper {
        width: 80%;
        text-align: left;
      }
    }
  }
  @media only screen and (min-width: 1024px) {
    .why__wrapper {
      width: 75%;
    }
    .why__team {
      &__wrapper {
        width: 75%;
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .why__wrapper {
      width: 80%;
      h2 {
        font-size: 1.25rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
    .why__team {
      &__wrapper {
        width: 80%;
        h2 {
          font-size: 1.85rem;
        }
        p {
          font-size: 1.1rem;
        }
      }
    }
  }
`;

const WhySortedPage = ({ pageContext }) => (
  <Layout>
    <SEO title="Why Sorted? - Sorted Property Services" />
    <Bread breaddata={pageContext.breadcrumb} />
    <WhySortedStyles>
      <PageHeader title="Why Sorted?" img="why-sorted.png" />
      <div className="why__wrapper">
        <h2>
          No other maintenance company has been built by property managers for
          property managers. And with over 30 years of combined property
          management and letting experience, Sorted has first-hand knowledge of
          the frustrations faced by property managers. We know property
          maintenance inside out, which not only enables us to fully understand
          what you want, but also allows us to provide everything you need to
          simplify the entire process.
        </h2>
        <p>
          We manage all aspects of your property maintenance, whether planning
          or unplanned, and consistently deliver a best-in-class service.
          Offering flexibility to suit your requirements, our solution-driven
          work is the one-stop-shop for all types of property maintenance.{' '}
        </p>
        <p>
          Guaranteeing excellent quality at a fast pace, we’re focused on
          reliability, expert workmanship, competence, the highest level of
          customer service and trust. And if you’re planning a potential
          expansion, we have the capacity and capabilities to deliver on our
          promise.
        </p>
        <p>
          Ultimately, we understand that property managers want it Sorted. Our
          objective? To provide a hassle-free, high quality property maintenance
          service, with seamless communication at its core. With a team who have
          been where you are today.
        </p>
      </div>
      <div className="why__team">
        <div className="why__team__wrapper">
          <h2 className="underline-white">Our operatives </h2>
          <p>
            The Sorted workforce is comprised of professional and highly-skilled
            individuals, fully equipped and qualified to deal with your needs,
            wants and frustrations as a property manager. Friendly and always
            happy to help, each operative is accredited in their field of
            expertise and guaranteed to get the job done to outstanding
            standards. Plus, they’re all covered by our full Public Liability
            insurance, so you are in safe hands, whether you need repairs,
            replacements or even a full upgrade.
          </p>
          <p>
            Supported by a dedicated team at our head office, you can be
            confident that every job runs smoothly. Sorted: your professional
            solution.
          </p>
        </div>
      </div>
    </WhySortedStyles>
    <CTA />
  </Layout>
);

export default WhySortedPage;
