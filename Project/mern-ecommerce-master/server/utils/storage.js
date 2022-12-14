// const AWS = require('aws-sdk');

var multer = require('multer');
const path = require('path');
// app.use('/static', express.static(path.join(__dirname, 'dist')))


// const keys = require('../config/keys');

// exports.s3Upload = async image => {
//   let imageUrl = '';
//   let imageKey = '';

//   if (image) {
//     const s3bucket = new AWS.S3({
//       accessKeyId: keys.aws.accessKeyId,
//       secretAccessKey: keys.aws.secretAccessKey,
//       region: keys.aws.region
//     });

//     const params = {
//       Bucket: keys.aws.bucketName,
//       Key: image.originalname,
//       Body: image.buffer,
//       ContentType: image.mimetype,
//       ACL: 'public-read'
//     };

//     const s3Upload = await s3bucket.upload(params).promise();

//     imageUrl = s3Upload.Location;
//     imageKey = s3Upload.key;
//   }

//   return { imageUrl, imageKey };
// };

var imageStorage = multer.diskStorage({
  destination: 'dist/images/product-images',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now()
      + path.extname(file.originalname))
  }
})

exports.imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(PNG|JPG|JPEG|png|jpg|jpeg)$/)) {
      return cb(new Error('Please upload a Image'))
    }
    cb(undefined, true)
  }
})