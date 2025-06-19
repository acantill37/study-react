import { WINNING_COMBINATIONS } from "../constants"


export const checkWinnerFrom = (boardToCheck) => {
    // Check if there is a winner
    // Iterate through the winning combinations
    for (const combo of WINNING_COMBINATIONS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // Return the winner (X or O)
      }
    }
    // if no winner found, return null
    return null
  }


  export const checkEndGame = (newBoard) => {
      return newBoard.every((Square) => Square !== null)
  }