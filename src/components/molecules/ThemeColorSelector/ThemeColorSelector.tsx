import React, { useState, useContext } from 'react';
import { ThemeGradientButton, AnimatedList } from 'components/atoms';
import { Container, ButtonsList } from './ThemeColorSelectorStyles';
import { ThemeCtx } from 'context/ThemeCtx';
import {
  Default as DefaultTheme,
  Blue as BlueTheme,
  Default,
  Purple as PurpleTheme,
  Green as GreenTheme,
} from 'styles/themes';

const ThemeColorSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeCtx);

  return (
    <Container isOpen={isOpen}>
      <ButtonsList>
        <ThemeGradientButton themeSchema={theme} onClick={() => setIsOpen(!isOpen)} />
        <AnimatedList showItems={isOpen}>
          <ThemeGradientButton themeSchema={DefaultTheme} />
          <ThemeGradientButton themeSchema={PurpleTheme} />
          <ThemeGradientButton themeSchema={GreenTheme} />
        </AnimatedList>
      </ButtonsList>
    </Container>
  );
};

export default ThemeColorSelector;
