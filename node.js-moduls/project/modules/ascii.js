function createASCIIBox(text) {
    const length = text.length;
    const topBottom = '*'.repeat(length + 4);
    return `${topBottom}\n* ${text} *\n${topBottom}`;
  }
  
  module.exports = { createASCIIBox };