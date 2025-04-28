import { Box, Typography } from '@mui/material';

export default function InfoBox({ title, description, sx = {} }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "380px",
        minHeight: "335px",
        p: 3,
        borderRadius: "15px",
        boxShadow: 3,
        border: '1px solid #ffffff',
        overflow: "hidden",
        ...sx,
      }}
    >
      <Typography component="div" sx={{ fontSize: "24px", fontWeight: "bold"}}>
        {title}
      </Typography>

      <Typography  component="div" sx={{ fontSize: "16px", mt: "10px"}}>
        {description}
      </Typography>
    </Box>
  );
}
