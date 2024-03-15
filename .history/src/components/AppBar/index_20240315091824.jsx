import React from 'react';
import { Box } from '@mui/material';
import ModeToggle from '../ModeSelect/ModeToggle';
import AppsIcon from '@mui/icons-material/Apps';
import TrelloLogo from '../../assets/trello.svg'
import { Image } from '@mui/icons-material';
import { ReactComponent as TrelloLogo } from './star.svg';
const AppBar = () => {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Box>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Image src={TrelloLogo}/>
      </Box>
      <Box>
        <ModeToggle/> 
      </Box>
      </Box>
  );
};

export default AppBar;