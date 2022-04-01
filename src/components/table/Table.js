import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    });
  }

  toHTML() {
    return createTable(20);
  }

  onMousedown(event) {
    console.log(event.target);
  }

  // onClick() {
  //   console.log('click');
  // }

  // onMousemove() {

  // }

  // onMouseup() {

  // }
}
