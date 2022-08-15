import { CHANGE_TEXT, CHANGE_STYLES, TABLE_RESIZE, APPLY_STYLE } from './types';

// Action creator заменят {type: 'TABLE_RESIZE', data} -на- actions.tableResize(data)
export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}

export function changeText(data) {
  return {
    type: CHANGE_TEXT,
    data
  }
}

export function changeStyles(data) {
  return {
    type: CHANGE_STYLES,
    data
  }
}

// value, ids
export function applyStyle(data) {
  return {
    type: APPLY_STYLE,
    data
  }
}