// dependencies
const AWS = require('aws-sdk');

//dynamoDB config
AWS.config.update({
    region: "us-east-2",
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

//call to the dynamoDB instance to create table
dynamodb.createTable(params, (err, data) => {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});