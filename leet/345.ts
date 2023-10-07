function reverseVowels(s: string): string {
  const vowels = "aeiouAEIOU".split("");
  const vIndex = [];

  const sArr = s.split("");

  if (s.length <= 1) return s;

  s.split("").forEach((c, i) => {
    if (vowels.includes(c)) {
      vIndex.push(i);
    }
  });

  while (vIndex.length > 1) {
    const tIdx1 = vIndex.shift();
    const tVal1 = sArr[tIdx1];
    const tIdx2 = vIndex.pop();
    const tVal2 = sArr[tIdx2];

    sArr[tIdx1] = tVal2;
    sArr[tIdx2] = tVal1;
  }

  return sArr.join("");
}

const s = "hello";
const s2 = "leetcode";

const r = reverseVowels(s2);

// Look awesome with regex
function reverseVowels2(s: string): string {
  const vowels = s.match(/[aeiou]/gi) || [];
  if (s.length <= 1) return s;

  return s.replace(/[aeiou]/gi, () => vowels.pop());
}

const r2 = reverseVowels2(s2);
console.log("🚀 : 345.ts:42: r2=", r2);
