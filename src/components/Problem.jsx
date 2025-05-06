import { styled, Stack, Grid, Typography, List, ListItem } from "@mui/material"
import React from "react"
import InfoBox from "./InfoBox"

const Title = styled(Typography)(({ }) => ({
    fontSize: "24px", fontWeight: "bold"
  }));
  
const Desc = styled(Typography)(({ }) => ({
    fontSize: "16px", mt: "10px"
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
           <ol>
              <li>
                <a
                  href="https://dispatchesinternetpioneer.substack.com/p/forget-agiworry-about-what-genai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  Dispatches From an Internet Pioneer
                </a>
              </li>
              <li>
                <a
                  href="https://www.amnesty.org/en/latest/campaigns/2022/02/what-is-big-techs-surveillance-based-business-model/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  Amnesty International
                </a>
              </li>
              <li>
                <a
                  href="https://provost.wsu.edu/challenges-of-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  Washington State University
                </a>
              </li>
            </ol>

        </Desc>
      ),
    },
  ];
  

const Problem = () => {
    return (
    <Stack sx={{mt: "60px"}}>
        <Typography sx={{fontSize: "32px", color: "#6694C5", mb: "40px"}}>The Problem</Typography>
        <Stack direction="row">
          <Typography sx={{fontSize: "58px", lineHeight: "72px", width: "505px" }}>As soon as you hit send, it's out of your control.</Typography>
        </Stack>
        <Grid container spacing={6} alignItems="stretch">
          {items.map(({ title, description }, i) => (
          <Grid key={i} display="flex" sx={{
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <InfoBox title={title} description={description} sx={{ border: "1px solid #D9D9D9", borderRadius: "15px", padding: "24px"}} />
          </Grid>
          ))}
        </Grid>
        
    </Stack>
    )
}

export default Problem