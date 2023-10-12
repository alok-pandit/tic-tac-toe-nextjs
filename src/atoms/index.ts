import { atom } from 'jotai'

import { rotationEnum } from '@/types'

export const BoardSquares = Array.from({ length: 9 }, () => {
  return { value: 'A', strike: false, rotate: rotationEnum.NIL }
})

export const boardState = atom(BoardSquares)

export const round = atom(false)

export const gameOverAtom = atom(false)
