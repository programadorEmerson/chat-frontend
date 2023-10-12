/* eslint-disable max-len */
import React, { FC } from 'react';
import { HiMenu as InconMenu } from 'react-icons/hi';

type HeaderMenuProps = {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
};

const HeaderMenu: FC<HeaderMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className='flex w-full pb-2 pt-3'>
      <div className={`${!isMenuOpen && '-ml-8'} ${!isMenuOpen && 'opacity-0'} duration-200 w-9/12 flex items-center justify-center content-center`}>
        <span
          className={`left-24 group-hover:text-slate-800 ${!isMenuOpen && 'opacity-0 text-[0]'} duration-500 font-medium text-bluelogo
          text-md
          `}
        >
          {
            process.env.NEXT_PUBLIC_APP_NAME
          }
        </span>
      </div>
      <div className={`flex ${isMenuOpen ? 'w-3/12' : 'w-full'} justify-center content-center
        duration-500 ${!isMenuOpen && 'mr-1.5'}`}
      >
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="border hover:bg-gray-200 focus:outline-none rounded-lg p-1.5
            inline-flex items-center hover:border-gray-50 border-gray-400 text-gray-400
            hover:text-gray-600
            transition duration-500 ease-in-out"
        >
          <InconMenu size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeaderMenu;
