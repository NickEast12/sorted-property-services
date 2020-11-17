import React from 'react';
import Layout from '../components/Layout';

const testing = () => (
  <Layout>
    <form
      className="contact__wrapper__inner__form"
      name="other"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="other" />
      <div className="contact__wrapper__inner__form__section">
        <input type="text" placeholder="Name" name="name" id="name" required />
        <input
          type="text"
          placeholder="Email"
          name="email"
          id="email"
          required
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        name="title"
        id="title"
        required
      />
      <textarea placeholder="Message" name="message" id="message" required />
      <div className="contact__wrapper__inner__form__btn">
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  </Layout>
);

export default testing;
