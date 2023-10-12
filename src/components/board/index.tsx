/* eslint-disable security/detect-object-injection */
'use client'

import { useAtom } from 'jotai'
import { useCallback } from 'react'

import { Hr, Square, WrappingGrid } from './styles'

import { boardState, gameOverAtom, round } from '@/atoms'
import { rotationEnum } from '@/types'

const Board = () => {
  const [board, setBoardState] = useAtom(boardState)
  const [currentPlayer, setCurrentPlayer] = useAtom(round)
  const [gameOver, setGameOver] = useAtom(gameOverAtom)

  const checkIfAnyoneWon = useCallback(
    (p: string) => {
      if (
        board[0].value === p &&
        board[1].value === p &&
        board[2].value === p
      ) {
        setGameOver(true)
        setBoardState((prevArr) => {
          prevArr[0].strike = true

          prevArr[1].strike = true

          prevArr[2].strike = true

          return prevArr
        })
        alert(`Player ${p === 'X' ? '1' : '2'} has won!`)
      } else if (
        board[3].value === p &&
        board[4].value === p &&
        board[5].value === p
      ) {
        setGameOver(true)
        setBoardState((prevArr) => {
          prevArr[3].strike = true

          prevArr[4].strike = true

          prevArr[5].strike = true

          return prevArr
        })
        alert(`Player ${p === 'X' ? '1' : '2'} has won!`)
      } else if (
        board[6].value === p &&
        board[7].value === p &&
        board[8].value === p
      ) {
        setGameOver(true)
        setBoardState((prevArr) => {
          prevArr[6].strike = true

          prevArr[7].strike = true

          prevArr[8].strike = true

          return prevArr
        })
        alert(`Player ${p === 'X' ? '1' : '2'} has won!`)
      } else if (
        board[0].value === p &&
        board[4].value === p &&
        board[8].value === p
      ) {
        setGameOver(true)
        setBoardState((prevArr) => {
          prevArr[0].strike = true

          prevArr[0].rotate = rotationEnum.NEG

          prevArr[4].strike = true

          prevArr[4].rotate = rotationEnum.NEG

          prevArr[8].strike = true

          prevArr[8].rotate = rotationEnum.NEG

          return prevArr
        })
        alert(`Player ${p === 'X' ? '1' : '2'} has won!`)
      } else if (
        board[2].value === p &&
        board[4].value === p &&
        board[6].value === p
      ) {
        setGameOver(true)
        setBoardState((prevArr) => {
          prevArr[2].strike = true

          prevArr[2].rotate = rotationEnum.POS

          prevArr[4].strike = true

          prevArr[4].rotate = rotationEnum.POS

          prevArr[6].strike = true

          prevArr[6].rotate = rotationEnum.POS

          return prevArr
        })
        alert(`Player ${p === 'X' ? '1' : '2'} has won!`)
      } else if (
        board[0].value === p &&
        board[3].value === p &&
        board[6].value === p
      ) {
        setGameOver(true)
        setBoardState((prevArr) => {
          prevArr[0].strike = true

          prevArr[0].rotate = rotationEnum.STR

          prevArr[3].strike = true

          prevArr[3].rotate = rotationEnum.STR

          prevArr[6].strike = true

          prevArr[6].rotate = rotationEnum.STR

          return prevArr
        })
        alert(`Player ${p === 'X' ? '1' : '2'} has won!`)
      } else if (
        board[1].value === p &&
        board[4].value === p &&
        board[7].value === p
      ) {
        setGameOver(true)
        setBoardState((prevArr) => {
          prevArr[1].strike = true

          prevArr[1].rotate = rotationEnum.STR

          prevArr[4].strike = true

          prevArr[4].rotate = rotationEnum.STR

          prevArr[7].strike = true

          prevArr[7].rotate = rotationEnum.STR

          return prevArr
        })
        alert(`Player ${p === 'X' ? '1' : '2'} has won!`)
      } else if (
        board[2].value === p &&
        board[5].value === p &&
        board[8].value === p
      ) {
        setGameOver(true)
        setBoardState((prevArr) => {
          prevArr[2].strike = true

          prevArr[2].rotate = rotationEnum.STR

          prevArr[5].strike = true

          prevArr[5].rotate = rotationEnum.STR

          prevArr[8].strike = true

          prevArr[8].rotate = rotationEnum.STR

          return prevArr
        })
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
