/* eslint-disable max-len */
import React, { FC } from 'react';

import { MenuEnum, MenuIcons, MenuTranslationEnum } from '@/enums/routes';

import { Item } from './style';

export type ItemProps = {
    selectedMenu: MenuEnum;
    menu: MenuEnum;
};

const ItemMenu: FC<ItemProps> = ({ selectedMenu, menu }) => {
  const Icon = MenuIcons[menu];

  const statusMenu = selectedMenu === menu ? 'selected' : 'unselected';

  return (
    <Item.Container statusMenu={statusMenu} >
      <Item.ContainerIcon statusMenu={statusMenu}>
        <Icon size={23} />
      </Item.ContainerIcon>
      <Item.ItemInfo statusMenu={statusMenu}>
        <Item.Check statusMenu={statusMenu}>
          ✓
        </Item.Check>
        <Item.Name statusMenu={statusMenu}>
          {MenuTranslationEnum[menu]}
        </Item.Name>
        <Item.ArrowLeft statusMenu={statusMenu}>
          ➝
        </Item.ArrowLeft>
      </Item.ItemInfo>
    </Item.Container>
  );
};

export default ItemMenu;
