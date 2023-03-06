// import React from 'react';

// const Navbar = () => {
//   return (
//     <div> 
//         <div className="navbar-content">
//             {/* <ul style = {{listStyleType:'none'}}>
//                 <li> <a href = "/" style = {{textDecoration:'none'}}> Home      </a></li>
//                 <li> <a href = "/about" style = {{textDecoration:'none'}}>   About   </a></li>
//                 <li> <a href = "/skills" style = {{textDecoration:'none'}}>  Skills   </a></li>
//                 <li> <a href = "/contact" style = {{textDecoration:'none'}}> Contact  </a></li>
//                 <li> <a href = "/work" style = {{textDecoration:'none'}}>  Work   </a></li>
//             </ul> */}

            
//         </div>
//     </div>
//   )
// }

// export default Navbar

import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Stack } from '@mui/system';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Work from './Work';
import { Button, Grid } from '@mui/material';
import   { Link } from 'react-router-dom';  


function Navbar() {

  return (
        <>
          <Grid container spacing={4}>

              <Grid item xs = {4}>
                <Button variant='text'>  <Link to = "/" style = {{textDecoration:'none'}}> iamsarb_001  </Link>
                </Button>
              </Grid>

              <Grid item xs = {1}>
                <Button variant='text'>  <Link to = "/" style = {{textDecoration:'none'}}> Home  </Link>
                </Button>
              </Grid>

              <Grid item xs={1}>
                <Button variant='text'>  <Link to = "/about" style = {{textDecoration:'none'}}> About  </Link>
                </Button>
              </Grid>

              <Grid item xs={1}>
                <Button variant='text'>  <Link to = "/contact" style = {{textDecoration:'none'}}>  Contact  </Link> 
                </Button>
              </Grid>

              <Grid item xs={1}>
                <Button variant='text'>  <Link to = "/skills" style = {{textDecoration:'none'}}> Skills  </Link>
                </Button> 
              </Grid>

              <Grid item xs={1}>
                <Button variant='text'>  <Link to = "/work" style = {{textDecoration:'none'}}> Work </Link>
                </Button>
              </Grid>

              <Grid item xs={2}>
                <Button variant='contained'>  <Link to = "/" style = {{textDecoration:'none'}}> Resume </Link>
                </Button>
              </Grid>

           </Grid>
        </>
  );
}
export default Navbar
