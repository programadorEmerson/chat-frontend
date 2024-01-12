import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { RouteItem } from '@/routes/routes.constants';

type MenuItemProps = {
    open: boolean;
    opacity: number;
} & RouteItem;

const MenuItem = ({ open, opacity, menuName, path, Icon }: MenuItemProps) => {
  const currentPath = usePathname();
  const selected = currentPath.includes(path);

  return (
    <>
      <div
        className={`flex justify-self-start items-center px-4 py-[11px] bg-${selected ? 'slate-700' : 'slate-800'}`}
      >
        <Link
          href={path}
          className='flex justify-self-start items-center'
        >
          <Icon size={25} />
          {open && (
            <strong
              className={`ml-4 font-normal transition-all opacity-${opacity}`}
            >
              {menuName}
            </strong>
          )}
        </Link>
      </div>
      <hr
        className={`${open ? 'w-11/12' : 'w-full'} h-[1px] mx-auto bg-gray-500 border-0 rounded`}
      />
    </>
  );
};

export default MenuItem;
