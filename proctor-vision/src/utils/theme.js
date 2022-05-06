import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
        main: grey[50],
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.5)',
    },
},
});