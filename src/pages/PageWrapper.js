import React, {useEffect, useState} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tab, Tabs, Box } from "@mui/material";
export default function PageWrapper() {
    const [value, setValue] = useState('/');
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      useEffect(()=>{
        navigate(value)
      }, [value])
    return (
        <Box sx={{alignItems:"center", justifyItems: "center"}}>
            <Box sx={{width: "600px"}}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="Previous" value="/"/>
                <Tab label="New Core" value="/core"/>
                <Tab label="New Mobile" value="/mobile"/>
            </Tabs>
            </Box>
            {<Outlet />}
        </Box>
    )
}