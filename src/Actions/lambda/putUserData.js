'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "ap-southeast-1" });

exports.handler =  async (event, context) => {
   const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ap-southeast-1"});

    let responseBody = "";
    let statusCode = 0;

    const {id, name } = JSON.parse(event.body);
   const params = {
       TableName: "Users", //DynamoDb Table Name
       Item: {
           id: id,
           name: name
       }
   }

   try{
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
   } catch (err) {
    responseBody = `Unable to put user data`;
    statusCode = 403;
   }

   const response = {
    statusCode: statusCode,
    headers: {
        "myHeader": "test"
    },
    body: responseBody
}

return response;

}