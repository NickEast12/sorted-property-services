import React from 'react';
import Layout from '../components/Layout';
import Message from '../components/Message';

const ErrorPage = () => (
  <Layout>
    <Message
      title="404 "
      message="This page is no longer available or it has moved"
    />
  </Layout>
);

export default ErrorPage;
