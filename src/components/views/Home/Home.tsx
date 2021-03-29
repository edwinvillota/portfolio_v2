import * as React from 'react';
import { useContext } from 'react';
import { GlobalCtx } from 'context/GlobalCtx';
import { Background } from 'components/organisms';

import { StyledView, StyledSection, StyledTitle } from './styles';

const Home: React.FC = () => {
  const { viewportType } = useContext(GlobalCtx);
  return (
    <StyledView>
      <StyledSection>
        <Background viewportType={viewportType} />
      </StyledSection>
      {/* <StyledTitle>Edwin Jair Villota Calderon</StyledTitle> */}
    </StyledView>
  );
};

export default Home;
