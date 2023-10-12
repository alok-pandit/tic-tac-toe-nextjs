import { clsx, type ClassValue } from 'clsx'

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
