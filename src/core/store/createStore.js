// Прослойка для взаимодействия с данными, подписывается на определенный тип событий и отправляет-уведомляет
export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({...initialState}, { type: '__INIT__'});
  let listeners = [];

  return {
    subscribe(fn) {
      listeners.push(fn);
      return {
        unsubscribe() {
          listeners = listeners.filter((l) => l !== fn);
        }
      };
    },

    dispatch(action) {
      state = rootReducer(state, action);
      listeners.forEach((listener) => listener(state));
    },

    getState() {
      // console.log(state);
      return JSON.parse(JSON.stringify(state));
    }
  };
}