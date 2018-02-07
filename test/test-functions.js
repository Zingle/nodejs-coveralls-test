const expect = require("expect.js");
const {add, sub} = require("../functions");

describe("add", () => {
    it("should add numbers", () => {
        expect(add(3,4)).to.be(7);
    });
});

describe("sub", () => {
    it("should subtract numbers", () => {
        expect(sub(4,3)).to.be(1);
    });
});
