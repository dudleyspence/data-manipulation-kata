const splitTheData = require("../05_splitTheData");

describe("splitTheData", () => {
  it("function returns an object", () => {
    const expected = 'object'
    const actual = typeof (splitTheData([{
      id: 1,
      name: "Katherine",
      faveGames: ["Minecraft", "Factorio"],
    }]))

    expect(actual).toEqual(expected)


  });


  it("Input is not mutated", () => {
    const input = [
      {
        id: 1,
        name: "Katherine",
        faveGames: ["Minecraft", "Factorio"],
      }]

      const input2 = [
        {
          id: 1,
          name: "Katherine",
          faveGames: ["Minecraft", "Factorio"],
        }]

    splitTheData(input)

    expect(input).toEqual(input2)

  });


  it("Input is not the same as the output", () => {

    const input = [
      {
        id: 1,
        name: "Katherine",
        faveGames: ["Minecraft", "Factorio"],
      }]

    const actual = splitTheData(input)

    expect(input).not.toBe(actual)

  });

  it("Output object has correct values for the people property", () => {

    const input = [
      {
        id: 1,
        name: "Katherine",
        faveGames: ["Minecraft", "Factorio"],
      },
      {
        id: 2,
        name: "Tim",
        faveGames: ["Bingo", "Minecraft"],
      },
    ];

    const actual = splitTheData(input).people
    const expected = [
      {
          id: 1,
          name: 'Katherine'
      },
      {
          id: 2,
          name: 'Tim'
      }]

    expect(actual).toEqual(expected)

  });

  it("Output object has correct values for the games property", () => {

    const input = [
      {
        id: 1,
        name: "Katherine",
        faveGames: ["Minecraft", "Factorio"],
      },
      {
        id: 2,
        name: "Tim",
        faveGames: ["Bingo", "Minecraft"],
      },
    ];

    const actual = splitTheData(input).games
    const expected = {
      1: 'Minecraft',
      2: 'Factorio',
      3: 'Bingo'
  }
    expect(actual).toEqual(expected)

  });


  it("Output object has correct values for the gamesPeopleLike property", () => {

    const input = [
      {
        id: 1,
        name: "Katherine",
        faveGames: ["Minecraft", "Factorio"],
      },
      {
        id: 2,
        name: "Tim",
        faveGames: ["Bingo", "Minecraft"],
      },
    ];

    const actual = splitTheData(input).gamesPeopleLike
    const expected = [
      [1,1], 
      [1,2], 
      [2,3], 
      [2,1]  
    ]

    expect(actual).toEqual(expected)

  });

  it("Output object has correct values for the games property", () => {

    const input = [
      {
        id: 1,
        name: "Katherine",
        faveGames: ["Minecraft", "Factorio"],
      },
      {
        id: 2,
        name: "Tim",
        faveGames: ["Bingo", "Minecraft"],
      },
    ];

    const actual = splitTheData(input).games
    const expected = {
      1: 'Minecraft',
      2: 'Factorio',
      3: 'Bingo'
  }
    expect(actual).toEqual(expected)

  });


  it("Output object has correct values for all properties", () => {

    const input = [
      {
        id: 1,
        name: "Katherine",
        faveGames: ["Minecraft", "Factorio"],
      },
      {
        id: 2,
        name: "Tim",
        faveGames: ["Bingo", "Minecraft"],
      },
    ];

    const actual = splitTheData(input)
    const expected = {
      people: [
          {
              id: 1,
              name: 'Katherine'
          },
          {
              id: 2,
              name: 'Tim'
          }
      ],
      games: {
          1: 'Minecraft',
          2: 'Factorio',
          3: 'Bingo'
      },
      gamesPeopleLike: [
        [1,1], 
        [1,2],
        [2,3], 
        [2,1]  
      ]
  }

    expect(actual).toEqual(expected)

  });



});





