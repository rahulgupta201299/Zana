export function debounce(fn: any, delay = 1000) {
  let timerId: any;
  return function (...args: any[]) {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
