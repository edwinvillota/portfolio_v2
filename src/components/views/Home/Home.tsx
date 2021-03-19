import * as React from 'react';
import { Background } from 'components/organisms';

import { HomeView, Section } from './styles';

const Home: React.FC = () => {
  return (
    <HomeView>
      <Section>
        <Background />
      </Section>
    </HomeView>
  );
};

export default Home;
