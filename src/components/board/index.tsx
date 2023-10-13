/* eslint-disable security/detect-object-injection */
'use client'

import { useAtom } from 'jotai'
import { useCallback } from 'react'

import { Hr, Square, WrappingGrid } from './styles'

import { boardState, gameOverAtom, round } from '@/atoms'
import { checkRotations } from '@/utils'

const Board = () => {
  const [board, setBoardState] = useAtom(boardState)
  const [currentPlayer, setCurrentPlayer] = useAtom(round)
  const [gameOver, setGameOver] = useAtom(gameOverAtom)

  const checkIfAnyoneWon = useCallback(
    (p: string) => {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]

      let hasWon = false

      for (const combination of winningCombinations) {
        const [index1, index2, index3] = combination
        const values = [
          board[index1].value,
          board[index2].value,
          board[index3].value
        ]
        const rotation: number[] = []
        if (
          values.every((value, i) => {
            if (value === p) {
              rotation.push(i)
              return true
            }
            return false
          })
        ) {
          hasWon = true

          for (const index of combination) {
            setBoardState((prevArr) => {
              prevArr[index].strike = true
              prevArr[index].rotate = checkRotations(rotation)
              return prevArr
            })
          }

          break
        }
      }

      if (hasWon) {
        setGameOver(true)
        alert(`Player ${p === 'X' ? '1' : '2'} has won!`)
      }
    },
    [board, setBoardState, setGameOver]
  )

  const onClickOfSquare = useCallback(
    (i: number) => {
      setBoardState((prevArr) => {
        prevArr[i].value = !currentPlayer ? 'X' : 'O'
        return prevArr
      })
      setCurrentPlayer((prev) => !prev)

      checkIfAnyoneWon(!currentPlayer ? 'X' : 'O')
    },
    [checkIfAnyoneWon, currentPlayer, setBoardState, setCurrentPlayer]
  )

  return (
    <>
      <h1>{currentPlayer ? `Player 2's Turn` : `Player 1's Turn`}</h1>
      <WrappingGrid>
        {board.map((v, i) => {
          return (
            <div key={i}>
              <Square
                disabled={v.value != 'A' || gameOver}
                strike={v.strike}
                borders={i}
                onClick={() => {
                  onClickOfSquare(i)
                }}
              >
                {v.value === 'A' ? '' : v.value}
                {v.strike ? <Hr rotations={v.rotate} /> : null}
              </Square>
            </div>
          )
        })}
      </WrappingGrid>
    </>
  )
}

export default Board
