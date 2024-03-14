import { Box } from '@mui/material';
import React from 'react';

const BoardContent = () => {
  return (
    <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
         height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boarBarHeight})`,
        alignItems: 'center',
      }}>
        Board bar
      </Box>
  );
};

export default BoardContent;