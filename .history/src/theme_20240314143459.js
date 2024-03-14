import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';






import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
