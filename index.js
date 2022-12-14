/*
    Note that if you get the error "Invalid Token", get 
    the new Authorization header (e.g.,  Bearer <key>)
*/
// Get modules
const request = require('request');
const dotenv = require('dotenv');
const { readFileSync } = require('fs');

dotenv.config();


// Read in JSON files
const rawA = readFileSync('./partA.json');
const rawB = readFileSync('./partB.json');
const rawC = readFileSync('./partC.json');


// Put in as const
const partA = JSON.parse(rawA); 
const partB = JSON.parse(rawB); 
const partC = JSON.parse(rawC); 

// A
request({
    method: 'PUT',
    uri: process.env.PART_A, 
    headers: {
        'Authorization' : process.env.AUTH,
        'Content-type' : 'application/json'
    },
    body: partA,
    json: true
  
}, function(error, request, body){
   console.log(body);
});


// B
request({
    method: 'PUT',
    uri: process.env.PART_B, 
    headers: {
        'Authorization' : process.env.AUTH,
        'Content-type' : 'application/json'
    },
    body: partB,
    json: true
  
}, function(error, request, body){
   console.log(body);
});


// C
request({
    method: 'PUT',
    uri: process.env.PART_C, 
    headers: {
        'Authorization' : process.env.AUTH,
        'Content-type' : 'application/json'
    },
    body: partC,
    json: true
  
}, function(error, request, body){
   console.log(body);
});