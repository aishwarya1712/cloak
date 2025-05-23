import { Typography, Stack } from "@mui/material"
import React from "react"

const Footer = () => {
    return (
    <Stack direction={"row"} sx={{mt: "150px"}} justifyContent="flex-start" alignItems={"center"} spacing={20}>
        <Stack direction={"column"} spacing={2}>
            <Typography fontWeight={700}>Cloak</Typography>
            <Typography sx={{lineHeight: "20px", width: "441px"}}>This product was developed by graduate students in the Master of Information Management program at UC Berkeley.</Typography>
        </Stack>
        <Stack direction={"column"} spacing={2}>
            <Typography sx={{color: "#6694C5", fontWeight: 700}}>Product</Typography>
            <Typography>Home</Typography>
            <Typography component="a" href="https://github.com/aishwarya1712/cloak-ui?tab=readme-ov-file#cloak-ui" target="_blank" rel="noopener noreferrer"  sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                Download
            </Typography>
        </Stack>
        <Stack direction={"column"} spacing={2}>
            <Typography sx={{color: "#6694C5", fontWeight: 700}}>About</Typography>
            <Typography component="a" href="https://drive.google.com/file/d/18Feum7N6kNE5VVyPV-_BRZr50gN2hapS/view?usp=drive_link" target="_blank" rel="noopener noreferrer"  sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                Project Paper
            </Typography>
            <Typography>Presentation</Typography>
        </Stack>
    </Stack>
    )
}

export default Footer