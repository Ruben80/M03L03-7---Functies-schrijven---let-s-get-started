const tellFortune = function(jobTitle, geoLocation, partner, numKids){
    return ("You will be a " + jobTitle + "at " + geoLocation + " with " + partner + "with " + numKids + " kids.");    	
};

console.log(tellFortune("Milionair", "Odessa", "Lucy", "3"));
console.log(tellFortune("Bum", "Amsterdam", "Many", "12"));
console.log(tellFortune("Programmer", "Arnhem", "Meggie", "2"));


// const tellFortune = function(jobTitle, geoLocation, partner, numKids) {
//     let future =
//       "You will be a " +
//       jobTitle +
//       " in " +
//       geoLocation +
//       " and married to " +
//       partner +
//       " " +
//       " with " +
//       numKids +
//       " kids.";
//     console.log(future);
//   };
  
//   tellFortune("bball player", "spain", "Shaq", 3);
//   tellFortune("stunt double", "Japan", "Ryan Gosling", 3000);
//   tellFortune("Elvis impersonator", "Russia", "The Oatmeal", 0);