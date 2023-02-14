function isSolved(board) {
    if (board[0][0]===1 && board[0][1]===1&&board[0][2]===1 ||
        board[1][0]===1 && board[1][1]===1&&board[1][2]===1 ||
        board[2][0]===1 && board[2][1]===1&&board[2][2]===1||
        board[0][0]===1 &&board[1][0]===1&&board[2][0]===1||
        board[0][1]===1 &&board[1][1]===1&&board[2][1]===1||
        board[0][2]===1 &&board[1][2]===1&&board[2][2]===1||
        board[0][0]===1 &&board[1][1]===1&&board[2][2]===1||
        board[0][2]===1 &&board[1][1]===1&&board[2][0]===1){
        return 1}
    if (board[0][0]===2 && board[0][1]===2&&board[0][2]===2 ||
        board[1][0]===2 && board[1][1]===2&&board[1][2]===2 ||
        board[2][0]===2 && board[2][1]===2&&board[2][2]===2||
        board[0][0]===2 &&board[1][0]===2&&board[2][0]===2||
        board[0][1]===2 &&board[1][1]===2&&board[2][1]===2||
        board[0][2]===2 &&board[1][2]===2&&board[2][2]===2||
        board[0][0]===2 &&board[1][1]===2&&board[2][2]===2||
        board[0][2]===2 &&board[1][1]===2&&board[2][0]===2){
        return 2}
    for (let i = 0; i <board.length ; i++) {
        if (board[i].find(t=>t===0)===0){return -1}

    }
    return 0

}