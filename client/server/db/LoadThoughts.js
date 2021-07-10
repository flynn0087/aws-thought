// dependencies
const AWS = require("aws-sdk");
const fs = require('fs');

//dyanmoDB config
AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});
const dynamodb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

//fs package to read users.json and assign to allUsers
console.log("Importing thoughts into DynamoDB. Please wait.");
const allUsers = JSON.parse(fs.readFileSync('./server/seed/users.json', 'utf8'));