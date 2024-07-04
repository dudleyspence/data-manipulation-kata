const photocopier = (blueprint) => {

    const photocopy = {...blueprint}

    photocopy.isCopy = true

    return photocopy
};

module.exports = photocopier;
