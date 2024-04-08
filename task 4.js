const currentAge = 25;
const maxAge = 80;
const amountPerDay = 100;

const remainingYears = maxAge - currentAge;
const amountPerDayYear = amountPerDay * 365;
const totalSnacksNeeded = remainingYears * amountPerDayYear;

console.log(`You will need ${totalSnacksNeeded} to last you until the ripe old age of ${maxAge}.`);
