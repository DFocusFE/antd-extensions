export function isNil(obj) {
  return obj === undefined || obj === null
}

export function isNumber(obj) {
  return Object.prototype.toString.call(obj) === '[object Number]'
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]'
}
