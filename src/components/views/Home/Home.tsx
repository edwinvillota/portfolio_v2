import * as React from 'react';
import { useContext } from 'react';
import { GlobalCtx } from 'context/GlobalCtx';
import { Background } from 'components/organisms';

import { HomeView, Section, Title } from './styles';

const Home: React.FC = () => {
  const { viewportType } = useContext(GlobalCtx);
  return (
    <HomeView>
      <Section>
        <Background viewportType={viewportType} />
      </Section>
      <Title>Edwin Jair Villota Calderon</Title>
    </HomeView>
  );
};

export default Home;
