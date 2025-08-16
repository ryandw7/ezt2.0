import React, { useState } from 'react';
import { Box, Switch, Typography } from '@mui/material';
import PageBox from './PageBox';
import NewMobileFeature from '../features/NewMobileFeature';
import useNewMobileActions from '../context/actions/useNewMobileActions';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
const NewMobilePage = () => {
  
  const { toggleIsXfinityMobile, setEditingLineId } = useNewMobileActions();
  const { isXfinityMobile } = useNewMobileSelectors();

  const handleToggle = () => {
    toggleIsXfinityMobile();
    setEditingLineId(null)
  };
  const SubContent = () => (
    <Box
      sx={{
        marginLeft: '10px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          height: 'fit-content',
          color: !isXfinityMobile ? '#673AB7' : 'gray',
          outlineColor: !isXfinityMobile ? 'white' : 'red',
        }}
      >
        NOW Mobile
      </Typography>
      <Switch
        checked={isXfinityMobile}
        onChange={handleToggle}
        sx={{ alignContent: 'center' }}
      />
      <Typography
        variant="h3"
        sx={{
          height: 'fit-content',
          color: isXfinityMobile ? '#673AB7' : 'gray',
        }}
      >
        Xfinity Mobile
      </Typography>
    </Box>
  );

  return (
    <PageBox header="New Mobile Service" subContent={SubContent()}>
      <NewMobileFeature />
    </PageBox>
  );
};

export default NewMobilePage;
