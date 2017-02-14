const words = function words(s) {
    var countWords = {};
    var words = s.split(/\s+/);
    for (var i = 0; i < words.length; i++) {
        countWords[words[i]] = (!countWords.hasOwnProperty(words[i]) ? 1 : countWords[words[i]] + 1);
    }
    return countWords;
};

module.exports = words;