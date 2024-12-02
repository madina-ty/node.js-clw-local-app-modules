function searchWords(text, words) {
    return words.filter(word => text.includes(word));
}

module.exports = {searchWords};