// code your solution here



function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
 
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  const result = encouragingPromptFunction("a dedicated programmer");
  console.log(result); 
     
const saturdayActivity = saturdayFun(); 
const customSaturdayActivity = saturdayFun("hike"); 

const mondayTask = mondayWork(); 
const customMondayTask = mondayWork("work on a project"); 

const wrapWithStars = wrapAdjective(); 
const wrapWithExclamation = wrapAdjective("!!!"); 

const wrapWithHash = wrapAdjective("#"); 

console.log(saturdayActivity);
console.log(customSaturdayActivity);
console.log(mondayTask);
console.log(customMondayTask);
console.log(wrapWithStars("awesome"));
console.log(wrapWithExclamation("amazing"));
console.log(wrapWithHash("creative"));

//describe('wrapAdjective()', function() {
    //it('function exists', function() {
      // Check if wrapAdjective is a function
      //assert.isFunction(wrapAdjective);
   // });
//});
  