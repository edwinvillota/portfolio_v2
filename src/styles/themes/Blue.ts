import { DefaultTheme } from 'styled-components';

const Blue: DefaultTheme = {
  name: 'Blue',
  colors: {
    lShades: '#fafafa',
    lAccent: '#33b3ff',
    main: '#2185d5',
    dAccent: '#f3f3f3',
    dShades: '#303841',
    buttons: {
      colors: {
        primary: '#2184d5',
        link: '#2184d5',
        info: '#303841',
        success: '#3fa278',
        warning: '#bc9240',
        danger: '#f44336',
      },
      sizes: {
        small: '12px',
        normal: '16px',
        medium: '20px',
        large: '24px',
      },
    },
    dark: {
      dark1: '#100f10',
      dark2: '#1b1b1b',
      dark3: '#242424',
    },
    light: {
      light1: '#fdfefe',
      light2: '#f2f5f5',
      light3: '#ecf0f1',
    },
    background: {
      bg1: '#fdfefe',
      bg2: '#f2f5f5',
      bg3: '#ecf0f1',
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

export default Blue;
