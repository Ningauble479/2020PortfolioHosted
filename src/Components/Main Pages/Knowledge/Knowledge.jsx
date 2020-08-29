import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

//icon imports
import CodeIcon from '@material-ui/icons/Code';
import SettingsIcon from '@material-ui/icons/Settings';
import FolderIcon from '@material-ui/icons/Folder';
import StorageIcon from '@material-ui/icons/Storage';
import GitHubIcon from '@material-ui/icons/GitHub';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';



const useStyles = makeStyles({
    root: {
        height: '100%',
        maxWidth: '100%',
        backgroundColor: '#1b1b1b',
        color: 'white',
        overflow: 'auto'
    },
    fullBox: {
        width: '100%',
        height: '100%',
    },
    loadBar: {
        transition: 'all .5s',
    }
})

const descriptions = {
    Languages: 'My primary tech stack is Node/Express with apollo-GraphQL and Mongoose server side and React using Apollo-Client for GraphQL client side with Material-UI for styling. I have also worked with some PHP and MYSQL.',
    Frameworks: 'My most used Language/Framework is React. It is what im most proficient in. I have spent years learning the best practices and learning new cleaner ways to run code. I have also learned some Vue.',
    Packages: 'I have used multiple popular NPM packages in projects that ive worked on. Some of the larger ones include Stripe, Axios/Ajax, Apollo-Client with Apollo-React-Hooks for client side graphQL and Material-ui',
    Server: 'I host most of my websites and projects through azure. I have some experience with AWS but not a lot. I also use Heroku for testing. For smaller projects i have rented server space manually and have also hosted my own servers. Having a background in IT allows me to set up my own Webservers when neccesary.',
    version: 'I have spent a lot of time using Github even when im solo programming. I follow best practices and always make sure to have a healthy commit history. At this point github is second nature to me and a must have on all my projects.',
    task: 'I have used Asana for some larger projects ive worked on and generally use trello for smaller projects. I find Asana to have more depth and features but trello is much easier to use and navigate and better when extra features are not needed.'
}

//Components
function SkillBox(props){
    return(
        <Grid item lg={4} md={6} xs={12} display='flex' flexDirection='column'>
            <Box display='flex' pb={2}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    {props.icon}
                </Box>
                <Box pl={3}>
                    <Typography variant='h5'>
                    {props.name}
                    </Typography>
                </Box>
            </Box>
            <Box color='white'>
                <Typography variant='h6'>
                    {props.description}
                </Typography>
            </Box>
        </Grid>
    )
}

