// code your solution here
// index.js

// Saturday Fun function
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Monday Work function (function expression)
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  // Wrap Adjective function
  function wrapAdjective(flair = '*') {
    return function(adj = 'special') {
      return `You are ${flair}${adj}${flair}!`;
    };
  }
  
  // Export the functions to make them available for tests
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
  };
  