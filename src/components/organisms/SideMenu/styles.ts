import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const SideMenuToogleButton = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  margin-left: auto;
`;

export const SideMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  color: ${(props) => props.theme.colors.background};
  border-style: solid;
  border-color: ${(props) => props.theme.colors.background};
  border-width: 0 0 2px;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.main};
  }
`;
