import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the '/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import theme from './styles/theme';
import './styles/print.css';
import { ContextProvider } from './context/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </CssBaseline>
  </ThemeProvider>
);
