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

function SkillBox(props){
    return(
        <Box display='flex' flexDirection='column' width='30%' height='250px'>
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
        </Box>
    )
}

function SkillBar(props){

    const styles = useStyles()

    let [ loader, loadEffect ] = useState(false)

    useEffect(()=>{
        loadEffect(true)
    },[])

    return(
        <Grid style={{width: '45%', paddingRight: '5%'}} direction='column'>
            <Box color='white'>
    <Typography variant='h6'>{props.name}</Typography>
            </Box>
            <Box height='20px' width='100%' style={{backgroundColor:'gray'}}>
                <Box width='80%' height='100%' style={loader === false ? {backgroundColor: 'orange', width: '0%'} : {backgroundColor:'orange', width: props.level, transition: 'all 1s'}}>
                    
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
                <Box color='orange' width='100%' height='403' mt={3}>
                    <Grid className={styles.fullBox} container>
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

                    <SkillBar name='React' level='95%'/>
                    <SkillBar name='Vue' level='30%'/>
                    <SkillBar name='Express' level='80%'/>
                
                    </Grid>
                </Box>

                <Box color='orange' pr='10vw' mb={3} mt={3}>
                    <Grid container>
                        {/* Languages */}

                        <Box pb={3} width='100%' textAlign='center' color='white'><Typography variant='h4'>Languages</Typography></Box>

                        <SkillBar name='Javascript' level='95%'/>
                        <SkillBar name='CSS' level='75%'/>
                        <SkillBar name='HTML' level='85%'/>
                        <SkillBar name='Node' level='80%'/>
                        <SkillBar name='MongoDB' level='85%'/>
                        <SkillBar name='MySQL' level='60%'/>
                        <SkillBar name='GraphQL' level='75%'/>
                        <SkillBar name='PHP' level='40%'/>
                    </Grid>
                </Box>

                <Box color='orange' pr='10vw' mb={3} mt={3}>
                    <Grid container>
                    {/* Packages */}
                    <Box pb={3} width='100%' textAlign='center' color='white'><Typography variant='h4'>Packages</Typography></Box>
                    <SkillBar name='Material-UI' level='90%'/>
                    <SkillBar name='mongoose' level='90%'/>
                    <SkillBar name='Apollo-React' level='80%'/>
                    <SkillBar name='Stripe' level='85%'/>
                    <SkillBar name='Axios' level='80%'/>
                    <SkillBar name='Ajax' level='75%'/>
                    </Grid>
                </Box>
                <Box  color='orange' pr='10vw' mb={3} mt={3}>
                    <Grid container>
                        {/* WebHosting/Servers */}
                        <Box pb={3} width='100%' textAlign='center' color='white'><Typography variant='h4'>Webhosting/Servers</Typography></Box>
                        <SkillBar name='Azure' level='75%'/>
                        <SkillBar name='AWS' level='35%'/>
                        <SkillBar name='Heroku' level='80%'/>
                        <SkillBar name='Linux(CentOS7)' level='50%'/>
                    </Grid>
                </Box>

                <Box color='orange' pr='10vw' mb={3} mt={3}>
                    <Grid container>
                    {/* Version Control */}
                    <Box pb={3} width='100%' textAlign='center' color='white'><Typography variant='h4'>Version Control</Typography></Box>
                    <SkillBar name='Github/Git' level='90%'/>
                    </Grid>
                </Box>
                    
                <Box color='orange' pr='10vw' mb={6} mt={3}>
                    <Grid container>
                        {/* Task Management */}
                        <Box pb={3} width='100%' textAlign='center' color='white'><Typography variant='h4'>Task Management</Typography></Box>
                        <SkillBar name='Asana' level='75%'/>
                        <SkillBar name='Trello' level='75%'/>
                        <SkillBar name='Agile' level='60%'/>
                        <SkillBar name='Scrum' level='60%'/>
                    </Grid>
                </Box>


            </Grid>
        </Box>
    )
}