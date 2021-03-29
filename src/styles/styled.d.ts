import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: {
        primary: string;
        accent: string;
        grey: string;
      };
      dark: {
        dark1: string;
        dark2: string;
        dark3: string;
      };
      font: {
        normal: string;
        label: string;
        disabled: string;
      };
    };
    lengths: {
      sm1: string;
      sm2: string;
      sm3: string;
      md1: string;
      md2: string;
      md3: string;
      lg1: string;
      lg2: string;
      lg3: string;
    };
  }
}
