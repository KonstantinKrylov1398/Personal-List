export const parseDate = (a: any, sortProp: string) => {
  const A = a[sortProp].split(".");
  const date = new Date(Number(A[2]), Number(A[1]), Number(A[0]));
  const parse = Date.parse(String(date));
  return parse;
};
