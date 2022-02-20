import { Middleware } from 'redux';

export const actionLog: Middleware = store => next => action => {
  next(action);
};
