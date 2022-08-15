import { defaultStyles } from '../assets/constants';
import { storage } from '../core/utils'

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {}, // {0:1: 'some-text'}
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles
}

const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ''
})

export const initialState = storage('excel-state') 
  ? normalize(storage('excel-state'))
  : defaultState;