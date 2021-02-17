import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 3px 20px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: solid 6px ${(props) => props.theme.colors.main};
`;

export const Name = styled.h2`
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
`;

export const Username = styled.span`
  display: flex;
  font-size: 0.8rem;
  font-weight: lighter;
  font-style: italic;
`;
