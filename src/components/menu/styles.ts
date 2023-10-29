
import sw from 'tailwind-styled-components';

type StyledContainerProps = { statusMenu: 'show' | 'hide' }

const Container = sw.section<StyledContainerProps>`
    animate-fadeIn
    bg-center
    bg-cover
    bg-gray-500
    content-center 
    duration-1000
    flex
    h-screen
    justify-center
    w-screen
    bg-[url("/assets/background-image.png")]
    ${({ statusMenu }) => statusMenu === 'show'
    ? 'opacity-1 show'
    : 'opacity-0 hide'
}
`;

const ContentItem = sw.section<StyledContainerProps>`
    absolute
    backdrop-blur-sm
    bg-opacity-80
    bg-white
    drop-shadow-md
    duration-300
    h-full
    overflow-hidden
    ${({ statusMenu }) => statusMenu === 'hide'
    ? 'w-14'
    : 'w-52'}
`;

const HorizontalLine = sw.hr`
    border-gray-300
    border-t-1
    mt-[0.7rem]
`;

const ContentLayout = sw.main<StyledContainerProps>`
    duration-300
    flex
    flex-col
    w-full
    ${({ statusMenu }) => statusMenu === 'hide'
    ? 'ml-[57px]'
    : 'ml-[57px] sm:ml-[57px] md:ml-[57px] lg:ml-52 xl:ml-52'}
`;

const LayoutMenu = sw.section`
    drop-shadow-2xl
    flex
    max-w-screen-xl
    relative
    rounded-md
    w-full
`;

const ContentAppBar = sw.header`
    bg-gradient-to-l
    from-slate-200
    w-full
`;

const ContentMain = sw.main`
    bg-gray-100
    flex
    flex-col
    h-full
    p-3
`;

const ContentGeneratedMenu = sw.section`
    w-72
    absolute
`;

export const Menu = {
  Container,
  ContentItem,
  HorizontalLine,
  ContentLayout,
  LayoutMenu,
  ContentAppBar,
  ContentMain,
  ContentGeneratedMenu
};
