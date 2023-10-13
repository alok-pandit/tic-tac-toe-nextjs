import { clsx, type ClassValue } from 'clsx'

import { rotationEnum } from '@/types'

export const clmx = (...inputs: ClassValue[]) => {
  return clsx(inputs)
}

export const getBorders = (i: number) => {
  switch (i % 3) {
    case 0:
      return clmx('border-l-0 border-b-0')
    case 1:
      return clmx('border-l-0 border-r-0 border-b-0')
    default:
      return clmx('border-r-0 border-b-0')
  }
}

export const getRotations = (r: number) => {
  switch (r) {
    case 45:
      return clmx('-rotate-45 w-52')
    case -45:
      return clmx('rotate-45 w-52')
    case 90:
      return clmx('rotate-90')
    default:
      return clmx('rotate-0')
  }
}

export const checkRotations = (rotation: number[]) => {
  const isWinningCombo = (combo: number[]) =>
    combo.every((num) => rotation.includes(num))

  if (isWinningCombo([0, 4, 8])) {
    return rotationEnum.NEG
  } else if (isWinningCombo([2, 4, 6])) {
    return rotationEnum.POS
  } else if (
    isWinningCombo([0, 3, 6]) ||
    isWinningCombo([1, 4, 7]) ||
    isWinningCombo([2, 5, 8])
  ) {
    return rotationEnum.STR
  } else {
    return rotationEnum.NIL
  }
}
