import styled from 'styled-components';

interface CurrentSlideInfoProps {
  isActive: boolean;
}

export const Container = styled.div`
  padding-left: 30px;
  display: flex;
  position: relative;
`;

export const InfoContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 630px;
  max-height: 460px;
  background: #fff;

  position: relative;
  top: -50px;

  h2 {
    padding-left: 60px;
    margin-top: 30px;
    font-weight: bold;
    font-size: 28px;
  }

  p {
    margin-top: 12px;
    max-width: 400px;
    line-height: 1.5;
    padding-left: 60px;
    padding-bottom: 60px;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    padding-right: 60px;
    padding-bottom: 30px;
  }
`;

export const CurrentIcon = styled.div`
  padding: 80px 0 0 60px;

  img {
    width: 60px;
    height: 60px;
  }
`;

export const CurrentSlideInfo = styled.div<CurrentSlideInfoProps>`
  width: ${({ isActive }) => (isActive ? '40px' : '20px')};
  height: 13px;
  background: ${({ isActive }) => (isActive ? '#FFC502' : '#000')};
  margin-right: 14px;
`;

export const ArrowContent = styled.div`
  display: flex;
  position: absolute;
  right: 552px;
  bottom: 50px;
`;

export const SlideDataContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  div.active {
    display: flex;
  }

  div.inactive {
    display: none;
  }

  img.image-bg {
    width: 100%;
    max-width: 700px;
    position: relative;
    top: -100px;

    max-height: 460px;
    height: 100%;

    margin-bottom: -5px;
  }
`;
