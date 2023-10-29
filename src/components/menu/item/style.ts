import sw from 'tailwind-styled-components';

type ItemProps = {
    statusMenu: 'selected' | 'unselected';
};

const Container = sw.section<ItemProps>`
    bg-slate-100
    drop-shadow-md
    duration-300
    flex h-8
    hover:bg-blue-50
    hover:cursor-pointer
    mt-1 group
    ${({ statusMenu }) => statusMenu === 'selected'
    ? 'bg-blue-50 drop-shadow-md'
    : 'bg-slate-100'}
`;

const ContainerIcon = sw.section<ItemProps>`
    -ml-1
    flex
    justify-center
    pt-1
    w-16

    &:nth-child(1) {
        group-hover:text-bluelogo
        duration-1000
        ${({ statusMenu }) => statusMenu === 'selected' ? 'text-bluelogo' : 'text-slate-700'}
    }
`;

const Check = sw.span<ItemProps>`
    duration-500
    font-medium
    text-sm
    ${({ statusMenu }) => statusMenu === 'selected'
    ? 'text-bluelogo ml-3' : 'text-transparent'} 
`;

const Name = sw.span<ItemProps>`
    duration-500
    font-medium text-sm
    ${({ statusMenu }) => statusMenu === 'selected' ? 'text-bluelogo ml-2' : 'text-slate-700'}
`;

const ArrowLeft = sw.span<ItemProps>`
    duration-500
    font-medium
    group-hover:ml-2
    group-hover:text-slate-700
    ml-0
    text-sm
    text-transparent
    ${({ statusMenu }) => statusMenu === 'selected' ? 'block' : 'hiden'}
`;

const ItemInfo = sw.section<ItemProps>`
    w-52
    pt-1.5 duration-100
    ${({ statusMenu }) => statusMenu === 'selected' ? 'text-slate-700' : 'text-transparent'}
`;

const Item = {
  Container,
  ContainerIcon,
  Check,
  Name,
  ArrowLeft,
  ItemInfo,
};

export { Item };
