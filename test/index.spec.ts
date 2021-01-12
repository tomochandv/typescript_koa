import { expect } from 'chai'
import Caculate from '../src/controll'

describe('Places Class place Test', () => {
  it('index.ts sum Test', () => {
    const caculate = new Caculate(1, 2)
    expect(caculate.sum()).equal(2)
  })
})