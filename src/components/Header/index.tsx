import React, { useCallback, useState } from 'react';

import {
  Container,
  LogoText,
  CustomOpenBurguer,
  Navigation,
  NavigationContent,
  CustomCloseBurguer,
} from './styles';

const Header: React.FC = () => {
  const [navigationVisible, setNavigationVisible] = useState(false);

  const handleCloseNavigation = useCallback(
    () => setNavigationVisible(false),
    [],
  );

  const handleOpenNavigation = useCallback(
    () => setNavigationVisible(true),
    [],
  );

  const handleCloseOutside = useCallback(event => {
    const content = document.querySelector('.navigation-content');

    if (event.target !== content) {
      setNavigationVisible(false);
    }
  }, []);

  return (
    <Container>
      <LogoText>Logo</LogoText>

      <CustomOpenBurguer onClick={handleOpenNavigation}>
        <span />
        <span />
        <span />
      </CustomOpenBurguer>

      <Navigation isVisible={navigationVisible} onClick={handleCloseOutside}>
        <NavigationContent className="navigation-content">
          <CustomCloseBurguer onClick={handleCloseNavigation}>
            <span />
            <span />
          </CustomCloseBurguer>

          <ul>
            <li>
              <a href="https://google.com.br">Menu 1</a>
            </li>

            <li>
              <a href="https://google.com.br">Menu 1</a>
            </li>

            <li>
              <a href="https://google.com.br">Menu 1</a>
            </li>

            <li>
              <a href="https://google.com.br">Menu 1</a>
            </li>
          </ul>
        </NavigationContent>
      </Navigation>
    </Container>
  );
};

export default Header;
