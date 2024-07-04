const reportTheGrandGoatRace = (goatString) => {

    const raceStatsObject = {}

    // convert string into entries format
    const racers = goatString.split(', ').map((pairs) => pairs.split(": "))


    //function converts HHMMSS string into integer of seconds
    function timeInSeconds(stringTime){
        let [hours, minutes, seconds] = stringTime.split(':')
        
        const totalSeconds = Number(seconds) + (Number(minutes)*60) + (Number(hours)*3600)

        return totalSeconds
    }


    // Fastest goat and Longest name

    let fastestTimeinSeconds = timeInSeconds(racers[0][1])
    let totalSeconds = 0

    let longestNameLength = 0

    for (let i = 0; i < racers.length; i++){

        const currentTimeInSecs = timeInSeconds(racers[i][1])
        const currentName = racers[i][0]

        fastestTimeinSeconds = Math.min(fastestTimeinSeconds, currentTimeInSecs)

        longestNameLength = Math.max(longestNameLength, currentName.length)

        if (fastestTimeinSeconds === currentTimeInSecs){
            raceStatsObject.firstPlace = currentName
        }
        if (currentName.length === longestNameLength){
            raceStatsObject.goatWithLongestName = currentName
        }

        totalSeconds += currentTimeInSecs
    }


    // Average time

    const averageTimeSeconds = totalSeconds/racers.length
    const fullHours = Math.floor(averageTimeSeconds/3600)
    const fullMinutes = Math.floor((averageTimeSeconds - (fullHours*3600))/60)
    const fullSeconds = Math.floor(averageTimeSeconds - (fullHours*3600) - (fullMinutes*60))

    raceStatsObject.averageTime = [fullHours, fullMinutes, fullSeconds].map((timeDenomination) => {
        timeDenomination = String(timeDenomination)
        if (timeDenomination.length < 2){
            timeDenomination = "0" + timeDenomination
        }
        return timeDenomination
    }).join(':')



    return raceStatsObject
};

module.exports = reportTheGrandGoatRace;
