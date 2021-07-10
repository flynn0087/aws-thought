// dependencies
const AWS = require('aws-sdk');

//dynamoDB config
AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});