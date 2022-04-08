import { ExcelComponent } from '@core/ExcelComponent';
import { isCell, shouldResize, matrix } from './table.functions';
import { resizeHanlder } from './table.resize';
import { createTable } from './table.template';
import { TableSelection } from './TableSelection';
import { $ } from '@core/dom';

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

  prepare() {
    this.selection = new TableSelection;
  }

  init() {
    super.init();

    const $cells = this.$root.find('[data-id="0:0"]');
    this.selection.select($cells);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHanlder(this.$root, event);
    } else if (isCell(event)) {
      const $target = $(event.target);
      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current)
            .map((id) => this.$root.find(`[data-id="${id}"]`));
        this.selection.selectGroup($cells);
      } else {
        this.selection.select($target);
      }
    }
  }
}
