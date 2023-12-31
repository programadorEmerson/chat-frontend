import React from 'react';
import { HiOutlineTemplate } from 'react-icons/hi';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MenuItemProps = {
    open: boolean;
    opacity: number;
    title: string;
};

const MenuItem = ({ open, opacity, title }: MenuItemProps) => {
  const path = usePathname();
  const selected = path.includes(title);

  return (
    <>
      <div
        className={`flex justify-self-start items-center px-4 py-3 bg-${selected ? 'slate-700' : 'slate-800'}`}
      >
        <Link
          href={`/${title.toLowerCase()}`}
          className='flex justify-self-start items-center'
        >
          <HiOutlineTemplate size={25} />
          {open && (
            <strong
              className={`ml-4 font-normal transition-all opacity-${opacity}`}
            >
              {title}
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
