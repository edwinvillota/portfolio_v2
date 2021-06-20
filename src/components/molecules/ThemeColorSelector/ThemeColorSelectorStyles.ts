import styled from 'styled-components';
import { Background } from 'styles/Colors';

type ContainerProps = {
  isOpen: boolean;
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  width: 50px;
  min-height: 50px;
  background: ${({ theme }) => Background({ theme })};
  padding: 10px;
  border: none;
  overflow: hidden;
  box-shadow: ${({ isOpen }) => (isOpen ? '0 4px 4px rgba(0,0,0,.25)' : 'none')};
  border-radius: ${({ isOpen }) => (isOpen ? '79px' : 'none')};
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '50px')};
`;

export const ButtonsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
`;
