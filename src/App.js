import React from 'react';
import './App.css';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';

import Home from './Components/Main Pages/Home';
import About from './Components/Main Pages/About';
import Knowledge from './Components/Main Pages/Knowledge/Knowledge';
import Experience from './Components/Main Pages/Experience';
import Portfolio from './Components/Main Pages/Portfolio';
import References from './Components/Main Pages/References';
import Contact from './Components/Main Pages/ContactMe'

import Navbar from './Components/Navbar/Navbar';

const useStyles = makeStyles({
  mainGrid: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },
  mainBox: {
    height: '90vh',
    marginTop: '10vh',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
  }
})

function App() {

  const styles = useStyles()

  return (
    
    <Grid container direction='column' className={styles.mainGrid}>
      <Navbar item/>
      <Box className={styles.mainBox} item>
        {/* Welcome page route */}
        <Route exact path='/'>
          <Home/>
        </Route>
        {/* About page route */}
        <Route exact path='/about'>
          <About/>
        </Route>
        {/* Knowledge page Route */}
        <Route exact path='/knowledge'>
          <Knowledge/>
        </Route>
        {/* Experience page route */}
        <Route exact path='/experience'>
          <Experience/>
        </Route>
        {/* Portfolio page route */}
        <Route exact path='/portfolio'>
          <Portfolio/>
        </Route>
        {/* References page route*/}
        <Route exact path='/references'>
          <References/>
        </Route>
        {/* Contact me page route*/}
        <Route exact path='/contact'>
          <Contact/>
        </Route>
      </Box>
    </Grid>
  );
}

export default App;
