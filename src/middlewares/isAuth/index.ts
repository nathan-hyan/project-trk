import createError from '@helpers/createError';
import { NextFunction, Request, Response } from 'express';
import { MESSAGES } from './constants';

export default (req: Request, res: Response, next: NextFunction) => {
  console.log(req.session);

  if (req.session.isAuth) {
    next();
  } else {
    createError(next, MESSAGES.AuthError, 403);
  }
};
