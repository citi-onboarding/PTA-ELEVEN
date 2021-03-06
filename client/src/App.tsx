import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Card } from  './components';
import { Banner, Footer, Home, Momentos, Navbar, OurPerformances, WhoWeAre, } from './pages';


function App() {

  
  return (
    <ThemeProvider theme={theme}>
      
      <Banner/>
      <WhoWeAre/>
      <OurPerformances/>
      <Momentos/>
      <Footer/>

      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
