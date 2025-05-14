import { Routes, Route } from 'react-router-dom';
import { AppBar, Typography, Stack } from '@mui/material';

import Home from './components/Home';
import Help from './components/Help';
import CTAButton from './components/CTAButton';
import logo from "./assets/Final-logo-lighter.png"

export default function App() {
  return (
    <>
      <AppBar position="static"  sx={{ 
        px: { xs: '20px', md: '100px' },
        py: { xs: '20px', md: '100px' },
      }} elevation={0}>
  <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 3, md: 0 }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }}>
    <Stack direction="row" spacing={2.5} alignItems="center">
      <img src={logo} alt="Cloak logo" style={{ width: 45, height: 45 }} />
      <Typography sx={{ fontSize: 24, lineHeight: 1 }} fontWeight={700}>
        Cloak
      </Typography>
    </Stack>

  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 5, md: 7.5 }} alignItems={{ xs: 'flex-start', sm: 'center' }} flexWrap="wrap">
    <Typography component="a" href="https://drive.google.com/file/d/18Feum7N6kNE5VVyPV-_BRZr50gN2hapS/view?usp=drive_link" target="_blank" rel="noopener noreferrer"  sx={{ textDecoration: 'none', cursor: 'pointer' }}>
      Project Paper
    </Typography>

    <Typography component="a" href="https://example.com/presentation.pdf" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
      Presentation
    </Typography>

    <CTAButton
      label="Download Cloak"
      component="a"
      href="https://github.com/aishwarya1712/cloak-ui?tab=readme-ov-file#cloak-ui"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        height: 45,
        fontSize: 16,
        flexShrink: 0, 
        width: { xs: '100%', sm: 'auto' },
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
