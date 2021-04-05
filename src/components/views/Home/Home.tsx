import * as React from 'react';
import { useContext } from 'react';
import { GlobalCtx } from 'context/GlobalCtx';
import { ThemeCtx } from 'context/ThemeCtx';
import { ThemeModeSwitch } from 'components/atoms';
//import { Background } from 'components/organisms';

import { StyledView, StyledSection, StyledTitle } from './styles';

const Home: React.FC = () => {
  const { viewportType } = useContext(GlobalCtx);
  const { themeMode, switchThemeMode } = useContext(ThemeCtx);
  return (
    <StyledView>
      <StyledTitle>Edwin Jair Villota Calderon</StyledTitle>
      <ThemeModeSwitch />
    </StyledView>
  );
};

export default Home;
