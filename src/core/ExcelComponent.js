import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribe = options.subscribe || []; 
    this.store = options.store;
    this.unsubscribers = [];
    this.prepare();
  }

  // Настраиваем компонент до init
  prepare() {}

  // Возвраащает шаблон компонента
  toHTML() {
    return '';
  }

  // Уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }
  // Отправляет в store
  $dispatch(action) {
    this.store.dispatch(action);
  }

  // Приходят только изменения по полям, на котореы подписались
  storeChanged() {

  }

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  // Инициализация компонента
  // Добавляем DOM слушателей
  init() {
    this.initDOMListeners();
  }

  // Удаляем компонент
  // Чистим слушателей
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
