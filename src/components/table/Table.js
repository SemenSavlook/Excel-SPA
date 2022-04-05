import { ExcelComponent } from '@core/ExcelComponent';
import { shouldResize } from './table.functions';
import { resizeHanlder } from './table.resize';
import { createTable } from './table.template';
// import { $ } from '@core/dom';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    });
  }

  toHTML() {
    return createTable(20);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHanlder(this.$root, event);
    }
  }

  // onClick() {
  //   console.log('click');
  // }

  // onMousemove() {

  // }

  // onMouseup() {

  // }
}
