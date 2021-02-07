import React from 'react';
import { SideMenu } from 'components/organisms';
import { Container, Nav, View } from './styles';

interface AppTemplateProps {
  children: React.ReactNode;
}

const AppTemplate: React.FC<AppTemplateProps> = ({ children }) => (
  <Container>
    <Nav>
      <SideMenu />
    </Nav>
    <View>{children}</View>
  </Container>
);

export default AppTemplate;
