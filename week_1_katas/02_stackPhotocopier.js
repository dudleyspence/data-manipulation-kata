const photocopier = require("./01_photocopier");

const stackPhotocopier = (blueprintArray) => {

    const photocopyStack = blueprintArray.map((blueprint) => photocopier(blueprint))

    return photocopyStack
};

module.exports = stackPhotocopier;
