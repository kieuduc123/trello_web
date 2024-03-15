import React from 'react';
import { Badge, Box, Button, TextField, Tooltip, Typography } from '@mui/material';
import ModeToggle from '../ModeSelect/ModeToggle';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const AppBar = () => {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: .5 }}>
          <SettingsAccessibilityIcon
            sx={{ color: 'primary.main' }} />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
            Trello
          </Typography>
        </Box>

        <Workspaces />
        <Recent />
        <Starred />
        <Templates /> 

        <Button variant="outlined">Create</Button>

      </Box>
      <Box  sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search"
          
          size='small' label="Search ...." type="search" />
        <ModeToggle />
        <Tooltip title="Notification">
         <Badge color="secondary" variant="dot" sx={{cursor: 'pointer'}}>
         <NotificationsNoneIcon/>
        </Badge>
        </Tooltip>
      </Box>
      </Box>
  );
};

export default AppBar;