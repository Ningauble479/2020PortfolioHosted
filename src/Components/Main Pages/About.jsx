import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
        border: '1px solid black'
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
        <Grid className={styles.fullBox} justify='space-between' container>
            <Box className={styles.centeredPic} width='50%'>
                <Box className={styles.picture}>
                    Picture did not load
                </Box>
            </Box>
            <Box width='50%'>
                <Grid container direction='column' style={{paddingRight: '15vw'}} className={[styles.fullBox , styles.center]}>
                    <Box width='100%' pb={5} textAlign='right'>
                        <Typography variant='h2'>
                            About Me
                        </Typography>
                    </Box>
                    <Box textAlign='right'>
                        <Typography variant='h5'>Full Stack Web Developer with a background in Information Technology and life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among staff for strong wit and attention to detail no matter the complexity of the project. 3+ years of expierenced programming.</Typography>
                    </Box>

                </Grid>
            </Box>
        </Grid>
    )
}