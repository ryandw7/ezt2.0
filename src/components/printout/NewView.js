import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import PrintBox from '../boxes/PrintBox';
import RowBox from '../boxes/RowBox';
import { data } from 'react-router-dom';

const NewView = ({ className, data }) => {
  const {
    newCoreServices,
    newMobilePlanCost,
    newCoreServicesTotalCost,
    newServicesTotalCost,
    allXfinityMobileTotals,
    allNowMobileTotals,
    isXfinityMobile
  } = data;

  const {
    unlimitedCount,
    unlimitedTotalCost,
    premiumCount,
    premiumTotalCost,
    tabletCount,
    tabletTotalCost,
    watchCount,
    watchTotalCost,
    devicePaymentsTotalCost,
    xmcTotalCost,
    xfinityMobileTaxesTotalCost,
    lineDiscountsTotalOff,
    xfinityMobilePlanTotalCost,
  } = allXfinityMobileTotals;

  console.log(allNowMobileTotals)
  const {
    nowLinesCount,
    nowLinesTotalCost,
    travelPassCount,
    travelPassTotalCost,
    hotSpotCount,
    hotSpotTotalCost,
    nowMobileTaxesTotalCost,
    nowMobilePlanTotalCost
  } = allNowMobileTotals || {}

  console.log(nowMobilePlanTotalCost)
  return (
    <PrintBox header={'New Services'} className={className}>
      {newCoreServices.map((item) => {
        return item.cost !== 0 ? (
          <>
            <RowBox>
              <Typography>{item.description}</Typography>
              <Typography>${item.cost.toFixed(2)} est.</Typography>
            </RowBox>
            <RowBox sx={{ justifyContent: 'center' }}>
              <Typography fontStyle="italic">{item.additionalNotes}</Typography>
            </RowBox>
          </>
        ) : null;
      })}
      {isXfinityMobile && xfinityMobilePlanTotalCost != 0 ? (
        <>
          <RowBox>
            <Typography variant="h4">Xfinity Mobile</Typography>
          </RowBox>
          {unlimitedCount !== 0 && (
            <RowBox>
              <Typography>
                {unlimitedCount} Unlimited Line{unlimitedCount > 1 && 's'}
              </Typography>
              <Typography>${unlimitedTotalCost.toFixed(2)} est.</Typography>
            </RowBox>
          )}
          {premiumCount !== 0 && (
            <RowBox>
              <Typography>
                {premiumCount} Unlimited Plus Line{premiumCount > 1 && 's'}
              </Typography>
              <Typography>${premiumTotalCost.toFixed(2)} est.</Typography>
            </RowBox>
          )}
          {tabletCount !== 0 && (
            <RowBox>
              <Typography>
                {tabletCount} Tablet{tabletCount > 1 && 's'}
              </Typography>
              <Typography>${tabletTotalCost.toFixed(2)} est.</Typography>
            </RowBox>
          )}

          {watchCount !== 0 && (
            <RowBox>
              <Typography>
                {watchCount} Watch{watchCount > 1 && 'es'}
              </Typography>
              <Typography>${watchTotalCost.toFixed(2)} est.</Typography>
            </RowBox>
          )}

          {xmcTotalCost != 0 && (
            <RowBox>
              <Typography>Xfinity Mobile Care</Typography>
              <Typography>${xmcTotalCost.toFixed(2)} est.</Typography>
            </RowBox>
          )}

          {devicePaymentsTotalCost != 0 && (
            <RowBox>
              <Typography>New Devices</Typography>
              <Typography>
                ${devicePaymentsTotalCost.toFixed(2)} est.
              </Typography>
            </RowBox>
          )}
          {lineDiscountsTotalOff != 0 && (
            <RowBox>
              <Typography>Line Discounts</Typography>
              <Typography>-${lineDiscountsTotalOff.toFixed(2)} est.</Typography>
            </RowBox>
          )}
          <RowBox>
            <Typography>Taxes</Typography>
            <Typography>${xfinityMobileTaxesTotalCost.toFixed(2)} est.</Typography>
          </RowBox>

          <RowBox>
            <Typography fontWeight={'bold'}>Total</Typography>
            <Typography fontWeight={'bold'}>
              ${xfinityMobilePlanTotalCost.toFixed(2)} est.
            </Typography>
          </RowBox>
        </>
      ) : null}
      {!isXfinityMobile && nowMobilePlanTotalCost != 0 ? <>
        <RowBox>
          <Typography variant="h4">NOW Mobile</Typography>
        </RowBox>
        {nowLinesCount !== 0 ? (
          <RowBox>
            <Typography>
              {nowLinesCount} Now Mobile Line{nowLinesCount > 1 && 's'}
            </Typography>
            <Typography>${nowLinesTotalCost.toFixed(2)} est.</Typography>
          </RowBox>
        ) : null}
        {hotSpotCount !== 0 ? (
          <RowBox>
            <Typography>
              {hotSpotCount} Hot Spot Upgrade{hotSpotCount > 1 && 's'}
            </Typography>
            <Typography>${hotSpotTotalCost.toFixed(2)} est.</Typography>
          </RowBox>
        ) : null}
        {travelPassCount !== 0 ? (
          <RowBox>
            <Typography>
              {travelPassCount} Travel Pass{travelPassCount > 1 && 'es'}
            </Typography>
            <Typography>${travelPassTotalCost.toFixed(2)} est.</Typography>
          </RowBox>
        ) : null}
        {nowMobilePlanTotalCost !== 0 ? <>
          <RowBox>
            <Typography>
              Taxes
            </Typography>
            <Typography>${nowMobileTaxesTotalCost.toFixed(2)} est.</Typography>
          </RowBox>
          <RowBox>
            <Typography fontWeight={'bold'}>Total</Typography>
            <Typography fontWeight={'bold'}>
              ${nowMobilePlanTotalCost.toFixed(2)} est.
            </Typography>
          </RowBox>
        </> : null}
      </> : null}
      <RowBox sx={{ marginTop: 'auto', justifySelf: 'flex-end' }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ p: 0, m: 0, height: 'fit-content' }}
        >
          New Total
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ p: 0, m: 0, height: 'fit-content' }}
        >
          ${newServicesTotalCost.toFixed(2)} est.
        </Typography>
      </RowBox>

    </PrintBox>
  );
};

export default NewView;
