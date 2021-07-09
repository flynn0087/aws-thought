// Load the AWS SKD for Node.js
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

// Set the region
AWS.config.update({region: 'us-east-2'});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

