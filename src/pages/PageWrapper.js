import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Tab, Tabs, Box, Button, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
export default function PageWrapper() {

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
        <Box sx={{ alignItems: "center", justifyItems: "center" }}>
            <Box className="print-hidden" sx={{ width: "100%", m: "0px auto", padding: 0 }}>
                <Typography variant="h3" sx={{position:"absolute", height:"fit-content", m:"7px"}}>EZ-T</Typography>
                <Tabs centered sx={{
                    '.MuiTabs-indicator': {
                        height: '3px',
                        backgroundColor: theme.palette.primary.light,
                    }, display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", m: "0px auto", borderBottom: `1px solid ${theme.palette.secondary.dark}`, boxShadow:{theme},padding: 0
                }} value={value} onChange={handleChange}>
                    <Tab label="Previous" value="/" />
                    <Tab label="New Core" value="/core" />
                    <Tab label="New Mobile" value="/mobile" />
                    <Tab label="Additional" value="/additional" />
                    <Tab label="Finish" value="/finish" />
                </Tabs>
            </Box>
            {<Outlet />}
            <Box sx={{ width: "80%", display: "flex", justifyContent: "space-around", margin:"20px auto" }}>
                <Button className="print-hidden" disabled={isCurrent()} onClick={() => setValue(back())}>Back</Button>
                {value !== "/finish" && <Button onClick={() => setValue(next())}>Next</Button>}
            </Box>
        </Box>
    )
}