function SkillBar(props){

    const styles = useStyles()

    let [ loader, loadEffect ] = useState(false)

    useEffect(()=>{
        loadEffect(true)
    },[])

    return(
        <Grid item lg={6} xs={12} direction='column' style={{border:'1px solid orange', background: '#43464b'}}>
            <Box item color='white'>
                <Typography variant='h4'>{props.name}</Typography>
            </Box>
            <Box width='100%'>
                <Box color='white' marginTop='15px' width='80%' height='100%'>
                    <Typography variant='h6'>
                        Used In: {props.projects}
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}

export default function Home(){
    
    const styles = useStyles()

    return(
        <Box pl='13vw' className={styles.root}>
            <Grid container direction='column' wrap='nowrap' className={styles.fullBox}>
                <Box color='white' mt={6}>
                    <Typography variant='h2'>
                        Skill Set
                    </Typography>
                </Box>
                <Box color='orange' width='90%' mt={3}>
                    <Grid spacing={5} container>
                        <SkillBox icon={<CodeIcon/>} description={descriptions.Languages} name='Languages'/>
                        <SkillBox icon={<SettingsIcon/>} description={descriptions.Frameworks} name='Frameworks'/>
                        <SkillBox icon={<FolderIcon/>} description={descriptions.Packages} name='Packages'/>
                        <SkillBox icon={<StorageIcon/>} description={descriptions.Server} name='Server/Hosting'/>
                        <SkillBox icon={<GitHubIcon/>} description={descriptions.version} name='Version Control'/>
                        <SkillBox icon={<FormatListNumberedIcon/>} description={descriptions.task} name='Task Management'/>
                    </Grid>
                </Box>
                <Box color='orange' pr='10vw' mb={3} mt={3}>
                    <Grid container>
                    {/* Frameworks */}

                    <Box pb={3} width='100%' textAlign='center' color='white'><Typography variant='h4'>Frameworks</Typography></Box>
                        <Grid container spacing={3} style={{width: '100%'}}>
                            <SkillBar name='React' projects='Roshi Health, Ranchers Best, This Portfolio'/>
                            <SkillBar name='Vue' projects="Testing"/>
                            <SkillBar name='Express' projects='Roshi Health, Ranchers Best'/>
                        </Grid>
                    </Grid>
                </Box>

                <Box color='orange' pr='10vw' mb={3} mt={3}>
                    <Grid container>
                        {/* Languages */}

                        <Box pb={3} width='100%' textAlign='center' color='white'><Typography variant='h4'>Languages</Typography></Box>
                        <Grid container spacing={3} style={{width: '100%'}}>
                            <SkillBar name='Javascript' projects='Roshi Health, Ranchers Best'/>
                            <SkillBar name='CSS' projects='Roshi Health, Ranchers Best'/>
                            <SkillBar name='HTML' projects='Roshi Health, Ranchers Best'/>
                            <SkillBar name='Node' projects='Roshi Health, Ranchers Best'/>
                            <SkillBar name='MongoDB' projects='Roshi Health, Ranchers Best'/>
                            <SkillBar name='MySQL' projects='School Projects'/>
                            <SkillBar name='GraphQL' projects='Roshi Health, Ranchers Best'/>
                            <SkillBar name='PHP' projects='Testing'/>
                        </Grid>
                    </Grid>
                </Box>

                <Box color='orange' pr='10vw' mb={3} mt={3}>
                    <Grid container>
                    {/* Packages */}
                    <Box pb={3} width='100%' textAlign='center' color='white'><Typography variant='h4'>Packages</Typography></Box>
                    <Grid container spacing={3} style={{width: '100%'}}>
                    <SkillBar name='Material-UI' projects='Roshi Health, Ranchers Best, This Portfolio'/>
                    <SkillBar name='Mongoose' projects='Roshi Health, Ranchers Best'/>
                    <SkillBar name='Apollo-React' projects='Ranchers Best'/>
                    <SkillBar name='Stripe' projects='Roshi Health, Ranchers Best'/>
                    <SkillBar name='Axios' projects='Roshi Health, Ranchers Best'/>
                    <SkillBar name='Ajax' projects='School Projects'/>
                    </Grid>
                    </Grid>
                </Box>
                <Box  color='orange' pr='10vw' mb={3} mt={3}>
                    <Grid container>
                        {/* WebHosting/Servers */}
                        <Box pb={3} width='100%' textAlign='center' color='white'><Typography variant='h4'>Webhosting/Servers</Typography></Box>
                        <Grid container spacing={3} style={{width: '100%'}}>
                        <SkillBar name='Azure' projects='Roshi Health'/>
                        <SkillBar name='AWS' projects='School Projects'/>
                        <SkillBar name='Heroku' projects='Roshi Health, Ranchers Best'/>
                        <SkillBar name='Linux(CentOS7)' projects='Game Server Hosting'/>
                        </Grid>
                    </Grid>
                </Box>

                <Box color='orange' pr='10vw' mb={3} mt={3}>
                    <Grid container>
                    {/* Version Control */}
                    <Box pb={3} width='100%' textAlign='center' color='white'><Typography variant='h4'>Version Control</Typography></Box>
                    <Grid container spacing={3} style={{width: '100%'}}>
                    <SkillBar name='Github/Git' projects='Every Project I Work On'/>
                    </Grid>
                    </Grid>
                </Box>
                    
                <Box color='orange' pr='10vw' mb={6} mt={3}>
                    <Grid container>
                        {/* Task Management */}
                        <Box pb={3} width='100%' textAlign='center' color='white'><Typography variant='h4'>Task Management</Typography></Box>
                        <Grid container spacing={3} style={{width: '100%'}}>
                        <SkillBar name='Asana' projects='Roshi Health, Ranchers Best'/>
                        <SkillBar name='Trello' projects='Testing'/>
                        <SkillBar name='Agile' projects='Roshi Health, Ranchers Best'/>
                        <SkillBar name='Scrum' projects='Roshi Health, Ranchers Best'/>
                        </Grid>
                    </Grid>
                </Box>


            </Grid>
        </Box>
    )
}