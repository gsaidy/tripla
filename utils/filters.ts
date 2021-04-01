import { FilterValue } from 'antd/lib/table/interface';

import CreatorFilter from 'enums/creatorFilter';
import User from 'interfaces/user';

export const getWhereClause = (
  createdBy: CreatorFilter,
  user: User,
  filters: Record<string, FilterValue | null> = {}
): { _and: unknown } => {
  const args: { [key: string]: { _eq: string } }[] = [];
  Object.keys(filters).forEach((key) => {
    if (filters[key]) {
      args.push({ [key]: { _eq: filters[key]?.[0] as string } });
    }
  });
  return { _and: [...args, getUserClause(createdBy, user)] };
};

const getUserClause = (createdBy: CreatorFilter, user: User) => {
  if (createdBy === CreatorFilter.Me) {
    return { userId: { _eq: `${user.id}` } };
  }
  if (createdBy === CreatorFilter.Other) {
    return { _or: [{ userId: { _neq: `${user.id}` } }, { userId: { _is_null: true } }] };
  }
  return;
};
