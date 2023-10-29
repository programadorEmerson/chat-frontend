import { FaBell, FaCommentDots } from 'react-icons/fa';

import sw from 'tailwind-styled-components';

const AppBar = sw.header`
    bg-zinc-100
    content-center
    flex
    gap-3
    justify-end
    py-[0.8rem]
    w-full
`;

const Actions = sw.section`
    content-center
    flex
    gap-3
    justify-end
    lg:w-8/12
    sm:w-7/12
    w-10/12
    xl:w-9/12
`;

const UserInfo = sw.section`
    flex
    flex-wrap
    lg:w-4/12
    sm:w-5/12
    w-2/12
    xl:w-3/12
`;

const UserImage = sw.img`
    h-10
    rounded-full
    w-10
`;

const UserDetails = sw.section`
    content-center
    flex-col
    hidden
    justify-center
    ml-2
    sm:flex
    sm:w-10/12
    w-10/12
`;

const HorizontalLine = sw.hr`
    border-gray-300
    border-t-1
    -mt-[1px]
`;

const NotifyButton = sw.button`
    duration-300
    hover:text-bluelogo
`;

const CommentsIcon = sw(FaCommentDots)`
    text-2xl
`;

const NotifyIcon = sw(FaBell)`
    text-2xl
`;

const TextDetails = sw.span`
    text-gray-900
    text-sm
`;

export const Styled = {
  Actions,
  AppBar,
  CommentsIcon,
  HorizontalLine,
  NotifyButton,
  NotifyIcon,
  TextDetails,
  UserDetails,
  UserImage,
  UserInfo,
};

