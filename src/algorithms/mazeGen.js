import { cleanup } from "@testing-library/react";

let tempBoard, wholePath;

export default function mazeGen(board, boardDimX, boardDimY, root) {

    if (root) {
        tempBoard = board.map(row => row.map(cell => ({...cell, wall: false})));
        wholePath = [];

        for (let i = 0; i < board[0].length; i++) {
            tempBoard[0][i].wall = true;
            wholePath.push(tempBoard[0][i]);

            tempBoard[board.length - 1][i].wall = true;
            wholePath.push(tempBoard[board.length - 1][i]);
        }

        for (let i = 0; i < board.length; i++) {
            tempBoard[i][0].wall = true;
            wholePath.push(tempBoard[i][0]);

            tempBoard[i][board[0].length - 1].wall = true;
            wholePath.push(tempBoard[i][board[0].length - 1]);
        }

    }
    
    let dimX = boardDimX[1] - boardDimX[0] + 1;
    let dimY = boardDimY[1] - boardDimY[0] + 1;
    
    let orientation;
    if (dimX > dimY) {
        orientation = true;
    } else if (dimX < dimY) {
        orientation = false;
    } else {
        orientation = [true, false][Math.floor(Math.random() * 2)];
    }

    if (orientation && (dimX > 2 && dimY > 2)) {
        let x = Math.floor(Math.random() * (dimX - 2)) + boardDimX[0] + 1;
        let emptyNodes = []
        emptyNodes.push(Math.floor(Math.random() * dimY) + boardDimY[0]);

        if (tempBoard[boardDimY[0] - 1][x].wall !== true) {  
            emptyNodes.push(boardDimY[0]);
        }

        if (tempBoard[boardDimY[1] + 1][x].wall !== true) {
            emptyNodes.push(boardDimY[1]);
        }

        for (let i = boardDimY[0]; i <= boardDimY[1]; i++) {
            let notEmpty = true;
            for (let j = 0; j < emptyNodes.length; j++) {
                if (i === emptyNodes[j]) {
                    notEmpty = false;
                    break;
                }
            }
            if (notEmpty) {
                tempBoard[i][x].wall = !tempBoard[i][x].wall;
                wholePath.push(tempBoard[i][x]);
            }
        }

        let mainDims = [ [boardDimX[0], x - 1], [x + 1, boardDimX[1]] ];

        let crossDim = boardDimY;

        for (let i = 0; i < 2; i++) {
            mazeGen(board, mainDims[i], crossDim, false);
        }

    } else if (!orientation && (dimX > 2 && dimY > 2)) {
        let y = Math.floor(Math.random() * (dimY - 2)) + boardDimY[0] + 1;
        let emptyNodes = [];
        emptyNodes.push(Math.floor(Math.random() * dimX) + boardDimX[0]);

        if (tempBoard[y][boardDimX[0] - 1].wall !== true) {
            emptyNodes.push(boardDimX[0]);
        }

        if (tempBoard[y][boardDimX[1] + 1].wall !== true) {
            emptyNodes.push(boardDimX[1]);
        }

        for (let i = boardDimX[0]; i <= boardDimX[1]; i++) {
            let notEmpty = true;
            for (let j = 0; j < emptyNodes.length; j++) {
                if (i === emptyNodes[j]) {
                    notEmpty = false;
                    break;
                }
            }
            if (notEmpty) {
                tempBoard[y][i].wall = !tempBoard[y][i].wall;
                wholePath.push(tempBoard[y][i]);
            }
        }

        let mainDims = [ [boardDimY[0], y - 1], [y + 1, boardDimY[1]] ];

        let crossDim = boardDimX;

        for (let i = 0; i < 2; i++) {
            mazeGen(board, crossDim, mainDims[i], false);
        }
    }

    return wholePath;
}