import React from 'react';
import Layout from '../components/Layout';
import Message from '../components/Message';

const thankYou = () => (
  <Layout>
    <Message
      title="Thank you"
      message="Your form submission has been received"
    />
  </Layout>
);

export default thankYou;
