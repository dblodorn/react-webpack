const _react = {
  // Helper for formatting inline background images.
  bgImage(src) {
    const bgStyle = {
      backgroundImage: 'url(' + src + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
    return bgStyle
  }
}

export default _react
