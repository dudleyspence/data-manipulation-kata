const stackPhotocopier = require("../02_stackPhotocopier");

describe("stackPhotocopier", () => {
  it("returns an array", () => {
    
    const actual = Array.isArray(stackPhotocopier([{
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine"
    }]))

    const expected = true

    expect(actual).toBe(expected)

  })


  it("returns an array that is different to the input array", () => {
    
    const input = [{
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine"
    }]
    const actual = stackPhotocopier(input)


    expect(actual).not.toBe(input)

  })

  it("the input is not mutated by the invocation of the function", () => {
    
    const input1 = [{
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine"
    }]
    const input2 = [{
      isCopy: false,
      title: "A guide to goat rearing",
      mainText: "Feed them",
      author: "Katherine"
    }]
    stackPhotocopier(input1)
  


    expect(input1).toEqual(input2)

  })



  it("the output array is a copy of the input with only the isCopy property changed to true for every object in the array", () => {
    
    const input = [
      {
        isCopy: false,
        title: "A guide to goat rearing",
        mainText: "Feed them",
        author: "Katherine",
      },
      {
        isCopy: false,
        title: "A lonely title",
      },
      {
        isCopy: false,
        title: "Hello world",
        subtitle: "A dev story",
      },
    ];

    const actual = stackPhotocopier(input)

    const expected = [
      {
        isCopy: true,
        title: "A guide to goat rearing",
        mainText: "Feed them",
        author: "Katherine",
      },
      {
        isCopy: true,
        title: "A lonely title",
      },
      {
        isCopy: true,
        title: "Hello world",
        subtitle: "A dev story",
      },
    ];
  
    expect(actual).toEqual(expected)

  })

  
});
