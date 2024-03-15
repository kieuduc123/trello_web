import React from 'react';
import { Box, Chip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
const BoardBar = () => {
  return (
     <Box  sx={{
        width: '100%',
         height: (theme) =>  theme.trello.boarBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      px: 2,
      overflowX: 'auto',
      borderTop: '1px solid #000bfa5'
        
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={{
            color: 'primary.main',
            bgcolor: 'white',
            border: none,
            paddingX: '5px',
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
              
          }}
          clickable icon={<DashboardIcon />} label="DucInter" />
        <Chip
          sx={{
            color: 'primary.main',
            bgcolor: 'white',
            border: none,
            paddingX: '5px',
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
              
          }}
          clickable icon={<VpnLockIcon />} label="Public/Private Workspace" />
        <Chip
          sx={{
            color: 'primary.main',
            bgcolor: 'white',
            border: none,
            paddingX: '5px',
            borderRadius: '4px',
            '& .MuiSvgIcon-root': {
              color: 'primary.main'
            },
            '&:hover': {
              bgcolor: 'primary.50'
            }
              
          }}
          clickable icon={<AddToDriveIcon />} label="Add to dirve" />
        
        
          
       </Box>
       <Box sx={{display: 'flex', alignItems: 'center', gap : 2}}></Box>
      </Box>
  );
};

export default BoardBar;