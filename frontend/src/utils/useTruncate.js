function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text
    }
  
    const truncated = text
      .substr(0, maxLength + 1)
      .substr(
        0,
        Math.min(text.substr(0, maxLength + 1).lastIndexOf(' '), maxLength),
      )
    return `${truncated}... `
  }
  
  export default truncateText