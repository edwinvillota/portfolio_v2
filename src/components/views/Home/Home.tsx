import * as React from 'react';
import { useContext } from 'react';
import { GlobalCtx } from 'context/GlobalCtx';
import { ThemeCtx } from 'context/ThemeCtx';
import { ThemeModeSwitch } from 'components/atoms';
import { Background } from 'components/organisms';

import { StyledView, BackgroundSection, StyledTitle, HomeSection, InfoWrapper } from './styles';

const Home: React.FC = () => {
  const { viewportType } = useContext(GlobalCtx);
  const { themeMode } = useContext(ThemeCtx);

  return (
    <StyledView>
      <BackgroundSection>
        <Background viewportType={viewportType} />
      </BackgroundSection>
      <HomeSection>
        <InfoWrapper>
          <StyledTitle themeMode={themeMode}>Edwin Jair Villota Calderon</StyledTitle>
        </InfoWrapper>
        <ThemeModeSwitch />
      </HomeSection>
    </StyledView>
  );
};

export default Home;
