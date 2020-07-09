import React from 'react';
import './App.css';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';

import Home from './Components/Main Pages/Home';
import About from './Components/Main Pages/About';
import Knowledge from './Components/Main Pages/Knowledge';


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
    width: '100%'
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
        {/* */}

        {/* */}

        {/* */}

        {/* */}

        {/* */}
      </Box>
    </Grid>
  );
}

export default App;
