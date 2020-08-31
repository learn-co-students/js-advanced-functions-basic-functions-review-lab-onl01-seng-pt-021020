// Your code here

// let activity = " "

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog"); 

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork("work from home");

function wrapAdjective(y='*') {
    return function(x='special') {
        return `You are ${y}${x}${y}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a +b;
    },

    subtract: function(a,b) {
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },

    divide: function(a,b){
        return a/b;
    }
}

function actionApplyer(start, arr) {
    let a = start;

    for (let i = 0; i < arr.length; i++) {
        a = arr[i](a)
    }
    return a
}

