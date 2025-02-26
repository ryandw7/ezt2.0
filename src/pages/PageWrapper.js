import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tab, Tabs, Box, Button } from "@mui/material";
export default function PageWrapper() {
    const [value, setValue] = useState('/');
    const navigate = useNavigate();

    const values = ["/", "/core", "/mobile", "/finish"];
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const back = () => {

        switch (value) {
            case '/core': {
                return "/"
            }
            case '/mobile': {
                return "/core"
            }
            case '/finish': {
                return "/mobile"
            }
            default: {
                return null;
            }
        }
    }

    const next = () => {
        
        switch (value) {
            case '/': {
                return "/core"
            }
            case '/core': {
                return "/mobile"
            }
            case '/mobile': {
                return "/finish"
            }
            default: {
                return null;
            }
        }
    }
    
    const isCurrent = () => {
        if(value === "/"){
            return true
        }
    }


    useEffect(() => {
        navigate(value)
    }, [value])
    return (
        <Box sx={{ alignItems: "center", justifyItems: "center" }}>
            <Box sx={{ width: "600px" }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Previous" value="/" />
                    <Tab label="New Core" value="/core" />
                    <Tab label="New Mobile" value="/mobile" />
                    <Tab label="Finish" value="/finish" />
                </Tabs>
            </Box>
            {<Outlet />}
            <Box sx={{width: "80%", display:"flex", justifyContent:"space-around"}}>
                <Button  disabled={isCurrent()} onClick={()=>setValue(back())}>Back</Button>
                {value !== "/finish" && <Button onClick={()=>setValue(next())}>Next</Button>}
            </Box>
        </Box>
    )
}