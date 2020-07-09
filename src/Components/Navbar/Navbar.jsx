import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { AppBar, Box, Typography, Grid, withWidth, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import DropDown from './MobileDropDown'

const useStyles = makeStyles({
    root: {
        minHeight: '10vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
    },
    fillBox: {
        height: '10vh',
        width: '100%',
        alignContent: 'center'
    }
})


function NavBarButton(props){
    return(
        
            <Link to={props.link} className='NavLink'>
                <Typography variant='h6'>
                    {props.name}
                </Typography>
            </Link>
    )
}


function Navbar(props){

    const styles = useStyles()
    const { width } = props;
    let [ dropDown, setDropDown ] = useState(false)

    return(
        <AppBar className={styles.root}>
                <Grid container justify='center' className={styles.fillBox}>
                <Hidden lgUp>
                    <Grid item justify='center' alignItems='center' xs={9}>
                        <Typography style={{textAlign: 'center'}} variant='h4'>
                            Devon Owen
                        </Typography>
                    </Grid>
                    <Grid item xs={3} style={{textAlign: 'center'}} alignItems='center' onClick={()=>{setDropDown(true)}}>
                        <MenuIcon fontSize='large'/>
                    </Grid>
                    <DropDown dropDown={dropDown} setDropDown={setDropDown}/>
                </Hidden>
                <Hidden mdDown>
                    <Box display='flex' justify='center' alignItems='center'>
                        <Typography variant='h2'>
                            Devon Owen
                        </Typography>
                    </Box>
                    <Box>
                        <Grid className={styles.fillBox} container>
                            <NavBarButton name='Welcome' link='/' />
                            <NavBarButton name='About Me' link='/about' />
                            <NavBarButton name='Knowledge' link='/knowledge' />
                            <NavBarButton name='Experience' link='/experience' />
                            <NavBarButton name='Portfolio' link='/portfolio' />
                            <NavBarButton name='References' link='/references' />
                            <NavBarButton name='Contact' link='/contact' />
                        </Grid>
                    </Box>
                    </Hidden>
                </Grid>
        </AppBar>
    )
}

Navbar.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };

export default withWidth()(Navbar)