const { log } = console;

function solution(numbers, target) {
	const bfs = (idx, sum) => {
		if (numbers.length === idx) return sum === target ? 1 : 0;
		return bfs(idx + 1, sum + numbers[idx]) + bfs(idx + 1, sum - numbers[idx]);
	}

	return bfs(0, 0);
}


const numbers = [1,1,1,1,1];
const target = 3;

const r = solution(numbers, target);

log(r)




