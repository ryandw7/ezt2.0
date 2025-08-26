import React from 'react';
import { Box, Button, Typography, List } from '@mui/material';
import useNewMobileActions from '../context/actions/useNewMobileActions';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
import MobileLineForm from '../components/mobile/MobileLineForm';
import MobileLineView from '../components/mobile/MobileLineView';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import WatchIcon from '@mui/icons-material/Watch';

const NewMobileFeature = () => {
  const {
    isXfinityMobile,
    unlimitedLines,
    phoneLineCostById,
    unlimitedPremiumLines,
    tabletLines,
    watchLines,
    editingLineId,
    editingLine,
    nowMobileLines,
  } = useNewMobileSelectors();

  const {
    addPhoneLine,
    updateNewMobileLine,
    addTabletLine,
    addWatchLine,
    addNowMobileLine,
    removeMobileLine,
    setEditingLineId,
  } = useNewMobileActions();

  const handleAdd = () => {
    addPhoneLine();
  };

  const handleTabletAdd = () => {
    addTabletLine();
  };

  const handleWatchAdd = () => {
    addWatchLine();
  };

  const handleNowMobileAdd = () => {
    addNowMobileLine();
  };

  const handleUpdate = (id) => (key, value) => {
    updateNewMobileLine(id, key, value);
  };

  const handleStartEdit = (id) => {
    setEditingLineId(id);
  };

  const handleDelete = (id) => {
    removeMobileLine(id);
  };
  const handleStopEdit = () => {
    setEditingLineId('');
  };

  const handleViewResize = () => {
    if (editingLineId) {
      return '50%';
    } else {
      return '70%';
    }
  };

  const handleFlexJust = () => {
    if (editingLineId) {
      return 'flex-start';
    } else {
      return 'center';
    }
  };

  const isEditingLine = (id) => (id === editingLineId ? true : false);

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        height: '100%',
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: () => handleFlexJust(),
        flexWrap: 'nowrap',
        m: '0',
        p: '0',
      }}
    >
      {/* Scrollable List lines*/}
      <Box
        sx={{
          width: () => handleViewResize(),
          height: '100%',
          transition: 'width 0.3s ease-in-out',
          m: 0,
          p: 0,
          minWidth: '400px',
          boxSizing: 'border-box',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <List
          elevation={3}
          sx={{
            height: `calc(100% - 75px)`,
            width: '100%',
            overflowY: 'auto',
            overflowX: 'hidden',
            m: 0,
            p: 0,
            borderBottom: '1px solid #444',
            '&::-webkit-scrollbar': { width: '6px' },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#666',
              borderRadius: '4px',
            },
          }}
        >
          {isXfinityMobile ? (
            <>
              {unlimitedLines && unlimitedLines.length !== 0 ? (
                <>
                  {unlimitedLines.map((item, index) => (
                    <>
                      <MobileLineView
                        key={item.id}
                        line={item}
                        handleDelete={() => handleDelete(item.id)}
                        handleStartEdit={() => handleStartEdit(item.id)}
                        lineCost={phoneLineCostById(item.id)}
                        defaultName={`Line ${index + 1}`}
                        config={{
                          isFull: false,
                          isForm: true,
                          isEdit: isEditingLine(item.id),
                        }}
                      />
                    </>
                  ))}
                </>
              ) : null}
              {unlimitedPremiumLines && unlimitedPremiumLines.length !== 0 ? (
                <>
                  {unlimitedPremiumLines.map((item, index) => (
                    <>
                      <MobileLineView
                        key={item.id}
                        line={item}
                        handleDelete={() => handleDelete(item.id)}
                        handleStartEdit={() => handleStartEdit(item.id)}
                        lineCost={phoneLineCostById(item.id)}
                        defaultName={`Premium Line ${index + 1}`}
                        config={{
                          isFull: false,
                          isForm: true,
                          isEdit: isEditingLine(item.id),
                        }}
                      />
                    </>
                  ))}
                </>
              ) : null}
              {watchLines && watchLines.length !== 0 ? (
                <>
                  {watchLines.map((item, index) => (
                    <>
                      <MobileLineView
                        key={item.id}
                        line={item}
                        handleDelete={() => handleDelete(item.id)}
                        handleStartEdit={() => handleStartEdit(item.id)}
                        lineCost={10}
                        defaultName={`Watch ${index + 1}`}
                        config={{
                          isFull: false,
                          isForm: true,
                          isEdit: isEditingLine(item.id),
                        }}
                      />
                    </>
                  ))}
                </>
              ) : null}
              {tabletLines && tabletLines.length !== 0 ? (
                <>
                  {tabletLines.map((item, index) => (
                    <>
                      <MobileLineView
                        key={item.id}
                        line={item}
                        handleDelete={() => handleDelete(item.id)}
                        handleStartEdit={() => handleStartEdit(item.id)}
                        lineCost={20}
                        defaultName={`Tablet ${index + 1}`}
                        config={{
                          isFull: false,
                          isForm: true,
                          isEdit: isEditingLine(item.id),
                        }}
                      />
                    </>
                  ))}
                </>
              ) : null}
            </>
          ) : (
            <>
              {nowMobileLines && nowMobileLines.length !== 0 ? (
                <>
                  {nowMobileLines.map((item, index) => (
                    <>
                      <MobileLineView
                        key={item.id}
                        line={item}
                        handleDelete={() => handleDelete(item.id)}
                        handleStartEdit={() => handleStartEdit(item.id)}
                        lineCost={phoneLineCostById(item.id)}
                        defaultName={`Line ${index + 1}`}
                        config={{
                          isFull: false,
                          isForm: true,
                          isEdit: isEditingLine(item.id),
                        }}
                      />
                    </>
                  ))}
                </>
              ) : null}
            </>
          )}
        </List>
        <Box
          sx={{
            p: 0,
            m: 0,
            backgroundColor: '#2b2b30',
            maxHeight: '75px',
            height: '75px',
            minHeight: '75px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            textAlign="center"
            sx={{
              height: 'fit-content',
              color: 'white',
              fontWeight: 500,
              fontSize: { xs: '1em', sm: '1em' },
              py: 1,
              m: 0,
              p: 0,
            }}
          >
            Add Lines
          </Typography>

          <Box
            sx={{
              flex: 2,
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: 2,
              width: '100%',
              px: 2,
              pb: 1,
            }}
          >
            {isXfinityMobile ? (
              <>
                {[handleAdd, handleTabletAdd, handleWatchAdd].map(
                  (handler, idx) => (
                    <Button
                      key={idx}
                      variant="contained"
                      onClick={handler}
                      sx={{
                        flexShrink: 1,
                        backgroundColor: '#2b2b30',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {idx === 0 ? (
                        <PhoneIcon sx={{ '&:hover': { color: '#5E35B1' } }} />
                      ) : idx === 1 ? (
                        <TabletMacIcon
                          sx={{ '&:hover': { color: '#5E35B1' } }}
                        />
                      ) : (
                        <WatchIcon sx={{ '&:hover': { color: '#5E35B1' } }} />
                      )}
                    </Button>
                  )
                )}
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  onClick={handleNowMobileAdd}
                  sx={{
                    flexShrink: 1,
                    backgroundColor: '#2b2b30',

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <PhoneIcon sx={{ '&:hover': { color: '#5E35B1' } }} />
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Box>
      {/* Main Editing Section */}

      {editingLineId && (
        <Box
          sx={{
            height: '100%',
            width: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MobileLineForm
            key={editingLineId}
            line={editingLine}
            handleUpdate={handleUpdate(editingLine.id)}
            lineCost={phoneLineCostById(editingLine.id)}
            handleStopEdit={handleStopEdit}
            isXfinityMobile={isXfinityMobile}
          />
        </Box>
      )}
    </Box>
  );
};

export default NewMobileFeature;
