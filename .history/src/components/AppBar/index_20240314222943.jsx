import React from 'react';
import ModeToggle from '../ModeSelect/ModeToggle';

const AppBar = () => {
  return (
    <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeToggle/> 
      </Box>
  );
};

export default AppBar;