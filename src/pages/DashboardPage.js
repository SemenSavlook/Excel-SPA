import { $ } from '@core/dom';
import { Page } from '@core/Page';

export class DashboardPage extends Page {
  getRoot() {
    return $.create('div', 'db').html(`
    <div class="db">
      <div class="db__header">
        <h1>Excel dashboard</h1>
      </div>
      <div class="db__new">
        <div class="db__view">
          <a href="#" class="db__create">
            Новая <br>
            таблица
          </a>
        </div>
      </div>
      <div class="db__table db__view">
        <div class="db__list-header">
          <span>Название</span>
          <span>Дата открытия</span>
        </div>

        <ul class="db__list">
          <li class="db__record">
            <a href="#">Таблица №1</a>
            <strong>20.01.2022</strong>
          </li>
        </ul>

      </div>
    </div>
    `)
  }
}