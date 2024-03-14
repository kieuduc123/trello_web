import { Box, Button, Container, Typography } from '@mui/material';
import ModeToggle from './utils/ModeToggle';
const App = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: ' 100vh', backgroundColor: 'primary.main' }}>

      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: '48',
      }}>   <ModeToggle/>
   
        
        
      </Box>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: '48',
      }}>  Board bar
      </Box>
   </Container>
  );
};

export default App;