import assert from 'node:assert/strict';
import test from 'node:test';

/**
 * 与 index.html 中 escapeHtml 实现保持一致（用于锁定 XSS 缓解逻辑）。
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

test('escapeHtml 转义尖括号与引号', () => {
  assert.equal(
    escapeHtml('<img src=x onerror=alert(1)>'),
    '&lt;img src=x onerror=alert(1)&gt;'
  );
  assert.equal(escapeHtml('a"b\'c'), 'a&quot;b&#39;c');
});

test('escapeHtml 先处理 & 避免双重实体被误解析', () => {
  assert.equal(escapeHtml('Tom & Jerry'), 'Tom &amp; Jerry');
});
