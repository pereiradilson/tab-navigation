import React from 'react';

import Tabs from '../Tabs';

import { Container, Header, Main } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Online Teaching</h1>
      </Header>

      <Main>
        <Tabs />
      </Main>
    </Container>
  );
};

export default Layout;
