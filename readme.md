Instructions for this sprint can be found here: https://l2c.northcoders.com/courses/be/be-katas-week-1

QUESTION 1:

The photocopier function takes in a blueprint to photocopy, which will be a flat (un-nested) object that has a key of isCopy which is false, and at least one other property.

The function returns a copy of that object, with isCopy set to true.

This function needs to be pure, so in your tests you should check:

The copy that the function returns isn’t accidentally the same object as the blueprint that was passed in.
The original blueprint object is unchanged.
For example a blueprint could look like this:

const blueprint = {
  isCopy: false,
  title: "A guide to goat rearing",
  mainText: "Feed them",
  author: "Katherine",
};
photocopier(blueprint) should return

{
    isCopy: true,
    title: "A guide to goat rearing",
    mainText: "Feed them",
    author: "Katherine"
}





QUESTION 2:

Time to upgrade our photocopier, it now takes in a pile (an array) of blueprints and must make copies of them (with the isCopy property set to true).

As before though, this is a pure function so we must make sure:

that none of the returned objects are the same as the ones passed in.
the original blueprints are not altered/mutated.
const blueprints = [
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
photocopier(blueprints) should return:

[
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



QUESTION 3:




Every year there is a Grand Goat Race, which runs with a minimum of 2 participating goats. The fastest goat wins but there is a consolation prize for the goat with the longest name. You recieve the data about participating goats in the following format:

const goatInfo = "Bleaters: 00:30:00, Professor Dandelion: 01:00:00, Katherine Jr.: 00:45:00"`
Where we have the name of the goat, followed by their race time in hours, minutes and seconds.

It's your job to write a function, reportTheGrandGoatRace, which takes in this information, and returns an object summarising the outcome of the race in this form:

{
    firstPlace: "Bleaters",
    goatWithLongestName: "Professor Dandelion",
    averageTime: "00:45:00"
}
This object describes the winning goat on a key of firstPlace, the average time of all the goats in the race, rounded up to the nearest second on a key of averageTime, and the goat with the longest name on a key of goatWithLongestName.

In the event of any draw, the goat with name that comes first alphabetically wins.

Try to build up your tests gradually and flexibly, adding separate tests for each key value pair in the returned object.



QUESTION 4:

This function takes in three arguments:

A string which is an instruction, with a "%" in place of a person's name. Eg. "Feed the cat %"
An array of names, e.g. ["Katherine", "Tim", "Caz", "Zanna"]
A boolean which determines whether or not the returned instructions will be polite, with "please" added before their name.
It must return an array of instruction strings, with the % replaced with each of the names in the array in turn. If the boolean is true, each instruction must also have "please" added to the string before their name.

For example:

politeRequests("Go to the bank %", ["Katherine", "Tim"], true)
// returns ["Go to the bank please Katherine", "Go to the bank please Tim"]

politeRequests("Fetch me a drink %", ["Caz", "Zanna"], false)
// returns ["Fetch me a drink Caz", "Fetch me a drink Zanna"]






QUESTION 5:

This function takes in data in the following format about people and their favourite games.

const gamerData = [
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
The function splitTheData returns the data reorganised into a new object with keys of people, games and gamesPeopleLike.

So splitTheData(gamerData) returns:

{
    people: [
        {
            id: 1
            name: 'Katherine'
        },
        {
            id: 2
            name: 'Tim'
        }
    ],
    games: {
        1: 'Minecraft',
        2: 'Factorio',
        3: 'Bingo'
    }
    gamesPeopleLike: [
      [1,1], // Katherine likes Minecraft
      [1,2], // Katherine likes Factorio
      [2,3], // Tim likes Bingo
      [2,1]  // Tim likes Minecraft
    ]
}
It's important we don't change the original data, this function will need to be pure.

Build up your tests gradually and flexibly, adding separate tests for each key value pair in the returned object.