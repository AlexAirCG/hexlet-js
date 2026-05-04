import set from '../src/set.js'
import { strict as assert } from 'node:assert'

const obj = {}

set(obj, 'key', 'value')
assert.strictEqual(obj.key, 'value', 'значение должно быть "value"')

set(obj, 'key', 'next value')
assert.notStrictEqual(
  obj.key,
  'next value',
  'значение НЕ должно было обновиться',
)
assert.strictEqual(obj.key, 'value', 'значение должно остаться старым')

assert.deepStrictEqual(obj, { key: 'value' })

console.log('Все тесты пройдены!')
