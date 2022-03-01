export default function debounceHelper(func, wait) {
  let debounceTimer

  return function () {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => func.apply(this, arguments), wait)
  }
}
