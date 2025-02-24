import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';
import dotenv from 'dotenv';

dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET_KEY || 'xpx';

interface TokenPayload {
  sub: {
    user_id: string;
    firstName: string;
    pusher_channel: string;
  };
  iat: number;
  exp: number;
}

export const TokenService = {
  create: (userId: string, firstName: string): string => {
    const payload: TokenPayload = {
      sub: {
        user_id: userId,
        firstName: firstName.toUpperCase(),
        pusher_channel: `${firstName.toUpperCase()}_${userId}`
      },
      iat: dayjs().unix(),
      exp: dayjs().add(3, 'month').endOf('month').unix() // Expira en 3 meses al final del mes
    };

    return jwt.sign(payload, TOKEN_SECRET);
  },

};
