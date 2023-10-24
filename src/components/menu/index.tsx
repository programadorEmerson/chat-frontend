'use client';
import React, { FC, useEffect, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { StyledContainer } from '@/components/menu/styles';

import { MenuEnum } from '@/enums/routes';

import { useUserContext } from '@/hooks/useUser';

import GenerateMenu from './generateMenu';
import HeaderMenu from './headerMenu';

type MenuProps = {
    children: React.ReactNode;
};

const Menu: FC<MenuProps> = ({ children }) => {
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
    <StyledContainer
      visibility={fetching ? 'hide' : 'show'}
      className={'bg-[url("/assets/bg.jpeg")] bg-cover bg-center'}
    >
      <div className='relative flex w-full max-w-screen-xl p-0 rounded-md drop-shadow-md'>
        <div
          className={`absolute h-full bg-gray-50 ${!isMenuOpen ? 'w-14' : 'w-52'}
          ${isMenuOpen && 'drop-shadow-md'} duration-300 overflow-hidden`}
        >
          <HeaderMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <div className='px-1'>
            <hr className='h-px my-1 bg-gray-300 border-0' />
          </div>
          <GenerateMenu
            isMenuOpen={isMenuOpen}
            selectedMenu={selectedMenu}
            returnLink={returnLink}
            handleClickMenu={handleClickMenu}
          />
        </div>
        <main className={`
          flex flex-col w-full duration-300
          ${!isMenuOpen ? 'ml-[57px]' : 'ml-[57px] sm:ml-[57px] md:ml-[57px] lg:ml-52 xl:ml-52'}
        `}
        >
          <header className='bg-gray-50 w-full px-4 py-6'>
            app bar
          </header>
          <div className='bg-gray-100 flex flex-col h-full p-3'>
            {children}
          </div>
        </main>
      </div>
    </StyledContainer>
  );
};

export default Menu;
