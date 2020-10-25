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
    Phil: 'Phil is another full stack developer that ive worked with on many projects.'
}

function ContactBox(props){
    return(
        <Grid container style={{paddingBottom: '50px'}} justify='center'>
            <Grid style={{color: 'white', padding: '25px'}} xs={12} lg={7} container direction='column'>
                <Typography variant='h3'>{props.name}</Typography>
                <Typography variant='h4'>{props.role}</Typography>
                <Typography variant='h4'><a className='linkClean' style={{color: 'gray'}} href={`mailto:${props.email}`}>{props.email}</a></Typography>
                <Typography variant='h4'><a className='linkClean' style={{color: 'gray'}} href={`tel:${props.number}`}>{props.number}</a></Typography>
                { props.link ?
                <Typography variant='h4'><a className='linkClean' style={{color: 'gray'}} href={props.link}>{props.link}</a></Typography>
                :
                null
}
                <Typography variant='h4'>{props.info}</Typography>
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
                    <ContactBox name='Lonnie Paz' role='Full Stack Developer' email='N/A' number='520-906-1694' info={info.Lonnie}/>
                    <ContactBox name='Phillip Cummings' role='Full Stack Web Developer' link='https://aisaka.dev' email='phillipCummings@gmail.com' number='203-828-7671' info={info.Phil}/>
            </Grid>
        </Box>
    )
}