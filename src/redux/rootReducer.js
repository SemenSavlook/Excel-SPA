import { CHANGE_TEXT, TABLE_RESIZE } from './types';

// Возвращает новое состояние
export function rootReducer(state, action) {
  let prevState;
  let field;
  console.log('Action: ', action);
  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === 'col' ? 'colState' : 'rowState';
      prevState = state[field] || {};
      prevState[action.data.id] = action.data.value;
      return { ...state, [field]: prevState};
    case CHANGE_TEXT:
      prevState = state['dataState'] || {};
      console.log(state.dataState);
      // console.log(action)
      // console.log(action.data.id);
      prevState[action.data.id] = action.data.value;
      return {...state, currentText: action.data.value, dataState: prevState}
    default: return state;
  }
}