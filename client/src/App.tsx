import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { Card } from  './components';
import { OurPerformances, Home, WhoWeAre } from './pages';

function App() {

  
  return (
    <ThemeProvider theme={theme}>
      <WhoWeAre/>
      <OurPerformances/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
