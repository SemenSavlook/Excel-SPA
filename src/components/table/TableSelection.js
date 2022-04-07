export class TableSelection {
  static className = 'selected';

  constructor() {
    this.group = [];
  }

  // Инстанс класса DOM
  select($el) {
    this.clear();
    this.group.push($el);
    $el.addClass(TableSelection.className);
  }

  clear() {
    this.group.forEach(($el) => $el.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup() {

  }
}
