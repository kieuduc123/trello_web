import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import ModeToggle from './utils/ModeToggle';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <ModeToggle/>
      <CssBaseline />
      <App/>
    </CssVarsProvider>
    ,
  </React.StrictMode>,
);