import { arrayToPairs } from './hooks'

describe('arrayToPairs', () => {
  it('should put items in pairs', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arrayToPairs(arr)).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5]
    ])
  })
})
