export const addZeroToNumbers = (number: number) => {
  return number < 10 ? `0${number}` : number;
};