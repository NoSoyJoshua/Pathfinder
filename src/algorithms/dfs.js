import { findNeighbors } from './functions';

let newBoard, boardSeen, wholePath, pathToEnd;

export default function dfs(board, startXY, endXY, root) {

    if (root) {
        newBoard = [...board];
        wholePath = [];
        pathToEnd = [];

        boardSeen = [];
        for (let i = 0; i < 15; i++) {
            let row = [];
            for (let j = 0; j < 41; j++) {
                row.push(false);
            }
            boardSeen.push(row);
        }
    }

    let start = newBoard[startXY[1]][startXY[0]];
    let end = newBoard[endXY[1]][endXY[0]];

    // Terminate if the goal is reached
    if (startXY[0] === endXY[0] && startXY[1] === endXY[1]) {
        return [wholePath, pathToEnd, true];
    }

    // Visite current node
    boardSeen[start.y][start.x] = true;

    // Add current node to whole path
    wholePath.push(start);

    // Take unvisited neighbors in order
    let neighbors = findNeighbors(start.x, start.y, newBoard, boardSeen);
    for (let i = 0; i < neighbors.length; i++) {
        neighbors[i].parent = start;

        // Recurse and Terminate if the goal is reached
        if (dfs(newBoard, [neighbors[i].x, neighbors[i].y], [end.x, end.y], false)[2]) {

            // Backtrack
            if (root) {
                let currentNode = end;
                while (currentNode.x !== start.x || currentNode.y !== start.y) {
                    pathToEnd.push(currentNode);
                    currentNode = currentNode.parent;
                }

                if (currentNode.x !== start.x || currentNode.y !== start.y) {
                    pathToEnd.push(currentNode);
                }
            }

            return [wholePath, pathToEnd, true];
        }
    }

    return [wholePath, pathToEnd, false];
}