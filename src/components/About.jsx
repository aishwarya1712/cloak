import React from 'react';
import { Box, styled, Stack, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import BoltIcon from '@mui/icons-material/AutoAwesome';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/Group';

const Title = styled(Typography)(() => ({
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'left',
}));

const Desc = styled(Typography)(() => ({
  fontSize: '15px',
  lineHeight: 1.5,
  color: '#fff',
  textAlign: 'left',
}));

const IconWrapper = styled(Box)(() => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
//   background: '#E5F1FB',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const aboutItems = [
  {
    icon: <SchoolIcon sx={{ fontSize: 50, color: '#6694C5' }} />,
    title: 'Clinic Origins',
    description:
      'It all started in a UC Berkeley Cybersecurity Clinic course, where several of us partnered with organizations to tackle real-world cybersecurity and privacy challenges.',
  },
  {
    icon: <BoltIcon sx={{ fontSize: 50, color: '#6694C5' }} />,
    title: 'A Spark Ignited',
    description:
      'As consultants, we saw firsthand how many critical privacy practices are within reach yet remain unadopted, not because people don’t care, but because they often feel unqualified or overwhelmed.',
  },
  {
    icon: <SearchIcon sx={{ fontSize: 50, color: '#6694C5' }} />,
    title: 'Deep Exploration',
    description:
      'We interviewed users, spoke with experts, attended conferences, and analyzed tools to uncover that the gap wasn’t just technical; it was human.',
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 50, color: '#6694C5' }} />,
    title: 'Our Mission',
    description:
      'We came together as a cross-disciplinary team to build a timely, practical solution that gives everyone real agency over their data in the age of AI.',
  },
];

export default function About() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 8,
        px: { xs: 2.5, md: 12.5 }
      }}
    >
      <Typography
        sx={{ fontSize: "32px", color: '#6694C5' }}
      >
        About Us
      </Typography>

      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
        flexWrap="wrap"
        sx={{ mt: 4 }}
      >
        {aboutItems.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              width: { xs: '100%', sm: '45%', md: '22%' },
              mb: 4,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Stack
              alignItems="flex-start"
              spacing={2}
              sx={{
                p: 3,
                borderRadius: 2,
                flexGrow: 1,
              }}
            >
              <IconWrapper>{item.icon}</IconWrapper>
              <Title>{item.title}</Title>
              <Desc>{item.description}</Desc>
            </Stack>
          </Box>
        ))}
      </Stack>

      <Typography
        sx={{
          fontSize: 16,
          color: '#64748B',
          mt: 6,
          fontStyle: "italic"
        }}
      >
        “Because privacy shouldn’t be a luxury, it should be within everyone’s grasp.”
      </Typography>
    </Box>
  );
}
