import { resolve6 } from "dns";
import * as fs from "fs";
import * as path from "path";
import { argv0 } from "process";

// const submitPath = "./dev/stdin";
// const submitInput = fs.readFileSync(submitPath).toString().trim().split("\n");

const text = "./1011.txt";
const input = fs
  .readFileSync(path.resolve(__dirname, text))
  .toString()
  .trim()
  .split("\n");
const count = input[0];

for (let i = 1; i <= +count; i++) {
  const dest = +input[i].split(" ")[1] - 1;
  console.log("🚀 : 1011.ts:16: dest=", dest);
  let moved = 0;
  let cur = 0;

  while (dest >= moved) {
    
    if(cur + 1 + moved > dest) {
    cur++;
    moved += cur;
    console.log("🚀 : 1011.ts:22: moved=", moved);
    console.log("🚀 : 1011.ts:24: cur=", cur);
  }
}

console.log("in", input);



// 1
// 1
//
// 2
// 1 1
//
// 3
// 1 1 1
//
// 4
// 1 2 1
//
// 5
// 1 2 1 1
//
// 6
// 1 2 2 1
//
// 7
// 1 2 2 2 1
//
// 8
// 1 2 3 1 1
//
// 9
// 1 2 3 2 1
//
// 10
// 1 2 3 2 1 1 
//
// 11
// 1 2 3 2 2 1
//
// 12
// 1 2 3 3 2 1
//
// 13
// 1 2 3 3 2 1 1
//
//
// 20
// 1 2 3 4 4 3 2 1
//
//
// 4, 9 같은 제곱수에서 +1
