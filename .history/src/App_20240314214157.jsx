import { Box, Container} from '@mui/material';
import ModeToggle from './utils/ModeToggle';
const App = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: ' 100vh', backgroundColor: 'primary.main' }}>

      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: '48px',
         height: '48px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeToggle /> 
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: '48px',
        display: 'flex',
        alignItems: 'center'
      }}>
        Board bar
      </Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        display: 'flex',
         height: 'calc(100vh -58px -48px)',
        alignItems: 'center',
        
      }}>
        Board bar
      </Box>
   </Container>
  );
};

export default App;