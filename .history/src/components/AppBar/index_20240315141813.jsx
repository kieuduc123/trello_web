import React from 'react';
import {
  Badge,
  Box,
  Button,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import ModeToggle from '../ModeSelect/ModeToggle';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import Workspaces from './Menus/Workspaces';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { HelpOutlineOutlined } from '@mui/icons-material';
import Profiles from './Menus/Profiles';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SettingsAccessibilityIcon sx={{ color: 'primary.main' }} />
          <Typography
            variant="span"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.main',
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{display : {xs: 'none',md: 'flex'},gap: 1}}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
        </Box>

        <Button variant="outlined" startIcon={<LibraryAddIcon/>}>Invite</Button>
        <Button variant="outlined" startIcon={<PersonAddIcon/>}>Invite</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          sx={{minWidth: '120'}}
          id="outlined-search"
          size="small"
          label="Search ...."
          type="search"
        />
        <ModeToggle />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="help">
          <HelpOutlineOutlined
            sx={{ cursor: 'pointer', color: 'primary.main' }}
          />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
};

export default AppBar;
