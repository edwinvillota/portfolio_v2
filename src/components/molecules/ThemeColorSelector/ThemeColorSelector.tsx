import React, { useState, useContext } from 'react';
import { ThemeGradientButton } from 'components/atoms';
import { Container, ButtonsList } from './ThemeColorSelectorStyles';
import { ThemeCtx } from 'context/ThemeCtx';
import { Default as DefaultTheme, Blue as BlueTheme, Default } from 'styles/themes';

const ThemeColorSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeCtx);

  return (
    <Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <ButtonsList>
        <ThemeGradientButton themeSchema={theme} />
        <ThemeGradientButton themeSchema={DefaultTheme} />
      </ButtonsList>
    </Container>
  );
};

export default ThemeColorSelector;
