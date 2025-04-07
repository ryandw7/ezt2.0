import React from 'react';
import { Paper, Box, Typography } from "@mui/material";
import PrintBox from '../boxes/PrintBox';
const AdditionalView = ({className, data }) => {
   
    const { rep, contact, additionalNotes } = data;

    return (
        <PrintBox header={"Additional"} className={className}>
            {(rep || contact) ? <>

                {rep ? <>

                    <Typography variant="h3" >{rep}</Typography>

                </> : null}
                {contact ? <>

                    <Typography variant="h3" sx={{ m: "20px" }}>{contact}</Typography>

                </> : null}

            </> : null}

            <Typography sx={{ width: "100%", textAlign: "center", height: "fit-content" }}>{additionalNotes}</Typography>

        </PrintBox>

    )
};

export default AdditionalView;