import { Box, Button, Container, Typography } from '@mui/material';
const App = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: ' 100vh', backgroundColor: 'primary.main' }}>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: '48',
      }}>

      <Typography> Helo</Typography>
      </Box>
   </Container>
  );
};

export default App;