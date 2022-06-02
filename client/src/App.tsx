import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Card } from  './components';
import { Home, WhoWeAre } from './pages';

function App() {

  
  return (
    <ThemeProvider theme={theme}>
      <WhoWeAre/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
