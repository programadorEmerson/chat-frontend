'use client';
import React, { FC, useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import AppBar from '@/components/appBar';
import GenerateMenu from '@/components/menu/generateMenu';
import HeaderMenu from '@/components/menu/headerMenu';
import { Menu } from '@/components/menu/styles';

import { MenuEnum } from '@/enums/routes';

import { useUserContext } from '@/hooks/useUser';

type MenuProps = {
    children: React.ReactNode;
};

/**
 * MenuApp Component.
 *
 * This component provides the application's primary navigation structure.
 * It displays the main menu, header, and an app bar. The currently selected menu is determined by the page's route.
 *
 * @component
 *
 * @example
 * ```jsx
 * <MenuApp>
 *   <YourChildComponent />
 * </MenuApp>
 * ```
 */
const MenuApp: FC<MenuProps> = ({ children }) => {
  const { DASHBOARD } = MenuEnum;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(DASHBOARD);
  const { push } = useRouter();
  const pathName = usePathname();
  const { fetching } = useUserContext();

  const currentPath = pathName.split('/');

  function returnLink (menu: MenuEnum) {
    if (menu === DASHBOARD) return `/${menu}`;
    return `/${pathName.split('/')[1]}/${menu}`;
  }

  function handleClickMenu(menu: MenuEnum) {
    push(returnLink(menu));
  }

  useEffect(() => {
    if (currentPath.length > 2) {
      setSelectedMenu(currentPath[2] as MenuEnum);
    } else {
      setSelectedMenu(DASHBOARD);
    }

  }, [pathName]);

  return (
    <Menu.Container
      statusmenu={fetching ? 'hide' : 'show'}
    >
      <Menu.LayoutMenu>
        <Menu.ContentItem
          statusmenu={isMenuOpen ? 'show' : 'hide'}
        >
          <HeaderMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <Menu.HorizontalLine />
          <GenerateMenu
            selectedMenu={selectedMenu}
            returnLink={returnLink}
            handleClickMenu={handleClickMenu}
          />
        </Menu.ContentItem>
        <Menu.ContentLayout
          statusmenu={isMenuOpen ? 'show' : 'hide'}
        >
          <Menu.ContentAppBar>
            <AppBar />
          </Menu.ContentAppBar>
          <Menu.ContentMain>
            {children}
          </Menu.ContentMain>
        </Menu.ContentLayout>
      </Menu.LayoutMenu>
    </Menu.Container>
  );
};

export default MenuApp;
