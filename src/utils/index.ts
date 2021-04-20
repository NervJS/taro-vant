export function isDef<T>(val: T): val is NonNullable<T> {
  return val !== undefined && val !== null;
}
