import React from 'react';
import { Box, Container} from '@mui/material';
import ModeToggle from '../../components/ModeSelect/ModeToggle';
import AppBar from '../../components/AppBar';
import BoardBar from './BoardBar';


const BoardDetail = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: ' 100vh', backgroundColor: 'primary.main' }}>
     <AppBar/>
      <BoardBar/>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
         height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boarBarHeight})`,
        alignItems: 'center',
      }}>
        Board bar
      </Box>
   </Container>
  );
};

export default BoardDetail;