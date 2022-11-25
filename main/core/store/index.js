// 发布订阅
export const createStore = (initData = {}) => (() => {
  let store = initData;
  const observers = [];
  const getStore = () => store;

  const updateStore = (newValue) => {
    if (newValue !== store) {
      const oldValue = store;
      store = newValue;
      observers.forEach(async fn => await fn(newValue, oldValue));
    }
  }

  const subscribe = (fn) => {
    observers.push(fn);
  }
  return { getStore, updateStore, subscribe }
})()


