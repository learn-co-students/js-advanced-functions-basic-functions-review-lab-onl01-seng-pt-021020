// Your code here
function saturdayFun(activity = 'roller-skate') {
	return `This Saturday, I want to ${activity}!`;
}

function mondayWork(task = 'go to the office') {
	return `This Monday, I will ${task}.`;
}

function wrapAdjective(adjective = '*') {
	return function(params = 'special') {
		return `You are ${adjective}${params}${adjective}!`;
	};
}

let Calculator = {
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
};

function actionApplyer(int, arr) {
	arr.forEach((func) => {
		return (int = func(int));
	});
	return int;
}
