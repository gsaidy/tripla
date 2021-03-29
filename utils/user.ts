import User from 'interfaces/user';

export const sameUser = (loggedInUser: User, createdByUser: User) => {
  return loggedInUser && createdByUser && `${loggedInUser.id}` === `${createdByUser.id}`;
};
