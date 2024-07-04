const reportTheGrandGoatRace = require("../03_reportTheGrandGoatRace");

describe("reportTheGrandGoatRace", () => {
  it("returns an object", () => {

    const input = "Bleaters: 00:30:00, Professor Dandelion: 01:00:00, Katherine Jr.: 00:45:00"
    
    const actual = typeof reportTheGrandGoatRace(input)

    const expected = 'object'

    expect(actual).toBe(expected)

    
  })

  it("object contains a key 'firstPlace' with the correct goat", () => {

    const input = "Bleaters: 00:30:00, Professor Dandelion: 01:00:00, Katherine Jr.: 00:45:00"
    
    const actual = reportTheGrandGoatRace(input).firstPlace

    const expected = "Bleaters"

    expect(actual).toBe(expected)

  })


  it("object contains a key 'goatWithLongestName' with the correct goat", () => {

    const input = "Bleaters: 00:30:00, Professor Dandelion: 01:00:00, Katherine Jr.: 00:45:00"
    
    const actual = reportTheGrandGoatRace(input).goatWithLongestName

    const expected = "Professor Dandelion"

    expect(actual).toBe(expected)

  })


  it("object contains a key 'averageTime' with the correct average time", () => {

    const input = "Bleaters: 00:30:00, Professor Dandelion: 01:00:00, Katherine Jr.: 00:45:00"
    
    const actual = reportTheGrandGoatRace(input).averageTime

    const expected = "00:45:00"

    expect(actual).toBe(expected)

  })

});
