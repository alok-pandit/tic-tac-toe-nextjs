import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const clmx = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getBorders = (i: number) => {
  switch (i % 3) {
    case 0:
      return clmx(
        'border-l-0 border-b-0',
        `${i === 0 || i === 1 || i === 2 ? 'border-t-0' : null}`
      )
    case 1:
      return clmx(
        'border-l-0 border-r-0 border-b-0',
        `${i === 0 || i === 1 || i === 2 ? 'border-t-0' : null}`
      )
    default:
      return clmx(
        'border-r-0 border-b-0',
        `${i === 0 || i === 1 || i === 2 ? 'border-t-0' : null}`
      )
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
