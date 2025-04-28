import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#051B32' },
    secondary: { main: '#004D9F' },
    text: {
        primary:   '#ffffff'
    }
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: 'inherit',
          textDecoration: 'none',
          '&:visited': { color: 'inherit' },
        },
      },
    },
  },
});
