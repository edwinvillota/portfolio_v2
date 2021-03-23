import styled from 'styled-components';

export const StyledView = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSection = styled.section`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 0;
`;

export const StyledTitle = styled.h1`
  display: flex;
  font-size: 40px;
  z-index: 5;
`;
