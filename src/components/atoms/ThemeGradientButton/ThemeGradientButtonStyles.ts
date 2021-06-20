import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';
import { ThemeGradient } from 'styles/Colors';

type ContainerProps = {
  themeSchema: DefaultTheme;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: ${({ themeSchema }) => ThemeGradient({ themeSchema })};

  &:hover {
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  }
`;
