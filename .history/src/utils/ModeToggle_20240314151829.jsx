import { Button } from '@mui/material';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import useMediaQuery from '@mui/material/useMediaQuery';
function ModeToggle() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const prefersDarkLight = useMediaQuery('(prefers-color-scheme: light)');
  // console.log('prefersDarkMode',prefersDarkMode);
  // console.log('prefersDarkLight',prefersDarkLight);
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}
export default ModeToggle;



 function ModeSmall() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light"
        id="select-dark-light"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value='light'>light</MenuItem>
        <MenuItem value='dark'>Dark</MenuItem>
        <MenuItem value='system'>System</MenuItem>
      </Select>
    </FormControl>
  );
}

