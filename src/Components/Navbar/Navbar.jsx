import React from 'react'
import { AppBar, Box, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        minHeight: '10vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
    },
    name: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: '100px'
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


export default function Navbar(){

    const styles = useStyles()

    return(
        <AppBar className={styles.root}>
            <Grid container justify='center' className={styles.fillBox}>
                <Box className={styles.name}>
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
            </Grid>
        </AppBar>
    )
}