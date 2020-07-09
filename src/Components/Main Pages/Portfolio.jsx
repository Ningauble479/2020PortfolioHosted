import React, {useState} from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RoshiPic from '../../Images/RoshiHealth.png'
import RanchersBest from '../../Images/RanchersBest.png'
import DaDApp from '../../Images/DnDProject.png'
import Tasky from '../../Images/Tasky.png'


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

function PortfolioBox(props){

    const styles = useStyles()

    let [ hovered, handleHover ] = useState(false)

    return(
        <a className='linkClean' onMouseEnter={()=>{handleHover(true)}} onMouseLeave={()=>{handleHover(false)}} href={props.link} target='_blank'>
            <Grid style={{height: '300px', width:'300px', outline: '1px solid orange', margin: '10px'}}>
                <Box className={styles.fullBox} style={{backgroundImage: `url(${props.image})`, backgroundSize: 'cover'}}>
                    <Box color='white' overflow='hidden' style={hovered === true ? {transition: '.3s all', backgroundColor: 'rgba(0, 0, 0, .6)', height: '100%'}: {transition: '.3s all',height: '0%'}}>
                        <Typography variant='h4'>{props.name}</Typography>
                        <Typography variant='h5'>
                            {props.shortDesc}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </a>
    )
}

export default function Portfolio(){
    
    const styles = useStyles()

    return(
        <Box className={styles.fullBox} style={{backgroundColor: '#1b1b1b'}} overflow='auto'>
            <Grid className={styles.fullBox} style={{flexWrap: 'nowrap'}} container direction='column'>
                <Grid style={{color: 'Orange', textAlign: 'center', marginTop: '25px', marginBottom: '25px'}} item><Typography variant='h2'>Portfolio</Typography></Grid>
                <Grid container justify='center'>
                    <PortfolioBox name='Roshi Health' shortDesc='An unfinished large scale telehealth App' link='https://roshi-health.herokuapp.com/home' image={RoshiPic}/>
                    <PortfolioBox name='Ranchers Best' shortDesc='Meat Box store (WIP)' link='https://ranchers-best.herokuapp.com/' image={RanchersBest}/>
                    <PortfolioBox name='Dungeons And Dragons App' shortDesc='Basic Dungeons and Dragons app showing info.(WIP)' link='https://danddreactapp.herokuapp.com/' image={DaDApp}/>
                    <PortfolioBox name='Tasky' shortDesc='A website i made in class email:djowen@cox.net password:a' link='https://bacon-salad-tasky.herokuapp.com/' image={Tasky}/>
                </Grid>
            </Grid>
        </Box>
    )
}