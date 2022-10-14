export const validateData = (length: number, data: any[], stt = 1) => {
  let newData = [];
  if (data && data.length === length) newData = data;
  if (data.length > length) newData = data.slice(0, length);
  newData = data.concat(new Array(length - data.length).fill(0));
  const arr = newData.map((item, idx) => {
    if (stt === 1) {
      return [idx, item];
    }
    return [idx + 0.3, item];
  });
  console.log(arr);
  return arr;
};
