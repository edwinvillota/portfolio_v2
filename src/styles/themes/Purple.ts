import { DefaultTheme } from 'styled-components';

const Purple: DefaultTheme = {
  name: 'Purple',
  colors: {
    lShades: '#fafafa',
    lAccent: '#b643cd',
    main: '#7952b3',
    dAccent: '#e1e8eb',
    dShades: '#343a40',
    buttons: {
      colors: {
        primary: '#7952b3',
        link: '#7952b3',
        info: '#343a40',
        success: '#82b43a',
        warning: '#ffa402',
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

export default Purple;
