import React from 'react';
import { Box, Container} from '@mui/material';
import ModeToggle from '../../components/ModeSelect/ModeToggle';
import AppBar from '../../components/AppBar';
import BoardBar from './BoardBar';
import BoardContent from './BoardContent';


const BoardDetail = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: ' 100vh', backgroundColor: 'primary.main' }}>
     <AppBar/>
      <BoardBar/>
     <BoardContent/>
   </Container>
  );
};

export default BoardDetail;