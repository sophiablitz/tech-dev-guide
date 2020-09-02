const findLongestSubstring = require('./index').findLongestSubstring;
const assert = require('chai').assert;

describe("decompress", () => {
  it("handles base case", () => {
    let s = "abppplee";
    let d = ["able", "ale", "apple", "bale", "kangaroo"];
    let w = "apple";
    assert.equal(findLongestSubstring(s,d), w);
  })

  it("handles no solution case", () => {
    let s = "x";
    let d = ["able", "ale", "apple", "bale", "kangaroo"];
    let w = "";
    assert.equal(findLongestSubstring(s, d), w);
  })

  it("handles empty sequence", () => {
    let s = "";
    let d = ["able", "ale", "apple", "bale", "kangaroo"];
    let w = "";
    assert.equal(findLongestSubstring(s, d), w);
  })
  it("handles empty dictionary", () => {
    let s = "abppplee";
    let d = [];
    let w = "";
    assert.equal(findLongestSubstring(s, d), w);
  })

  it("handles exact match to sequence", () => {
    let s = "ale";
    let d = ["able", "ale", "apple", "bale", "kangaroo"];
    let w = "ale";
    assert.equal(findLongestSubstring(s, d), w);
  })
});
