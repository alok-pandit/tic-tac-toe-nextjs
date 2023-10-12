import { w } from 'windstitch'

import { clmx, getBorders, getRotations } from '@/utils'

const squareCls = clmx(
  'border-2 h-36 w-36 flex items-center justify-center flex-col',
  'bg-gradient-to-r from-blue-500 to-orange-300 text-2xl',
  'shadow-lg shadow-blue-500 cursor-pointer transition-all',
  'enabled:hover:shadow-2xl enabled:hover:scale-110 enabled:hover:border-none'
)

const hrCls = clmx(`bg-red-500 absolute z-50`, `w-36 h-1 border-none px-10`)

const wrappingGridCls = clmx('grid grid-cols-3')

export const Square = w.button(squareCls, {
  variants: {
    strike: (s: boolean) => (s ? 'text-red-600' : ''),
    borders: (i: number) =>
      `${i === 0 || i === 1 || i === 2 ? 'border-t-0' : null}
    ${getBorders(i)}`
  }
})

export const Hr = w.hr(hrCls, {
  variants: {
    rotations: (r: number) => getRotations(r)
  }
})

export const WrappingGrid = w.div(wrappingGridCls)
