import { DefaultTheme } from 'styled-components';

const PurpleAndBlue: DefaultTheme = {
  colors: {
    main: {
      primary: '#E94166',
      accent: '#37b9f1',
      grey: '#242424',
    },
    dark: {
      dark1: '#100f10',
      dark2: '#1b1b1b',
      dark3: '#242424',
    },
    font: {
      normal: '#565360',
      label: '#908e9b',
      disabled: '#e1dfe9',
    },
  },
  lengths: {
    sm1: '0.25rem',
    sm2: '0.5rem',
    sm3: '0.75rem',
    md1: '1rem',
    md2: '1.25rem',
    md3: '1.5rem',
    lg1: '2rem',
    lg2: '3rem',
    lg3: '4rem',
  },
};

export default PurpleAndBlue;
