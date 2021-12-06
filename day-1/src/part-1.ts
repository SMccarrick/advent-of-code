import fs from "fs";

const readFileToArray = async (
  pathToFile = "/Users/smccarrick/projects/advent-of-code/advent-of-code/day-1/data.txt"
) => {
  fs.readFile(pathToFile, "utf8", (error, data) => {
    if (error) {
      console.error(error);
      return;
    }

    const depthNumbers = data.split("\n");
    let increasedCount = 0;

    depthNumbers.map((value, index) => {
      const previousValue = Number(
        depthNumbers[index - 1]
      );
      const currentValue = Number(value);

      if (currentValue > previousValue) {
        increasedCount++;
      }

      return increasedCount;
    });

    console.log(increasedCount);
  });
};

readFileToArray();
