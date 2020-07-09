import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    fullBox: {
        width: '100%',
        height: '100%',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const info = {
    Lonnie: 'I met Lonnie in my programming bootcamp and have since worked on multiple projects with him.',
    David: 'David is my father and has taught me many things business related so that i could be well rounded as a professional.'
}

function ContactBox(props){
    return(
        <Grid container style={{paddingBottom: '50px'}} justify='center'>
            <Grid style={{color: 'white', padding: '25px'}} xs={12} lg={7} container direction='column'>
                <Typography variant='h3'>Name: {props.name}</Typography>
                <Typography variant='h4'>Role: {props.role}</Typography>
                <Typography variant='h4'><a className='linkClean' style={{color: 'gray'}} href={`mailto:${props.email}`}>Email: {props.email}</a></Typography>
                <Typography variant='h4'><a className='linkClean' style={{color: 'gray'}} href={`tel:${props.number}`}>Phone: {props.number}</a></Typography>
                <Typography variant='h4'>Info: {props.info}</Typography>
            </Grid>
        </Grid>
    )
}

export default function References(){
    
    const styles = useStyles()

    return(
        <Box className={styles.fullBox} overflow='auto' style={{backgroundColor: '#1b1b1b'}} overflow='auto'>
            <Grid className={styles.fullBox} style={{flexWrap: 'nowrap'}} container direction='column'>
                <Grid style={{color:'orange', padding: '25px', textAlign: 'center'}}><Typography variant='h2'>References</Typography></Grid>
                    <ContactBox name='Lonnie Paz' role='Full Stack Developer' email='N/A' number='N/A' info={info.Lonnie}/>
                    <ContactBox name='David Owen' role='Project Manager' email='Djowen@cox.net' number='949-331-4554' info={info.David}/>
            </Grid>
        </Box>
    )
}