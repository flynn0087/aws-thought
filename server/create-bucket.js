// Load the AWS SKD for Node.js
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

// Set the region
AWS.config.update({region: 'us-east-2'});