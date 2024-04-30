export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const currentCount = weakMap.get(endpoint) || 0;
  if (currentCount >= 4) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, currentCount + 1);
}
