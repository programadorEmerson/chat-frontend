import { ActionConstants } from '@/constants/action.constants';
import { SubjectConstants } from '@/constants/subject.constants';

export interface Rule {
    subject: typeof SubjectConstants[keyof typeof SubjectConstants];
    action: typeof ActionConstants[keyof typeof ActionConstants];
  }
