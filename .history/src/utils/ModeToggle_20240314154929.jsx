import { Box, Button } from '@mui/material';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LightMode}  from '@mui/icons-material';
import {DarkModeOutlined} from '@mui/icons-material';
import  {SettingsBrightness  }from '@mui/icons-material';
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <>
      <Button
        onClick={() => {
          setMode(mode === 'light' ? 'dark' : 'light');
        }}
      >
        {mode === 'light' ? 'Turn dark' : 'Turn light'}
      </Button>
      <ModeSmall/>
    </>
  );
}
export default ModeToggle;

 function ModeSmall() {
   const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
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
        <MenuItem value='light'>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
          }}>
            <LightMode fontSize='small'/> Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
           <Box sx={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,}}>
            <DarkModeOutlined fontSize='small' />
            Dark
            </Box>
        </MenuItem>
        <MenuItem value='system'>
            <Box sx={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,}}>
            <SettingsBrightness fontSize='small' />
            System
          </Box> </MenuItem>
      </Select>
    </FormControl>
  );
}

