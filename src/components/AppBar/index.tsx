'use client';

import React, { useEffect, useState } from 'react';
import { HiMenu, HiOutlineX } from 'react-icons/hi';
import { HiOutlineBellAlert, HiOutlineBellSlash  } from 'react-icons/hi2';

import Link from 'next/link';

import { StyledContainerLimit } from '@/styles/shared';

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
      <StyledContentMenu status={open ? 'opened' : 'closed'}>
        <MenuItem
          open={open}
          opacity={opacity}
          title='Dashboard'
        />
        <MenuItem
          open={open}
          opacity={opacity}
          title='Clientes'
        />
        <MenuItem
          open={open}
          opacity={opacity}
          title='Fornecedores'
        />
      </StyledContentMenu>
      <StyledContainerLimit>
        <StyledContentAppAbar status={open ? 'opened' : 'closed'}>
          <div className='flex justify-center items-center'>
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
            <Link href="/">
              <strong className='ml-7 font-normal'>
                Eu Automatizei
              </strong>
            </Link>
          </div>
          <div className='flex items-center justify-center'>
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
                className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2
               border-white dark:border-gray-800 rounded-full"
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

          </div>
        </StyledContentAppAbar>
      </StyledContainerLimit>
    </StyledAppBarContainer>
  );
};

export default AppBarApplication;
