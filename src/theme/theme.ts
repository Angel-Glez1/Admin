import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { SxProps, Theme } from '@mui/material';

export interface IStyles {
  [index: string]: SxProps<Theme>
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0078F0',
      light: 'rgba(0, 120, 240, 0.13)'
    },
    secondary: {
      main: 'rgba(0, 120, 240, 0.50)',
     
    },
    error: {
      main: 'rgba(239, 38, 55, 0.7)',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.5)',
    }
  },
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true
      }
    },
    MuiCard: {
      defaultProps: {
        sx: {
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.10)'
        }
      }
    }

  }
});


