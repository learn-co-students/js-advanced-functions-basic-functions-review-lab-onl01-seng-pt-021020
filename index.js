// Your code here

// Function Declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Function Expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// Closure
function wrapAdjective(flair = "*") {
    return function inner(feeling = "special") {
        return `You are ${flair}${feeling}${flair}!`;
    }
}

// Object - first class functions
const Calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

function actionApplyer(startInt, arr) {
    for (let i = 0; i < arr.length; i++) {
        startInt = arr[i](startInt)
    }
    return startInt;
}