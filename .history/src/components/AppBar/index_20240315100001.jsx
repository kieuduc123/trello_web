import React from 'react';
import { Box, Typography } from '@mui/material';
import ModeToggle from '../ModeSelect/ModeToggle';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';

const AppBar = () => {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Box sx={{display: 'flex', alignItems: 'center',gap: 2}}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box  sx={{display: 'flex', alignItems: 'center',gap: .5}}>
        <SettingsAccessibilityIcon sx={{ color: 'primary.main' }} />
        <Typography variant='span' sx={{fontSize: '1.2rem', fontWeight: 'bold',color: 'primary.main'}}>Trello</Typography>
        </Box>
      </Box>
      <Box>
        <ModeToggle/> 
      </Box>
      </Box>
  );
};

export default AppBar;