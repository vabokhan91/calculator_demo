describe("clear", function() {

    it("returns empty value", function() {
        assert.equal(new Calculator().clear(), '');
    });

});

describe("evaluate simple expression (5+3)", function() {

    it("evaluates simple expression and return result", function() {
        let calc = new Calculator();
        let input = "5+3";
        let expected = '8';
        assert.equal(calc.evaluate(input), expected);
    });

});

describe("evaluate complex expression(5÷5+3x10)", function() {

    it("evaluates complex expression and return result", function() {
        let calc = new Calculator();
        let input = "5÷5+3x10";
        let expected = '31';
        assert.equal(calc.evaluate(input), expected);
    });

});

describe("evaluate complex expression with decimals(5.5+10.3)", function() {

    it("evaluates complex expression and return result", function() {
        let calc = new Calculator();
        let input = "5.5+10.3";
        let expected = '15.8';
        assert.equal(calc.evaluate(input), expected);
    });

});

describe("evaluate expression when value has dot at the end(5.+10.)", function() {

    it("evaluates complex expression and return result", function() {
        let calc = new Calculator();
        let input = "5.+10.";
        let expected = '15';
        assert.equal(calc.evaluate(input), expected);
    });

});