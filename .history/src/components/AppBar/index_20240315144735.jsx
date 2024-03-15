import React from 'react';
import {
  Badge,
  Box,
  Button,
  InputAdornment,
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
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SearchIcon from '@mui/icons-material/Search';
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
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SettingsAccessibilityIcon sx={{ color: 'white' }} />
          <Typography
            variant="span"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'white',
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

        <Button
          sx={{
            color: 'white',
            border: 'none',
            '&:hover': {
              border: 'none',
            }
          }} variant="outlined" startIcon={<LibraryAddIcon />}>Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          InputProps={{
            startAdornment: {
              <InputAdornment position='start'>
              <SearchIcon/>
              </InputAdornment>
            }
          }}
          sx={{
            minWidth: '120'
          }}
          id="outlined-search"
          size="small"
          label="Search ...."
          type="search"
        />
        <ModeToggle />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="help">
          <HelpOutlineOutlined
            sx={{ cursor: 'pointer', color: 'white' }}
          />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  );
};

export default AppBar;
