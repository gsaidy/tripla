import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiRequest, NextApiResponse } from 'next';

import Session from 'interfaces/session';
import User from 'interfaces/user';

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt(token: unknown & { id?: number }, _: unknown, account: unknown & { id: number }) {
      return { ...token, id: token.id || account.id };
    },
    async session(session: Session, user: User) {
      return { ...session, user: { ...session.user, id: user.id } };
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
  NextAuth(req, res, options);
