let AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: "AKIASROVAQKH3RNTU7RG",
  secretAccessKey: "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",
  region: "us-east-2",
});

//create an input var for the detectLabels API
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

const rekognition = new AWS.Rekognition();

// rekognition.detectLabels(params, function (err, data) {
//   if (err) console.log(err, err.stack);
//   else console.log(data);
// });

rekognition.detectText(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
