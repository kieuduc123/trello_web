import React from 'react';
import { Box, Chip } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
const BoardBar = () => {
  return (
     <Box  sx={{
        width: '100%',
         height: (theme) =>  theme.trello.boarBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      padding: 2,
      overflowX: 'auto',
      borderTop: '1px solid #000bfa5'
        
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip icon={<DashboardIcon />} label="DucInter" />
       </Box>
       <Box sx={{display: 'flex', alignItems: 'center', gap : 2}}></Box>
      </Box>
  );
};

export default BoardBar;