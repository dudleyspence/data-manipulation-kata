const politeRequests = require("../04_politeRequests");

describe("politeRequests", () => {
  it("Output is of type array", () => {

    expected = true
    actual = Array.isArray(politeRequests("Go to the bank %", ["Katherine", "Tim"], true))

    expect(actual).toBe(expected)

  });

  it("Output array contains a string for each of the names", () => {

    expected = 2
    actual = (politeRequests("Go to the bank %", ["Katherine", "Tim"], true)).length

    expect(actual).toBe(expected)

  });

  it("Output array contains a correct string when given one name and isPolite=false", () => {

    expected = ["Fetch me a drink Caz"]
    actual = politeRequests("Fetch me a drink %", ["Caz"], false)

    expect(actual).toEqual(expected)

  });

  it("Output array contains a correct string when given one name and isPolite=true", () => {

    expected = ["Fetch me a drink please Caz"]
    actual = politeRequests("Fetch me a drink %", ["Caz"], true)

    expect(actual).toEqual(expected)

  });

  it("Output array contains a correct strings when given multiple name and isPolite=true", () => {

    expected = ["Go to the bank please Katherine", "Go to the bank please Tim"]
    actual = politeRequests("Go to the bank %", ["Katherine", "Tim"], true)

    expect(actual).toEqual(expected)

  });

  it("Output array contains a correct strings when given multiple name and isPolite=false", () => {

    expected = ["Fetch me a drink Caz", "Fetch me a drink Zanna"]
    actual = politeRequests("Fetch me a drink %", ["Caz", "Zanna"], false)

    expect(actual).toEqual(expected)

  });



});
