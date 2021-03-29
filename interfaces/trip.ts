import User from './user';

interface Trip {
  name: string;
  destination: string;
  templateId: number;
  user?: User;
}

export default Trip;
