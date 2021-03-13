import User from './user';

interface Trip {
  name: string;
  destination: string;
  template_id: number;
  user?: User;
}

export default Trip;
