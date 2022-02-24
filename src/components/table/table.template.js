const CODES = {
  A: 65,
  Z: 90
};

// function createCell() {
//   return `
//     <div class="cell" contenteditable>B2</div>
//   `;
// }

function createCol(col) {
  return `
    <div class="column">${col}</div>`;
}

function createRow(content) {
  debugger;
  return `
  <div class="row">
    <div class="row-info"></div>
    <div class="row-data">${content}</div>
  </div>
  `;
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.Z;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map((_, index) => {
        return String.fromCharCode(CODES.A + index);
      })
      .map((el) => {
        return createCol(el);
      })
      .join('');

  // console.log(cols);

  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow());
  }

  return rows.join();
}
