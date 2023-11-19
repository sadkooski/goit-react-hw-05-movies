import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0px;
  width: 100vh;
`;

export const CastElement = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
`;

export const Actor = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 15px;
  padding: 15px;
  margin-left: -40px;
  gap: 15px;
  margin-bottom: 15px;
  box-sizing: content-box;
  margin: 15px;
`;

export const ActorInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-decoration: none;
`;
