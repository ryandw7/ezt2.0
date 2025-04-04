import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tab, Tabs, Box, Button, Typography, Paper } from "@mui/material";
import { useTheme } from '@mui/material/styles';
export default function PageWrapper() {
    const href = window.location.href;
    const isFinish = href.includes('finish')
    const theme = useTheme();

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
            case '/additional': {
                return '/mobile'
            }
            case '/finish': {
                return "/additional"
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
                return "/additional"
            }
            case '/additional': {
                return "/finish"
            }
            default: {
                return null;
            }
        }
    }

    const isCurrent = () => {
        if (value === "/") {
            return true
        }
    }


    useEffect(() => {
        navigate(value)
    }, [value])
    return (
        <Box sx={{ position: value !== "/finish" ? "fixed" : "relative", alignItems: "center", justifyItems: "center", width:"100%", height:"100vh", overflow: "-moz-hidden-unscrollable"}}>
            <Paper className="print-hidden" sx={{ width: "100%", m: "0px auto", padding: 0, height:"50px", zIndex:1, borderRadius:"0px"}}>
                <Typography variant="h3" sx={{position:"absolute", height:"fit-content", m:"7px"}}>EZ-T</Typography>
                <Tabs centered sx={{
                    '.MuiTabs-indicator': {
                        height: '3px',
                        backgroundColor: theme.palette.primary.light,
                    }, display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", m: "0px auto", boxShadow:{theme},padding: 0
                }} value={value} onChange={handleChange}>
                    <Tab label="Previous" value="/" />
                    <Tab label="New Core" value="/core" />
                    <Tab label="New Mobile" value="/mobile" />
                    <Tab label="Additional" value="/additional" />
                    <Tab label="Finish" value="/finish" />
                </Tabs>
            </Paper>
            {<Outlet />}
            {value !== "/finish" ? <Paper sx={{ width: "100%", display: "flex", justifyContent: "space-around", height:"50px", m:0, borderRadius:"0px", position:"fixed", bottom:"0px", zIndex:1 }}>
                <Button className="print-hidden" disabled={isCurrent()} onClick={() => setValue(back())} >Back</Button>
                {value !== "/finish" && <Button onClick={() => setValue(next())}>Next</Button>}
            </Paper> : null } 
        </Box>
    )
}