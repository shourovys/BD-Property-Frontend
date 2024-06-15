function createArray(number: number): number[] {
  return Array.from({ length: number }, (_, index) => index + 1)
}

export default createArray
