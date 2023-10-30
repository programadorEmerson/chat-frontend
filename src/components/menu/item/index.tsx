/* eslint-disable max-len */
import React, { FC } from 'react';

import { MenuEnum, MenuIcons, MenuTranslationEnum } from '@/enums/routes';

import { Item } from './style';

export type ItemProps = {
    selectedMenu: MenuEnum;
    menu: MenuEnum;
};

/**
 * ItemMenu Component.
 *
 * This component displays an individual menu item. The item's appearance changes based on whether
 * it's the currently selected menu or not. The menu item consists of an icon, a name, a checkmark,
 * and an arrow.
 *
 * @example
 * <ItemMenu selectedMenu={MenuEnum.DASHBOARD} menu={MenuEnum.SETTINGS} />
 */
const ItemMenu: FC<ItemProps> = ({ selectedMenu, menu }) => {
  const Icon = MenuIcons[menu];

  const statusMenu = selectedMenu === menu ? 'selected' : 'unselected';

  return (
    <Item.Container statusmenu={statusMenu} >
      <Item.ContainerIcon statusmenu={statusMenu}>
        <Icon size={23} />
      </Item.ContainerIcon>
      <Item.ItemInfo statusmenu={statusMenu}>
        <Item.Check statusmenu={statusMenu}>
          ✓
        </Item.Check>
        <Item.Name statusmenu={statusMenu}>
          {MenuTranslationEnum[menu]}
        </Item.Name>
        <Item.ArrowLeft statusmenu={statusMenu}>
          ➝
        </Item.ArrowLeft>
      </Item.ItemInfo>
    </Item.Container>
  );
};

export default ItemMenu;
