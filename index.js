function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
  return function(adj='special') {
    return `You are ${flair}${adj}${flair}!`
  }
}

const Calculator = {
  add: function(...nums) {return nums.reduce((a,b) => a + b)},
  subtract: function(...nums) {return nums.reduce((a,b) => a - b)},
  multiply: function(...nums) {return nums.reduce((a,b) => a * b)},
  divide: function(...nums) {return nums.reduce((a,b) => a / b)},
}

function actionApplyer(startingInt, funcArray) {
  if (funcArray.length === 0) {
    return startingInt
  } else {
    return funcArray.reduce((val, f) => f(val), startingInt)
  }
}