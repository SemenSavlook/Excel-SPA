export function shouldResize(e) {
  return e.target.dataset.resize;
}

export function isCell(event) {
  return event.target.dataset.type === 'cell';
}
