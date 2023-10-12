import React, { FC } from 'react';

import Link from 'next/link';

import { MenuEnum } from '@/enums/routes';

import Item from './item';

type GenerateManuProps = {
    isMenuOpen: boolean;
    selectedMenu: MenuEnum;
    handleClickMenu: (menu: MenuEnum) => void;
    returnLink: (menu: MenuEnum) => string;
}

const GenerateManu: FC<GenerateManuProps> = ({ isMenuOpen, selectedMenu, returnLink, handleClickMenu }) => {
  const { LOGIN } = MenuEnum;

  return (
    <div className='w-72 absolute'>
      {
        Object.values(MenuEnum)
          .filter((menu) => menu !== LOGIN)
          .map((menu) => (
            <Link
              key={menu}
              href={returnLink(menu)}
              onClick={() => handleClickMenu(menu)}
            >
              <Item
                menu={menu}
                isMenuOpen={isMenuOpen}
                selectedMenu={selectedMenu}
              />
            </Link>
          ))
      }
    </div>
  );
};

export default GenerateManu;
