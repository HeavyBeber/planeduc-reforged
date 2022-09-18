import './App.css';
import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { NavBar, CustomerList, CustomerDetail } from './ui-components/index';
import { ThemeProvider } from '@emotion/react';
import theme from './ui-components/theme';
import { Stack } from '@mui/system';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <NavBar />
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <CustomerList />  
            <CustomerDetail />    
          </Stack>
      </ThemeProvider >
    </React.Fragment>
  );
}

export default App;
