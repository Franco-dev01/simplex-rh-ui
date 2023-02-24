/**
 * Execute multiple event handler one after another
 * @param fns array of functions to run
 * @returns void
 */
function callAll(...fns: any[]) {
  return (...args: any) => fns.forEach((fn) => fn && fn(args));
}

export default callAll;
