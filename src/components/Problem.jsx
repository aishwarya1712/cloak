import { styled, Stack, Typography, List, ListItem } from "@mui/material"
import React from "react"

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
        <Typography sx={{fontSize: "32px", color: "#6694C5", mb: "20px"}}>The Problem</Typography>
        <Stack direction="row" spacing={20} alignItems={"flex-start"}>
          <Typography sx={{fontSize: "58px", lineHeight: "72px", width: "337px" }}>As soon as you hit send, it's out of your control.</Typography>
          <Typography sx={{width: "211px"}}>AI chatbots process and analyze vast amounts of data in order to learn how to generate helpful responses. This ability to learn comes with privacy implications, as AI companies may store and analyze your chatbot conversations.</Typography>
          <Stack sx={{width: "431px"}} spacing={1}>
            <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"space-between"}>
              <Typography sx={{fontSize: "70px", color: "#6694C5"}}>63%</Typography>
              <Typography>of consumers fear that generative AI might expose users' personal data through security breaches or other forms of data misuse (IAPP, 2024).</Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"space-between"}>
              <Typography alignSelf={"center"} sx={{fontSize: "70px", color: "#6694C5"}}>81%</Typography>
              <Typography>of consumers think that AI companies will use their data for purposes that were not originally disclosed or intended (IAPP, 2024).</Typography>
            </Stack>
          </Stack>
        </Stack>
        
    </Stack>
    )
}

export default Problem