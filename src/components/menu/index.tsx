'use client';
import React, { FC, useState } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { StyledContainer } from '@/components/menu/styles';

import { MenuEnum } from '@/enums/routes';

import { useUserContext } from '@/hooks/useUser';

import GenerateManu from './generateMenu';
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

  function returnLink (menu: MenuEnum) {
    if (menu === DASHBOARD) return `/${menu}`;
    return `/${pathName.split('/')[1]}/${menu}`;
  }

  function handleClickMenu(menu: MenuEnum) {
    setSelectedMenu(menu);
    push(returnLink(menu));
  }

  return (
    <StyledContainer visibility={fetching ? 'hide' : 'show'} >
      <div className='relative flex w-full max-w-screen-xl p-2 rounded-md'>
        <div
          className={`absolute h-full bg-gray-50 ${!isMenuOpen ? 'w-14' : 'w-52'}
          drop-shadow-md duration-300 overflow-hidden`}
        >
          <HeaderMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <div className='px-1'>
            <hr className='h-px my-1 bg-gray-300 border-0' />
          </div>
          <GenerateManu
            isMenuOpen={isMenuOpen}
            selectedMenu={selectedMenu}
            returnLink={returnLink}
            handleClickMenu={handleClickMenu}
          />
        </div>
        <main className={`
          flex flex-col w-full duration-500
          ${!isMenuOpen ? 'ml-[58px]' : 'ml-[58px] sm:ml-[58px] md:ml-[58px] lg:ml-52 xl:ml-52'}
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
