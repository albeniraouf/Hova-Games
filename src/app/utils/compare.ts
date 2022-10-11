export const compare = <T>(a: T, b: T, desc?: boolean) => {
  if (a > b) return desc ? -1 : 1;
  if (a < b) return desc ? 1 : -1;
  return 0;
};

export const compareBy = <T>(a: T, b: T, key: keyof T, desc?: boolean) => {
  return compare(a[key], b[key], desc);
};
