import { readFileToArray } from "./utils/readFileToArray";


const findIncreasedDepth = async () => {
  const depthNumbers = readFileToArray();
  let increasedCount = 0;

  depthNumbers.map((value, index) => {
    const previousValue = Number(depthNumbers[index - 1]);
    const currentValue = Number(value);

    if (currentValue > previousValue) {
      increasedCount++;
    }

    return increasedCount;
  });

  console.log(increasedCount);
};

findIncreasedDepth();
