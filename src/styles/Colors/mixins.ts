import { DefaultTheme } from 'styled-components';
import { darken, lighten } from 'polished';

type FontColorParams = {
  themeMode: 'Dark' | 'Light';
  theme: DefaultTheme;
};

type BackgroundParams = {
  theme: DefaultTheme;
  type?: 'bg1' | 'bg2' | 'bg3';
};

type ThemeGradientParams = {
  themeSchema: DefaultTheme;
};

export const Background = ({ theme, type = 'bg1' }: BackgroundParams): string => {
  return theme.colors.background[type];
};

export const FontColor = ({ theme, themeMode }: FontColorParams): string => {
  return themeMode === 'Light' ? theme.colors.dark.dark1 : theme.colors.light.light1;
};

export const ThemeGradient = ({ themeSchema }: ThemeGradientParams): string => {
  return `
    linear-gradient(120deg,
      ${lighten(0.4, themeSchema.colors.lAccent)} 0%,
      ${themeSchema.colors.lAccent} 17%,
      ${themeSchema.colors.main} 90%,
      ${darken(0.2, themeSchema.colors.main)}
    )
  `;
};
