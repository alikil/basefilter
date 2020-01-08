



function takeStep(takeHour){var hh = Number(takeHour);let timeStep = 0; if (hh >= 0 && hh <= 6) { timeStep = 0;} else if (hh >= 7 && hh <= 11) { timeStep = 1 } else if (hh >= 12 && hh <= 17) { timeStep = 2 } else if (hh >= 18 && hh <= 23) { timeStep = 3 } else { timeStep = 0 };return timeStep}


function takeTimeReal(working_time){let timeReal; if (working_time == 1){timeReal = "7:00 - 12:00"} else if (working_time == 2){timeReal = "12:00 - 18:00"} else if (working_time == 3){timeReal = "18:00 - 24:00"}; return timeReal}





var hh = 22
var working_time = 1

const a = takeStep(hh);
const b = takeTimeReal(working_time)

console.log(a)
console.log(b)