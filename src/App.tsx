import React from 'react';

import GlobalStyles from './styles/global';

import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <>
      <Layout />

      <GlobalStyles />
    </>
  );
};

export default App;
