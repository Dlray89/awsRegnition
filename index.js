let AWS = require("aws-sdk");

//AWS access details
AWS.config.update({

  region: "us-east-2",
});

//create an input var for the detectLabels API
//Enter the bucket name in S3 bucket. Image name in name
//Enter the number of labels that should be returned in output
//enter the minimum
let params = {
  Image: {
    S3Object: {
      Bucket: "demotextdetection",
      Name: "slack_logo.jpg",
    },
  },
//   MaxLabels: 5,
//   MinConfidence: 80,
};


//call the aws rek class
const rekognition = new AWS.Rekognition();

rekognition.detectLabels(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});

// rekognition.detectText(params, function (err, data) {
//   if (err) console.log(err, err.stack);
//   else console.log(data);
// });
