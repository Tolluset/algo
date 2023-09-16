const { log } = console;

function solution(n, comp) {
	let ans = 0;
	const track = new Set();

	const dfs = (cur) => {
		track.add(cur);

		comp[cur].map((cc, i) => {
			if(!track.has(i) && comp[cur][i] === 1) {
				dfs(i)
			}
		})
	}

	comp.map((com, i) => {
		if (!track.has(i)) {
			dfs(i);
			ans++;
		}
	})


	return ans;
}

const n = 3;
const comp = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];

const r = solution(n, comp);

log(r)

const should = 2;

log(r == should);


