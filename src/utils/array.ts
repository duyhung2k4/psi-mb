export const arrayTowWay = <T,>(arr: T[]): T[][] => {
  const arrayReturn: T[][] = [];

  for(let i = 0; i < arr.length; i+= 2) {
    arrayReturn.push([ arr[i], arr[i+1] ]);
  }
  return arrayReturn;
}