import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1b1b1b',
        color: 'white'
    },
    fullBox: {
        width: '100%',
        height: '100%',
    }
})

export default function Home(){
    
    const styles = useStyles()

    return(
        <Box pl='13vw' className={styles.root}>
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
    )
}