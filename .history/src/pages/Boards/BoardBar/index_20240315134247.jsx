import { Box } from '@mui/material';
import React from 'react';

const BoardBar = () => {
  return (
     <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
         height: (theme) =>  theme.trello.boarBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid #000bfa5'
        
      }}>
       <Box sx={{display: 'flex', alignItems: 'center', gap : 2}}></Box>
      </Box>
  );
};

export default BoardBar;