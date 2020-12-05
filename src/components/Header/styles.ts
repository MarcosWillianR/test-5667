import styled from 'styled-components';

interface NavigationProps {
  isVisible: boolean;
}

export const Container = styled.header`
  height: 70px;
  padding: 22px 30px;
  justify-content: space-between;
  display: flex;
  background: #000;
  position: relative;
`;

export const LogoText = styled.h2`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;

export const CustomOpenBurguer = styled.button`
  border: 0;
  background: 0;

  span {
    display: block;
    margin-bottom: 7px;
    border-radius: 10px;
    width: 30px;
    height: 3px;

    background: #fff;
  }

  span:last-of-type {
    width: 20px;
    margin-left: auto;
  }
`;

export const Navigation = styled.nav<NavigationProps>`
  position: fixed;
  z-index: 9999;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: flex-end;

  background: rgba(0, 0, 0, 0.3);

  ul {
    list-style: none;
    display: flex;

    li {
      margin-left: 12px;
    }
  }
`;

export const NavigationContent = styled.div`
  width: 318px;
  height: 100vh;
  background: #ffc502;
  padding: 22px;

  ul {
    margin: 60px 57px 0 57px;
    flex-direction: column;

    li {
      padding: 12px 0;
      margin-bottom: 12px;
    }

    li a {
      text-decoration: none;
      padding: 12px 0;
      color: #000;
      font-size: 22px;
      font-weight: bold;
    }
  }
`;

export const CustomCloseBurguer = styled.button`
  border: 0;
  background: 0;
  padding: 12px;

  span {
    display: block;
    width: 22px;
    height: 3px;
    background: #000;
    position: relative;
  }

  span:first-of-type {
    transform: rotate(47deg);
    top: 3px;
  }

  span:last-of-type {
    transform: rotate(135deg);
  }
`;
