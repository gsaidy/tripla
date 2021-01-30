export const capitalize = (value: string): string =>
  `${value.charAt(0).toUpperCase()}${value.slice(1)}`;

export const generateRandomString = (): string => Math.random().toString(36).substring(7);
