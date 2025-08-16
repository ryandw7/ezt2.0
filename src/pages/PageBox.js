import React from 'react';
import { Box, Typography } from '@mui/material';

const PageBox = ({ children, header = {}, subHeader = '', subContent }) => {
  return (
    <Box
      sx={{
        height: `calc(100vh - 100px)`,
        maxHeight: `calc(100vh - 100px)`,
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          height: '50px',
          width: '100%',
          p: '0',
          backgroundColor: '#2b2b30',
          textWrap: 'nowrap',
          display: 'flex',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: '2em',
            marginLeft: '5%',
            display: 'inline',
          }}
        >
          {header}
        </Typography>
        {subHeader ? (
          <>
            <Typography
              sx={{
                color: 'white',
                fontSize: '1.5em',
                display: 'inline',
                marginLeft: '5px',
              }}
            >
              {subHeader}
            </Typography>
          </>
        ) : null}
        {subContent ? (
          <Box
            sx={{
              display: 'inline',
              top: '0px',
              position: 'relative',
              maxHeight: '100%',
            }}
          >
            {subContent}
          </Box>
        ) : null}
      </Box>
      <Box
        sx={{
          margin: 0,
          padding: 0,
          height: `calc(100vh - 150px)`,
          maxHeight: `calc(100vh - 150px)`,
          minHeight: `calc(100vh - 150px)`,
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageBox;
