'use strict;'
const express = require("express");
//var awsxray = require('aws-xray-sdk');
var aws = require('aws-sdk');
const util = require('util');


const s3 = new aws.S3();
var s3ReadParams, s3BucketName, s3FileName, s3ReadResponse;

// App
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World !");
});

app.get('/health', (req, res) => {
    res.status(200);
    res.send("healthy");
});

app.get("/tapin/:filename", async (req, res) => {

    //Read from S3 -
    //Setting S3 parameters for S3 Read.
    console.log(`S3 Read Starting with fileName ${req.params['filename']}`);
    s3BucketName = "ecs-container-demo-bucket";
    console.log(`S3 bucket Name : ${process.env.ECS_S3_Bucket}`);
    s3FileName = req.params['filename'];
    s3ReadParams = {
        Bucket: s3BucketName,
        Key: s3FileName
    };
    try {
        s3ReadResponse = await readFromS3(s3ReadParams);
    } catch (error) {
        console.log("S3 Read Error :", JSON.stringify(error));
    }

    console.log("S3 Read Response :", JSON.stringify(s3ReadResponse));
    res.send("File processing completed");
});

app.listen(3000, () => {
    console.log(" App listening on port 3000");
});

async function readFromS3(params) 
{
  console.log("readFromS3 started", params);
  return new Promise(async (resolve, reject) => 
  {
    //Calling Put objects function
    console.log("S3 GetObject");
    await s3.getObject(params, function (error, data) 
      {
        console.log("S3 read --");
        if (error) 
        {

          console.log(JSON.stringify("S3 Error Response :", JSON.stringify(error)));
          return reject(error);
        }
        else 
        {
          console.log(JSON.stringify("S3 Success Response"));
          var attachment = data.Body.toString('utf-8');
          return resolve(attachment);
          
        }
    });
  });
}

