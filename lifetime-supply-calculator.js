const calculateSupply = function (age, amount) {
    let maxAge = age * amount * 365; 
    console.log("Your will need "  + maxAge +  " to last you until the ripe old age of " + age + " !");
};

  calculateSupply("50", "1.1");
  calculateSupply("60", "2");
  calculateSupply("70", "3");

// const calculateDogAge = function (age) {
//     let dogYears = "Your doggie is " + age * 7 + " years old in human years!";
//     console.log(dogYears);
//   };

//   calculateDogAge("1");
//   calculateDogAge("0.5");
//   calculateDogAge("0.1");

// const calculateDogAge = function(age) {
//     let dogYears = 7 * age;
//     console.log("Your doggie is " + dogYears + " years old in dog years!");
//   };

//   calculateDogAge(1);
//   calculateDogAge(0.5);
//   calculateDogAge(12);

// const tellFortune = function(jobTitle, geoLocation, partner, numKids){
//     return ("You will be a " + jobTitle + "at " + geoLocation + " with " + partner + "with " + numKids + " kids.");
// };

// console.log(tellFortune("Milionair", "Odessa", "Lucy", "3"));
// console.log(tellFortune("Bum", "Amsterdam", "Many", "12"));
// console.log(tellFortune("Programmer", "Arnhem", "Meggie", "2"));

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
