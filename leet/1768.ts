function mergeAlternately(word1: string, word2: string): string {
  const w1 = word1.split("");
  const w2 = word2.split("");

  const l1 = w1.length;
  const l2 = w2.length;

  const max = Math.max(l1, l2);

  const res = [];

  for (let i = 0; i < max; i++) {
    res.push(w1[i]);
    res.push(w2[i]);
  }

  return res.join("");
}

const word1 = "abc";
const word2 = "pqrs";

const r = mergeAlternately(word1, word2);
console.log("🚀 : 1768.ts:11: r=", r);
