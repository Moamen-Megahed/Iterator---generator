class NumberRangeIterator implements Iterator<number> {
  private current: number;
  private limit: number;
  private increment: number;

  constructor(start: number, end: number, step: number) {
    this.current = start;
    this.limit = end;
    this.increment = step;
  }

  public next(): IteratorResult<number> {
    if (this.current < this.limit) {
      const value = this.current;
      this.current += this.increment;
      return { value, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }
}

export function createNumberRangeIterator(
  start: number,
  end: number,
  step: number
): Iterable<number> {
  return {
    [Symbol.iterator]: () => new NumberRangeIterator(start, end, step),
  };
}
