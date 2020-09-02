function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(work = "go to the office"){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: function(a,b){return a+b},
    subtract: function(a,b){return a-b},
    multiply: function(a,b){return a*b},
    divide: function(a,b){return a/b}
}

function actionApplyer(startingInteger, arrayOfFunctions){
    let x = startingInteger
    for (let i = 0; i < arrayOfFunctions.length; i++){
        x = arrayOfFunctions[i](x)
    }
    return x
}