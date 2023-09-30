const l = console.log;

function main(points: number[][]) {
  const n = points.length;
  const tk = new Set();

  const dfs = (i) => {
    if (i + 1 >= n) {
      return;
    }

    const [a1, b1] = points[i];
    const [a2, b2] = points[i + 1];

    // l(calc(a1, a2), calc(b1, b2));
  };

  const calc = (a, b) => {
    return Math.abs(a - b);
  };

  for (let i = 0; i < n; i++) {
    tk.add(i);
    dfs(i);
  }

  return points;
}

const points = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];

const points2 = [
  [3, 12],
  [-2, 5],
  [-4, 1],
];

const r = main(points);

function minCostConnectPoints(points: number[][]): number {
  console.log(
    "🚀 : 1584.ts:46 (after function minCostConnectPoints(points: nu…)",
  );
  const n = points.length;
  const g: number[][] = Array(n)
    .fill(0)
    .map(() => Array(n).fill(0));
  const dist: number[] = Array(n).fill(1 << 30);
  const vis: boolean[] = Array(n).fill(false);

  for (let i = 0; i < n; ++i) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < n; ++j) {
      const [x2, y2] = points[j];
      const t = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      g[i][j] = t;
      g[j][i] = t;
    }
  }

  console.log("🚀 : 1584.ts:48: g=", g);
  /**
  * this graph presents the distance between each point
   * g= [
      [ 0, 4, 13, 7, 7 ], [ 4, 0, 9, 3, 7 ], [ 13, 9, 0, 10, 14 ], [ 7, 3, 10, 0, 4 ], [ 7, 7, 14, 4, 0 ]
    ]
  **/

  let ans = 0;
  dist[0] = 0;
  for (let i = 0; i < n; ++i) {
    let j = -1;
    console.log("dis", dist);
    console.log("vis", vis);
    console.log("ans", ans);
    for (let k = 0; k < n; ++k) {
      console.log("🚀 : 1584.ts:69: k=", k);
      console.log("🚀 : 1584.ts:70: dist[j]=", dist[j]);
      console.log("🚀 : 1584.ts:70: dist[k]=", dist[k]);
      console.log("🚀 : 1584.ts:70: vis[k] =", vis[k]);
      if (!vis[k] && (j === -1 || dist[k] < dist[j])) {
        j = k;
        console.log("🚀 : 1584.ts:74: j=", j);
      }
    }
    vis[j] = true;
    ans += dist[j];
    console.log("🚀 : 1584.ts:83: ans=", ans);
    for (let k = 0; k < n; ++k) {
      if (!vis[k]) {
        console.log("🚀 : 1584.ts:97: k=", k);
        console.log("🚀 : checker dist[k]=", dist[k]);
        console.log("🚀 : checker g[j][k]=", g[j][k]);
        dist[k] = Math.min(dist[k], g[j][k]);
      }
    }
  }

  console.log("lasts ans", ans);
  return ans;
}

const m = minCostConnectPoints(points);
