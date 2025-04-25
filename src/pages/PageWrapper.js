import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Tab, Tabs, Box, Button, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function PageWrapper() {
  const href = window.location.href;
  const isFinish = href.includes('finish');
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const values = ['/', '/core', '/mobile', '/additional', '/finish'];

  const [value, setValue] = useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const back = () => {
    switch (value) {
      case '/core':
        return '/';
      case '/mobile':
        return '/core';
      case '/additional':
        return '/mobile';
      case '/finish':
        return '/additional';
      default:
        return null;
    }
  };

  const next = () => {
    switch (value) {
      case '/':
        return '/core';
      case '/core':
        return '/mobile';
      case '/mobile':
        return '/additional';
      case '/additional':
        return '/finish';
      default:
        return null;
    }
  };

  const isCurrent = () => value === '/';

  useEffect(() => {
    if (value !== location.pathname && values.includes(value)) {
      navigate(value);
    }
  }, [value, location.pathname]);

  useEffect(() => {
    if (values.includes(location.pathname) && value !== location.pathname) {
      setValue(location.pathname);
    }
  }, [location.pathname]);

  return (
    <Box
      sx={{
        margin: '0 auto',
        alignItems: 'center',
        justifyItems: 'center',
        width: '100%',
        height: '100vh',
        maxHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Paper
        className="print-hidden"
        sx={{
          top: '0px',
          width: '100%',
          m: '0px auto',
          padding: 0,
          height: '50px',
          borderRadius: '0px',
          opacity: 1,
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{ position: 'absolute', height: 'fit-content', m: '7px' }}
        >
          EZ-T
        </Typography>
        <Tabs
          centered
          sx={{
            '.MuiTabs-indicator': {
              height: '3px',
              backgroundColor: theme.palette.primary.light,
            },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            m: '0px auto',
            boxShadow: { theme },
            padding: 0,
          }}
          value={value}
          onChange={handleChange}
        >
          <Tab label="Previous" value="/" />
          <Tab label="New Core" value="/core" />
          <Tab label="New Mobile" value="/mobile" />
          <Tab label="Additional" value="/additional" />
          <Tab label="Finish" value="/finish" />
        </Tabs>
      </Paper>
      <Box
        sx={{
          height: `calc(100% - 100px)`,
          width: '100%',
          maxHeight: `calc(100vh - 100px)`,
          boxSizing: 'border-box',
        }}
      >
        {<Outlet />}
      </Box>
      <Paper
        className="print-hidden"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          height: '50px',
          m: 0,
          borderRadius: '0px',
          bottom: '0px',
          zIndex: 1,
          position: 'fixed',
        }}
      >
        <Button
          sx={{ value }}
          className="print-hidden"
          disabled={isCurrent()}
          onClick={() => setValue(back())}
        >
          Back
        </Button>
        <Button
          disabled={value === '/finish' && true}
          onClick={() => setValue(next())}
        >
          Next
        </Button>
      </Paper>
    </Box>
  );
}
