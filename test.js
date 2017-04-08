'use strict'

const tap = require('tap')

const all = require('./iterables-all')

function test (name, testCase) {
  return tap.test(name, assert => {
    testCase(assert)
    return Promise.resolve()
  })
}

test('fails if falsey iterable given', assert => {
  assert.throws(TypeError, () => {
    all(null)
  })
  assert.throws(TypeError, () => {
    all(false)
  })
  assert.throws(TypeError, () => {
    all(0)
  })
})

test('fails if non-iterable given', assert => {
  assert.throws(TypeError, () => {
    all({[Symbol.iterable]: null})
  })
  assert.throws(TypeError, () => {
    all(true)
  })
  assert.throws(TypeError, () => {
    all(1)
  })
})

test('fails if non-function given as second arg', assert => {
  assert.throws(TypeError, () => {
    all([1], null)
  })
  assert.throws(TypeError, () => {
    all([], true)
  })
  assert.throws(TypeError, () => {
    all([], {})
  })
})

test('exits early', assert => {
  let ran = false
  all((function * () {
    yield 0
    ran = true
  })())

  assert.equal(ran, false)
})

test('returns true if all are true', assert => {
  const result = all((function * () {
    yield 1
    yield {}
    yield 'okay'
  })())

  assert.equal(result, true)
})

test('returns false if all are false', assert => {
  const result = all((function * () {
    yield 1
    yield {}
    yield 'okay'
    yield false
  })())

  assert.equal(result, false)
})
