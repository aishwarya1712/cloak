import { Box, Typography } from '@mui/material';

export default function InfoBox({ icon, title, description, sx = {} }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "380px",
        minHeight: "335px",
        height: "80%",
        mt: "100px",
        borderRadius: "15px",
        overflow: "hidden",
        ...sx,
      }}
    >
      {icon && <img src={icon} />}
      <Typography component="div" sx={{ fontSize: "24px", fontWeight: "bold"}}>
        {title}
      </Typography>
      <Typography  component="div" sx={{ fontSize: "16px", mt: "16px", lineHeight: "20px"}}>
        {description}
      </Typography>
    </Box>
  );
}
