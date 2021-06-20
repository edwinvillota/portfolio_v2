import React from 'react';
import { DefaultTheme } from 'styled-components';
import { Container } from './ThemeGradientButtonStyles';

type ThemeGradientButtonProps = {
  themeSchema: DefaultTheme;
};

export const ThemeGradientButton: React.FC<ThemeGradientButtonProps> = ({ themeSchema }) => {
  return <Container themeSchema={themeSchema} />;
};

export default ThemeGradientButton;
