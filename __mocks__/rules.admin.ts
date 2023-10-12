import { ActionEnum, Rule, SubjectEnum } from '@/enums/featureCode.enum';

export const rulesFullClients:Rule[] = [
  {
    action : ActionEnum.READ,
    subject : SubjectEnum.CLIENTS
  },
  {
    action : ActionEnum.CREATE,
    subject : SubjectEnum.CLIENTS
  },
  {
    action : ActionEnum.UPDATE,
    subject : SubjectEnum.CLIENTS
  },
  {
    action : ActionEnum.DELETE,
    subject : SubjectEnum.CLIENTS
  }
];
