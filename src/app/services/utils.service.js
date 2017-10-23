export class Utils {
  constructor() {

  }
  /* eslint-disable */
  debounce(func, wait, immediate) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  throttle(callback, wait, context = this) {
    let timeout = null;
    let callbackArgs = null;

    const later = () => {
      callback.apply(context, callbackArgs);
      timeout = null
    };

    return function () {
      if (!timeout) {
        callbackArgs = arguments;
        timeout = setTimeout(later, wait);
      }
    }
  }
  /* eslint-enable */
}
