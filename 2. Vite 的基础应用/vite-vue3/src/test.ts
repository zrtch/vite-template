import { A } from './type'

declare const enum Num{
  First = 0,
  Second = 1
}

export const a: A = {
  name:'vue',
  age: Num.First
}

export { A }