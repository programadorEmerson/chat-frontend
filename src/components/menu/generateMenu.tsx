import React, { FC } from 'react';

import Link from 'next/link';

import { ConstantsEnum } from '@/enums/constants.enum';
import { MenuEnum } from '@/enums/routes';

import { useAbilities } from '@/hooks/useAbilities';

import { SubjectConstants } from '@/constants/subject.constants';

import Item from './item';

type GenerateMenuProps = {
    isMenuOpen: boolean;
    selectedMenu: MenuEnum;
    handleClickMenu: (menu: MenuEnum) => void;
    returnLink: (menu: MenuEnum) => string;
}

const GenerateMenu: FC<GenerateMenuProps> = ({ isMenuOpen, selectedMenu, returnLink, handleClickMenu }) => {
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
    <div className='w-72 absolute'>
      {
        Object.values(MenuEnum)
          .filter((menu) => verifyPermission(menu))
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

export default GenerateMenu;
