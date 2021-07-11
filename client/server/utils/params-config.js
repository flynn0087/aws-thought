//dependencies
const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: 'user-images-e015ead4-9896-4d7b-909a-0f26976d8a1e',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
      ACL: 'public-read'
    };
  
    return imageParams;
};

module.exports = params;