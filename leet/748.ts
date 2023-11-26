/**
 * 1. key로 찾아야할 값들을 저장하고, value에 갯수를 해당 값들의 갯수를 저장하는 맵을 이용
 * 2. 단어들의 글자들을 확인하면서 존재하는 키면 값을 1씩 빼서 모든 키가 0이되는 경우 정답 중 하나로 저장
 * 3. 정답들 중 가장 글자 수가 적은 값을 찾기 위해 글자수가 적은 순으로 정렬하여 답을 찾음
 *
 * 시간복잡도: O(n^2)
 **/
function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const answers = [];
  const m = new Map<string, number>();

  licensePlate
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("")
    .forEach((c) => m.set(c, m.get(c) === undefined ? 1 : m.get(c) + 1));

  words.forEach((w) => {
    const temp = new Map(m);

    w.split("").forEach((t) =>
      temp.get(t) ? temp.set(t, temp.get(t) - 1) : undefined,
    );

    const isAnswer = Array.from(temp.values()).every((v) => v === 0);

    if (isAnswer) {
      answers.push(w);
    }
  });

  answers.sort((a, b) => a.length - b.length);

  return answers[0];
}

const r = shortestCompletingWord("1s3 PSt", [
  "step",
  "steps",
  "stripe",
  "stepple",
]);
console.debug("🚀 : 748.ts:5: r=", r);

const r2 = shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]);
console.debug("🚀 : 748.ts:37: r2=", r2);
