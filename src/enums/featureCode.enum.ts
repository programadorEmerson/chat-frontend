import { MenuEnum } from './routes';

export interface Rule {
  subject: SubjectEnum;
  action: ActionEnum;
}

export enum ActionEnum {
  READ = 'read',
  DELETE = 'delete',
  UPDATE = 'update',
  CREATE = 'create',
}

export enum SubjectEnum {
  CLIENTS = MenuEnum.CLIENTS
}
