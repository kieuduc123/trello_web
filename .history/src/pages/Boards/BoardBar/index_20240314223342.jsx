import { Box } from '@mui/material';
import React from 'react';

const BoardBar = () => {
  return (
     <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
         height: (theme) =>  theme.trello.boarBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        Board bar
      </Box>
  );
};

export default BoardBar;