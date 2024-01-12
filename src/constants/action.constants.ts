type ActionType = {
  [
    key in 'READ' | 'DELETE' | 'UPDATE' | 'CREATE'
  ]: 'read' | 'delete' | 'update' | 'create';
};

export const ActionConstants: ActionType = {
  READ : 'read',
  DELETE : 'delete',
  UPDATE : 'update',
  CREATE : 'create',
};
