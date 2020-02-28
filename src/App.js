import React from 'react';
import NavBar from './components/NavBar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'




const App = () => {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              <NavBar />
           </TypoGraphy>
           
          </Toolbar>
        </AppBar>
         <Box component="span" m={1}>
            <Container maxWidth="sm">
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>            
         </Box>
      </div>
    )
  
}
export default App;