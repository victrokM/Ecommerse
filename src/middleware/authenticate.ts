import { Request, Response, NextFunction } from 'express';
import jwt from 'jwt-simple';
import dayjs from 'dayjs';
import { responseCode, error } from '../helpers/request';
const User = require('../models/user')

interface JwtPayload {
  sub: {
    user_id: string;
    firstname: string;
  };
  exp: number;
}

interface AuthRequest extends Request {
  user?: any;
  userId?: string;
  firstname?: string;
  token?: string;
}

export const authMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    let user = null;

    if (!req.headers.authorization) {
      return res.status(responseCode.NOT_AUTHORIZED).send(error.authorizationHeaderDoesntExist);
    }

    const [bearer, token] = req.headers.authorization.split(' ');

    if (bearer !== 'Bearer' || !token) {
      return res.status(responseCode.NOT_AUTHORIZED).send({
        data: null,
        message: null,
        errors: ['No autorizado. La estructura del token recibido es inválida'],
        code: responseCode.NOT_AUTHORIZED
      });
    }

    const payload: JwtPayload = jwt.decode(token, process.env.TOKEN_SECRET_KEY as string);

    if (payload.exp <= dayjs().unix()) {
      return res.status(responseCode.NOT_AUTHORIZED).json(error.expiredToken);
    }

    user = await User.findOne({ where: { id: payload.sub.user_id, is_invited: false } });
     
    if (!user) {
      throw new Error('Invalid token');
    }

    req.user = user.dataValues;
    req.userId = payload.sub.user_id;
    req.token = token;

    next();
  } catch (e) {
    return res.status(responseCode.NOT_AUTHORIZED).send(error.invalidToken);
  }
};
