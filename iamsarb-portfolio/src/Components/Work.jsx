import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Work = () => {
  return (
    <>
    <div style = {{margin:'3% 4%'}}>
          <div className = "work-section" style  = {{textAlign:'center'}}>
             <span style = {{fontSize:"33px"}}> My Creative Portfolio Section  </span>
          </div>

            {/* cards */}
                    <Stack direction = "row" spacing = {4}>
                      
                      <Card sx={{ maxWidth: 340,borderRadius:'15px' }}>
                        <CardMedia  
                          sx={{ height: 200 }}
                          image="/src/assets/web-designer.png"
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                              Tesla-Ecommerce 
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            A Full-Stack Website with UI 
                            A Full-Stack Website with UI 
                          </Typography>
                        </CardContent>
                      </Card>
                      
                    </Stack>

    </div>
    </>
  )
}

export default Work