const photocopier = require("../01_photocopier");

describe("photocopier", () => {
  it("returns an object", () => {
    
    const actual = typeof photocopier({
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine"
    })

    const expected = 'object'

    expect(actual).toBe(expected)

  })


  it("returns an object that is different to the input object", () => {
    
    const input = {
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine"
    }
    const actual = photocopier(input)


    expect(actual).not.toBe(input)

  })

  it("the input is not mutated by the invocation of the function", () => {
    
    const input1 = {
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine"
    }
    const input2 = {
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine"
    }
    photocopier(input1)
  


    expect(input1).toEqual(input2)

  })



  it("the output object is a copy of the input with only the isCopy property changed to true", () => {
    
    const input = {
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine"
    }

    const actual = photocopier(input)

    const expected = {
      isCopy: true,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine"
    }
  
    expect(actual).toEqual(expected)

  })

  
  
});
