import { TABLE_RESIZE } from './types';

// Action creator заменят {type: 'TABLE_RESIZE', data} -на- actions.tableResize(data)
export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}