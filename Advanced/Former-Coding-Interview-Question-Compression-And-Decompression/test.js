const decompress = require('./index').decompress;
const assert = require('chai').assert;

describe("decompress",()=>{
  it("handles simple strings", ()=>{
    assert.equal(decompress('asdf'),'asdf');
  })
  it("handles empty strings", () => {
    assert.equal(decompress(''), '');
  })
  it("handles nested compressed strings", () => {
    assert.equal(decompress('2[3[a]b]'),'aaabaaab');
  })
  it("handles serial compressions",()=>{
    assert.equal(decompress('3[abc]4[ab]c'), 'abcabcabcababababc');
  })
  it("handles multidigit multiplier strings", () => {
    assert.equal(decompress('20[a]3[b]'), 'aaaaaaaaaaaaaaaaaaaabbb');
  })
});
