import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    fillBox: {
        width: '100%',
        height: '100%'
    }
})

function NavBarButton(props){
    return(
        
            <Link to={props.link} onClick={()=>{props.setDropDown(false)}} className='NavLinkMobile'>
                <Typography variant='h6'>
                    {props.name}
                </Typography>
            </Link>
    )
}


export default function DropDown(props){

    const styles = useStyles()

    return(
        <Box position='fixed' overflow='hidden' borderBottom='3px solid black' style={props.dropDown === true ? {height: '100vh', width: '100vw', transition: 'height .5s', transitionTimingFunction: 'ease', backgroundColor: '#1b1b1b'} : {width: '100vw', height: 0, transition: 'height .5s', transitionTimingFunction: 'ease', backgroundColor: '#1b1b1b'}}>
            <Grid container direction='column' className={styles.fillBox}>
                <Box display='flex' height='9%' justifyContent='center' alignItems='center' width='100%' onClick={()=>{props.setDropDown(false)}}>
                    <CloseIcon fontSize='large'/>
                </Box>
                <NavBarButton setDropDown={props.setDropDown} name='Welcome' link='/' />
                <NavBarButton setDropDown={props.setDropDown} name='About Me' link='/about' />
                <NavBarButton setDropDown={props.setDropDown} name='Knowledge' link='/knowledge' />
                <NavBarButton setDropDown={props.setDropDown} name='Experience' link='/experience' />
                <NavBarButton setDropDown={props.setDropDown} name='Portfolio' link='/portfolio' />
                <NavBarButton setDropDown={props.setDropDown} name='References' link='/references' />
                <NavBarButton setDropDown={props.setDropDown} name='Contact' link='/contact' />
            </Grid>
        </Box>
    )
}