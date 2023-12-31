'use client';

import React, { useEffect, useState } from 'react';
import { HiMenu, HiOutlineX } from 'react-icons/hi';
import { HiOutlineBellAlert, HiOutlineBellSlash } from 'react-icons/hi2';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoPricetagsOutline } from 'react-icons/io5';
import { LuUserCircle2 } from 'react-icons/lu';
import { VscMail } from 'react-icons/vsc';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useUserContext } from '@/hooks/useUser';

import { StyledContainerLimit } from '@/styles/shared';

import { Routes } from '@/routes/routes.constants';

import MenuItem from './MenuItem';
import { StyledAppBarContainer, StyledContentAppAbar, StyledContentMenu } from './styles';

const notificatons = [
  {
    id : 1,
    message : 'Você tem uma nova mensagem',
    date : '2021-09-05 10:00:00',
    status : 'new',
  },
  {
    id : 2,
    message : 'Você tem uma nova mensagem',
    date : '2021-09-05 10:00:00',
    status : 'new',
  },
  {
    id : 3,
    message : 'Você tem uma nova mensagem',
    date : '2021-09-05 10:00:00',
    status : 'new',
  },
  {
    id : 4,
    message : 'Você tem uma nova mensagem',
    date : '2021-09-05 10:00:00',
    status : 'new',
  },
  {
    id : 5,
    message : 'Você tem uma nova mensagem',
    date : '2021-09-05 10:00:00',
    status : 'new',
  },
];

const AppBarApplication = () => {
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const currentPath = usePathname();

  const { user } = useUserContext();

  const showAsideMenu = Boolean(user && currentPath !== '/');

  function handleToggleMenu() {
    setOpen(!open);
  }

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpacity(1);
      }, 100);
      return;
    }
    setOpacity(0);
  }, [open]);

  return (
    <StyledAppBarContainer>
      <StyledContainerLimit>
        {showAsideMenu && (
          <div className="absolute">
            <StyledContentMenu
              status={open ? 'opened' : 'closed'}
              className='min-h-[calc(100vh-4rem)]'
            >
              {Routes
                .filter((item) => item.showInMenu)
                .sort(({ menuName : current }, { menuName : compare }) =>
                  current.localeCompare(compare)).map((route) => {
                  return (
                    <MenuItem
                      key={route.path}
                      {...route}
                      open={open}
                      opacity={opacity}
                    />
                  );
                })}
            </StyledContentMenu>
          </div>
        )}
        <StyledContentAppAbar className='px-4'
          status={open ? 'opened' : 'closed'}
        >
          <div className='flex justify-center items-center'>
            {showAsideMenu && (
              <button
                type="button"
                onClick={handleToggleMenu}
              >
                {
                  open ? (
                    <HiOutlineX size={25} />
                  ) : (
                    <HiMenu size={25} />
                  )
                }
              </button>
            )}
            <Link href="/">
              <strong className={`${showAsideMenu ? 'ml-7' : 'ml-0'} font-normal`}>
                Eu Automatizei
              </strong>
            </Link>
          </div>
          <div className='flex items-center justify-center'>
            {
              user ? (
                <>
                  <button
                    type="button"
                    onClick={handleToggleMenu}
                  >
                    {
                      notificatons.length ? (
                        <div className="relative">
                          <HiOutlineBellAlert size={25}/>
                          <span
                            className="-bottom-1 left-5 absolute  w-4 h-4 bg-transparent border-0
                            border-white dark:border-gray-800 rounded-full text-xs text-white text-center"
                          >
                            {notificatons.length}
                          </span>
                        </div>

                      ) : (
                        <HiOutlineBellSlash size={25} />
                      )
                    }
                  </button>
                  <div className="h-9 flex items-center">
                    <hr className="border-l border-gray-200 dark:border-gray-700 h-full mx-4" />
                  </div>
                  <div className="relative">
                    <img className="w-10 h-10 rounded-full"
                      src="https://avatars.githubusercontent.com/u/59292088?v=4"
                      alt=""
                    />
                    <span
                      className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white
                       dark:border-gray-800 rounded-full"
                    />
                  </div>
                  <div className="h-9 flex items-center">
                    <hr className="border-l border-gray-200 dark:border-gray-700 h-full mx-4" />
                  </div>
                  <div className='inline-flex flex-col'>
                    <span className='text-sm'>
                      Emerson Saturnino
                    </span>
                    <span className='text-sm'>
                      emerson@saturnino.com.br
                    </span>
                  </div>
                </>
              ): (
                <nav className='gap-4 flex py-2'>
                  <button type="button"
                    className='flex justify-center content-center items-center gap-1'
                  >
                    <IoInformationCircleOutline size={20} />
                    Sobre
                  </button>
                  <button type="button"
                    className='flex justify-center content-center items-center gap-1'
                  >
                    <IoPricetagsOutline size={18} />
                    Preço
                  </button>
                  <button type="button"
                    className='flex justify-center content-center items-center gap-1'
                  >
                    <VscMail size={18} />
                    Fale Conosco
                  </button>
                  <button type="button"
                    className='flex justify-center content-center items-center gap-1'
                  >
                    <LuUserCircle2 size={18} />
                    Login
                  </button>
                </nav>
              )
            }
          </div>
        </StyledContentAppAbar>
      </StyledContainerLimit>
    </StyledAppBarContainer>
  );
};

export default AppBarApplication;
