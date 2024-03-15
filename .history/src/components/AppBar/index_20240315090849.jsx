import React from 'react';
import { Box } from '@mui/material';
import ModeToggle from '../ModeSelect/ModeToggle';
import AppsIcon from '@mui/icons-material/Apps';


const AppBar = () => {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Box>
        <AppsIcon/>
      </Box>
      <Box>
        <ModeToggle/> 
      </Box>
      </Box>
  );
};

export default AppBar;