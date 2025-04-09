import React from 'react';
import PrintBox from "../boxes/PrintBox";
import RowBox from '../boxes/RowBox';
import { Typography } from '@mui/material';


const CurrentView = ({ className, data }) => {
    const { current, currentServicesTotalCost } = data;
    const { internet, internetCost, tv, tvCost, mobile, mobileCost, notes } = current;

    return (
        <PrintBox header={"Current"} className={className}>
             {(internet || internetCost) ? <>
                        <RowBox>
                            <Typography variant="h3">Internet</Typography>
                        </RowBox>
                        <RowBox>
                            <Typography sx={{ textWrap: "nowrap" }}>{internet}</Typography>
                            <Typography sx={{ textWrap: "nowrap" }}>${data.current.internetCost.toFixed(2)} est.</Typography>
                        </RowBox>
            
                </> : null}
                {(tv || tvCost) ? <>
                        <RowBox>
                            <Typography variant="h3">Tv and Extras</Typography>
                        </RowBox>
                        <RowBox>
                            <Typography>{tv}</Typography>
                            <Typography sx={{ textWrap: "nowrap" }}>${tvCost.toFixed(2)} est.</Typography>
                        </RowBox>
                </> : null}
                {(mobile || mobileCost) ? <>
                    <RowBox>
                        <Typography variant="h3">Mobile</Typography>
                    </RowBox>
                    <RowBox>
                        <Typography sx={{ textWrap: "nowrap" }}>{mobile}</Typography>
                        <Typography sx={{ textWrap: "nowrap" }}>${mobileCost.toFixed(2)} est.</Typography>
                    </RowBox>
                </> : null}
                {currentServicesTotalCost !== 0 ?
                    <RowBox sx={{ marginTop: "auto", padding: "3px", justifySelf:"flex-end" }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ p: 0, m: 0, height: "fit-content" }}>Current Total</Typography>
                        <Typography variant="h6" fontWeight="bold" sx={{ p: 0, m: 0, height: "fit-content" }}>${currentServicesTotalCost.toFixed(2)} est.</Typography>
                    </RowBox>
                    : null}
                {notes ? <>
                    <RowBox>
                        <Typography>{notes}</Typography>
                    </RowBox>
                </> : null}
        </PrintBox>
    )
};

export default CurrentView;