import { Avatar, Grid } from '@mui/material'
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import JavascriptIcon from '@mui/icons-material/Javascript';
import { Stack } from '@mui/system';


const Skills = () => {
  return (
    <div>
       <div className = "skills-section" style = {{margin:'4%'}}>
            <h3>  Skillss </h3>
           <div className = "avatar">

           <Grid  container spacing={2}>

                <Grid item xs = {2}>
                    <p> <Avatar sx = {{ backgroundColor:'lightgrey' ,width: 70 ,height: 70 }}>
                            <img src = "/src/assets/HTML-1.png" style = {{width:'80%'}} />
                        </Avatar>
                    </p>
                </Grid>

                <Grid item xs = {2}>
                    <p> <Avatar sx = {{ backgroundColor:'lightsalmon' ,width: 70 ,height: 70 }}>
                    <img src = "/src/assets/C++-8png.png" style = {{width:'80%'}} />
                      </Avatar>
                    </p>
                </Grid>

                <Grid item xs = {2}>
                    <p> <Avatar sx = {{ backgroundColor:'lightgrey' ,width: 70 ,height: 70 }}>
                    <img src = "/src/assets/JS-3.png" style = {{width:'80%'}} />
                          </Avatar>
                      </p>
                </Grid>

                <Grid item xs = {2}>
                    <p> <Avatar sx = {{ backgroundColor:'lightsalmon' ,width: 70 ,height: 70 }}>
                    <img src = "/src/assets/React-4.png" style = {{width:'80%'}} />
                      </Avatar>
                    </p> 
                </Grid>

                <Grid item xs = {2}>
                    <p> <Avatar sx = {{ backgroundColor:'lightgrey' ,width: 70 ,height: 70 }}>
                         <img src = "/src/assets/Firebase-7.7-removebg-preview.png" style = {{width:'70%'}} />
                      </Avatar>
                    </p> 
                </Grid>

                <Grid item xs = {2}>
                    <p> <Avatar sx = {{ backgroundColor:'lightsalmon' ,width: 70 ,height: 70 }}>
                         <img src = "/src/assets/Redux-5.png" style = {{width:'70%'}} />
                      </Avatar>
                    </p> 
                </Grid>

                <Grid item xs = {2}>
                    <p> <Avatar sx = {{ backgroundColor:'lightgrey' ,width: 70 ,height: 70 }}>
                         <img src = "/src/assets/tailwind-css.png" style = {{width:'70%'}} />
                      </Avatar>
                    </p> 
                </Grid>

                <Grid item xs = {2}>
                    <p> <Avatar sx = {{ backgroundColor:'lightsalmon', width: 70 ,height: 70 }}>
                         <img src = "/src/assets/Nodejs-Org.svg" style = {{width:'70%'}} />
                      </Avatar>
                    </p> 
                </Grid>

                <Grid item xs = {2}>
                    <p> <Avatar sx = {{ backgroundColor:'lightgrey', width: 70 ,height: 70 }}>
                         <img src = "/src/assets/postman-icon-svgrepo-com.svg" style = {{width:'70%'}} />
                      </Avatar>
                    </p> 
                </Grid>

            </Grid>
           </div>
       </div>
    </div>
  )
}

export default Skills