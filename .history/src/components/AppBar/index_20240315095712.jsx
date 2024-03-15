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
      <Box>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box>
        <SettingsAccessibilityIcon sx={{ color: 'primary.main' }} />
        <Typography variant='span'>Trello</Typography>
        </Box>
      </Box>
      <Box>
        <ModeToggle/> 
      </Box>
      </Box>
  );
};

export default AppBar;