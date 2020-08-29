import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import placeholderPic from '../../Images/PlaceholderPicture.png'
import profilePic from '../../Images/profilePic.jpg'


const useStyles = makeStyles({
    centeredPic: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    picture: {
        width: '70%',
        height: '70%',
        border: '1px solid black',
        backgroundImage: `url(${profilePic ? profilePic : placeholderPic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    fullBox: {
        width: '100%',
        height: '100%',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default function About(){
    
    const styles = useStyles()

    return(
        <Box className={styles.fullBox} overflow='auto'>
        <Grid className={styles.fullBox} container>
            <Grid item className={styles.centeredPic} xs={12} lg={6}>
                <Box className={styles.picture}>
                </Box>
            </Grid>
            <Grid item container justify='center' xs={12} lg={6}>
                <Grid container direction='column' style={{width: '75%'}} className={[styles.fullBox , styles.center]}>
                    <Box width='100%' pb={5} textAlign='center'>
                        <Typography variant='h2'>
                            About Me
                        </Typography>
                    </Box>
                    <Box textAlign='center'>
                        <Typography variant='h5'>Full Stack Web Developer with a background in Information Technology and life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among staff for strong wit and attention to detail no matter the complexity of the project. 3+ years of experienced programming.</Typography>
                    </Box>

                </Grid>
            </Grid>
        </Grid>
        </Box>
    )
}