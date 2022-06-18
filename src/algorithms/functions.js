export function findNeighbors(x, y, board, boardSeen) {
    let i = 0;

    const dx = [1,  0, -1, 0];
    const dy = [0, -1,  0, 1];

    let neighbors = [];
    for (i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        const condition = (ny >= 0 && ny < board.length) && (nx >= 0 && nx < board[0].length)

        if (condition && board[ny][nx].isWall === false && boardSeen[ny][nx] === false) {
            neighbors.push(board[ny][nx]);
        }
    }

    return neighbors;
}