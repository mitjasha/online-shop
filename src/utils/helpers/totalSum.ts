import { WineInfo } from "./interfaces";

const totalSolver = (
  dataIn: WineInfo[],
  cartIn: {
    [key: string]: number;
  },
): number => {
  return dataIn.reduce((prev, curr, index) => {
    return (
      prev + Number(curr.price.slice(1)) * cartIn[Object.keys(cartIn)[index]]
    );
  }, 0);
};
export default totalSolver;
