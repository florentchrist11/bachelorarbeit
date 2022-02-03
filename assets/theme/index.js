import {colors, createMuiTheme} from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    //type: 'dark',
    primary: {
      main: colors.blue[900]
    },
    secondary: {
      main: colors.blue[700]
    }
  },
  shadows,
  typography
});

export default theme;
