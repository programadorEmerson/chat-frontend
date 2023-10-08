import { BsFillPeopleFill } from 'react-icons/bs';
import { FaPeopleCarry, FaCashRegister } from 'react-icons/fa';
import { GiBoxUnpacking } from 'react-icons/gi';
import { HiHome, HiLogin } from 'react-icons/hi';

type IconProps = {
  size: number;
  className?: string;
};

type MenuIconsType = {
  [key in MenuEnum]: React.ComponentType<IconProps>;
};

export type MenuTranslationType = {
  [key in MenuEnum]: string;
};

export enum MenuEnum {
  DASHBOARD = 'dashboard',
  CLIENTS = 'clients',
  PROVIDERS = 'providers',
  PRODUCTS = 'products',
  CASH_FLOW = 'cash-flow',
  LOGIN = 'login',
}

export const MenuTranslationEnum: MenuTranslationType = {
  [MenuEnum.DASHBOARD] : 'Dashboard',
  [MenuEnum.LOGIN] : 'Login',
  [MenuEnum.CLIENTS] : 'Clientes',
  [MenuEnum.PRODUCTS] : 'Produtos',
  [MenuEnum.PROVIDERS] : 'Fornecedores',
  [MenuEnum.CASH_FLOW] : 'Fluxo de Caixa',
};

export const MenuIcons: MenuIconsType = {
  [MenuEnum.DASHBOARD] : HiHome,
  [MenuEnum.LOGIN] : HiLogin,
  [MenuEnum.CLIENTS] : BsFillPeopleFill,
  [MenuEnum.PRODUCTS] : GiBoxUnpacking,
  [MenuEnum.PROVIDERS] : FaPeopleCarry,
  [MenuEnum.CASH_FLOW] : FaCashRegister,
};

export enum RoutesEnum {
  INITIAL = '/',
  LOGIN = `/${MenuEnum.LOGIN}`,
  DASHBOARD = `/${MenuEnum.DASHBOARD}`,
}

export enum RoutesRequestsEnum {
  LOGIN = 'users/signin',
  ME = 'users/me',
}
