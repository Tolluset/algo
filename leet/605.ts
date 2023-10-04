function _canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) {
    return true;
  }

  if (flowerbed[0] === 0) {
    return true;
  }

  const res = flowerbed.reduce(
    (acc, cur) => {
      console.log("🚀 : 605.ts:3: acc=", acc);
      return cur === 0 && acc.prev
        ? {
            l: acc.l + 1,
            prev: true,
            max: acc.l + 1 > acc.max ? acc.l + 1 : acc.max,
          }
        : cur === 0 && !acc.prev
        ? { ...acc, l: 1, prev: true }
        : { ...acc, prev: false };
    },
    { l: 0, prev: false, max: 0 },
  );

  return n * 2 + 1 <= res.max ? true : false;
}

// ㅇㅅㅇ...
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let cnt = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      cnt++;
    }
    console.log("🚀 : 605.ts:39: cnt=", cnt);

    if (cnt >= n) {
      return true;
    }
  }

  return false;
}

const flowerbed = [1, 0, 0, 0, 1];
const flowerbed2 = [1, 0, 1, 0, 1, 0, 1];
const flowerbed3 = [0, 0, 1, 0, 1];
const n = 1;

const r = canPlaceFlowers(flowerbed, n);
console.log("🚀 : 605.ts:13: r=", r);
