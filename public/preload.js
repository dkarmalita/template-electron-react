// ref: https://electronjs.org/docs/api/process#event-loaded
const _setImmediate = setImmediate
const _clearImmediate = clearImmediate
  process.once('loaded', () => {
  global.setImmediate = _setImmediate
  global.clearImmediate = _clearImmediate
})
