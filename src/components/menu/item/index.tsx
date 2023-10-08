/* eslint-disable max-len */
import React, { FC } from 'react';

import { MenuEnum, MenuIcons, MenuTranslationEnum } from '@/enums/routes';

type ItemProps = {
    selectedMenu: MenuEnum;
    isMenuOpen: boolean;
    menu: MenuEnum;
};

const Item: FC<ItemProps> = ({ selectedMenu, isMenuOpen, menu }) => {
  const Icon = MenuIcons[menu];

  return (
    <div
      className={`mt-1 group hover:drop-shadow-md flex h-8 ${selectedMenu === menu ? 'bg-blue-50' : 'bg-slate-100'} bg-slate-100 hover:bg-blue-50 duration-300 hover:cursor-pointer`}
    >
      <div
        className={'flex w-16 pt-1 justify-center -ml-1'}
      >
        <Icon
          size={23}
          className={`${selectedMenu === menu ? 'text-blue-700' : 'text-slate-800'} group-hover:text-blue-700 duration-1000`}
        />
      </div>
      <div
        className={` w-52 ${isMenuOpen ? 'text-slate-800' : 'text-transparent'} pt-1.5 duration-100`}
      >
        <span
          className={`${selectedMenu === menu ? 'text-blue-700' : 'text-slate-800'} group-hover:text-blue-700 duration-1000 font-medium text-sm`}
        >
          {MenuTranslationEnum[menu]}
        </span>
      </div>
    </div>
  );
};

export default Item;
