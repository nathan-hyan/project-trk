import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import createError from '@helpers/createError';
import _User from '@interfaces/users';
import Users from '@models/Users';
import { MESSAGES } from './constants';

declare module 'express-session' {
  interface Session {
    isAuth: boolean;
  }
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const userExist = await Users.findOne({ DNI: req.body.DNI });

  if (!userExist) {
    bcrypt.hash(req.body.password, 8, (hashError, hash) => {
      if (!hashError) {
        const newUser = new Users({ ...req.body, password: hash });

        return newUser
          .save()
          .then((response: _User) => res.send({ success: true, response }))
          .catch((err: Error) => createError(next, err.message, 400));
      }

      return createError(next, hashError.message, 500);
    });
  } else {
    createError(next, MESSAGES.alreadyExist, 409);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { DNI, password } = req.body;

  const userExist = await Users.findOne({ DNI });

  if (!userExist) {
    return createError(next, MESSAGES.error, 401);
  }

  return bcrypt.compare(password, userExist.password, (error, response) => {
    if (!error && response) {
      req.session.isAuth = true;
      return res.status(200).json({ success: true });
    }
    return createError(next, MESSAGES.error, 401);
  });
};

const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
  req.session.destroy((err) => {
    if (err) createError(next, 'jajaj', 500);
    res.send({ success: true });
  });
};

const deleteUser = (req: Request, res: Response) => {
  Users.findOneAndDelete({ _id: req.params.id }).then(() =>
    res.status(200).json({ success: true, message: 'User deleted' }),
  );
};

const editUser = (req: Request, res: Response) => {
  Users.findOneAndUpdate({ _id: req.params.id }, req.body).then((response: Response) =>
    res.send({ success: true, response }),
  );
};

export default {
  createUser,
  deleteUser,
  editUser,
  loginUser,
  logoutUser,
};
