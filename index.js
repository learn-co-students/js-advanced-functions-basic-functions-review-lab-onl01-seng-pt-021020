// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol="*") {
    return function(param="special") {
        return `You are ${symbol}${param}${symbol}!`
    }
}

let Calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y; 
    },
}

function actionApplyer(integer=0, array) {
    for (let i = 0; i < array.length; i++) {
        integer = array[i](integer)
    }
    return integer;
}
