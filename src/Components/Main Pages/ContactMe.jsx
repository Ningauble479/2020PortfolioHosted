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

export default function ContactMe(){
    
    const styles = useStyles()

    return(
        <Box className={styles.fullBox} style={{backgroundColor: '#1b1b1b', color:'white'}} overflow='auto'>
        <Grid className={[styles.fullBox, styles.center]} direction='column' container>
            <Typography variant='h5'>Contact Me/My Info</Typography>
            <Typography variant='h5'>Email: <a className='linkClean' style={{color: 'gray'}} href='mailto:Dvowen@cox.net'>Dvowen@cox.net</a></Typography>
            <Typography variant='h5'>Phone Number:<a className='linkClean' style={{color: 'gray'}} href='tel:949-394-8138'>949-394-8138</a></Typography>
            <Typography variant='h5'>Linked In: <a className='linkClean' style={{color: 'gray'}} href='https://www.linkedin.com/in/devon-owen-124342138/'>https://www.linkedin.com/in/devon-owen-124342138/</a></Typography>
            <Typography variant='h5'>Github: <a className='linkClean' style={{color: 'gray'}} href='https://github.com/Ningauble479'>https://github.com/Ningauble479</a></Typography>
            <Typography variant='h5'>Where I Live: Anaheim CA</Typography>
        </Grid>
        </Box>
    )
}