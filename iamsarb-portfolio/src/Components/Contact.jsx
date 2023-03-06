import { Grid } from '@mui/material'
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
    <div style = {{margin:'3%'}}> 
        <div className="contact-section" style = {{textAlign:'center'}}>
           <span style  = {{fontSize:'29px'}}> Let's Connect  </span>
        </div>
         <div className="connect-section" style = {{cursor:'pointer'}}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    
                    <Grid item xs={6}>
                      <span> 
                        <TwitterIcon sx = {{color:'#36abff'}} />
                        <Link to = "https://twitter.com/iamsarb_001" style = {{textDecoration:'none'}}>  iamsarb _001 </Link>
                      </span>
                    </Grid>

                    <Grid item xs = {6}>
                      <span>
                        <LinkedInIcon sx = {{color:'#54abff'}} />
                        <Link to = "https://www.linkedin.com/in/sarbkalyan-singh-399158159/" style = {{textDecoration:'none'}}>  sarbkalyan-singh  </Link>
                      </span>
                    </Grid>

                    <Grid item xs = {6}>
                        <GitHubIcon sx = {{color:'black'}}/>
                        <Link to = "https://github.com/sarb001" style = {{textDecoration:'none'}}>  sarb001  </Link>
                    </Grid>
                    
                    <Grid item xs = {6}>
                        <EmailIcon  sx = {{color:'black'}} />
                        <Link to = "mailto:mrsinghbusiness05@gmail.com" style = {{textDecoration:'none'}}> mrsinghbusiness05@gmail.com </Link>
                    </Grid>
                </Grid>
         </div>
    </div>
    </>
  )
}

export default Contact