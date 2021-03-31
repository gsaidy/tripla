import CreatorFilter from 'enums/creatorFilter';
import User from 'interfaces/user';

export const getFilters = (createdBy: CreatorFilter, user: User, name?: string): unknown => {
  if (name) {
    return withNameFilter(createdBy, user, name);
  }
  return withoutNameFilter(createdBy, user);
};

const withNameFilter = (createdBy: CreatorFilter, user: User, name: string) => {
  if (createdBy === CreatorFilter.Me) {
    return { _and: [{ userId: { _eq: `${user.id}` } }, { name: { _eq: name } }] };
  }
  if (createdBy === CreatorFilter.Other) {
    return {
      _or: [{ userId: { _neq: `${user.id}` } }, { userId: { _is_null: true } }],
      _and: { name: { _eq: name } },
    };
  }
  return { name: { _eq: name } };
};

const withoutNameFilter = (createdBy: CreatorFilter, user: User) => {
  if (createdBy === CreatorFilter.Me) {
    return { userId: { _eq: `${user.id}` } };
  }
  if (createdBy === CreatorFilter.Other) {
    return { _or: [{ userId: { _neq: `${user.id}` } }, { userId: { _is_null: true } }] };
  }
  return;
};
