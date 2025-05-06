import { Stack, Typography } from "@mui/material"
import React from "react"
import cloak2 from '../assets/cloak2.svg';

const Features = () => {
    return (
    <Stack sx={{mt: "60px"}} alignItems={"center"}>
        <Typography sx={{fontSize: "32px", color: "#6694C5", mb: "20px", textAlign: "center"}}>Feature Highlights</Typography>
        <Typography fontSize={"58px"} sx={{ textAlign: "center" }}>Take a look at some key features.</Typography>
        <img src={cloak2} style={{height: "600px", width: "800px", marginTop: "120px"}}/>  
    </Stack>
    )
}

export default Features