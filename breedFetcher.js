const request = require('request');

const endpoint = 'https://api.thecatapi.com/v1/breeds/search';
const breed = "Siberian";

request(`${endpoint}?q=${breed}`, (error, response, body) => {
  if(error) console.log(error);
  let obj = JSON.parse(body);
  console.log(obj);
});