import { styled, List, ListItem, Stack, Grid, Typography, Box } from "@mui/material"
import messagePrivacyIcon from '../assets/icon-park-outline_message-privacy.svg';
import eyeCheckIcon from '../assets/tabler_eye-check.svg';
import shieldIcon from '../assets/gala_shield.svg';
import React from "react"
import InfoBox from "./InfoBox"

const Title = styled(Typography)(({ }) => ({
    fontSize: "24px", fontWeight: "bold"
  }));
  
const Desc = styled(Typography)(({ }) => ({
    fontSize: "15px", mt: "10px"
}));

const items = [
    {
      icon: messagePrivacyIcon,
      title: <Title>Proactive redactions</Title>,
      description: (
        <Desc component="div">
            Instantly identify and redact sensitive information from chatbot queries, ensuring your personal details are always protected.
        </Desc>
      ),
    },
    {
      icon: eyeCheckIcon,
      title: <Title>Instant “uncloaking”</Title>,
      description: (
        <Desc component="div">
            Need to see the original content? With a simple click, you can 'uncloak' redacted terms and restore the LLM's response to its original, unfiltered state.
        </Desc>
      ),
    },
    {
      icon: shieldIcon,
      title: "Unparalleled privacy",
      description: (
        <Desc component="div">
           With all data locally stored and processed, and zero third-party interference, you're in full control of your privacy, always.
        </Desc>
      ),
    },
  ];
  

const Solution = () => {
    return (
    <Stack sx={{mt: "60px"}}>
      
        <Typography sx={{fontSize: "32px", color: "#6694C5", mb: "20px"}}>Meet Cloak</Typography>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Typography fontSize={"58px"}>The smartest thing</Typography><Typography fontSize={"58px"} fontWeight={"bold"}>you'll never send.</Typography>
          </Box>
          <Typography sx={{width: "495px", fontSize: "16px", lineHeight: "20px"}}>Let's say you're writing an email to your boss, and you want ChatGPT to make it sound more professional. Paste your query into Cloak, and it will identify personal information and suggest changes. With just a click, you can apply the suggested redactions, ensuring your (and your boss's) information stays private.</Typography>
        </Stack>
        <Grid container spacing={"50px"}>
        {items.map(({ icon, title, description }, i) => (
        <Grid key={i} display="flex">
          <InfoBox icon={icon} title={title} description={description} />
        </Grid>
        ))}
        </Grid>
        
    </Stack>
    )
}

export default Solution