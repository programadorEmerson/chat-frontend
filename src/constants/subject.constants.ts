import { MenuEnum } from '@/enums/routes';

type SubjectType = { [key in keyof typeof MenuEnum]: string };

export const SubjectConstants: SubjectType = {
  DASHBOARD : 'FC0001',
  CLIENTS : 'FC0002',
  PROVIDERS : 'FC0003',
  PRODUCTS : 'FC0004',
  CASH_FLOW : 'FC0005',
  LOGIN : 'FC0006',
  FINANCIAL : 'FC0007',
};
