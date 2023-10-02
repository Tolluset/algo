function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  return candies.map((c) => c + extraCandies >= max);
}

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

const r = kidsWithCandies(candies, extraCandies);
console.log("🚀 : 1431.ts:11: r=", r);
const max2 = candies.reduce((acc, cur) => (acc < cur ? cur : acc), 0);
