import React, { FC } from 'react';

import Link from 'next/link';

import { ConstantsEnum } from '@/enums/constants.enum';
import { MenuEnum } from '@/enums/routes';

import { useAbilities } from '@/hooks/useAbilities';

import { SubjectConstants } from '@/constants/subject.constants';

import ItemMenu from './item';
import { Menu } from './styles.menu';

type GenerateMenuProps = {
    selectedMenu: MenuEnum;
    handleClickMenu: (menu: MenuEnum) => void;
    returnLink: (menu: MenuEnum) => string;
}

const GenerateMenu: FC<GenerateMenuProps> = ({ selectedMenu, returnLink, handleClickMenu }) => {
  const { abilities : ability } = useAbilities();

  function verifyPermission(menu: MenuEnum): boolean {
    const keySubject = convertMenuToSubjectKey(menu);
    const subject = SubjectConstants[keySubject];
    return userHasReadPermission(subject) && (menu !== MenuEnum.LOGIN);
  }

  function convertMenuToSubjectKey(menu: MenuEnum): keyof typeof SubjectConstants {
    return menu.replace('-', '_').toLocaleUpperCase() as keyof typeof SubjectConstants;
  }

  function userHasReadPermission(subject: string): boolean {
    return ability.can(ConstantsEnum.READ, subject);
  }

  return (
    <Menu.ContentGeneratedMenu>
      {
        Object.values(MenuEnum)
          .filter((menu) => verifyPermission(menu))
          .map((menu) => (
            <Link
              key={menu}
              href={returnLink(menu)}
              onClick={() => handleClickMenu(menu)}
            >
              <ItemMenu
                menu={menu}
                selectedMenu={selectedMenu}
              />
            </Link>
          ))
      }
    </Menu.ContentGeneratedMenu>
  );
};

export default GenerateMenu;
