import { styled, Stack, Grid, Typography, List, ListItem } from "@mui/material"
import React from "react"
import InfoBox from "./InfoBox"

const Title = styled(Typography)(({ theme }) => ({
    fontSize: "24px", fontWeight: "bold"
  }));
  
const Desc = styled(Typography)(({ theme }) => ({
    fontSize: "15px", mt: "10px"
}));

const items = [
    {
      title: <Title>Inside the AI chatbot</Title>,
      description: (
        <Desc component="div">
            <List disablePadding  sx={{
                '& .MuiListItem-root:not(:last-child)': {
                mb: 1
                },}}>
                <ListItem sx={{ p: 0 }}>AI chatbots analyze and process vast amounts of data in order to learn how to generate helpful responses. </ListItem>
                <ListItem sx={{ p: 0 }}>This ability to learn comes with privacy implications, as AI companies often store and analyze your chatbot conversations.</ListItem>
                <ListItem sx={{ p: 0 }}>There is already evidence that information shared during conversations could be retained indefinitely, even after users believe they have deleted it.</ListItem>
            </List>
        </Desc>
      ),
    },
    {
      title: <Title>Privacy in the age of AI</Title>,
      description: (
        <Desc component="div">
            <Typography component="div">Protecting your digital privacy is more important - and more difficult - than ever:</Typography>
            <ul>
                <li>Servers on which your data is stored may be vulnerable to security breaches.1</li>
                <li>Tech companies build intricate profiles about users by collecting data from different sources and interactions.2</li>
                <li>Data used to train AI models can be compromised by hackers.3</li>
            </ul>
    </Desc>
      ),
    },
    {
      title: <Title>Once you have disclosed information to a chatbot, it is out of your control.</Title>,
      description: (
        <Desc component="div">
            <ul>
                <li>Citation 1</li>
                <li>Citation 2</li>
                <li>Citation 3</li>
                <li>Citation 4</li>
            </ul>
        </Desc>
      ),
    },
  ];
  

const Problem = () => {
    return (
    <Stack sx={{mt: "60px"}}>
        <Typography sx={{fontSize: "58px", color: "#6694C5", mb: "40px"}}>The Problem</Typography>
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

export default Problem