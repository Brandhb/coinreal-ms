import { withIronSession } from 'next-iron-session';
import { NextApiRequest, NextApiResponse } from 'next';

export default function withSession(handler: (req: NextApiRequest, res: NextApiResponse) => void) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD as string || "D8Q#9K8s^%b@hT$e7z!p2gF*r5UcR#wA",
    cookieName: 'session',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  });
}
