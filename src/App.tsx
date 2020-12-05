import React from 'react';

import Header from './components/Header';
import Carousel from './components/Carousel';

import GlobalStyle from './styles/global';

import { Container, MainContent } from './styles';

const App: React.FC = () => (
  <Container>
    <GlobalStyle />
    <Header />

    <MainContent>
      <h1>
        Lorem ipsum dolor sit
        <br />
        amet, consetetur
      </h1>
    </MainContent>

    <Carousel />
  </Container>
);

export default App;
