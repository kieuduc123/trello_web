import React from 'react';
import { Box } from '@mui/material';
import ModeToggle from '../ModeSelect/ModeToggle';
import AppsIcon from '@mui/icons-material/Apps';
// import TrelloLogo from '../../assets/trello.svg'
import { ReactComponent as TrelloIcon} from '~/assets/trello.svg';
import SvgIcon from '@mui/material/SvgIcon';

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
        <SvgIcon component={TrelloIcon} inheritViewBox/>
      </Box>
      <Box>
        <ModeToggle/> 
      </Box>
      </Box>
  );
};

export default AppBar;