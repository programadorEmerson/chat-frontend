import React, { FC } from 'react';
import { HiMenu as InconMenu, HiArrowLeft } from 'react-icons/hi';

import { Header } from './styles';

type HeaderMenuProps = {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
};

/**
 * HeaderMenu Component.
 *
 * This component displays the app's header menu. It toggles between a menu icon and a close icon
 * based on the `isMenuOpen` prop. The component also displays the app name fetched from environment variables.
 *
 * @example
 * <HeaderMenu isMenuOpen={true} setIsMenuOpen={(isOpen) => console.log(isOpen)} />
 */
const HeaderMenu: FC<HeaderMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <Header.Container>
      <Header.ContentMenuIcon statusmenu={isMenuOpen ? 'show' : 'hide'}>
        <Header.ButtonMenu
          statusmenu={isMenuOpen ? 'show' : 'hide'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
        >
          {isMenuOpen ? <HiArrowLeft size={20} /> : <InconMenu size={20} />}
        </Header.ButtonMenu>
      </Header.ContentMenuIcon>
    </Header.Container>
  );
};

export default HeaderMenu;
