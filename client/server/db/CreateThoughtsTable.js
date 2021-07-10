// dependencies
const AWS = require('aws-sdk');

//dynamoDB config
AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});

//dynamoDB service object
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

