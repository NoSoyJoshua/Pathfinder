import Queue from '../dataEstructures/queue';
import { findNeighbors } from './functions';

export default function bfs(board, startXY, endXY) {
    const boardDimentions = board.length * board[0].length;
    const queue = new Queue(boardDimentions);

    let boardSeen = [];
    for (let i = 0; i < board.length; i++) {
        let row = [];
        for (let j = 0; j < board[0].length; j++) {
            row.push(false);
        }
        boardSeen.push(row);
    }

    const wholePath = [];
    const pathToEnd = [];

    const newBoard = [...board];

    let start = newBoard[startXY[1]][startXY[0]];
    let end = newBoard[endXY[1]][endXY[0]]; 

    queue.add(start);

    while (queue.length() > 0) {
        let current = queue.pop();
        wholePath.push(current);

        if (current === end) {
            break;
        }

        let neighbors = findNeighbors(current.x, current.y, newBoard, boardSeen);
        neighbors.forEach(neighbor => {
            queue.add(neighbor);
            boardSeen[neighbor.y][neighbor.x] = true;
            neighbor.parent = current;
        });
    }

    let currentNode = end;
    while (currentNode.x !== start.x || currentNode.y !== start.y) {
        pathToEnd.push(currentNode);
        currentNode = currentNode.parent;
    }

    if (currentNode.x !== start.x || currentNode.y !== start.y) {
        pathToEnd.push(currentNode);
    }

    return [wholePath, pathToEnd];
}