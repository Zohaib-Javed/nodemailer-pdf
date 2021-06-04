var fs = require('fs'); 
var {parse,stringify} = require("csv");
var parser = parse({columns: true}, function (err, records) {
	console.log(records);
});

fs.createReadStream('./someData.csv').pipe(parser);


// var someData = [
//   {
//       "Country": "Nigeria",
//       "Population": "200m",
//       "Continent": "Africa",
//       "OfficialLanguage(s)": "English"
//   },
//   {
//       "Country": "India",
//       "Population": "1b",
//       "Continent": "Asia",
//       "OfficialLanguage(s)": "Hindi, English"
//   },
//   {
//       "Country": "United States of America",
//       "Population": "328m",
//       "Continent": "North America",
//       "OfficialLanguage": "English"
//   },
//   {
//       "Country": "United Kingdom",
//       "Population": "66m",
//       "Continent": "Europe",
//       "OfficialLanguage": "English"
//   },
//   {
//       "Country": "Brazil",
//       "Population": "209m",
//       "Continent": "South America",
//       "Official Language": "Portugese"
//   }
// ]

// stringify(someData, {
//   header: true
// }, function (err, output) {
//   console.log(output);
//   fs.writeFile('someData.csv', output,function(err){});
// })