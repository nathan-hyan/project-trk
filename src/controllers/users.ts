import { NextFunction, Request, Response } from 'express';
import User from '@models/users';
import createError from '@helpers/createError';

const createUser = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  const newUser = new User(req.body);

  newUser
    .save()
    .then((respose: any) => res.send({ respose }))
    .catch((err) => createError(next, err.message));
};

const deleteUser = (req: Request, res: Response) => {
  return res.status(200).json({ success: true, message: 'User deleted' });
};

const editUser = (req: Request, res: Response) => {
  return res.status(200).json({ success: true, message: 'User edited' });
};

const loginUser = (req: Request, res: Response) => {
  return res.status(200).json({ success: true, message: 'User logged in' });
};

const FUNCTIONS = {
  createUser,
  deleteUser,
  editUser,
  loginUser,
};

export default FUNCTIONS;
