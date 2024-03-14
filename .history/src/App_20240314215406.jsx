import { Box, Container} from '@mui/material';
import ModeToggle from './utils/ModeToggle';
const App = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: ' 100vh', backgroundColor: 'primary.main' }}>

      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) =>  theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeToggle /> 
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
         height: (theme) =>  theme.trello.boarBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        Board bar
      </Box>
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

export default App;