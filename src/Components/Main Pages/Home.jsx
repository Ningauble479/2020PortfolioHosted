import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BackgroundImage from '../../Images/wp1828901-programmer-wallpapers.jpg'
import placeholderPic from '../../Images/PlaceholderPicture.png'
import profilePic from '../../Images/profilePic.jpg'
import Knowledge from '../Main Pages/Knowledge/Knowledge'
import Experience from '../Main Pages/Experience'
import References from '../Main Pages/References'
import Contact from '../Main Pages/ContactMe'

const useStyles = makeStyles({
    root: {
        height: '350px',
        width: '100%',
        backgroundColor: '#1b1b1b',
        color: 'white'
    },
    fullBox: {
        width: '100%',
        height: '100%',
    },
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
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default function Home(){
    
    const styles = useStyles()

    return(
        <Grid container direction='column'>
        <Box pl='13vw' style={{backgroundImage:`url(${BackgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'left'}} className={styles.root}>
            <Grid container direction='column' justify='center' className={styles.fullBox}>
                <Box mb={6}>
                    <Typography variant='h4' >
                        Hello, My Name Is
                    </Typography>
                </Box>
                <Box mb={4} color='orange'>
                    <Typography variant='h2'>
                        Devon
                    </Typography>
                </Box>
                <Box mb={4}>
                    <Typography variant='h4'>
                        I am a Full Stack Web Developer
                    </Typography>
                </Box>
                
            </Grid>
        </Box>
        <Box style={{height:'750px', width: '100vw'}}>
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
        </Box>
        <Box width='100vw'>
        <Knowledge/>
        </Box>
        <Box width='100vw'>
        <Experience/>
        </Box>
        <Box width='100vw'>
        <References/>
        </Box>
        <Box width='100vw'>
        <Contact/>
        </Box>
        </Grid>
    )
}