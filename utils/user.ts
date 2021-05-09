import User from 'interfaces/user';

export const sameUser = (loggedInUser: User, createdByUser: User): boolean => {
  return loggedInUser && createdByUser && `${loggedInUser.id}` === `${createdByUser.id}`;
};
