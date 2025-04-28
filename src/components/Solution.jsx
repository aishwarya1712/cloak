import { styled, List, ListItem, Stack, Grid, Typography } from "@mui/material"
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
      title: <Title>What is Cloak?</Title>,
      description: (
        <Desc component="div">
            <List disablePadding sx={{
                '& .MuiListItem-root:not(:last-child)': {
                mb: 1
                },}}>
                <ListItem sx={{ p: 0 }}>Cloak is a Chrome Extension that redacts  personal information from chatbot queries.</ListItem>
                <ListItem sx={{ p: 0 }}>Let's say you're writing an email to your boss, and you want ChatGPT to make it sound more professional. </ListItem>
                <ListItem sx={{ p: 0 }}>Paste your query into Cloak, and it will identify personal information and suggest changes. With just a click, you can apply the suggested redactions, ensuring your (and your boss's) information stays private.</ListItem>
            </List>
        </Desc>
      ),
    },
    {
      title: <Title>What do we protect?</Title>,
      description: (
        <Desc component="div">
            <Typography component="div">Cloak protects information that can be...</Typography>
            <ul>
                <li>Exploited for crimes (e.g. financial data, SSNs, names, license/passport info)</li>
                <li>Subject to spam or phishing if leaked (e.g. email addresses, phone numbers)</li>
                <li>Used to profile or track you (e.g. age, academic records, demographic data, personal affiliations, medical information)</li>
            </ul>
    </Desc>
      ),
    },
    {
      title: <Title>Our approach to privacy</Title>,
      description: (
        <Desc component="div">
            <List sx={{
                '& .MuiListItem-root:not(:last-child)': {
                mb: 1
                },}}>
                <ListItem sx={{ p: 0 }}>All data you enter is stored locally on your device for the duration of your session.</ListItem>
                <ListItem sx={{ p: 0 }}>Redactions are powered by a local LLM running on your computer, so your personal information is never sent to third-party servers or major tech companies.</ListItem>
                <ListItem sx={{ p: 0 }}>Our code is fully open source, and we never access or collect user data. You're in full control, always.</ListItem>
            </List>
        </Desc>
      ),
    },
  ];
  

const Solution = () => {
    return (
    <Stack sx={{mt: "60px"}}>
        <Typography sx={{fontSize: "58px", color: "#6694C5", mb: "40px"}}>Our Solution</Typography>
        <Grid container spacing={"50px"}>
        {items.map(({ title, description }, i) => (
        <Grid key={i} display="flex">
          <InfoBox title={title} description={description} />
        </Grid>
        ))}
        </Grid>
        
    </Stack>
    )
}

export default Solution