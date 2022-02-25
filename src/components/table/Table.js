import { ExcelComponent } from '@core/ExcelComponent';
import { createTable } from './table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    });
  }

  toHTML() {
    return createTable(20);
  }

  onClick() {
    console.log('click');
  }

  onMousedown(event) {
    console.log(event.target);
  }

  onMousemove() {

  }

  onMouseup() {

  }
}
