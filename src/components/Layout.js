import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import GlobalStyle from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Nav from './Nav';
import Footer from './Footer';
import Cookie from './Cookie';
import Accreditations from './Accreditations';

const PageBody = styled.main`
  /* background: var(--altColour); */
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Typography />
    <PageBody>
      <Nav />
      <Cookie />
      {children}
      <Accreditations />
      <Footer />
    </PageBody>
  </>
);

export default Layout;
