import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyle from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';
import Footer from './Footer';

const PageBody = styled.main`
  /* background: var(--altColour); */
`;

const Layout = ({ children }) => {
  console.log('layout working');
  return (
    <>
      <GlobalStyle />
      <Typography />
      <PageBody>
        <Nav />
        {children}
        <Footer />
      </PageBody>
    </>
  );
};

export default Layout;
