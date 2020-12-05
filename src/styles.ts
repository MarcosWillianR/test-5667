import styled from 'styled-components';

import bgImage from './assets/bg.jpeg';

export const Container = styled.div``;

export const MainContent = styled.div`
  background: url(${bgImage}) no-repeat;
  background-position: center center;
  background-size: cover;
  height: 600px;
  padding: 0 30px;
  display: flex;
  align-items: center;

  h1 {
    font-size: 72px;
    font-weight: bold;
    color: #fff;

    &::after {
      content: '';
      display: block;
      width: 150px;
      height: 20px;
      background: #ffc502;
    }
  }
`;
