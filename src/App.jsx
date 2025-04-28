import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Box, Typography, Toolbar, Button, Container, Stack } from '@mui/material';

import Home from './components/Home';
import Help from './components/Help';
import CTAButton from './components/CTAButton';

export default function App() {
  return (
    <>
      <AppBar position="static"  sx={{ 
        px: { xs: '20px', md: '100px' },
        py: { xs: '20px', md: '100px' },
      }} elevation={0}>
        {/* <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/help">Help</Button>
        </Toolbar> */}
  <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 0 }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
    <Stack direction="row" spacing={2.5} alignItems="center">
      <Box sx={{ width: 45, height: 45, bgcolor: '#004D9F'}} />
      <Typography sx={{ fontSize: 24, lineHeight: 1 }} fontWeight={700}>
        Cloak
      </Typography>
    </Stack>

  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 5, md: 7.5 }} alignItems={{ xs: 'flex-start', sm: 'center' }} flexWrap="wrap">
    <Typography component="a" href="https://example.com/paper.pdf" target="_blank" rel="noopener noreferrer"  sx={{ textDecoration: 'none', cursor: 'pointer' }}>
      Project Paper
    </Typography>

    <Typography component="a" href="https://example.com/presentation.pdf" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
      Presentation
    </Typography>

    <CTAButton
      label="Download Cloak"
      sx={{
        height: 45,
        fontSize: 16,
        flexShrink: 0,               // keep button from squeezing
        width: { xs: '100%', sm: 'auto' },  // full-width on phones, auto later
      }}
    />
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
