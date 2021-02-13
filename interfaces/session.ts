interface Session {
  user: User;
  accessToken?: string;
  expires: string;
}

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

export default Session;
