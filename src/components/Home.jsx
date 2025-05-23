import { Box, Divider, Stack, Typography } from '@mui/material';
import RoundedOutlinedButton from './RoundedOutlinedButton';
import cloakScreenshot from '../assets/cloak1.svg';
import Problem from './Problem';
import Solution from './Solution';
import { useRef, forwardRef } from 'react';
import Features from './Features';
import Footer from './Footer';
import About from './About';

const ProblemAndSolution = forwardRef((props, ref) => (
    <div ref={ref}>
      <Problem />
      <Divider sx={{mt: "100px", background: "#D9D9D9"}} />
      <Solution />
    </div>
  ));
  
export default function Home() {
    const psRef = useRef(null);

    const handleLearnMore = () => {
        console.log("in handle learn more")
        psRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
    <Box  sx={{ 
        px: { xs: '20px', md: '100px' },
        pb: { xs: '20px', md: '100px' }
      }}>
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={"space-between"}>
            <Stack alignItems={"flex-start"} spacing={7.5}>
                <Stack>
                    <Typography sx={{fontSize: "58px"}}>Cloak:<br/>The smartest<br/>thing you'll</Typography>
                    <Typography sx={{fontSize: "58px", fontWeight: "bold"}}>never send.</Typography>
                </Stack>
                <RoundedOutlinedButton onClick={handleLearnMore} label={"Learn More"} sx={{fontSize: "16px"}} />
            </Stack>
            <Stack sx={{mx: { xs: '-50px', md: '-100px' }}}>
            <Box
                component="img"
                src={cloakScreenshot}
                alt="Cloak main screenshot"
                sx={{
                    width: '100%',
                    display: 'block',
                }}
            />
            </Stack>
        </Stack>
        <Divider sx={{mt: "40px", background: "#D9D9D9"}} />
        <ProblemAndSolution ref={psRef}/>
        <Divider sx={{ background: "#D9D9D9"}} />
        <Features />
        <Divider sx={{ my: 5, background: '#D9D9D9' }} />
        <About />
        <Footer />
    </Box>
    )
}
