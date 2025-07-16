import React from 'react';
import { Box, Button } from '@mui/material';
import { useReactToPrint } from 'react-to-print';
import FinishFeature from '../features/FinshFeature';
import { useState } from 'react';

const FinishPage = () => {
  const [isPrint, setIsPrint] = useState(false);
  console.log('routed to Finish');
  const componentRef = React.useRef(null);

  const handleAfterPrint = React.useCallback(() => {
    setIsPrint(false);
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    return Promise.resolve();
  }, []);

  const printFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Xfinity Plan',
    onAfterPrint: handleAfterPrint,
    onBeforePrint: handleBeforePrint,
    removeAfterPrint: false,
  });

  const handlePrint = () => {
    setIsPrint(true);
    componentRef.current.scrollIntoView({
      behavior: 'auto',
      block: 'center',
    });

    setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = componentRef.current;
          if (el) {
            el.scrollIntoView({ behavior: 'auto', block: 'center' });
            setTimeout(() => {
              printFn();
            }, 150);
          } else {
            console.error('No ref found.');
          }
        });
      });
    }, 300);
  };

  return (
    <Box sx={{ maxHeight: '100%', overflowY: 'scroll' }}>
      <Button
        variant="contained"
        className="print-hidden"
        onClick={handlePrint}
        sx={{ position: 'fixed', zIndex: '1', top: '60px', right: '10%' }}
      >
        Print
      </Button>
      <FinishFeature
        ref={componentRef}
        isPrint={isPrint}
        paperHeight="270mm"
        isFullView={false}
        fontSize={'11pt'}
      />
    </Box>
  );
};

export default FinishPage;
