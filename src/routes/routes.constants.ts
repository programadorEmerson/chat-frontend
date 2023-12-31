import { IconType } from 'react-icons';
import { CgOptions } from 'react-icons/cg';
import { FaUserFriends, FaLuggageCart, FaRulerCombined, FaUsersCog   } from 'react-icons/fa';
import { FaUserLock, FaMoneyBillTrendUp, FaPeopleCarryBox } from 'react-icons/fa6';
import { GiTakeMyMoney, GiReceiveMoney  } from 'react-icons/gi';
import { GrCar } from 'react-icons/gr';
import { HiOutlineTemplate } from 'react-icons/hi';
import { IoBusinessOutline, IoPricetagsOutline  } from 'react-icons/io5';
import { LiaCashRegisterSolid } from 'react-icons/lia';
import { LuBellRing } from 'react-icons/lu';
import { MdLockPerson } from 'react-icons/md';
import { MdOutlineChecklistRtl } from 'react-icons/md';
import { MdOutlinePublishedWithChanges, MdSecurity } from 'react-icons/md';

export type RouteItem = {
    rule: string;
    subject: string;
    path: string;
    menuName: string;
    Icon: IconType;
    showInMenu: boolean;
    active: boolean;
};

export const Routes:RouteItem[] = [
  {
    rule : 'FC0001',
    subject : 'DASHBOARD',
    path : '/dashboard',
    menuName : 'Dashboard',
    Icon : HiOutlineTemplate,
    showInMenu : true,
    active : true,
  },
  {
    rule : 'FC0002',
    subject : 'CLIENTS',
    path : '/clients',
    menuName : 'Clientes',
    Icon : FaUserFriends,
    showInMenu : true,
    active : true,
  },
  {
    rule : 'FC0003',
    subject : 'PROVIDERS',
    path : '/providers',
    menuName : 'Fornecedores',
    Icon : FaPeopleCarryBox,
    showInMenu : true,
    active : true,
  },
  {
    rule : 'FC0004',
    subject : 'PRODUCTS',
    path : '/products',
    menuName : 'Produtos',
    Icon : FaLuggageCart,
    showInMenu : true,
    active : true,
  },
  {
    rule : 'FC0005',
    subject : 'BILLS_TO_PAY',
    path : '/bills-to-pay',
    menuName : 'Contas a pagar',
    Icon : GiTakeMyMoney,
    showInMenu : true,
    active : true,
  },
  {
    rule : 'FC0006',
    subject : 'LOGIN',
    path : '/login',
    menuName : 'Login',
    Icon : FaUserLock,
    showInMenu : false,
    active : false,
  },
  {
    rule : 'FC0007',
    subject : 'FINANCIAL',
    path : '/financial',
    menuName : 'Financeiro',
    Icon : FaMoneyBillTrendUp,
    showInMenu : true,
    active : true,
  },
  {
    rule : 'FC0008',
    subject : 'RULES',
    path : '/rules',
    menuName : 'Regras',
    Icon : MdLockPerson,
    showInMenu : false,
    active : false,
  },
  {
    rule : 'FC0009',
    subject : 'UNIT_MEASURE',
    path : '/unit-measure',
    menuName : 'Unidade de medida',
    Icon : FaRulerCombined,
    showInMenu : false,
    active : false,
  },
  {
    rule : 'FC0010',
    subject : 'CATEGORY',
    path : '/category',
    menuName : 'Categoria',
    Icon : CgOptions,
    showInMenu : false,
    active : false,
  },
  {
    rule : 'FC0011',
    subject : 'VEHICLES',
    path : '/vehicles',
    menuName : 'Veículos',
    Icon : GrCar,
    showInMenu : true,
    active : true,
  },
  {
    rule : 'FC0012',
    subject : 'SERVICE_ORDER',
    path : '/service-order',
    menuName : 'Ordem de serviço',
    Icon : MdOutlineChecklistRtl,
    showInMenu : true,
    active : true,
  },
  {
    rule : 'FC0013',
    subject : 'ASSOCIATE_COMPANY',
    path : '/associate-company',
    menuName : 'Associar empresa',
    Icon : MdOutlinePublishedWithChanges,
    showInMenu : false,
    active : false,
  },
  {
    rule : 'FC0014',
    subject : 'MANAGE_OWNER',
    path : '/manage-owner',
    menuName : 'Gerenciar proprietário',
    Icon : MdSecurity,
    showInMenu : false,
    active : false,
  },
  {
    rule : 'FC0015',
    subject : 'USERS',
    path : '/manage-users',
    menuName : 'Gerenciar usuários',
    Icon : FaUsersCog,
    showInMenu : true,
    active : true,
  },
  {
    rule : 'FC0016',
    subject : 'COMPANY',
    path : '/manage-company',
    menuName : 'Gerenciar empresa',
    Icon : IoBusinessOutline,
    showInMenu : false,
    active : false,
  },
  {
    rule : 'FC0017',
    subject : 'SALE',
    path : '/sale',
    menuName : 'Vendas',
    Icon : LiaCashRegisterSolid,
    showInMenu : true,
    active : true,
  },
  {
    rule : 'FC0018',
    subject : 'VISUALIZATION_COAST_PRICE',
    path : '/visualization-coast-price',
    menuName : 'Visualização de custo e preço',
    Icon : IoPricetagsOutline,
    showInMenu : false,
    active : false,
  },
  {
    rule : 'FC0019',
    subject : 'NOTIFICATION',
    path : '/notification',
    menuName : 'Notificações',
    Icon : LuBellRing,
    showInMenu : false,
    active : false,
  },
  {
    rule : 'FC0020',
    subject : 'BILLS_TO_RECEIVE',
    path : '/bills-to-receive',
    menuName : 'Contas a receber',
    Icon : GiReceiveMoney,
    showInMenu : true,
    active : true,
  }
];

