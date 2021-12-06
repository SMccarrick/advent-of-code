import fs from "fs";

export const readFileToArray = () => {
  const data = fs.readFileSync(
    "/Users/smccarrick/projects/advent-of-code/advent-of-code/day-1/data.txt",
    "utf8"
  );
  return data.split("\n");
};
