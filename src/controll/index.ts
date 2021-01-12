class Calculate {
  private x: number
  private y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  sum () {
    return this.x * this.y
  }
}

export default Calculate

