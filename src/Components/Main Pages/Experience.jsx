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
    roshiHealth: `  A telehealth platform tech startup. This was one of my first major projects and where i learned a lot of React and Node. It uses multiple APIs 
                    and a lot of NPM packages. It uses mongoDB as a database hosted online. The project is currently on hold.`,

    ranchersBest: `	A meat box company that brings a box of fresh meat straight to your door from the farmer. It uses React and Node for the client and server.
                     It utilizes GraphQL through Apollo-Express and Apollo-cli(In place of Redux). For processing payments it uses Stripe.
                    `,

    UCI: ` I signed up for a coding bootcamp after practicing code for around a year. It filled in the information that i was missing and helped me network with many 
            other programmers. It is also where i met Taylor my teacher for the class who taught me a lot about overall coding concepts and really shaped me into the
            programmer i am today. He now works at google.
    `
}

function ExperienceBox(props){
    return(
        <Grid item container style={{minHeight:'400px', padding: '25px'}}>
                <Grid item container justify='center' alignItems='center' xs={12} lg={4}>
    <Box color='white' display='flex' border='10px solid white' padding='25px' justifyContent='center' alignItems='center'><Typography variant='h3'>{props.date}</Typography></Box>
                </Grid>
                <Grid item container direction='column' style={{padding: '50px', color: 'white'}} xs={12} lg={8}>
                    <Box pb={2}>
                        <Typography variant='h3'>{props.name}</Typography>
                    </Box>
                    <Box pb={2}>
                        <Typography variant='h4'>{props.title}</Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6'>
                            {props.info}
                        </Typography>
                    </Box>
                </Grid>
        </Grid>
    )
}

export default function Experience(){
    
    const styles = useStyles()

    return(
        <Box className={styles.fullBox} style={{backgroundColor: '#1b1b1b'}} overflow='auto'>
            <Grid style={{flexWrap: 'no-wrap'}} container direction='column'>
                <Grid style={{color: 'orange', textAlign: 'center', paddingTop: '25px'}} item>
                    <Typography variant='h2'>
                        Experience
                    </Typography>
                </Grid>
                <ExperienceBox date='2018-2019' name='Roshi Health' title='Full Stack Developer' info={info.roshiHealth} />
                <ExperienceBox date='2019-current' name='Ranchers Best' title='Full Stack Developer' info={info.ranchersBest} />
                <ExperienceBox date='2018-2018' name='UCI Coding Bootcamp' title='Full Stack Developer' info={info.UCI} />
            </Grid>
        </Box>
    )
}