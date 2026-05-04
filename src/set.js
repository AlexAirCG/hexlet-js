//*
const set = (obj, key, value) => {
  if (key in obj) return obj

  obj[key] = value

  return obj
}
// */

/*
const set = (obj, key, value) => {
  obj[key] = value
  return {} // Возвращаем пустышку
}
// */

export default set
