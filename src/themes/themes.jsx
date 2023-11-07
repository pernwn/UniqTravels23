
import { createTheme} from '@mui/material/styles';

export const customTheme = (outerTheme) =>
  createTheme({
    mode: outerTheme,
    palette: {
      mode: 'light',
      primary: {
        main: '#1C465C',
        contrastText: '#EEF9FF',
      },
      secondary: {
        main: '#008b8b',
        accent: '#FF9635',
        contrastText: '#0c1e29',
      },
      background: {
        paper: '#EEF9FF',
        default: '#daebf4',
      },
      text: {
        primary: '#1C465C',
      },
      warning: {
        main: '#ed4d02',
      },
      info: {
        main: '#0288d1',
      },
      error: {
        main: '#d32f2f',
      },
    },
    typography: {

      h1: {
        fontFamily: 'Lalezar',
      },
      h2: {
        fontFamily: 'Lalezar',
      },
      h3: {
        fontFamily: 'Lalezar',
      },
      h4: {
        fontFamily: 'Lalezar',
        fontWeight: 100,
      },
      h5: {
        fontWeight: 100,
        fontFamily: 'Lalezar',
        fontSize:'1.8em',
      },
      h6: {
        fontFamily: 'Lalezar',
        fontWeight: 100,
      },
      subtitle2: {
        fontFamily: 'Sen',
      },
      body1: {
        fontFamily: 'Sen',
        fontWeight: 500,
      },
      body2: {
        fontFamily: 'Sen',
        fontWeight: 400,
      },
      button: {
        fontFamily: 'Sen',
      },
      caption: {
        fontFamily: 'Sen',
      },
      overline: {
        fontFamily: 'Sen',
      },
      subtitle1: {
        fontFamily: 'Sen',
      },
      fontFamily: 'Lalezar',
      fontWeightLight: 200,
      fontWeightRegular: 300,
    },
    spacing: 8,
    shape: {
      borderRadius: 15,
    },

    
  });




