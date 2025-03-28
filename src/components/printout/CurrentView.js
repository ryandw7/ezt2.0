import React from 'react'
import { Box, Typography, Paper } from "@mui/material"
const CurrentView = ({ currentServices, total }) => {
    const { internet, internetCost, tv, tvCost, mobile, mobileCost, notes } = currentServices;

    return (
        <Paper elevation={3} sx={{ p: "0px", width: "100%", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", backgroundColor: "#F5F5F5" }} className="current-view">
            <Typography variant='h2' sx={{ height: "60px", width: "100%", borderTopRightRadius: "20px", borderTopLeftRadius: "20px", m: "0 auto", p: "10px" }}>Current Services</Typography>
            <Box sx={{ display: "flex", position: "relative", flexDirection: "column", alignItems: "space-between", justifyContent: "flex-start", justifyItems: "center", width: "100%", height: "calc(100% - 60px)" }}>

                {(internet || internetCost) ? <>
                    <Box sx={{ textAlign: "center" }}>
                        <RowBox>
                            <Typography variant="h3">Internet</Typography>
                        </RowBox>
                        <RowBox>
                            <Typography sx={{ width: "100%", textAlign: "left", p: "5px 20px 5px 20px" }}>{internet}</Typography>
                            <Typography>${internetCost.toFixed(2)}</Typography>
                        </RowBox>
                    </Box>
                </> : null}
                {(tv || tvCost) ? <>

                    <Box sx={{ textAlign: "center" }}>
                        <RowBox>
                            <Typography variant="h3">Tv and Extras</Typography>
                        </RowBox>
                        <RowBox>
                            <Typography>{tv}</Typography>
                            <Typography>${tvCost.toFixed(2)}</Typography>

                        </RowBox>
                    </Box>
                </> : null}
                {(mobile || mobileCost) ? <Box sx={{ textAlign: "center" }}>
                    <RowBox>
                        <Typography variant="h3">Mobile</Typography>

                    </RowBox>
                    <RowBox>
                        <Typography sx={{ width: "100%", textAlign: "left", p: "5px 20px 5px 20px" }}>{mobile}</Typography>
                        <Typography>${mobileCost.toFixed(2)}</Typography>
                    </RowBox>
                </Box> : null}
                {total !== 0 ?
                    <RowBox sx={{position:"absolute", bottom: "5px", padding:"3px"}}>
                        <Typography variant="h4" fontWeight="bold" sx={{  p: 0, m: 0, height: "fit-content" }}>Current Total</Typography>
                        <Typography variant="h4" fontWeight="bold" sx={{  p: 0, m: 0, height: "fit-content" }}>${total.toFixed(2)} est.</Typography>
                    </RowBox>
                    : null}
                {notes ? <>
                    <RowBox>
                        <Typography>{notes}</Typography>
                    </RowBox>
                </> : null}

            </Box>
        </Paper>
    )
}
const RowBox = ({ children, sx ={} }) => <Box sx={{display: "flex", flexDirection: "row", textWrap: "no-wrap", justifyContent: "space-between", width: "100%", p: "5px 20px 5px 20px", ...sx}}>{children}</Box>
export default CurrentView;