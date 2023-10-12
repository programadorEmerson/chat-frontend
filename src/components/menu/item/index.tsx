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
      className={`mt-1 group ${selectedMenu === menu && 'drop-shadow-md'} drop-shadow-md
      flex h-8 ${selectedMenu === menu ? 'bg-blue-50' : 'bg-slate-100'} bg-slate-100
      hover:bg-blue-50 duration-300 hover:cursor-pointer`}
    >
      <div
        className={'flex w-16 pt-1 justify-center -ml-1'}
      >
        <Icon
          size={23}
          className={`${selectedMenu === menu ? 'text-bluelogo' : 'text-slate-700'}
          group-hover:text-bluelogo duration-1000`}
        />
      </div>
      <div
        className={`w-52 ${isMenuOpen ? 'text-slate-700' : 'text-transparent'} pt-1.5 duration-100`}
      >
        <span
          className={`${selectedMenu === menu ? 'text-bluelogo ml-3' : 'text-transparent'} 
          duration-500 font-medium text-sm`}
        >
          ✓
        </span>
        <span
          className={`${selectedMenu === menu ? 'text-bluelogo ml-2' : 'text-slate-700'}
          duration-500 font-medium text-sm`}
        >
          {`${MenuTranslationEnum[menu]}`}
        </span>
        {
          selectedMenu !== menu && (
            <span
              className={`group-hover:text-slate-700 group-hover:ml-2 ml-0
              text-transparent duration-500 font-medium text-sm`}
            >
              ➝
            </span>
          )
        }
      </div>
    </div>
  );
};

export default Item;
