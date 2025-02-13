import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import useNewMobileActions from '../context/actions/useNewMobileActions';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors'
import NewMobileLine from './NewMobileLine';

export default function NewMobileLines () {

    const { newMobileLines } = useNewMobileSelectors()
    const { addMobileLine } = useNewMobileActions()

    const handleAdd = () => {
        addMobileLine()
    }
    return (
        <Box sx={{height: "80vh", overflowY:"scroll", width:"80vw", display:"flex", "justifyContent":"space-around", flexDirection:"column"}}>
            <Typography>Lines</Typography>
            {
                newMobileLines.map((item)=>{
                    return <NewMobileLine line={item}/>
                })
            }
            <Button onClick={handleAdd}>Add</Button>
        </Box>
    )
}