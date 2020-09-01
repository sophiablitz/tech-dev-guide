// See problem statement at https://techdevguide.withgoogle.com/paths/advanced/compress-decompression#code-challenge

/* The Challenge
 * In this exercise, you're going to decompress a compressed string.
 * Your input is a compressed string of the format number[string] and the 
 * decompressed output form should be the string written number times. 
 *
 * For example:
 *  input: 3[abc]4[ab]c
 *  output: abcabcabcababababc
 * 
 * Other rules
 *  Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa
 *  One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab
 *  Characters allowed as input include digits, small English letters and brackets [ ].
 *  Digits are only to represent amount of repetitions.
 *  Letters are just letters.
 *  Brackets are only part of syntax of writing repeated substring.
 *  Input is always valid, so no need to check its validity.
 *
 * Learning objectives
 * This question gives you the chance to practice with strings, recursion, algorithm, compilers, 
 * automata, and loops. It’s also an opportunity to work on coding with better efficiency.
*/

/**
 * decompress a string by repeating substrings and designated by the compression syntax.
 *
 * @param {string} input a compressed string of the format number[string] where the string may take the format of another input.
 * @returns {string} decompressed string
 */
module.exports.decompress = function decompress(input) {

  let multiplier = "";
  let value = "";

  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    const charCode = input.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      multiplier += char;
    }
    else if (char === '[') {
      // find matching closing bracket
      let closeBracketIndex = findClosingBracketIndex(input, i);
      value += decompress(input.substring(i + 1, closeBracketIndex)).repeat(+multiplier);
      i = closeBracketIndex;
      multiplier = "";
    }
    else if (charCode >= 97 && charCode <= 122) { // char is a lettter
      value += char;
    }
  }
  return value;
}


/**
 * Identify the index of a closing bracket that pairs with an opening bracket at a provided index of a string
 *
 * @param {string} input a valid string (see problem description)
 * @param {number} startingIndex index of the opening bracket in the string
 * @returns {number} index of the paired closing bracket
 */
function findClosingBracketIndex(input, startingIndex) {
  let stack = 1;
  let searchIndex = startingIndex + 1;
  while (stack > 0) {
    if (input.charAt(searchIndex) == ']') {
      stack--;
    }
    else if (input.charAt(searchIndex) == '[') {
      stack++;
    };
    searchIndex++;
  }
  return searchIndex - 1;
}
findClosingBracketIndex("2[3[a]b]c", 1);


// unused idea to create objects representing levels of stack.
function calculateOutput(inputStack) {
  let message;
  while (inputStack.length != 0) {
    let piece = inputStack.pop();
    message += decompress(piece.value).repeat(piece.multiplier);
  }
  return message;
}