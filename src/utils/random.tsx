export const randomNumberInclusive = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomBoolean = () => Math.random() >= 0.5;
