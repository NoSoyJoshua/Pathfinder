let stack = [];
const boardSeen = [];
for (let i = 0; i < 13; i++) {
    let row = [];
    for (let j = 0; j < 34; j++) {
        row.push(false);
    }
    boardSeen.push(row);
}

let foundEnd = false;
export default function dfs(board, x, y) {

    const dx = [1,  0, -1, 0];
    const dy = [0, -1,  0, 1];
    // console.log(boardSeen);

    if (boardSeen[y][x]) return;
    stack.push([x, y]);
    boardSeen[y][x] = true;

    if (board[y][x].isEnd) foundEnd = true;

    if (foundEnd) return stack;
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        const condition = (ny >= 0 && ny < board.length) && (nx >= 0 && nx < board[0].length)

        if (condition && board[ny][nx].isWall === false && !boardSeen[ny][nx] && !foundEnd) {
            dfs(board, nx, ny);
        }
    }

    return stack;
}