import React, { FC } from 'react';
import { HiMenu as InconMenu } from 'react-icons/hi';

type HeaderMenuProps = {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
};

const HeaderMenu: FC<HeaderMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className='flex w-full py-2'>
      <div className={`${!isMenuOpen && '-ml-8'} flex w-8/12 justify-center
      content-center ${!isMenuOpen && 'opacity-0'} duration-200`}
      >
        <span className='flex pt-2 justify-center content-center text-center'>Menu</span>
      </div>
      <div className={`flex ${isMenuOpen ? 'w-4/12' : 'w-full'} justify-center content-center
      duration-500 ${!isMenuOpen && 'mr-0.5'}`}
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
