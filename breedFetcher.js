const request = require('request');

const endpoint = 'https://api.thecatapi.com/v1/breeds/search';
const breed = process.argv[2];

request(`${endpoint}?q=${breed}`, (error, response, body) => {
  //console.log('error:', error);
  //console.log('response:', response)
  if(error) {
    console.log(error);
    return;
  }
  let obj = JSON.parse(body);
  if (obj[0]) {
    console.log(obj[0].description);
    return;
  } 
  console.log('Breed not found:', breed);
});