import React from 'react';
import { Box, Typography, ListItem, List, Paper } from '@mui/material'
import MobileLineView from '../components/mobile/MobileLineView';
import useNewMobileSelectors from '../context/selectors/useNewMobileSelectors';
export default function FinishMobileDetails({ lines, cost, config }) {
    const { getNewMobileLineCost } = useNewMobileSelectors()
    /*LINE OBJ = {
            isEdit: true,
            id: 0,
            name: '',
            isBYOD: true,
            number: 0,
            port: true,
            dataPlan: 'Unlimited',
            deviceModel: null,
            deviceTotalCost: 0,
            deviceDiscountDesc: '',
            DeviceDiscount: 0,
            deviceMonthly: 0,
            payInFull: false,
            cost: 0,
            lineDiscount: 0
        } */

    const parsePhoneNumber = (number) => {
        return '(' + number.slice(0, 3) + ') ' + number.slice(3, 6) + '-' + number.slice(6, 10)
    }
    const RowGroup = ({ children, sx = {} }) => {
        return (<Box sx={{ width: "90%", display: "flex", justifyContent: "space-between", margin: "5px auto", ...sx }}>
            {children}
        </Box>)
    }
    let totalMobileCost = 0;
    return (
        <Box sx={{ width: "100%" }}>
            <List sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around", alignContent: "center" }}>
                {
                    lines.map((line) => {
                        return <MobileLineView line={line} lineCost={getNewMobileLineCost(line.id)} config={{isFull:true}}/>
                     })
                }</List>
        </Box>
    )
}