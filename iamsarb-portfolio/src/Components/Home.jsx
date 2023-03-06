import { Button, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div style = {{padding:'3%'}}>
      <Grid container spacing={2} columns={16} style = {{textAlign:'center'}}>
        <Grid item xs={8} style = {{textAlign:'center',alignSelf:'center'}}>
          <Stack spacing={4}>
              <span>
                <Button variant = 'contained' style = {{fontSize:'15px'}}> Welcome My name is SARB   </Button>
              </span>
              <span>
                    <span style = {{paddingTop:'12%',fontSize:'31px'}}>  Full Stack  Web Dev from India    </span>
              </span>
           </Stack>
        </Grid>
        <Grid item xs={8}>
          <img src = "/src/assets/owner Avatar.png" alt = "Avatar" style = {{width:'30%'}} />
        </Grid>
       </Grid>
      </div> 
    </div>
  )
}

export default Home