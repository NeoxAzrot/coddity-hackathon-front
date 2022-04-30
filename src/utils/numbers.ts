export const addZeroToNumbers = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

export const getRandomIntInclusive = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const addPlusToNumber = (value: number) => {
  if (value >= 0) {
    return `+${value}`;
  }

  return value;
};
