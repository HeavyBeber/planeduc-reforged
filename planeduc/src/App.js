import './App.css';
import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { NavBar, CustomerPage, CoursePage } from './ui-components/index';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Routes>
          <Route exact path='/clients' element={< CustomerPage />}></Route>
          <Route exact path='/cours' element={< CoursePage />}></Route>
        </Routes>
      </ThemeProvider >
    </React.Fragment>
  );
}

export default App;
