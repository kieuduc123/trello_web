import React from 'react';
import { Box } from '@mui/material';
import ModeToggle from '../ModeSelect/ModeToggle';
// import ModeToggle from '~/ModeSelect/ModeToggle';


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
        Trello
      </Box>
      <Box>
        <ModeToggle/> 
      </Box>
      </Box>
  );
};

export default AppBar;