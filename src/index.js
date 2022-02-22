const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    //split expression to separate letters
    let letters = [];
    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i + 10);
        letters.push(letter);
    }
    console.log(letters);

    //upgrade MorseTable
    let morseTable = {};
    for (key in MORSE_TABLE) {
        let newKey = '';
        for (symbol of key) {
            let digit = symbol === '-' ? '11' : '10'
            newKey = newKey + digit;
        }
        newKey = ('0000000000' + newKey).slice(-10);
        morseTable[newKey] = MORSE_TABLE[key]
    }
    morseTable['**********'] = ' ';

    // decode expression with upgraded MorseTable
    let result = '';
    for (let letter of letters) {
        result = result + morseTable[letter];
    }
    return result;
}

module.exports = {
    decode
}