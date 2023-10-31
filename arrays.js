//Arrays

const newNewYearsResolution = ["job", "weightLoss", "becomeMilionear"];

let nextNewYearsResolution = newNewYearsResolution[0];

console.log(newNewYearsResolution[2]);

//More Arrays

const months = [
  "Jon",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "May",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
];

months[0] = "Jan";
months[4] = "May";
months[5] = "Jun";

months.push = "Dec";
console.log(months);

console.log(months.length);

months.pop();
console.log();

months.splice(6, 1);
console.log(months);
