export const validateData = (length: number, data: any[]) => {
  if (data && data.length === length) return data;
  if (data.length > length) return data.slice(0, length);
  return data.concat(new Array(length - data.length).fill(0));
};
