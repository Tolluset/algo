function gcdOfStrings(str1: string, str2: string): string {
  const gcd = (a: number, b: number) => (a % b === 0 ? b : gcd(b, a % b));
  const len = () => gcd(str1.length, str2.length);
  return str1 + str2 != str2 + str1 ? "" : str2.slice(0, len());
}

const [str1, str2] = ["ABCABC", "ABC"];
const [str3, str4] = ["ABABAB", "ABAB"];

const r = gcdOfStrings(str3, str4);

const shuould2 = "AB";

console.log("🚀 : 1071.ts:7: r=", r);
