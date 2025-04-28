import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Box, Typography, Toolbar, Button, Container, Stack } from '@mui/material';

import Home from './components/Home';
import Help from './components/Help';
import CTAButton from './components/CTAButton';

export default function App() {
  return (
    <>
      <AppBar position="static" sx={{p: "100px"}} elevation={0}>
        {/* <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/help">Help</Button>
        </Toolbar> */}
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} spacing={2.5} alignItems={"center"}>
            <Box sx={{ width: 45, height: 45, bgcolor: '#004D9F' }} />
            <Typography sx={{ fontSize: '24px', lineHeight: 1 }} fontWeight={700}>
              Cloak
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={7.5}>
            <Typography component="a" href="https://example.com/paper.pdf" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', cursor: 'pointer' }}>Project Paper</Typography>
            <Typography component="a" href="https://example.com/paper.pdf" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', cursor: 'pointer' }}>Presentation</Typography>
            <CTAButton label="Download Cloak" sx={{ height: "45px", fontSize: "16px"}}/>
          </Stack>
        </Stack>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<p>404 - Not found</p>} />
      </Routes>
    </>
  );
}
