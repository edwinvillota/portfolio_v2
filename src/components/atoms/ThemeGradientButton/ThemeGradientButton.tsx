import React, { ButtonHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';
import { Container } from './ThemeGradientButtonStyles';

interface ThemeGradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  themeSchema: DefaultTheme;
}

export const ThemeGradientButton: React.FC<ThemeGradientButtonProps> = ({ themeSchema, ...props }) => {
  return <Container themeSchema={themeSchema} {...props} />;
};

export default ThemeGradientButton;
