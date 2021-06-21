import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { ThemeGradient } from 'styles/Colors';

interface ContainerProps {
  themeSchema: DefaultTheme;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: ${({ themeSchema }) => ThemeGradient({ themeSchema })};
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  }
`;
