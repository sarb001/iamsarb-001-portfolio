import { Stack, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const About = () => {
  return (
    <div style = {{margin:'1% 3%'}}> 
         <div className = "about-section">
            <Stack direction = "row" spacing = {4}>

              <Card sx={{ maxWidth: 345,borderRadius:'15px' }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image="/src/assets/web-designer.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                     Web Designer 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  I am a web desinger with a passion for 
                   building beautiful and functional web applications. 
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ maxWidth: 345 ,borderRadius:'15px' }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image="/src/assets/React -dev.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                     React  Developer 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                                 I feel happpy while designing and 
                                implementing user-facing features 
                                for websites and applications using React.js
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ maxWidth: 345 , borderRadius:'15px'}}>
                <CardMedia
                  sx={{ height: 200 }}
                  image="/src/assets/Front-end.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                     Front-end Dev 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                             Love to juggle through code and 
                                structure UI which can give user 
                                a good experience while surfing
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ maxWidth: 300 ,borderRadius:'15px' }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image="/src/assets/backend-dev.png"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                     Back-end Dev 
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                            Having Skills  to build 
                            Robust and Scalable  Application ,
                            made a Dev Bad-ass Developer
                  </Typography>
                </CardContent>
              </Card>

            </Stack>
         </div>
    </div>
  )
}

export default About