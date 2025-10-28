import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';

function Header() {
  const info="Create your personalized digital profile card in minutes!Just enter your details — names, title, bio, and social links — and instantly preview your unique card.Perfect for sharing your professional identity online or adding to your portfolio."
  return (
  
     <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:'orange'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            <img src="/pngtree-id-card-icon-vector-png-image_20945759.png" alt="logo" style={{width:'50px'}} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ProfileCardBuilder
            </Typography>
            <Tooltip title={info}><Button color="inherit">About Us</Button></Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
  
  );
  
}

export default Header