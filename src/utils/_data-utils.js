const _data = {
  // Return Object's Key
  getKey(item) {
    const itemKey = Object.keys(item)
    return itemKey[0]
  },
  // Drop First Item in an Array
  dropFirstItem (array) {
    return array.slice(1)
  }
}

export default _data
