const politeRequests = (instruction, namesArray, isPolite) => {
    editedRequests = []


    for (let name of namesArray){

        let request = ''

        if (isPolite) {
            request = instruction.replace('%', 'please ' + name)
        } else {
            request = instruction.replace('%', name)
        }

        editedRequests.push(request)
    }

    return editedRequests

};



module.exports = politeRequests;




/*
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

*/