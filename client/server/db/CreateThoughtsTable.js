// dependencies
const AWS = require('aws-sdk');

//dynamoDB config
AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});

//dynamoDB service object
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// parameters of table that hold schema and metadata
const params = {
    TableName : "Thoughts",
    KeySchema: [
        { AttributeName: "username", KeyType: "HASH" }, // partition key
        { AttributeName: "createdAt", KeyType: "RANGE" } // sort key
    ],
    AttributeDefinitions: [
        { AttributeName: "username", AttributeType: "S" },
        { AttributeName: "createdAt", AttributeType: "N" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};