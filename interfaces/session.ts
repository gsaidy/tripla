import User from './user';

interface Session {
  user: User;
  accessToken?: string;
  expires: string;
}

export default Session;
