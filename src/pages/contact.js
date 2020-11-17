import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Maps from '../components/Map';
import Address from '../svgs/pin.svg';
import Phone from '../svgs/phone.svg';
import Email from '../svgs/email.svg';
import Bread from '../components/Breadcrums';

const ContactStyles = styled.div`
  @media only screen and (min-width: 100px) {
    width: 100%;
    background: var(--altBackground);
    .contact__map {
    }
    .contact__body {
      padding: 3rem 0;
      &__left {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        h1 {
          color: var(--altColour);
        }
        p {
          margin-top: 0.75rem;
          color: var(--black);
        }
        ul {
          padding: 0;
          margin: 2rem 0;
          list-style: none;
          .mob {
            display: none;
          }
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            align-self: center;
            align-content: center;
            margin: 1.5rem 0;
            color: var(--black);
            font-size: 1rem;
            a {
              text-decoration: none;
            }
            svg {
              width: 25px;
              margin-bottom: 10px;
              fill: var(--altColour);
            }
          }
        }
      }
      .form__wrapper {
        padding: 2rem 0;
        width: 90%;
        margin: 0 auto;

        h2 {
          color: var(--altColour);
          text-align: center;
          margin-bottom: 1rem;
        }
        form {
          .hidden {
            display: none;
          }
          width: 90%;
          margin: 0 auto;
          fieldset {
            padding: 0;
            margin: 0;
            border: none;
            .form-input {
              width: 100%;
              margin: 1.5rem 0;
              border-radius: 4px;
              label {
                color: var(--black);

                & > span {
                  color: red;
                }
                & input {
                  width: 100%;
                  margin: 0.5rem 0;
                  padding: 0.25rem 0;
                  background: var(--altBackground);
                  border: none;
                  border-radius: 0 !important;
                  border-bottom: solid 2px var(--altColour);
                  & > input:focus {
                    outline: none;
                  }
                }
              }
            }
            .form-textarea {
              label {
                color: var(--black);

                & > span {
                  color: red;
                }
                textarea {
                  background: var(--altColour);
                  color: var(--altBackground);
                  width: 100%;
                  margin-top: 0.85rem;
                  border: solid 1px var(--altBackgroud);
                  border-radius: 4px;
                  padding: 0.75rem 0.5rem;
                  resize: none;
                  height: 10rem;
                }
              }
            }
            .form-btn {
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 414px) {
    .contact__body {
      &__left {
        width: 80%;
        ul {
          .mob {
            display: flex;
          }
          .desk {
            display: none;
          }
        }
      }
      .form__wrapper {
        width: 80%;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .contact__body {
      background: var(--altBackground);
      .contact__fix {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        margin: 0 auto;
      }
      &__left {
        text-align: left;
        width: 80%;
        margin: 0 0 0 auto;
        ul {
          li {
            flex-direction: row;
            align-items: center;
            span {
              width: 35px;
              svg {
                width: 22.5px;
                padding-top: 10px;
              }
            }
          }
          .mob {
            font-size: 0.9rem;
            li {
              svg {
                padding-right: 15px;
              }
            }
          }
        }
      }
      .form__wrapper {
        width: 80%;
        margin: 0.25rem auto 0 0;
        padding-top: 5px;
        h2 {
          text-align: left;
        }
        form {
          margin: 0 auto 0 0;
          width: 100%;
          .form-input {
            display: flex;
            gap: 1rem;
            input {
              width: 50%;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 1280px) {
    .contact__body {
      .contact__fix {
        max-width: 1600px;
      }
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.2rem;
      }
      ul li {
        font-size: 1.2rem;
      }
      ul .mob {
        font-size: 1.2rem;
      }
    }
  }
`;

const contact = ({ pageContext }) => (
  <Layout>
    <Bread breaddata={pageContext.breadcrumb} />
    <ContactStyles>
      <div className="contact__map">
        <Maps />
      </div>
      <div className="contact__body">
        <section className="contact__fix">
          <div className="contact__body__left">
            <h1 className="underline-alt">Contact us</h1>
            <p>
              For more information on how Sorted can streamline your property
              maintenance work, get in touch.
            </p>
            <ul>
              <li>
                <span>
                  <Address />
                </span>
                Unit 1 Ensign House, Rope Street, London SE16 7EX
              </li>
              <li>
                <span>
                  <Phone />
                </span>
                020 3962 5050
              </li>
              <li className="mob">
                <span>
                  <Email />
                </span>
                workorders@sortedpropertyservices.co.uk
              </li>
              <li className="desk">
                <span>
                  <Email />
                </span>
                <a href="mailto:workorders@sortedpropertyservices.co.uk">
                  Email us
                </a>
              </li>
            </ul>
          </div>
          <div className="form__wrapper">
            <h2>Or fill out this form </h2>
            <form
              name="Contact"
              method="POST"
              netlify
              action="/thank-you"
              netlify-honeypot="bot-field"
            >
              <fieldset>
                <div className="form-input">
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you're human:{' '}
                      <input name="bot-field" />
                    </label>
                  </p>
                  <label htmlFor="Name">
                    Name <span>*</span>
                    <input type="text" name="name" required />
                  </label>
                  <label htmlFor="Company Name">
                    Company Name <span>*</span>
                    <input type="text" name="company name" required />
                  </label>
                </div>
                <div className="form-input">
                  <label htmlFor="Company Name">
                    Email Address <span>*</span>
                    <input type="email" name="email address" required />
                  </label>
                  <label htmlFor="Company Name">
                    Phone Number <span>*</span>
                    <input type="tel" name="phone" id="phone" required />
                  </label>
                </div>
                <div className="form-textarea">
                  <label htmlFor="message">
                    {' '}
                    Message <span>*</span>
                    <textarea name="message" required />
                  </label>
                </div>
                <div className="form-btn">
                  <button type="submit">Submit</button>
                </div>
              </fieldset>
            </form>
          </div>
        </section>
      </div>
    </ContactStyles>
  </Layout>
);

export default contact;
