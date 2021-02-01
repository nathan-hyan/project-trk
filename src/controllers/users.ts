import { Request, Response } from 'express';

const createUser = (req: Request, res: Response) => {
  return res.status(200).json({ success: true, message: 'User created' });
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
