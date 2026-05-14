/**
 * 与 index.html 中 escapeHtml 实现保持一致；修改时请同步两处。
 */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL:', msg);
    process.exit(1);
  }
}

assert(
  escapeHtml('<img src=x onerror=1>') === '&lt;img src=x onerror=1&gt;',
  'angle brackets escaped'
);
assert(escapeHtml('a&b') === 'a&amp;b', 'ampersand');
assert(escapeHtml('"\'') === '&quot;&#39;', 'quotes');
assert(escapeHtml('') === '', 'empty string');

console.log('escape-html tests ok');
