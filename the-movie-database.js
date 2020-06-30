const movieDb = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
};

const showMovie = function (movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes." + " Stars: " + movie.stars.join(", ") + "."); 
};

showMovie(movieDb);


    // let result = title + " lasts for " + duration + " minutes." + " Stars: " + stars + " .";
    // console.log(result);

// console.log(movieDb("Puff the Magic Drago", "30", ["Puff", "Jackie", "Living Sneezes"]));



// const calculateSupply = function (age, amount) {
//     let maxAge = age * amount * 365; 
//     console.log("Your will need "  + maxAge +  " to last you until the ripe old age of " + age + " !");
// };

//   calculateSupply("50", "1.");
//   calculateSupply("60", "2");
//   calculateSupply("70", "3");

//   const calculateSupply = function(age, numPerDay) {
//     const maxAge = 100;
//     const totalNeeded = numPerDay * 365 * (maxAge - age);
//     let message =
//       "You will need " +
//       totalNeeded +
//       " cups of tea to last you until the ripe old age of " +
//       maxAge;
//     console.log(message);
//   };
  
//   calculateSupply(28, 36);
//   calculateSupply(28, 2.5);
//   calculateSupply(28, 400);

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
