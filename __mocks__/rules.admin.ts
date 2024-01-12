import { ActionConstants, Rule, SubjectConstants } from '@/constants/subject.constants';

export const rulesFullClients:Rule[] = [
  {
    action : ActionConstants.READ,
    subject : SubjectConstants.CLIENTS
  },
  {
    action : ActionConstants.CREATE,
    subject : SubjectConstants.CLIENTS
  },
  {
    action : ActionConstants.UPDATE,
    subject : SubjectConstants.CLIENTS
  },
  {
    action : ActionConstants.DELETE,
    subject : SubjectConstants.CLIENTS
  }
];
