import React from 'react';
import { Container, SideMenuToogleButton, SideMenuLink } from './styles';

const SideMenu: React.FC = () => (
  <Container>
    <SideMenuToogleButton />
    <SideMenuLink to="/">Home</SideMenuLink>
    <SideMenuLink to="/dashboard">Dashboard</SideMenuLink>
    <SideMenuLink to="/users">Users</SideMenuLink>
    <SideMenuLink to="/about">About</SideMenuLink>
  </Container>
);

export default SideMenu;
