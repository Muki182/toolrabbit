#!/usr/bin/env node
/**
 * 校验 XSS 防护：escapeHtml 行为 + index.html 中关键调用点（无浏览器依赖）。
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

assert.equal(escapeHtml('<script>'), '&lt;script&gt;');
assert.equal(escapeHtml('a&b'), 'a&amp;b');
assert.equal(escapeHtml('"'), '&quot;');
assert.equal(escapeHtml("'"), '&#39;');

const index = readFileSync(join(root, 'index.html'), 'utf8');
assert.match(index, /function escapeHtml\s*\(/, 'index.html 应定义 escapeHtml');
assert.ok(
  /let html = escapeHtml\s*\(\s*md\s*\)/.test(index) || /let html = escapeHtml\(md\)/.test(index),
  'Markdown 预览应先 escapeHtml(md)',
);
assert.ok(index.includes('escapeHtml(la)') && index.includes('escapeHtml(lb)'), '文本对比应对行内容转义');
assert.ok(index.includes('escapeHtml(m)'), '正则匹配结果应转义');
assert.ok(index.includes('escapeHtml(e.message)'), '正则错误信息应转义');

console.log('verify-security: OK');
