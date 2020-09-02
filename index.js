// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(job="go to the office"){
  return `This Monday, I will ${job}.`
}

let wrapAdjective = function(f="*") {  
   
  return function(adj="special") {
    return `You are ${f}${adj}${f}!`
  } 
 }

 const Calculator = {
   add: function(a, b){
     return (a + b)
   },
   subtract: function(a, b){
     return (a - b)
   },
   multiply: function(a, b){
     return (a * b)
   },
   divide: function(a, b){
     return (a / b)
   }
 }

 let actionApplyer = function(num, aFun){
    for(let i = 0; i < aFun.length; i++){
      num = aFun[i](num)
  }
  return num
 }