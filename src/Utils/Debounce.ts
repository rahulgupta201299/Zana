export function createDebounce(fn: any, delay: number) {
  let timerId: any;
  return function (...args: any[]) {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}