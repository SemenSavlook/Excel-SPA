import { ExcelComponent } from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
      ...options
    });
  }

  toHTML() {
    return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    console.log(this.$root);
    const text = event.target.textContent.trim();
    this.emitter.emit('It is working', text);
  }
}
